<template>
  <div class="center_banner">
    <div id="poempic_01" class="content"></div>
    <div id="poempic_02" class="content"></div>
    <div id="poempic_05" class="content"></div>
    <div id="poempic_09" class="content"></div>
    <div id="poempic_07" class="content"></div>
    <div id="poempic_08" class="content"></div>
    <div class="poem_content">
      <div class="content_bottom">
        <p class="poem_title">喵~ 你抽到的籤號是第<span id="lot_num">{{getNumber()}}</span>籤耶，</br>趕緊擲筊問問看是不是這支籤...</p>
        <el-button class="poem_btn" type="info" round><a href="/#/sign/checkdraw">開始擲筊</a></el-button>
      </div>
    </div>
  </div>
</template>
<script>
// import TopBar from "../../components/layouts/TopBar";
export default {
  name: "SignIndex",
  methods: {
    getNumber() {
      const title = '抽籤';
      const content = '內容';
       axios
        .post('/lottery/get/0')
        .then(response => {
          // const post = response.data.post;

          console.log(response.data);
          // this.$router.push(`/${post.id}`);
        });
      // console.log(data);
      return Math.floor(Math.random() * 60) + 1;
    }
  }
};
</script>
<style scoped>
  @import '/css/basicstyle.css';
</style>
