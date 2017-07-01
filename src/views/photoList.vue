<style scoped type="text/css">
  .container {
    width: 100%;
    height: 92vh;
    overflow: scroll;
  }
  .title {
    text-align: center;
  }
  .title h1 {
    text-transform: uppercase;
  }
  .photo-boxes {
    width: 100%;
    padding: 0 16vw;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .box {
    width: 20vw;
  }
  .photos {
    width: 20vw;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
    margin-bottom: 40px;
  }
</style>
<template>
<div>
  <div class="container">
    <div class="title">
      <h1>{{routeName}}</h1>
    </div>
    <div class="photo-boxes">
      <div class="box">
        <img class="photos" v-for="n in left" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/left/' + n + '.jpg'">
      </div>
      <div class="box">
        <img class="photos" v-for="n in center" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/center/' + n + '.jpg'">
      </div>
      <div class="box">
        <img class="photos" v-for="n in right" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/right/' + n + '.jpg'">
      </div>
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import photos from '../photos.js';
export default {
  data() {
    return {
      left : [], 
      center : [], 
      right : []
    }
  },
  mounted() {
    this.pushImg();
  },
  methods: {
    pushImg() {
      var _this = this;
      console.log(photos[this.$route.name]);
      for(var i = 0, len = photos[this.$route.name]; i < len; i++) {
        if(i % 3 === 0) _this.left.push(i + 1);
        if(i % 3 === 1) _this.center.push(i + 1);
        if(i % 3 === 2) _this.right.push(i + 1);
      }
      // console.log('a:', a,'b:', b, 'c:', c);
    }
  },
  computed: {
    routeName() {
      return this.$route.name;
    },
    photoData() {
      return photos[this.$route.name];
    }
  }
}
</script>