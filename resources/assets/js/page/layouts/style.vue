<template>
  <el-container>
    <el-header class="header" height="69px">
      <Header></Header>
    </el-header>
    <el-main>
      <Main></Main>
    </el-main>
    <!-- <el-footer>
      <Footer></Footer>
    </el-footer> -->
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
  data() {
    return {
      customizeClass: 'active',
    };
  },
  beforeCreate: function() {
        document.getElementsByTagName("body")[0].className="bg";
    },
  beforeDestroy: function() {
      document.body.removeAttribute("class","bg");
  }
};
</script>

<style>
.header{
  width:100%;
  background-color: #3A2042;
  z-index: 99;
}
.bg {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: linear-gradient(to left top, #042334, #124c6a);
  /* background: linear-gradient(bottom right, #042334, #124c6a);
  background: linear-gradient(bottom right, #042334, #124c6a); */
}
.bg>div, .el-container {
  height: 100%;
}
/* .el-header {
  padding: 0px;
}*/
.el-main {
  height: 100%;
  padding: 0;
}
/*.el-footer {
  background-color: #f5f5f5;
} */
</style>
