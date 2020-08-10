<template>
  <div id="postCreate">
    <div class="postCreate__input">
      <md-avatar class="post__userAvatar pointer">
        <img v-bind:src="userImgUrl" alt />
      </md-avatar>
      <input type="text" placeholder="What's on your mind, Adibe ?" class=" secondary  pointer" />
    </div>
    <div class="postCreate__media">
    <div class="pointer hover__gray">📸 Live Video</div>
    <div class="pointer hover__gray">🖼 Photo/Video</div>
    <div class="pointer hover__gray">😊 Feeling/Activity</div>
  </div>
  <PostDialog />
  </div>
</template>

<script>
import Vue from "vue";
import { MdAvatar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import PostDialog from './Subs/PostDialog.vue'


Vue.use(MdAvatar); 

export default {
  name: "PostCreate",
  data: function() {
    return {
      userImgUrl: "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8"
    }
  },
  components: {
    PostDialog
  },
  methods: { 
    
  }
};
</script>

<style>
#postCreate {
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 0px 15px;
  margin-bottom: 15px;
}
.postCreate__input {
    display: flex;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
    padding-top: 15px;
}
.postCreate__input input { 
  border: none;
  border-radius: 30px;
  background-color: #f0f2f5;
    padding: 15px;
  margin-left: 10px;
  width: 100%;
  font-size: 18px;
}
.postCreate__media {
    display: flex;
    justify-content: space-between; 
    align-items: center;
    padding: 8px 0px;
}
.postCreate__media > div {
    flex: 1;
    text-align: center;
    padding: 12px;
    border-radius: 10px;
}

.hover__gray:hover {
  background-color: #f0f2f5;
}
.pointer {
  cursor: pointer;
}
</style>
