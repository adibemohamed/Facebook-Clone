<template>
  <div id="storyPost">
    <div class="storyPost__userImg">
      <img
        src="https://scontent.fcmn5-1.fna.fbcdn.net/v/t1.0-1/p200x200/87942170_623106144930349_6672718284065865728_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=zwVpFzJUkcoAX-sR_yJ&_nc_ht=scontent.fcmn5-1.fna&_nc_tp=6&oh=ddbfec275df23073c4d5d3a94dbf1260&oe=5F5518E8"
        alt=""
      />
    </div>
    <div class="storyPost__add">
      <img src="../assets/add.png" alt="" />
      <span>Create a story</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StoryPost",
};
</script>

<style scoped>
#storyPost {
  height: 230px;
  max-height: 286px;
  width: 24%;
  border-radius: 10px;
  margin: 0 4px;
  cursor: pointer;
  text-align: center;
  border: 1px solid lightgray;
  background-color: white;
}
#storyPost:hover * {
  background-color: lightgray;
}
.storyPost__userImg img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px 10px 0px 0px;
}
.storyPost__userImg img:hover {
}
.storyPost__add {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 10px 10px;
  height: 80px;
}
.storyPost__add > img {
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 5px;
  margin-top: -25px;
  background: white;
}
.storyPost__add span {
  color: black;
  font-weight: 800;
  width: 50px;
}
</style>
