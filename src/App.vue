<template>
  <div id="app">
    <router-view v-bind:posts="posts"></router-view>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { db } from "./firebase";

Vue.use(VueMaterial);

export default {
  name: "App",
  components: {},
  data: function() {
    return {
      icon: "../assets/facebook-clone.png",
      posts: [],
    };
  },
  mounted: function() {
    const postCollection = [];
    db.collection("posts")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          postCollection.push({
            username: doc.data().username,
            caption: doc.data().caption,
            imageUrl: doc.data().imageUrl,
            timestamp: doc.data().timestamp,
            id: doc.id,
          });
        });
        this.posts = postCollection;
       
      })
 
  },

  computed: {
    // getPosts: function() {
    //   //return this.posts;
    // }
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
body,
html {
  --primary-blue: #1571e6;
  --purple: #9567ee;
  --green: #42b35d;
  --orange: #eab026;
  --red: #e84f3a;
  height: 100%;
}
#app {
  background-color: #f0f2f5;
  width: 100%;
  height: 100%;
}
</style>
