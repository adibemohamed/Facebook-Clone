<template>
  <div> 
    <form novalidate class="md-layout" @submit.prevent="sinpup">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Singup</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="Validate('firstName')">
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="send" />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="Validate('lastName')">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="send" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="Validate('gender')">
                <label for="gender">Gender</label>
                <md-select name="gender" id="gender" v-model="form.gender" md-dense :disabled="send">
                  <md-option></md-option>
                  <md-option value="M">M</md-option>
                  <md-option value="F">F</md-option>
                </md-select>
                <span class="md-error">The gender is required</span>
              </md-field>
            </div>

            <div class="md-layout-item md-small-size-100">
              <md-field :class="Validate('age')">
                <label for="age">Age</label>
                <md-input type="number" id="age" name="age" autocomplete="age" v-model="form.age" :disabled="send" />
                <span class="md-error" v-if="!$v.form.age.required">The age is required</span>
                <span class="md-error" v-else-if="!$v.form.age.maxlength">Invalid age</span>
              </md-field>
            </div>
          </div>

          <md-field :class="Validate('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="send" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field> 

          <md-field :class="Validate('password')">
            <label for="password">password</label>
            <md-input type="password" name="password" id="password" v-model="form.password" :disabled="send" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.password">Invalid password</span>
          </md-field>
        </md-card-content>

          <md-field :class="Validate('password_confirm')">
            <label for="password_confirm">password_confirm</label>
            <md-input type="password" name="password_confirm" id="password_confirm" v-model="form.password_confirm" :disabled="send" />
            <span class="md-error" v-if="!$v.form.password_confirm.required">The password confirm is required</span>
            <span class="md-error" v-else-if="!$v.form.password_confirm.password_confirm">Invalid password confirm</span>
          </md-field> 

        <md-progress-bar md-mode="indeterminate" v-if="send" />

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="send">Create user</md-button>
        </md-card-actions>
      </md-card>
 
    </form>
  </div>
</template>

<script> 
import {validationMixin} from 'vuelidate';
import {required, email, minLength, maxLength} from 'vuelidate/lib/validators';
export default {
  name: "Signup",
  mixins: [validationMixin],
  validations: {
    form: {
      firstName: {
        required,
        minLenght: minLength(3)
      },
      lastName: {
        required,
        minLength: minLength(3)
      },
      age: {
        required,
        maxLength: maxLength(3)
      },
      gender: {
        required
      },
      email: {
        required,
        email
      },
      password: {
        required,
        maxLength: maxLength(100)
      }
    }
  },
  data: function() {
    return({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        password: null,
        password_confirm: null
       
      },
       send: false
    })
  },
  methods: {
    Validate(fieldName) {
      const field = this.$v.form[fieldName]
      if(field) {
        return {
          'md-invalid' : field.$invalide && field.$dirty
        }
      }
    },
    singup() {
     console.log("🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 🙂 ")
    } 
  }
};
</script>

<style>
.singup {
  margin: auto;
}

</style>
