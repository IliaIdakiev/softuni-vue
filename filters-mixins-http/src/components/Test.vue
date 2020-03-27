<template>
  <div>
    <div>{{user}}</div>
    <button v-if="!user" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  // functional: true,
  props: {
    user: { type: Object },
    login: { type: Function, required: true },
    logout: { type: Function, required: true }
  }
}
</script>

<style>
</style>