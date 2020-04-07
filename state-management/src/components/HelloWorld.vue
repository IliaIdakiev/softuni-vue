<template>
  <div>
    <div>
      <div>{{counter}}</div>
      <button @click="dec">-</button>
      <button @click="inc">+</button>
    </div>
    <div>
      <div v-if="isLoadingUsers">Loading...</div>
      <ul v-else>
        <li v-for="user in users" :key="user.id">{{user.email}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { usersHelpers, counterHelpers } from '../store';
export default {
  created() {
    this.loadUsers({ test: 123 });
    // this.$store.dispatch('users/loadUsers');
  },
  computed: {
    ...usersHelpers.mapGetters(
      {
        isLoadingUsers: 'isLoading',
        users: 'users'
      }
    ),
    ...counterHelpers.mapGetters([
      'counter'
    ])
  },
  methods: {
    ...usersHelpers.mapActions(['loadUsers']),
    inc() {
      this.$store.commit('counter/increment')
    },
    dec() {
      this.$store.commit('counter/decrement')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
