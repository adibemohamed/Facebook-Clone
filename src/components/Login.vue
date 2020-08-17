<template>
  <div>
    <h1>Login</h1>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.email"
              :disabled="sending"
            />
            <span class="md-error" v-if="!$v.form.email.required"
              >The email is required</span
            >
            <span class="md-error" v-else-if="!$v.form.email.email"
              >Invalid email</span
            >
          </md-field>
        </md-card-content>

        <md-field :class="getValidationClass('password')">
          <label for="email">Password</label>
          <md-input
            type="password"
            name="password"
            id="password"
            v-model="form.password"
            :disabled="sending"
          />
          <span class="md-error" v-if="!$v.form.email.required"
            >The password is required</span
          >
          <span class="md-error" v-else-if="!$v.form.email.email"
            >Invalid password</span
          >
        </md-field>

        <md-card-actions>
          <md-button type="submit" class="md-primary" :disabled="sending"
            >Create user</md-button
          >
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
 import Vue from 'Vue'
 import {MdLayout} from 'vue-material'
 
Vue.use(MdLayout);

export default {
  name: "Login",
};
</script>

<style>

.login {
  margin: auto;
}

</style>
