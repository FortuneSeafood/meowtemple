<template>
  <div id="lotteryapp">
    <el-button @click="getResult">抽籤</el-button>
    <p>{{result}}</p>
  </div>
</template>

<script>
  export default{
    data () {
      return {
        result: ''
      }
    },
    methods:{
      getResult() {
        let self = this;
        axios({
          methods: 'get',
          url: 'http://www.fate.com.tw/fateapi/lottery/get/0'
        }).then((resp) => {
          self.result = resp.data.data;
        });
      }
    }
  }
</script>
