import Vue from 'vue'
import App from './App.vue'
import Loader from './components/core/Loader';
import VueRouter from 'vue-router';
import router from './router';
import axios from 'axios';
import resourcesHandler, { hasResources } from './mixins/global/resources-handler';
import { LOCAL_RESOURCE } from './constants';
import globalStore from './store/global';

const baseURL = 'http://localhost:9999/api';

Vue.use(VueRouter);
Vue.mixin(resourcesHandler);

Vue.config.productionTip = false

axios.interceptors.request.use(function (config) {
  if (!config.url.includes('http://')) { config.url = `${baseURL}/${config.url}`; }
  if (config.url.includes(baseURL)) { config.withCredentials = true; }
  return config;
}, function (err) {
  console.error(err);
  return Promise.reject(err);
});

const appTo = {
  meta: {
    resources: {
      technologies: LOCAL_RESOURCE,
      user: 'auth'
    }
  }
};

resourcesHandler.beforeRouteEnter(appTo, null, (cb) => {
  const isFetching = hasResources(appTo);
  const instance = new Vue({
    data: { technologies: null, user: null, isFetching },
    render(h) {
      if (this.isFetching) { return h(Loader); }
      const { technologies, user } = this;
      globalStore.setTechnologies(technologies);
      globalStore.setUser(user instanceof Error ? null : user);
      return h(App, { props: { technologies } });
    },
    router
  }).$mount('#app')

  cb(instance);
});


