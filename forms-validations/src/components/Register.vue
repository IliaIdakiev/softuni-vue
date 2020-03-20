<template>
  <div class="container d-flex pt-5">
    <form class="flex-fill">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Registration</h1>
          <hr />
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="email"
              @blur="$v.email.$touch"
            />
            <template v-if="$v.email.$error">
              <div v-if="!$v.email.required">Email is required!</div>
              <div v-else-if="!$v.email.email">Invalid email!</div>
            </template>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              class="form-control"
              v-model="password"
              @blur="$v.password.$touch"
            />
            <template v-if="$v.password.$error">
              <div v-if="!$v.password.required">Password is required!</div>
              <div v-else-if="!$v.password.minLength">Password should be longer than 8 symbols!</div>
            </template>
          </div>
          <div class="form-group">
            <label for="age">Age</label>
            <input
              type="number"
              id="age"
              class="form-control"
              v-model.number="age"
              @blur="$v.age.$touch"
            />
          </div>
          <template v-if="$v.age.$error">
            <div v-if="!$v.age.required">Age is required!</div>
            <div v-else-if="!$v.age.between">Age is invalid! Age should be between 10 and 100!</div>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="description">Description</label>
          <br />
          <textarea
            id="description"
            rows="5"
            class="form-control"
            v-model="description"
            @blur="$v.description.$touch"
          ></textarea>
          <template v-if="$v.description.$error">
            <div v-if="!$v.description.required">Description is required!</div>
          </template>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="form-group">
            <h3>Skill Set</h3>
            <label for="js">
              <input
                type="checkbox"
                id="js"
                value="JavaScript"
                v-model="skillSet"
                @click="$v.skillSet.$touch"
              /> JavaScript
            </label>
            <label for="csharp">
              <input
                type="checkbox"
                id="csharp"
                value="C#"
                v-model="skillSet"
                @click="$v.skillSet.$touch"
              /> C#
            </label>
            <label for="java">
              <input
                type="checkbox"
                id="java"
                value="Java"
                v-model="skillSet"
                @click="$v.skillSet.$touch"
              /> Java
            </label>
            <label for="php">
              <input
                type="checkbox"
                id="php"
                value="PHP"
                v-model="skillSet"
                @click="$v.skillSet.$touch"
              /> PHP
            </label>
          </div>
        </div>

        <div v-if="!$v.skillSet.required">You must select at least on skill</div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="male">
            <input type="radio" id="male" value="Male" v-model="gender" @blur="$v.gender.$touch" /> Male
          </label>
          <label for="female">
            <input
              type="radio"
              id="female"
              value="Female"
              v-model="gender"
              @blur="$v.gender.$touch"
            /> Female
          </label>
        </div>
        <template v-if="$v.gender.$error">
          <div v-if="!$v.gender.required">Gender is required</div>
        </template>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group">
          <label for="country">Country</label>
          <select id="country" class="form-control" v-model="country" @blur="$v.country.$touch">
            <option :value="null">Select Country</option>
            <option value="bg">Bulgaria</option>
            <option value="de">Germany</option>
            <option value="gb">England</option>
          </select>
        </div>
        <template v-if="$v.country.$error">
          <div v-if="!$v.country.required">Country is required</div>
        </template>
      </div>
      <hr />
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button :disabled="$v.$invalid" class="btn btn-primary">Submit!</button>
        </div>
      </div>
    </form>
    <form class="flex-fill">
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <div class="panel panel-default">
            <div class="panel-heading">
              <h4 class="panel-heading">Your Data</h4>
            </div>
            <div class="panel-body">
              <p>Mail: {{email}}</p>
              <p>Password: {{password}}</p>
              <p>Age: {{age}}</p>
              <p>Description: {{description}}</p>
              <p>
                <strong>Skill Set?</strong>
              </p>
              <ul>
                <li v-for="s in skillSet" :key="s">{{s}}</li>
                <!-- <li>JavaScript - {{skillSet[0]}}</li>
                <li>C# - {{skillSet[1]}}</li>
                <li>Java - {{skillSet[2]}}</li>
                <li>PHP - {{skillSet[3]}}</li>-->
              </ul>
              <p>Gender: {{gender}}</p>
              <p>Country: {{country}}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { validationMixin } from 'vuelidate';
import { required, minLength, integer, email, between } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],
  data() {
    return {
      email: '',
      password: '',
      age: null,
      description: '',
      skillSet: [],
      gender: null,
      country: null
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    age: {
      required,
      integer,
      between: between(10, 100)
    },
    description: {
      required
    },
    skillSet: {
      required,
      minLength: minLength(1),
      $each: {}
    },
    gender: {
      required
    },
    country: {
      required
    }
  }
}
</script>