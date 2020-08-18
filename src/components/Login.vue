<template>
  <div class="login">
    <h1>Login</h1>
    <form class="md-layout">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
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
            />
          </md-field>
        </md-card-content>

        <md-field>
          <label for="email">Password</label>
          <md-input type="password" name="password" id="password" />
        </md-field>

        <md-card-actions>
          <md-button type="submit" class="md-primary">Create user</md-button>
        </md-card-actions>
      </md-card>
    </form>
  </div>
</template>

<script> 

 

export default {
  name: "Login",
};
</script>

<style>
/* .login {
  margin: auto;
} */
</style>
