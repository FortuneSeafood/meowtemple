<template>
<div class='topbox'>
  <div class="logo leftbox">
     <a href="" title="Meow temple" id="logo"><img src="images/logo.png" alt="" height="79px" width="204px"></a>
   </div>
<el-menu :default-active="activeIndex" class="el-menu rightbox" mode="horizontal" @select="handleSelect"
  background-color="#3A2042"
  text-color="#ffffff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><img src="/images/poem.png">指路詩籤</el-menu-item>
  <el-menu-item index="2"><img src="/images/dream.png">夢的意境</el-menu-item>
  <el-menu-item index="3"><a href="/#/tarot/draw"><img src="/images/tarot.png">迷霧塔羅</a></el-menu-item>
</el-menu>
</div>
</template>
<script>
export default {
  name: 'TopBar',
  data() {
      return {
        activeIndex: '1',
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(123);
        //console.log(key, keyPath);
      }
    }
};
</script>
<style>
.leftbox {
  float: left;
}
.rightbox {
  float: right;
}
.topbox{
  background-color: #3A2042;
  height: 60px;
}
.header {
  height: 86px;
  width: 100%;
  background-color: #3a2042;
  height: 69px;
}
.menu_icon {
  font-size: 16px;
  font-family: 微軟正黑體;
  color: #eec8b2;
  right: 40px;
  position: relative;
}
.menu_text {
  position: absolute;
  top: 25px;
}
</style>
