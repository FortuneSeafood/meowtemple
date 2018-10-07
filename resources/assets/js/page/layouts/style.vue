<template>
    <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <Main></Main>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "../../components/layouts/TopBar";
import Main from "../../components/layouts/Main";
import Footer from "../../components/layouts/FooterBar";

export default {
  name: "Style",
  components: {
    Header,
    Main,
    Footer,
  },
};
</script>

<style>
/* .el-header {
  padding: 0px;
}
.el-main {

  min-height: 1000px;
}
.el-footer {
  background-color: #f5f5f5;
} */
</style>
