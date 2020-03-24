<template>
  <div>
    <div v-if="success">Registration Successful</div>
    <form v-else @submit.prevent="submitHandler">
      <fieldset>
        <h1>Registration Form</h1>

        <p class="field field-icon">
          <label for="username">
            <span>
              <i class="fas fa-user"></i>
            </span>
          </label>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            @blur="$v.username.$touch"
            class="error"
            placeholder="Mark Ulrich"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.username.$error">
          <p v-if="!$v.username.required" class="error">Username is required!</p>
          <p v-else-if="!$v.username.username" class="error">Username is invalid!</p>
        </template>
        <!-- end if error -->

        <p class="field field-icon">
          <label for="email">
            <span>
              <i class="fas fa-envelope"></i>
            </span>
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="marg@gmial.com"
            v-model="email"
            @blur="$v.email.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.email.$error">
          <p v-if="!$v.email.required" class="error">Email is required!</p>
          <p v-else-if="!$v.email.email" class="error">Email is invalid!</p>
        </template>
        <!-- end if error -->

        <p class="field field-icon">
          <label for="tel">
            <span>
              <i class="fas fa-phone"></i>
            </span>
          </label>
          <select name="tel" id="tel" class="tel">
            <option value="1">+359</option>
          </select>
          <input
            type="text"
            name="tel"
            id="tel"
            placeholder="888 888"
            v-model="tel"
            @blur="$v.tel.$touch"
          />
        </p>

        <template v-if="$v.tel.$error">
          <p v-if="!$v.tel.required" class="error">Phone is required!</p>
          <p v-else-if="!$v.tel.phonenumber" class="error">Phone is invalid!</p>
        </template>

        <p class="field field-icon">
          <label for="building">
            <span>
              <i class="fas fa-building"></i>
            </span>
          </label>
          <select
            name="building"
            id="building"
            class="building"
            @change="$v.building.$touch"
            v-model="building"
          >
            <option :value="null">Select...</option>
            <option value="1">Designer</option>
            <option value="2">Software Engineer</option>
            <option value="3">Accountant</option>
            <option value="4">Manager</option>
            <option value="5">Other</option>
          </select>
        </p>

        <template v-if="$v.building.$error">
          <p v-if="!$v.building.required" class="error">Building is required!</p>
        </template>

        <p class="field field-icon">
          <label for="password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="******"
            v-model="password"
            @blur="$v.password.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.password.$error">
          <p v-if="!$v.password.required" class="error">Password is required!</p>
          <p
            v-else-if="!$v.password.minLength || !$v.password.maxLenght"
            class="error"
          >Password should be between 3 and 16 symbols!</p>
          <p v-else-if="!$v.password.alphanumeric" class="error">Password should match [0-9A-Za-z]!</p>
        </template>
        <!-- end if error -->

        <p class="field field-icon">
          <label for="re-password">
            <span>
              <i class="fas fa-lock"></i>
            </span>
          </label>
          <input
            type="re-password"
            name="re-password"
            id="re-password"
            placeholder="******"
            v-model="rePassword"
            @blur="$v.rePassword.$touch"
          />
        </p>

        <!-- if error -->
        <template v-if="$v.rePassword.$error">
          <p v-if="!$v.rePassword.sameAs" class="error">Repeat Password does not match password!</p>
        </template>
        <!-- end if error -->

        <p>
          <button>Create Account</button>
        </p>

        <p class="text-center">
          Have an account?
          <a href>Log In</a>
        </p>
      </fieldset>
    </form>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, email, sameAs, minLength, maxLength } from 'vuelidate/lib/validators';
import { helpers } from 'vuelidate/lib/validators';

const alphanumeric = helpers.regex('alphanumeric', /^[a-zA-Z0-9]*$/);
const phonenumber = helpers.regex('phonenumber', /^[0-9]{9}$/);

function username(value) {
  const valueArray = value.trim().split(' ');
  if (valueArray.length > 2) { return false; }
  return !!valueArray[0] &&
    /[A-Z]/g.test(valueArray[0][0]) &&
    !!valueArray[1] &&
    /[A-Z]/g.test(valueArray[1][0]);
}

export default {
  mixins: [validationMixin],
  data() {
    return {
      username: '',
      email: '',
      tel: '',
      building: null,
      password: '',
      rePassword: '',
      success: false
    }
  },
  validations: {
    username: {
      required,
      username
    },
    email: {
      required,
      email
    },
    tel: {
      required,
      phonenumber
    },
    building: {
      required
    },
    password: {
      required,
      minLength: minLength(3),
      maxLenght: maxLength(16),
      alphanumeric
    },
    rePassword: {
      sameAs: sameAs('password')
    }
  },
  methods: {
    submitHandler() {
      this.$v.$touch();
      if (this.$v.$error) { return; }
      console.log('Form was validated successfully!');
      this.success = true;
    }
  }
}
</script>

<style scoped>
form {
  margin-top: 20px;
  width: 40%;
}

fieldset {
  border-radius: 10px;
  padding: 20px;
}

input {
  flex: 0 1 100%;
  border: 1px solid;
  padding: 5px;
  border-left: 3px solid #42a948;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

select {
  border-color: black;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 0.8em 1.2em;
  width: 100%;
}

i {
  border: 1px solid;
  border-right: none;
  padding: 10px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: #e9ecef;
}

a {
  color: #007bff;
}

.container {
  font-family: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.tel {
  padding-right: 20px;
}

.building {
  flex: 1 1 100%;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

form .field {
  display: flex;
}

/* if error */

p.error {
  text-align: left;
  background-color: #f8d7da;
  padding: 8px;
  border-radius: 3px;
}

input.error {
  border-left-color: #a8413f;
}
</style>