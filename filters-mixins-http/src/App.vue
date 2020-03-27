<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" text="test" />
    <test message="HELLO!"></test>
    <test-2></test-2>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test';
import Test2 from './components/Test2';
import withAuth from './hoc/withAuth';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Test: withAuth(Test),
    Test2: withAuth(Test2),
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
