import Vue from 'vue'
import App from './App.vue'
import './directives/event';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

axios.interceptors.request.use(function (config) {
  config.url = `${API_URL}/${config.url}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
