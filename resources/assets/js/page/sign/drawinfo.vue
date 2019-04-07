<template>
  <div class="center_banner">
    <div id="poempic_01" class="content"></div>
    <div id="poempic_05" class="content"></div>
    <div id="poempic_06" class="content"></div>
    <div id="poempic_07" class="content"></div>
    <div id="poempic_08" class="content"></div>
    <div class="poem_content poem_content1">
      <p class="poem_title poem_title1">詩籤號碼：{{getNumber()}}</p>
      <div class="poem_table poem_table1">
        <table class="table_style">
          <tr>
            <td>
              <p>丁口</p>
              <p>官司</p>
              <p>婚姻</p>
              <p>行人</p>
              <p>功名</p>
            </td>
            <td rowspan="2" class="last_row">湄洲天上聖母籤</td>
          </tr>
          <tr>
            <td>
              <div>田畜</div>
              <div>失物</div>
              <div>出行</div>
              <div>疾病</div>
              <div>生意</div>
            </td>
          </tr>
        </table>
      </div>
      <el-button class="poem_btn poem_btn1" type="info" round><a href="/#/sign/ready">繼續求籤</a></el-button>
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
          const post = response.data.post;

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

<style>
td > p {
  -webkit-writing-mode: vertical-lr;
  writing-mode: vertical-rl;
}
.last_row {
  width: 10%;
  height: 100%;
}
.table_style {
  border: black solid;
  width: 100%;
  height: 100%;
}
.poem_content1 {
  width: 500px;
  height: 400px;
}

.poem_btn1 {
  position: absolute;
  bottom: 0px;
  right:0px;
}

.poem_title1 {
  text-align: left;
}

.poem_table1 {
  width: 100%;
  height: 290px;
}
</style>