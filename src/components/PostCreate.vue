<template>
  <div id="postCreate">
    <div class="postCreate__input">
      <md-avatar class="post__userAvatar pointer">
        <img v-bind:src="userImgUrl" alt />
      </md-avatar>
      <input
        @click="showDialog = true"
        type="text"
        placeholder="What's on your mind, Adibe ?"
        class=" secondary  pointer"
      />
    </div>
    <div class="postCreate__media">
      <div class="pointer hover__gray">📸 Live Video</div>
      <div class="pointer hover__gray">🖼 Photo/Video</div>
      <div class="pointer hover__gray">😊 Feeling/Activity</div>
    </div>

    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="dialog__header">
        <span class="dialog__title">Create post</span>
        <md-avatar class="dialog__close md-avatar-icon" @click="showDialog = false">X</md-avatar>
      </md-dialog-title>
      <div>
        <div class="post__userAria">
          <p class="post__userName pointer hover__underline">
            <strong>Adibe Mohamed</strong>
          </p>
          <p class="post__time secondary">8 August at 16:45</p>
        </div>
      </div>
      <md-tabs md-dynamic-height> </md-tabs>
      <md-dialog-actions>
        <md-button class="md-primary dialog__postBtn" @click="showDialog = false"
          >Post</md-button
        >
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(VueMaterial);

export default {
  name: "PostCreate",
  data: function() {
    return {
      userImgUrl:
        "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8",
      showDialog: false,
      icon: "../assets/facebook-clone.png",
    };
  },
};
</script>

<style>
.md-dialog /deep/.md-dialog-container {
  width: 500px;
  border-radius: 8px;
  max-width: 700px;
  background: white;
  box-shadow: 1px 5px 18px 0px #00000029;
}

.md-overlay {
  background-color: #f4f4f4cc;
}
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
.dialog__header {
  display: flex;
  border-bottom: 1px solid lightgray;
 padding: 10px;
 align-items: center;
}
.dialog__title {
  flex: 1;
  text-align: center;
  font-weight: bold;

}
.dialog__close {
  flex: 0;
  cursor: pointer;
}
</style>
