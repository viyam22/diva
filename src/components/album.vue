<style type="text/css">
.album-wrap {
  width: 100%;
  height: 92vh;
  box-shadow: 5px 1px 0 rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);
}
.album {
  width: 100%;
  padding: 0 10%;
  margin-top: 30vh;
  box-sizing: border-box;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
}
.album-box {
  width: 30vw;
  height: 24vw;
  text-align: center;
  font-size: 1.8rem;
}
.album-img-wrap {
  width: 18vw;
  height: 18vw;
  display: inline-block;
  background-color: rgba(0,0,0, 0.9);
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
  animation: showImg 2.2s;
}
.album-img {
  width: 18vw;
  display: block;
  

}
@media screen and (min-width:800px) {
  .album-img {
    opacity: 0.1;
    transition: opacity 1.5s
  }
  .album-img:hover {
    opacity: 0.6;
  }
}

.album-box span {
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  animation: showImg 2.8s;
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
          <img class="album-img" src="../assets/navbar/3.jpg">
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