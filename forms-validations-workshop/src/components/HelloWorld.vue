<template>
  <form>
    <input v-model="form.email" />
    <div v-if="!$v.form.email.email">Invalid email</div>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { email } from 'vuelidate/lib/validators';
export default {
  name: 'HelloWorld',
  mixins: [validationMixin],
  props: {
    email: {
      type: String,
      validator: email
    }
  },
  validations: {
    form: {
      email: {
        email
      }
    }
  },
  data() {
    const { email } = this;
    return {
      phoneExtensions: null,
      isLoading: false,
      form: {
        email
        // ...this.$props
      }
    }
  },
  created() {
    this.isLoading = true;
    // fetch('my-domain.com/api/phone-extensions').then(res => res.json()).then(ext => {
    //   this.isLoading = false;
    //   this.phoneExtensions = ext;
    // });
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
