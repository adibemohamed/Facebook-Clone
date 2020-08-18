<template>
  <div class="login">
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field>
            <label for="email">Email</label>
            <md-input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              v-model="form.login_email"
            />
          </md-field>

          <md-field>
            <label for="password">password</label>
            <md-input
              type="password"
              name="password"
              id="password"
              v-model="form.login_password"
            />
          </md-field>
        </md-card-content>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Login</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script>
import { auth } from "../firebase";

export default {
  name: "Login",
  data: () => {
    return {
      form: {
        login_email: null,
        login_password: null,
      },
    };
  },
  methods: {
    login() {
      auth
      .signInWithEmailAndPassword(
        this.form.login_email,
        this.form.login_password
      )
      .then((authUser) => {
        this.$store.commit("setUser", authUser.user);
      })
      .catch((error) => {
        console.log("Signin failled! ", error);
      });

      this.$store.commit("setOpenSignIn", true);
      this.$router.push("/");
    },
  },
};
</script>

<style>
.login {
  margin: 0 auto;
  max-width: 700px;
  padding: 150px 20px 0px 20px;
}
</style>
