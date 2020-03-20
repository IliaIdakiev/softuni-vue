<template>
  <form @submit.prevent="submitHandler">
    <div class="form-group">
      <label for="username">Username</label>
      <input id="username" v-model="username" @blur="$v.username.$touch" />
      <template v-if="$v.username.$error">
        <div v-if="!$v.username.required">Username is required!</div>
        <div v-if="!$v.username.minLength">Username should be more than 3 symboils!</div>
      </template>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input id="password" type="password" v-model="password" @blur="$v.password.$touch" />
      <template v-if="$v.password.$error">
        <div v-if="!$v.password.required">Password is required!</div>
        <div v-if="!$v.password.minLength">Password should be more than 8 symboils!</div>
      </template>
    </div>
    <div class="form-group">
      <label for="cPassword">Confirm Password</label>
      <input id="cPassword" type="password" v-model="cPassword" @blur="$v.cPassword.$touch" />
      <template v-if="$v.cPassword.$error">
        <div v-if="!$v.cPassword.sameAs">Passwords don't match!</div>
      </template>
    </div>
    <div>
      <label for>Addresses</label>
      <div v-for="(a, i) in $v.addresses.$each.$iter" :key="i">
        <div>
          <label>City</label>
          <input v-model="addresses[i].city" @blur="a.city.$touch" />
          <template v-if="a.city.$error">
            <div v-if="!a.city.required">City is required!</div>
          </template>
        </div>
        <div>
          <label>Street</label>
          <input v-model="addresses[i].street" @blur="a.street.$touch" />
          <template v-if="a.street.$error">
            <div v-if="!a.street.required">Street is required!</div>
          </template>
        </div>
        <div>
          <label>Post Code</label>
          <input v-model="addresses[i].postCode" @blur="a.postCode.$touch" />
          <template v-if="a.postCode.$error">
            <div v-if="!a.postCode.required">Post Code is required!</div>
            <div v-else-if="!a.postCode.integer">Post Code is invalid!</div>
          </template>
        </div>
      </div>
      <button type="button" @click="addNewAddress">Add Address</button>
    </div>
    <button>Register</button>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, integer } from 'vuelidate/lib/validators';

function sameAs(field) {
  return function (value) {
    return this[field] === value;
  }
}

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: '',
      password: '',
      cPassword: '',
      addresses: [
        {
          city: '',
          street: '',
          postCode: ''
        }
      ]
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(5)
    },
    password: {
      required,
      minLength: minLength(8)
    },
    cPassword: {
      sameAs: sameAs('password')
    },
    addresses: {
      $each: {
        city: {
          required
        },
        street: {
          required
        },
        postCode: {
          required,
          integer
        }
      }
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$invalid) { return; }
      console.log('Form was submitted!');
    },
    addNewAddress() {
      this.addresses = this.addresses.concat({
        city: '',
        street: '',
        postCode: ''
      });
    }
  }
}
</script>