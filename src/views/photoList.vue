<style scoped type="text/css">
  .title {
    /*width: 100%;*/
    text-align: center;
  }
  .title h1 {
    text-transform: uppercase;
  }
  .container {
    width: 100%;
    padding: 0 16vw;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
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
  <navbar></navbar>
  <div class="title">
    <h1>{{routeName}}</h1>
  </div>
  <div class="container">
    <div class="box">
      <img class="photos" v-for="n in photoData.left" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/left/' + n + '.jpg'">
    </div>
    <div class="box">
      <img class="photos" v-for="n in photoData.center" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/center/' + n + '.jpg'">
    </div>
    <div class="box">
      <img class="photos" v-for="n in photoData.right" :src="'http://oqwhnnwix.bkt.clouddn.com/' + routeName + '/right/' + n + '.jpg'">
    </div>
  </div>
</div>
</template>
<script type="text/javascript">
import photos from '../photos.js';
import navbar from '../components/navbar.vue';
export default {
  data() {
    return {
    }
  },
  components: {
    navbar
  },
  methods: {
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