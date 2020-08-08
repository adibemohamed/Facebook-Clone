<template>
  <div class="post__body">
    <div class="post__postHeader">
      <div class="post__user">
        <md-avatar class="post__userAvatar">
        <img v-bind:src="userImgUrl" alt />
        </md-avatar>
       <div class="post__userAria">
            <p class="post__userName">
          <strong>Adibe Mohamed</strong>
        </p>
        <p class="post__time">8 August at 16:45</p>
       </div>
      </div>

        <div class="post__more">...</div>

    </div>


    <div class="post__caption">hello guys how is going</div>
    <div class="post__media">
      <img
        src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/41678515_327688411138792_3693402459851456512_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=xVOfFBP42Q8AX-AHuOp&_nc_ht=scontent.fcmn5-1.fna&oh=df93a02ba478cf9708ded327db7f59bb&oe=5F5437EA"
        alt
      />
    </div>
    <div class="post__footer">
        <div class="post__reaction">
           <div class="post__reactionTotal">😆🔥💟 200</div>
           <div class="post__reactionCount">
                <p>101 Comments</p>
                <p>1 Shares</p>
           </div>
        </div>
     <div class="post__action">
          <div>Like</div>
            <div>Comment</div>
            <div>Share</div>
     </div>
     <div class="post__comments">
         <strong>View Comments</strong>
     </div>
     <div class="post__addComment">
          <md-avatar class="post__commentUser">
        <img v-bind:src="userImgUrl" alt />
      </md-avatar>
      <input type="text" placeholder="Write a comment">
     </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { MdAvatar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdAvatar);

export default {
  name: "Post",
  props: {
    userImgUrl: {
      type: String,
      required: true,
      default:
        "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8",
    },
  },
};
</script>
<style scoped>
.post__body {
  background-color: white;
  max-width: 680px;
  border: 1px solid lightgray;
  border-radius: 10px;
}
.post__postHeader {
  padding: 10px;
  display: flex;
  width: 100%;
}
.post__userAvatar {
  flex: 0;
}
.post__user{
  display: flex;
}
.post__userAria {
    padding: 0px 10px;
}

.post__more {
    flex: 1;
    text-align: right; 
    font-weight: 900;
    font-size: 1.2rem;
    color: darkgray 
}


.post__caption {
  padding: 5px 10px;
  font-weight: 400;
}
.post__media img {
  max-height: 500px;
  width: 100%;
  object-fit: cover;
  border: none;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  
}
.post__reaction {
    padding: 10px;
}
.post__reactionCount > p {
    padding: 0px 5px;
}

.post__footer {
    padding: 0px 10px;
}
.post__action{
    display: flex;
    justify-content: space-between;
    border: 0;
    border-top: 2px solid lightgray;
    border-bottom: 2px solid lightgray;
}
.post__action > div{
    padding: 10px;
    text-align: center;
    flex: 1;
    font-weight: 800;
}
.post__reaction {
    display: flex;
    justify-content: space-between;
}
.post__reactionCount {
    display: flex;
}
.post__comments {
    padding: 10px 10px;
}
.post__addComment {
    padding: 10px;
    display: flex;
}
.post__addComment input {
    flex: 1;
    border: none;
    border-radius: 30px;
    background-color: #F0F2F5;
    padding: 10px;
    margin-left: 10px;
}
.post__commentUser {
    flex: 0;
}

</style>
