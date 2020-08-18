<template>
  <div id="navbar">
    <nav>
      <md-avatar class="nav__icon">
        <img src="../assets/facebook-clone.png" alt="" /> 
      </md-avatar>
      <div class="nav__leftMenu"> 
           <md-button 
           v-if="this.$store.state.openSignIn"
        class="md-primary dialog__postBtn"
        @click="logout"
        >Logout</md-button>  <md-button 
           v-else
        class="md-primary dialog__postBtn" 
        >Login</md-button> 
      </div>
    </nav>
  </div>
</template>

<script> 

import { auth } from '../firebase';
export default {
  name: "Navbar",
  props: ["icon"],
  methods:  { 
    logout(){
      this.$store.commit('setOpenSingIn', false);
      auth.logout();
      this.$router.push('/login')
    } 
  }
};
</script>

<style scoped>
#navbar,
nav {
  width: 100%;
  background-color: white;
  height: 60px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  z-index: 100;
  padding: 0px 10px;
  display: flex;
  align-items: center; 
  align-content: flex-end;
}
.nav__icon {
  flex: 0;
   
}
.nav__leftMenu { 
  flex: 1;
}
.nav__leftMenu button {
  width: auto;
  float: right;
}
</style>
