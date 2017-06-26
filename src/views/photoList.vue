<style scoped type="text/css">
  .title {
    /*width: 100%;*/
    text-align: center;
  }
  .container {
    display: inline-flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .box {
    width: 14rem;
    margin: 1.5rem;
  }
  .photos {
    width: 14rem;
  }
</style>
<template>
  <div>
    <div class="title">
      <h1>PHOTOS</h1>
    </div>

    <div class="container">
      <div class="box">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
      </div>
      <div class="box">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
      </div>
      <div class="box">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
        <img class="photos" src="../assets/info.jpg">
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    data() {
      return {
        photos: {
          one: [],
          two: [],
          three: []
        },
        art: {
          one: [],
          two: [],
          three: []
        },
        project: {
          one: [],
          two: [],
          three: []
        },
        initData: null
      }
    },

    methods: {
      initData() {
        var _this = this;
        //获取路由name
        // _this.initData = 
      }
      
    }
  }
</script>