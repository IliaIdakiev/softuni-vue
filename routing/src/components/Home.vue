<template>
  <div>
    Home
    <button @click="login">Login</button>
  </div>
</template>

<script>
import store from '../store';
export default {
  methods: {
    login() {
      store.login(() => {
        this.$router.push('/protected');
      });
    }
  }
}
</script>

<style>
</style>