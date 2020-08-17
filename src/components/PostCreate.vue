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
        <div
          class="dialog__close"
        @click="showDialog = false"
          >X</div
        >
      </md-dialog-title>
      <div class="dialog__body">
        <div class="dialog__userAria">
          <md-avatar class="dialog__userAvatar pointer">
            <img v-bind:src="userImgUrl" alt />
          </md-avatar>
          <div class="dialog__user">
            <p class="dialog__userName pointer hover__underline">
              <strong>Adibe Mohamed</strong>
            </p>

            <div class="dialog__privacy pointer">
              <i class="fas fa-lock"></i><span>public</span
              ><i class="fas fa-sort-down"></i>
            </div>
          </div>
        </div>
        <div class="dialog__post">
          <textarea
            v-model="caption"
            cols="30"
            rows="10"
            :placeholder="placeholder"
          ></textarea>
        </div>
        <div class="dialog__media">
          <span>Add to you post</span>
          <div class="dialog__mediaItems">
            <div>
              <i class="fas fa-video"></i>
              
              <div class="dialog__mediaImage">
                <label for="fileUpload"><i class="fas fa-images"></i></label>
                <input @change="setImageUrl" id="fileUpload" aria-label="chose" type="file"/>
              </div>
              <i class="fas fa-user-tag"></i>
              <i class="far fa-smile"></i>
              <i class="fas fa-map-marker-alt"></i>
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>
        </div>

        <md-tabs md-dynamic-height> </md-tabs>
        <md-dialog-actions class="m-0 p-0">
          <md-button
            class="md-primary dialog__postBtn"
            @click="showDialog = false; createPost();" 
            >Post</md-button
          >
        </md-dialog-actions>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import firebase from 'firebase'
import { db } from "../firebase"
 

Vue.use(VueMaterial);

export default {
  name: "PostCreate",
  data: function() {
    return {
      showDialog: false,
      username: "Adibe Mohamed",
      timetamp: null,
      caption: null,
      media: null,
      placeholder: "What's on you mind, " + this.username
    };
  }, 
  methods: {
    createPost() {
       db.collection("posts"). 
      add({
        caption: this.caption,
        imageUrl: this.imageUrl, 
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        username: this.username 
        }).
      then(() => {
          console.log("Document successfully written!")
      }).
      catch((error) => {
          console.error("Error writing document: ", error)
      })

      console.log("👉 ", this.imageUrl);


    },
    setImageUrl(e) {
      var file = e.target.files || e.dataTransfer.files;
      if(!file.length) return;
      this.imageUrl = file;
    } 
  }, 
};
</script>

<style>

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
.md-dialog /deep/.md-dialog-container {
  width: 500px;
  border-radius: 8px;
  max-width: 700px;
  background: white;
  box-shadow: 1px 5px 18px 0px #00000029;
  height: 520px;
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
  margin: 0;
}
.dialog__close {
  flex: 0;
  cursor: pointer;
  background: lightgray;
  border-radius: 100%;
  padding: 5px 11px;
}
.dialog__body {
  padding: 15px;
}
.dialog__userAria {
  display: flex;
  align-items: center;
  padding: 5px 5px 20px 5px;
}
.dialog__userAvatar {
  flex: 0;
}
.dialog__user {
  flex: 1;
  padding-left: 10px;
}
.dialog__privacy {
  background: lightgray;
  padding: 3px 10px;
  width: fit-content;
  border-radius: 8px;
}
.dialog__privacy span {
  padding: 0px 10px;
  font-weight: bold;
}
.dialog__post > textarea {
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
  font-weight: 600;
  color: #444;
}
.dialog__userName {
  font-weight: 900;
}

.dialog__media {
  display: flex;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.dialog__media span {
  flex: 0.5;
  font-weight: 800;
}
.dialog__mediaItems {
  flex: 0.5;
}
.dialog__mediaItems > div {
  display: flex;
  align-items: center;
  align-content: space-between;
  font-size: 22px;
}
.dialog__mediaItems > div > * {
  flex: 1;
  color: var(--green);
}
.dialog__postBtn {
  background: #1571e6;
  width: 100%;
  color: white !important;
}
.dialog__mediaImage input[type="file"]{
display: none;
}
.pointer {
  cursor: pointer;
}
.hover__underline:hover {
  text-decoration: underline;
}
.m-0 {
  margin: 0;
}
.p-0 {
  padding: 0;
}
.md-dialog {
  z-index: 112220;
}
.md-overlay {
  z-index: 112219;
}

.hover__gray:hover {
  background-color: #f0f2f5;
}
.pointer {
  cursor: pointer;
}
</style>
