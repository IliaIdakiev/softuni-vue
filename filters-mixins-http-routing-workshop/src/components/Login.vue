<template>
  <app-content>
    <template v-slot:info>
      <h2 class="user-links">
        <router-link class="active-route" to="/login">Login</router-link>|
        <router-link to="/register">Register</router-link>
      </h2>

      <form class="user-form" @submit.prevent="submitHandler">
        <div class="form-group">
          <img src="https://img.icons8.com/material-sharp/42/000000/user.png" />
          <input type="text" name="email" v-model="email" placeholder="Email" />
        </div>

        <div class="form-group">
          <img src="https://img.icons8.com/material/42/000000/password--v1.png" />
          <input type="password" name="password" v-model="password" placeholder="Password" />
        </div>

        <button>Login</button>
      </form>
    </template>
  </app-content>
</template>

<script>
import axios from 'axios';
import AppContent from './shared/Content';
import globalStore from '../store/global';


export default {
  components: {
    AppContent
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitHandler() {
      const { email, password } = this;
      axios.post('user/login', { email, password }).then(res => {
        if (res.status !== 200) {
          console.error('OOPS!');
          return;
        }
        globalStore.setUser(res.data);
        this.$router.push('/');
      });
    }
  }
}
</script>

<style scoped>
</style>