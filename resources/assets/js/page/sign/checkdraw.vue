<template>
  <div class="center_banner">
    <div id="poempic_01" class="content"></div>
    <div id="poempic_02" class="content"></div>
    <div id="poempic_03" class="content"></div>
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
<style>
.center_banner {
  position: relative;
  height: 100%;
  min-height: 465px;
  max-height: 532px;
  max-width: 1024px;
  margin:auto;
}
#poempic_01 {
  background: url(/images/poempic_01.png) -40px 0px no-repeat;
  position: absolute;
  left: 4%;
  z-index: 1;
  width: 96%;
  height: 205px;
}
#poempic_02 {
  background: url(/images/poempic_02.png) -480px 0px no-repeat;
  position: absolute;
  right: 5%;
  z-index: 2;
  width: 495px;
  height: 370px;
}

#poempic_05 {
  background: url(/images/poempic_05.png) -110px -375px no-repeat;
  position: absolute;
  bottom: 0;
  left: 11%;
  z-index: 2;
  width: 89%;
  height: 124px;
}
#poempic_06 {
  background: url(/images/poempic_09.png) -660px -50px no-repeat;
  position: absolute;
  bottom: 40px;
  right: 40%;
  z-index: 3;
  width: 210px;
  height: 430px;
}
#poempic_07 {
  background: url(/images/poempic_07.png) -185px -398px no-repeat;
  position: absolute;
  bottom: 0;
  left: 18.5%;
  z-index: 5;
  width: 81.5%;
  height: 102px;
}
#poempic_08 {
  background: url(/images/poempic_08.png) -560px -430px no-repeat;
  position: absolute;
  bottom: 0;
  left: 55%;
  z-index: 5;
  width: 45%;
  height: 70px;
}
.poem_content {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 10%;
  right: 13%;
  z-index: 99;
  color: white;
  display: inline-block;
  vertical-align: bottom;
  text-align: center;
}
.content_bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.poem_title {
  font-size: 16px;
  font-weight: bold;
}
#lot_num {
  font-size: 30px;
}
.poem_btn {
  background-color: #f6c26c;
  color: #002b3d;
  font-size: 16px;
  font-weight: 900;
}
</style>
