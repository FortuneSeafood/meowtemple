<template>
  <div class="center_banner">
    <div id="poempic_01" class="content poempic_01"></div>
    <div id="poempic_02" class="content"></div>
    <div id="poempic_05" class="content"></div>
    <div id="poempic_07" class="content"></div>
    <div id="poempic_08" class="content"></div>
    <div class="poem_content">
      <div class="content_bottom">
        <p class="poem_title">喵~ 聖茭!就是這支籤了，</br>趕緊來看看詩籤上說些甚麼吧!</br>詩籤號碼：{{getNumber()}}</p>
        <el-button class="poem_btn" type="info" round><a href="/#/sign/drawinfo">觀看詩籤</a></el-button>
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
      return Math.floor(Math.random() * 60) + 1;
    }
  }
};
</script>
<style scoped>
  @import '/css/basicstyle.css';
</style>
<style>
.poempic_01 {
  left:31% !important;
  width:30% !important;
}
</style>
