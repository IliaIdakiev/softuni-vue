import VueRouter from 'vue-router';
import Home from './components/Home';
import NotFound from './components/NotFound';
import globalStore from './store/global';

function redirectIfNeeded(technologies, to, next) {
  const currentPathArray = to.fullPath.substr(1).split('/').filter(v => !!v);
  if (currentPathArray.length === 0) {
    const [tech] = technologies;
    next(`/${tech.name}`);
    return;
  }
  if (currentPathArray.length > 3) {
    next('/not-found');
    return;
  }
  const [tech] = currentPathArray;
  if (technologies.find(i => i.name === tech)) { next(); return; }
  next('/not-found');
}

function beforeEnter(to, from, next) {
  const technologies = globalStore.technologies;
  if (technologies) { redirectIfNeeded(technologies, to, next); return; }
  const unsub = globalStore.$watch('technologies', (technologies) => {
    redirectIfNeeded(technologies, to, (...args) => { unsub(); next(...args); })
  });
}

const homeConfig = {
  meta: {
    resources: {
      tutorials: {
        url: 'tutorials',
        queryParamsStringFn: data => `technology=${data.technology}`
      }
    }
  }
};

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      component: () => import('./components/Login'),
      meta: {
        unauthenticated: true
      }
    },
    {
      path: '/register',
      component: () => import('./components/Register'),
      meta: {
        unauthenticated: true
      }
    },
    {
      path: '/create-tutorial',
      component: () => import('./components/Tutorial'),
      meta: {
        authenticated: true
      }
    },
    {
      path: '/edit-tutorial/:id',
      component: () => import('./components/Tutorial'),
      meta: {
        authenticated: true,
        resources: {
          tutorial: {
            url: 'tutorials',
            urlModifierFn: (url, data) => `${url}/${data.id}`
          }
        }
      }
    },
    {
      path: '/not-found',
      component: NotFound
    },
    {
      path: '/',
      beforeEnter
    },
    {
      path: '/:technology',
      component: Home,
      beforeEnter,
      ...homeConfig
    },
    {
      path: '/:technology/:subject',
      component: Home,
      ...homeConfig
    }
  ]
});

router.beforeEach((to, from, next) => {

  function proceed(unsub) {
    const { authenticated, unauthenticated } = to.meta;
    const isLogged = globalStore.isLogged;

    if (
      (!authenticated && !unauthenticated) ||
      (authenticated && isLogged) ||
      (unauthenticated && !isLogged)
    ) { next(); return; }

    if (unsub) { unsub(); }
    next(authenticated ? '/login' : '/');
  }

  if (globalStore.isUserSet) { proceed(); return; }
  const unsub = globalStore.$watch('user', () => {
    proceed(unsub);
  });

});

export default router;