import VueRouter from 'vue-router';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import Protected from './components/Protected';
import store from './store';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/edit/:id',
      component: About
    },
    {
      path: '/protected',
      component: Protected,
      beforeEnter: (to, from, next) => {
        const redirectUrl = store.user ? undefined : '/'
        next(redirectUrl);
      }
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});

export default router;