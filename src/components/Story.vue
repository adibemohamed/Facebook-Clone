<template>
  <div id="story">
    <img
      src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/41678515_327688411138792_3693402459851456512_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=xVOfFBP42Q8AX-AHuOp&_nc_ht=scontent.fcmn5-1.fna&oh=df93a02ba478cf9708ded327db7f59bb&oe=5F5437EA"
      alt
      class="story__mediaImg"
    />
    <div class="story__userImg">
      <md-avatar class="post__userAvatar pointer">
        <img v-bind:src="userImgUrl" alt />
      </md-avatar>
    </div>
    <span class="story__userName">Adibe Mohamed</span>
  </div>
</template>

<script>
import Vue from "vue";
import { MdAvatar } from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";

Vue.use(MdAvatar);

export default {
  name: "Story",
  data: function() {
    return {
      userImgUrl:
        "https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8",
    };
  },
};
</script>

<style scoped>
#story {
  height: 230px;
  max-height: 286px;
  width: 24%;
  background: palevioletred;
  border-radius: 10px;
  margin: 0 4px;
  position: relative;
  cursor: pointer;
}
.story__mediaImg {
  border-radius: 10px;
}
.story__userImg {
  position: absolute;
  top: 0;
  z-index: 99;
  border: 3px solid white;
  border-radius: 100%;
  height: 40px;
  width: 40px;
}
.story__userName {
  position: absolute;
  bottom: 0;
  z-index: 100;
  left: 0;
  width: 100%;
  padding: 10px;
  text-align: center;
  font-size: 15px;
  font-weight: 800;
  color: white;
}
</style>
