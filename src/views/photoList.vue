<style scoped type="text/css">
.container {
  width: 100%;
  height: 92vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
.title {
  text-align: center;
}
.title h1 {
  text-transform: uppercase;
}
.photo-boxes {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
image[lazy=loading] {
width: 20vw;
height: 20vw;
margin-bottom: 40px;
}
@media screen and (min-width:600px) {
  .title h1 {
    font-size: 26px;
  }
  .photo-boxes {
    padding: 0 20vw;
  }
  .box {
    width: 18vw;
  }
  .photos {
    width: 18vw;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
    margin-bottom: 40px;
  }

}
@media screen and (max-width:600px) {
  .title h1 {
    font-size: 24px;
  }
  .photo-boxes {
    padding: 0 14vw;
  }
  .box {
    width: 20vw;
  }
  .photos {
    width: 20vw;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
    margin-bottom: 20px;
  }
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
        <router-link v-for="(item, index) in photoData.left" :to="{name: 'photoindex', params: {name: routeName, position: 'left', n: index}}">
          <img class="photos" v-lazy="photoData.url + routeName + '/' + item.name + '.jpg'">
        </router-link>
      </div>
      <div class="box">
        <router-link v-for="(item, index) in photoData.center" :to="{name: 'photoindex', params: {name: routeName, position: 'center', n: index+1}}">
          <img class="photos" v-lazy="photoData.url + routeName + '/' + item.name + '.jpg'">
        </router-link>
      </div>
      <div class="box">
        <router-link v-for="(item, index) in photoData.right" :to="{name: 'photoindex', params: {name: routeName, position: 'right', n: index}}">
          <img class="photos" v-lazy="photoData.url + routeName + '/' +  item.name + '.jpg'">
        </router-link>
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