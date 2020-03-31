<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <app-navigation></app-navigation>
    <router-view></router-view>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{user.username}}</span>
        <router-link :to="user | userEditLink">Edit</router-link>
      </li>
    </ul>
    {{$route.params.id}}
  </div>
</template>

<script>
import store from './store';
import AppNavigation from './components/Navigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  },
  filters: {
    userEditLink(user) {
      return `/edit/${user.id}`;
    }
  },
  mounted() {
    store.loadUsers();
  },
  watch: {
    $route(to, from) {
      console.log(to, from);
    }
  },
  computed: {
    users() {
      return store.users;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
