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
.title h2 {
  font-size: 2rem;
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
.box a {
  cursor: pointer;
}
@media screen and (min-width:600px) {
  .title h2 {
    font-size: 26px;
    margin-bottom: 3rem;
  }
  .photo-boxes {
    padding: 0 21vw;
  }
  .box {
    width: 18vw;
  }
  .photos {
    width: 18vw;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.10);
    margin-bottom: 20px;
  }

}
@media screen and (max-width:600px) {
  .title h2 {
    font-size: 22px;
  }
  .photo-boxes {
    padding: 0 16vw;
  }
  .box {
    width: 21vw;
  }
  .photos {
    width: 21vw;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.10);
    margin-bottom: 8px;
  }
}
</style>
<template>
<div>
  <div class="container">
    <div class="title">
      <h2>{{routeName}}</h2>
    </div>
    <div class="photo-boxes">
      <div class="box">
        <a v-for="(item, index) in photoData.left" @click="toIndex('left', index)">
          <img class="photos" v-lazy="photoData.url + routeName + '/' + item.name + '.jpg'">
        </a>
      </div>
      <div class="box">
        <a v-for="(item, index) in photoData.center" @click="toIndex('center', index)">
          <img class="photos" v-lazy="photoData.url + routeName + '/' + item.name + '.jpg'">
        </a>
      </div>
      <div class="box">
        <a v-for="(item, index) in photoData.right" @click="toIndex('right', index)">
          <img class="photos" v-lazy="photoData.url + routeName + '/' +  item.name + '.jpg'">
        </a>
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
  props: ['hide'],
  computed: {
    routeName() {
      return this.$route.name;
    },
    photoData() {
      return photos[this.$route.name];
    },
  },
  methods: {
    toIndex(position, index) {
      BUS.$emit('routeChange', false);
      BUS.$emit('showAlbum');
      setTimeout(() => {
        BUS.$emit('routeChange', true);
        this.$router.push({name: 'photoindex', params: {name: this.routeName, position: position, n: index}});
        BUS.$emit('showAlbum');
      }, 1000);    
    },
  }
}
</script>