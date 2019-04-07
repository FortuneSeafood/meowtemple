<template>
<div class="center_banner">
    <div id="poempic_00" class="content"></div>
    <div id="poempic_01" class="content"><img src="images/poempic_01.png"></div>
    <div id="poempic_02" class="content"><img src="images/poempic_02.png"></div>
    <div id="poempic_03" class="content"><img src="images/poempic_03.png"></div>
    <div id="poempic_05" class="content"><img src="images/poempic_05.png"></div>
    <div id="poempic_06" class="content"><img src="images/poempic_06.png"></div>
    <div id="poempic_07" class="content"><img src="images/poempic_07.png"></div>
    <div id="poempic_08" class="content"><img src="images/poempic_08.png"></div>
    <div class="poem_content">
        <div class="poem_title">需要為你指點迷津嗎？</br>只要虔誠的求問，就能獲得指引喔！</div>
        <ul class="poem_item">
            <li>1.虔誠稟報您的姓名、年歲、住址、求問事項</li>
            <li>2.點選開始求籤</li>
            <li>3.擲筊請示是否為此籤</li>
            <li>4.若為聖筊則可觀看詩籤內容</li>
            <li>5.若為笑筊或陰筊則需重新求籤</li>
        </ul>
        <el-button class="poem_btn" type="info" round><a href="/#/sign/draw">開始求籤</a></el-button>
    </div>
</div>
</template>
<script>
// import TopBar from "../../components/layouts/TopBar";
export default {
  name: "SignIndex",
  created() {

  }
};
</script>
<style scoped>
  @import '/css/basicstyle.css';
</style>

