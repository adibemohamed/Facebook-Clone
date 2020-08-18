<template>
   <div>
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
import Post from "./Post.vue";
import Navbar from "./Navbar.vue";
import Story from "./Story.vue";
import StoryPost from "./StoryPost.vue";
import PostCreate from "./PostCreate.vue";
import { auth } from '../firebase';

export default {
    name: "Feed" ,
    components: {
    Navbar,
    Post,
    PostCreate,
    Story,
    StoryPost,
  },
  props: ['posts', 'userImgUrl'],
  methods: {
    logout(){
      auth.logout();
    }
  }
}
</script>

<style>
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