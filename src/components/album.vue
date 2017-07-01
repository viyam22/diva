<style type="text/css">
.album-wrap {
  width: 100%;
  height: 92vh;
}
.album {
  width: 100%;
  padding: 0 10%;
  margin-top: 30vh;
  box-sizing: border-box;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
}
.album-box {
  width: 18vw;
  height: 18vw;
  text-align: center;
  line-height: 7rem;
  font-size: 1.8rem;
}
.album-img-wrap {
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.9);
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
  animation: showImg 2s;
}
.album-img {
  width: 100%;
  display: block;
  opacity: 0.1;
  transition: opacity 1.5s

}
.album-img:hover {
  opacity: 0.6;
}
.album-box span {
  text-transform: uppercase;
  padding-top: 1.0em;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
  animation: showImg 3s;
}
@keyframes showImg {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
<template>
  <div class="album-wrap">
    <div class="album" @click="showAlbum" v-show="!hide">
      <router-link class="album-box" to="/photo">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/1.jpg">
        </div>
        <span>photo</span>
      </router-link>
      <router-link class="album-box" to="/art">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/2.jpg">
        </div>
        <span>art</span>
      </router-link>
      <router-link class="album-box" to="/project">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/2.jpg">
        </div>
        <span>project</span>
      </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
    }
  },
  props: ['hide'],
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
  }

}
</script>