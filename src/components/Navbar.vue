<template>
  <div  id="navbar">
    <nav>
      <md-avatar class="nav__icon">
        <img src="../assets/facebook-clone.png" alt="" />
      </md-avatar>
    </nav>
  </div>
</template>

<script>
import Vue from "vue";
import { MdAvatar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css"; 

Vue.use(MdAvatar); 

export default {
  name: "Navbar",
  props: ["icon"], 
};
</script>

<style scoped>
#navbar, nav {
  background-color: white;
  height: 60px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  z-index: 100;  
  padding: 0px 10px;   
  display: flex;
  align-items: flex-start;

}
.nav__icon { 
  flex: 0;
}
 
</style>
