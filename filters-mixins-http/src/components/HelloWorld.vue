<template>
  <div>
    <div>
      {{textLength}}
      {{test2}}
      {{user}}
    </div>
    <div v-show="showDiv" v-event:click="clickHandler">CLICK ME!</div>
    <button @click="toggleDiv">Toggle Div</button>
    <button v-if="!user" @click="login">Login</button>
    <button v-if="user" @click="logout">Logout</button>
    <div>
      <h1 v-if="isLoading">Loading...</h1>
      <ul v-else>
        <li v-for="user in users" :key="user.id">{{user.username}}</li>
      </ul>
      <button @click="loadUsers">Reload</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import testMixin from '../mixins/test';

export default {
  name: 'HelloWorld',
  mixins: [testMixin],
  props: {
    msg: String
  },
  data() {
    return {
      test2: 'Component test 2',
      showDiv: true,
      isLoading: false,
      users: null
    };
  },
  computed: {
    textLength() {
      return this.test2.length;
    }
  },
  created() {
    this.loadUsers();
  },
  methods: {
    clickHandler(e) {
      console.log(e);
    },
    toggleDiv() {
      this.showDiv = !this.showDiv;
    },
    loadUsers() {
      this.isLoading = true;
      axios.get('users').then(res => {
        if (res.status === 200) {
          this.users = res.data;
        }
        this.isLoading = false;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
