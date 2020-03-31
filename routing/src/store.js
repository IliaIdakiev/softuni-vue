import Vue from 'vue';

const userStore = new Vue({
  data: {
    users: null,
    loggedUser: null
  },
  methods: {
    loadUsers() {
      setTimeout(() => {
        this.users = [
          {
            id: 1,
            username: 'Test 1'
          },
          {
            id: 2,
            username: 'Test 2'
          },
          {
            id: 3,
            username: 'Test 3'
          }
        ]
      }, 1000);
    },
    login(cb) {
      setTimeout(() => {
        this.user = { username: 'Ivan' }
        cb();
      }, 1000);
    }
  }
});

export default userStore;