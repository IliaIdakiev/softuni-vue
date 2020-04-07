import axios from 'axios';

const users = {
  namespaced: true,
  state: {
    isLoading: false,
    users: null
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    clearUsers(state) {
      state.users = null;
    },
    setLoading(state, value) {
      state.isLoading = value;
    }
  },
  actions: {
    loadUsers({ commit }, payload) {
      console.log(payload);
      commit('setLoading', true);
      setTimeout(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
          commit('setUsers', res.data);
          commit('setLoading', false);
        });
      }, 3000);
    }
  },
  getters: {
    users(state) {
      return state.users;
    },
    isLoading(state) {
      return state.isLoading;
    }
  }
}

export default users;