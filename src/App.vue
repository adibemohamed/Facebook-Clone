<template>
  <div id="app">
    <Post userImgUrl="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8"/>
  </div>
</template>

<script> 
import Post from './components/Post.vue'

export default {
  name: 'App', 
  components: {
    Post
  }
}
</script>

 <style>
 *{
   padding: 0;
   margin: 0;
 }
 body, html {
   height: 100vh;
 }
 #app {
   background-color: #F0F2F5;
   width: 100%;
   height: 100%;
 }
 </style>
