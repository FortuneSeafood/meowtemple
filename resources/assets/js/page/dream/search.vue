<template>
<div class="center_banner">
    <div id="poempic_02" class="content"></div>
    <div class="dream_div">
      <div id="dream_input">
        <span id="keywords">
          <el-input placeholder="请输入夢見什麼" v-model="nextKeywords" size="small" clearable></el-input>
        </span>
        <el-button class="search_btn" type="warning" size="small" round @click.native="getDreamList(nextKeywords)">開始解夢</el-button>
      </div>
      <div class="dream_subdiv">
        <div id="dream_key">【{{keywords}}- 解夢】</div>
        <hr>
        <div class="dream_list" v-for="index in 54">
          <router-link :to="{path: '/dream/info', query: {keywords: list[index-1]}}">{{list[index-1]}}</router-link>
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
  name: "DreamSearch",
  data() {
    return {
      keywords: '',
      nextKeywords: '',
      list: []
    }
  },
  created :function() {
    this.nextKeywords = this.$route.query.keywords;
    this.getDreamList(this.nextKeywords);
  },
  methods: {
    getDreamList(_keywords) {
      axios.post('/dream/list/' + _keywords)
        .then(response => {
          this.keywords = _keywords
          this.list = response.data.data
        })
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
.dream_div {
  position: relative;
  margin: auto;
  top: 5%;
  width: 80%;
  min-width: 360px;
  min-height: 94%;
  z-index: 99;
  color: white;
  vertical-align: bottom;
}
#dream_input {
  margin-top: 10px;
  display: inline-block;
  float: right;
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
.dream_subdiv {
  margin: 10px 0 20px 0;
  background-color: rgb(9, 62, 89);
  display: inline-block;
  width: 100%;
}
.dream_subdiv div, .dream_subdiv a {
  color: #eec8b2;
}
.dream_subdiv>hr {
  border: 1px dashed #eec8b2;
}
#dream_key {
  text-align: center;
  font-size: 30px;
}
.dream_list {
  width: 31%;
  margin: 0 1%;
  float: left;
  height: 22px;
}
@media screen and (max-width: 600px) {
  .dream_list {
    width: 98%;
  }
}
</style>
