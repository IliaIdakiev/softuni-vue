<template>
  <div class="navigation">
    <ul>
      <li v-for="item in navItems" :key="item._id">
        <router-link
          :to="getNavigationURL(item.name)"
          :class="{ active: item.name === selectedTechnology }"
        >{{item.displayName}}</router-link>
      </li>
    </ul>

    <ul v-if="isLogged">
      <router-link tag="li" to="/create-tutorial">Tutorial [+]</router-link>
      <a @click="logout">Logout</a>
    </ul>
    <ul v-else>
      <router-link tag="li" to="/register">Register</router-link>
      <router-link tag="li" to="/login">Login</router-link>
    </ul>
  </div>
</template>

<script>
import globalStore from '../../store/global';
import axios from 'axios';

export default {
  props: {
    navItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    getNavigationURL(technologyName) {
      return `/${technologyName}`;
    },
    logout() {
      axios.post('user/logout').then(() => {
        globalStore.clearUser();
      });
    }
  },
  computed: {
    selectedTechnology() {
      // how the URL will lool like in the router /:technology/:subject
      return this.$route.params.technology;
    },
    isLogged() {
      return globalStore.isLogged;
    }
  }
}
</script>

<style scoped>
li a {
  cursor: pointer;
}
</style>