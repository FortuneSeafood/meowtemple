<template>
<div class="center_banner">
    <div id="poempic_02" class="content"></div>
    <div id="dreampic_01" class="content"></div>
    <div id="dreampic_03" class="content"></div>
    <div class="dream_content">
      <div class="dream_slogen">
        <div class="slogen_text">
          <div>昨晚沒睡好嗎？</div>
          <div class="font-13">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;讓我替你解解夢...</div>
        </div>
        <div id="dreampic_02" class="content"></div>
      </div>
      <div id="dream_input">
        <span id="keywords">
          <el-input placeholder="请输入夢見什麼" v-model="keywords" clearable></el-input>
        </span>
        <el-button class="search_btn" type="info" round><a href="#">開始解夢</a></el-button>
        <div class="sample font-13">常見的夢：
          <span v-for="word in sample">{{word}}</span>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "DreamIndex",
  data() {
    return {
      keywords: '',
      sample: ['鬧鬼', '淹死', '地震', '蛇', '夢裡在哭']
    }
  }
};
</script>
<style>
.center_banner {
  position: relative;
  height: 100%;
}
#poempic_02 {
  background: url(/images/poempic_02.png) -480px 0px no-repeat;
  position: absolute;
  right: 5%;
  z-index: 2;
  width: 495px;
  height: 370px;
}
#dreampic_01 {
  background: url(/images/dreampic_01.png) 4% 0px no-repeat;
  background-size: 40%;
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
}
#dreampic_02 {
  background: url(/images/dreampic_02.png) no-repeat;
  z-index: 1;
  width: 195px;
  height: 190px;
  float: right;
}
#dreampic_03 {
  background: url(/images/dreampic_03.png) 50% 100% no-repeat;
  position: absolute;
  background-size: 80%;
  z-index: 2;
  width: 100%;
  height: 100%;
}
.dream_content {
  position: relative;
  margin: auto;
  top: 20%;
  width: 360px;
  height: 300px;
  z-index: 99;
  color: white;
  vertical-align: bottom;
  text-align: center;
}
.dream_slogen {
  display: inline-block;
}
.slogen_text {
  float: left;
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  padding-top: 150px;
}
.font-13 {
  font-size: 13px;
}
#dream_input {
  margin-top: 10px;
  display: inline-block;
}
#keywords {
  width: 235px;
  float: left;
  margin-right: 10px;
}
.search_btn {
  background-color: #f6c26c;
  color: #002b3d;
  font-size: 16px;
  font-weight: 900;
}
.sample {
  margin-top: 3px;
  color: rgb(213, 174, 159);
  text-align: left;
}
.sample>span {
  margin-right: 5px;
}
</style>
