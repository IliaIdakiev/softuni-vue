import Vue from 'vue';
export const NOT_SET = Symbol('NOT_SET');

const global = new Vue({
  data: {
    technologies: null,
    user: NOT_SET
  },
  methods: {
    setTechnologies(technologies) {
      this.technologies = technologies;
    },
    setUser(user) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    }
  },
  computed: {
    isLogged() { return !!this.user; },
    isUserSet() { return this.user !== NOT_SET; }
  }
});

export default global;