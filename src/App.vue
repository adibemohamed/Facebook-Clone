<template>
  <div id="app">
    <Navbar icon="icon" />

    <div id="feed">
      <div class="feed__stroies">
        <StoryPost />
        <Story />
        <Story />
        <Story />
        <Story />
      </div>
      <div class="feed_postCreate">
        <PostCreate />
      </div>
      <div
        class="feed__posts"
        v-for="(post, index) in posts"
        v-bind:key="index"
      > 
        <Post :post="post" userImgUrl="" />
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Navbar from "./components/Navbar.vue";
import Story from "./components/Story.vue";
import StoryPost from "./components/StoryPost.vue";
import PostCreate from "./components/PostCreate.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { db } from "./firebase";
import { component } from 'vue/types/umd';

const Login = null;
const App;

const routes = [
  {path: '/', component : App},
  {path: '/login', component: Login}
]

const router = new VueRouter({
  routes
})

export default {
  name: "App",
  components: {
    Navbar,
    Post,
    PostCreate,
    Story,
    StoryPost,
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
