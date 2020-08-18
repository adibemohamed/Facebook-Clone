<template>
  <div id="story">
    <img
      src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-9/41678515_327688411138792_3693402459851456512_o.jpg?_nc_cat=102&_nc_sid=8bfeb9&_nc_ohc=xVOfFBP42Q8AX-AHuOp&_nc_ht=scontent.fcmn5-1.fna&oh=df93a02ba478cf9708ded327db7f59bb&oe=5F5437EA"
      alt=""
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

 

export default {
  name: "Story", 
  props: ['stories'],
  data: function() {
    return {
      userImgUrl: null
    };
  },
};
</script>

<style scoped>
#story {
  height: 100%;
  width: 24%;
  background: black;
  border-radius: 10px;
  margin: 0 4px;
  position: relative;
  cursor: pointer;
}
.story__mediaImg {
  border-radius: 10px;
  height: 100%;
  transition: 0.1s all;
  width: 100%;
  object-fit: cover;
}
.story__mediaImg:hover {
  opacity: 0.8;
}
.story__userImg {
  position: absolute;
  top: 3%;
  left: 3%;
  z-index: 99;

  border-radius: 100%;
  height: 45px;
  width: 45px;
  padding: 0;
}
.story__userImg img {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: 4px solid #1876f2;;
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
