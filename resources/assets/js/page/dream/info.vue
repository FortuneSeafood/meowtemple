<template>
<div class="center_banner">
    <div id="poempic_02" class="content"></div>
    <div class="dream_div">
      <div id="dream_input">
        <span id="keywords">
          <el-input placeholder="请输入夢見什麼" v-model="nextKeywords" size="small" clearable></el-input>
        </span>
        <router-link :to="{path: '/dream/search', query: {keywords: nextKeywords}}"><el-button class="search_btn" type="warning" size="small" round>開始解夢</el-button></router-link>
      </div>
      <div class="dream_subdiv">
        <div id="dream_key">{{keywords}}</div>
        <hr>
        <p class="dream_info" v-for="content in info">{{content}}</p>
        <div class="dream_other">
          <div>你是否還夢見?</div>
          <div><span v-for="option in other">{{option}}</span></div>
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
      info: [],
      other:['間諜', '萬聖節', '閹狗', '收拾東西、整理東西', '下雪']
    }
  },
  created :function() {
    this.keywords = this.$route.query.keywords;
    this.getDreamInfo(this.keywords);
  },
  methods: {
    getDreamInfo(_keywords) {
      axios.post('/dream/info/' + _keywords)
        .then(response => {
          this.info = response.data.data
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
  color: #eec8b2;
}
.dream_subdiv>hr {
  border: 1px dashed #eec8b2;
}
#dream_key {
  text-align: center;
  font-size: 30px;
}
.dream_info {
  text-indent: 33px;
  margin: 24px;
}
.dream_other {
  background-color: rgb(91, 107, 132);
  margin: 24px;
  padding: 1px 20px;
}
.dream_other>div {
  color: white;
  margin: 20px 0px;
}
.dream_other>div>span {
  white-space: nowrap;
  margin-right: 5px;
}
</style>
