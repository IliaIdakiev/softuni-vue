import Vue from 'vue';
import Vuex, { createNamespacedHelpers } from 'vuex';
import counter from './counter';
import users from './users';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    counter,
    users
  }
});

export const usersHelpers = createNamespacedHelpers('users');
export const counterHelpers = createNamespacedHelpers('counter');