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
          methods: 'post',
          url: '/lottery/get/0'
        }).then((response) => {
          self.result = response.data.data;
        });
      }
    }
  }
</script>
