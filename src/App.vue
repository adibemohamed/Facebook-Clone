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
        <div class="feed_postCrete">
          <PostCreate />
        </div>

        <Post
          userImgUrl="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8"
        />
      </div>
    
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import Navbar from "./components/Navbar.vue";
import Story from "./components/Story.vue";
import StoryPost from "./components/StoryPost.vue"
import PostCreate from './components/PostCreate.vue'
import "@fortawesome/fontawesome-free/css/all.css"
import "@fortawesome/fontawesome-free/js/all.js";
import {db} from './firebase';

db.collection("posts")
.get()
.then(querySnapshot => {
  const documents = querySnapshot.docs.map(doc => doc.data());
  console.log("🔥 💵 ", documents);
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
    };
  },
  methods: {
    readPost() {
      let post = [];
      db.collection("posts")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          post.push({
            username: doc.data().username,
            caption: doc.data().caption,
            imageUrl: doc.data().imageUrl,
            timestamp: doc.data().timestamp
          })
        })
        console.log("👉 Posts:", post)
          return post;
      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })
    
    }
  },
  mounted() {
    this.readPost()
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
  --primary-blue: #1571E6;
  --purple: #9567EE;
  --green: #42B35D;
  --orange: #EAB026;
  --red: #E84F3A;
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
