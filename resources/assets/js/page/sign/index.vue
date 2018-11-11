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
    <el-button class="poem_btn" type="info" round>開始求籤</el-button>
    </div>
</div>
</template>
<script>
// import TopBar from "../../components/layouts/TopBar";
export default {
  name: "SignIndex",
};
</script>
<style>
.center_banner::before{
  display: inline-block;
  height: 100%;
  width: 0;
  vertical-align: middle;
}
.center_banner .content{
  width: 100%;
  margin: 0 auto;
  /* display: inline-block; */
  /* vertical-align: middle; */
}
#poempic_00{
    position:absolute;
    top:69px;
    left:14.5%;
    z-index:1;

}
#poempic_01{
    position:absolute;
    top:69px;
    left:14.5%;
    z-index:1;
}
#poempic_02{
    position:absolute;
    top:69px;
    left:14.5%;
    z-index:2;
}
#poempic_03{
    position:absolute;
    top:69px;
    left:14.5%;
    z-index:2;
}
#poempic_05{
    position:absolute;
    bottom: 0;
    left:14.5%;
    z-index:2;
}
#poempic_06{
    position:absolute;
    bottom: 0;
    left:14.5%;
    z-index:3;
}
#poempic_07{
    position:absolute;
    bottom: 0;
    left:14.5%;
    z-index:5;
}
#poempic_08{
    position:absolute;
    bottom: 0;
    left:14.5%;
    z-index:5;
}
.poem_content{
    width: 300px;
    position:absolute;
    top: 230px;
    left: 40%;
    /* margin: 0 auto 0 auto; */
    /* left:14.5%; */
    /* margin-left: -150px; */
    z-index:99;
    color: white;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
}
.poem_title{
  font-size: 16px;
  font-weight: bold;
}
.poem_item{
  font-size: 13px;
  list-style-type: none;
  text-align: left;
}
.poem_btn{
  background-color: #f6c26c;
  color:#002b3d;
  font-size: 16px;
  font-weight: 900;
}
</style>
