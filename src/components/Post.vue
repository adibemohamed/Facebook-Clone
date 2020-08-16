<template>
  <div class="post__body">
    <div class="post__postHeader">
      <div class="post__user">
        <md-avatar class="post__userAvatar pointer">
          <img v-bind:src="userImgUrl" alt />
        </md-avatar>
        <div class="post__userAria">
          <p class="post__userName pointer hover__underline">
            <strong>Adibe Mohamed</strong>
          </p>
          <p class="post__time secondary">{{ post.timestamp }}</p>
        </div>
      </div>

      <div class="post__more pointer hover__gray secondary">...</div>
    </div>

    <h3 class="post__caption">{{ post.caption }} </h3> 
    <div class="post__media pointer">
      <img
        src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/41678515_327688411138792_3693402459851456512_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=xVOfFBP42Q8AX-AHuOp&_nc_ht=scontent.fcmn5-1.fna&oh=df93a02ba478cf9708ded327db7f59bb&oe=5F5437EA"
        alt
      />
    </div>
    <div class="post__footer">
      <div class="post__reaction">
        <div class="post__reactionTotal pointer hover">😆🔥💟 <span class="hover__underline">200 Adibe Mohamed</span></div>
        <div class="post__reactionCount pointer">
          <p class="hover__underline">101 Comments</p>
          <p class="hover__underline">1 Shares</p>
        </div>
      </div>
      <div class="post__action pointer ">
        <div class="hover__gray secondary">Like</div>
        <div class="hover__gray secondary">Comment</div>
        <div class="hover__gray secondary">Share</div>
      </div>
      <div class="post__comments">
        <strong class="pointer secondary">View Comments</strong>
      </div>
      <div class="post__addComment">
        <md-avatar class="post__commentUser  pointer">
          <img v-bind:src="userImgUrl" alt />
        </md-avatar>
        <input type="text" placeholder="Write a comment" class=" secondary" />
      </div>
      <div class="post__userComment">
        <md-avatar class="post__commentUser  pointer">
          <img v-bind:src="userImgUrl" alt />
        </md-avatar>
        <div class="post__userCommentBody">
         <div class="post__commentBubble">
           <p class="post__userName pointer hover__underline">
            <strong>Adibe Mohamed</strong>
          </p>
          <span >This fucking killing it, And  just  amazing</span>
         </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { MdAvatar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css"; 

Vue.use(MdAvatar);
 

export default {
  name: "Post",
  props: {
    post: null,
    userImgUrl: { 
      type: String,
      required: true,
      default:
        "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8",
    },
  } 
};
</script>
<style >
:root {
  --secondary-color: #65676b;
}
.post__body {
  background-color: white;
  max-width: 680px;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  padding-bottom: 15px;
}
.post__postHeader {
  padding: 10px;
  display: flex;
  width: 100%;
}
.post__userAvatar {
  flex: 0;
}
.post__user {
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
}
.post__caption {
  padding: 5px 10px 10px 10px;
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
.post__action {
  display: flex;
  justify-content: space-between;
  border: 0;
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
}
.post__action > div {
  padding: 8px;
  text-align: center;
  flex: 1;
  font-weight: 800;
  margin: 6px 4px;
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
  background-color: #f0f2f5;
  padding: 10px;
  margin-left: 10px;
}
.post__commentUser {
  flex: 0;
}
.post__userComment {
  display: flex;
  padding: 0px 10px;
}
.post__commentUser {
  flex: 0;

}
.post__userCommentBody {
  flex: 1;
  margin-left: 10px;
}
.post__commentBubble {
  background: #f0f2f5;
  padding: 5px;
  border-radius: 10px;
  width: fit-content;
}

.pointer {
  cursor: pointer;
}
.hover__gray:hover {
  background-color: #f0f2f5;
}
.hover__underline:hover {
  text-decoration: underline;
}
.secondary {
  color: var(--secondary-color);
}
</style>
