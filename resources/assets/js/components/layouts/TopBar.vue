<template>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="1">首頁</el-menu-item>
  <el-submenu index="2">
    <template slot="title">迷霧塔羅</template>
    <el-menu-item index="2-1">介紹</el-menu-item>
    <el-menu-item index="2-2">教學</el-menu-item>
    <el-menu-item index="2-3">抽牌</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">指路詩籤</template>
      <el-menu-item index="3-1">介紹</el-menu-item>
      <el-menu-item index="3-2">教學</el-menu-item>
      <el-menu-item index="3-3">抽牌</el-menu-item>
  </el-submenu>
  <el-menu-item index="4" disabled>夢的意境</el-menu-item>
</el-menu>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style>
</style>
