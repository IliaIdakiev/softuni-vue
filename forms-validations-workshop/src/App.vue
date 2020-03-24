<template>
  <div id="app">
    <app-register></app-register>
  </div>
</template>

<script>
import AppRegister from './components/Register.vue'

export default {
  name: 'App',
  components: {
    AppRegister
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
