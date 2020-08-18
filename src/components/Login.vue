<template>
  <div class="login"> 
    <form novalidate class="md-layout" @submit.prevent="login">
      <md-card class="md-layout-item md-size-100 md-small-size-100">
        <md-card-header>
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
 
          <md-field >
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.login_email"  /> 
          </md-field> 

          <md-field  >
            <label for="password">password</label>
            <md-input type="password" name="password" id="password" v-model="form.login_password"  /> 
          </md-field>
        </md-card-content>
  

        <md-card-actions>
          <md-button type="submit" class="md-primary"  >Login</md-button>
        </md-card-actions>
      </md-card>
 
    </form>
  </div>
</template>

<script> 

 

export default {
  name: "Login",
  data: () => {
    return ({ 
       form: {
         login_email: null,
         login_password: null
       }
    })
  },
  methods: {
    login() {
      console.log("🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 🚀 ")
    }
  }
};
</script>

<style>
.login { 
  margin: 0 auto;
  max-width: 680px;
  padding-top: 150px;
}
</style>
