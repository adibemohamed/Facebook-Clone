<template>
  <div id="app">
    <router-view
      v-bind:posts="posts" 
    ></router-view>
  </div>
</template>

<script>

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { db } from "./firebase"; 
 
export default {
  name: "App",
  components: {
  },
  data: function() {
    return {
      icon: "../assets/facebook-clone.png",
      posts: [], 
    };
  },
  methods: {
    
  },
  mounted: function(){
    db.collection("posts") 
        .onSnapshot((querySnapshot) => {
          const postCollection = []
          querySnapshot.forEach((doc) => {
            postCollection.push({
              username: doc.data().username,
              caption: doc.data().caption,
              imageUrl: doc.data().imageUrl,
              timestamp: doc.data().timestamp,
            });
          });

          this.posts = postCollection;
          
        })
        // .catch((error) => {
        //   console.log("Error getting documents: ", error);
        // });

      // const email = "adibe@gmail.com";
      // const password = "adibe123";
      // const username = "adibemohamed"
      // auth
      // .createUserWithEmailAndPassword(email, password)
      // .then((authUser) => {
      //   return authUser.user.updateProfile({
      //     username: username,
      //   });
      // })
      // .catch((error) => console.log("🔴 ", error.message));

       
  },
  
  computed: {
    // getPosts: function() {
    //   //return this.posts;
    // }
  }
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
}
#app {
  background-color: #f0f2f5;
  width: 100%;
  height: 100%;
}
#feed {
  margin: auto;
  max-width: 700px;
  padding: 0px 20px;
}
.feed__stroies {
  height: 286px;
  max-height: 286px;
  padding: 20px 0px 40px 0px;
  display: flex;
}
@media screen and (max-width: 600px) {
  .feed__stroies {
    height: 240px;
  }
}
</style>
