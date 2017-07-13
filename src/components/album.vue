<style type="text/css">
.album-wrap {
  width: 100%;
  height: 92vh;
  box-shadow: 5px 1px 0 rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);
}



.album-box p {
  text-transform: uppercase;
  font-size: 16px;
  text-align: center;
  font-weight: 600;
  animation: showImg 3s;
}

@media screen and (min-width:800px) {
  .album {
    width: 100%;
    padding: 0 14%;
    margin-top: 30vh;
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
  }
  .album-box {
    width: 30vw;
    height: 18vw;
    text-align: center;
    font-size: 1.8rem;
  }
  .album-img-wrap {
    width: 18vw;
    height: 18vw;
    cursor: pointer;
    display: inline-block;
    background-color: #000;
    opacity: 0.9;
    animation: showImg 1.6s;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
  }
  .album-img {
    width: 18vw;
    display: block;
    opacity: 0.1;
    transition: opacity 1.5s;
  }
  .album-img:hover {
    opacity: 1;
  }
}
@media screen and (max-width:800px) {
  .album {
    margin-top: 15vh;
    height: 92vh;
    flex-flow: column nowrap;
    justify-content: space-around;
  }
  .album-box {
    font-size: 1.8rem;
    overflow: hidden;
    display: block;
    margin: auto;
    box-sizing: border-box;
    width: 26vw;
    margin-bottom: 1rem;
  }
  .album-img-wrap {
    width: 26vw;
    height: 26vw;
    cursor: pointer;
    animation: showImg 1.6s;
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
    /*display: block;*/
  }
  .album-img {
    width: 26vw;
  }
  .album-box p {
    font-size: 1rem;
    
  }
}


@keyframes showImg {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
<template>
  <div class="album-wrap">
    <div class="album" @click="showAlbum" v-show="!hide">
      <router-link v-show="routenochange" class="album-box" to="/photo">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/1.jpg">
        </div>
        <p>photo</p>
      </router-link>
      <router-link v-show="routenochange" class="album-box" to="/art">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/2.jpg">
        </div>
        <p>art</p>
      </router-link>
      <router-link v-show="routenochange" class="album-box" to="/project">
        <div class="album-img-wrap">
          <img class="album-img" src="../assets/navbar/3.jpg">
        </div>
        <p>project</p>
      </router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['hide', 'routenochange'],
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
  }

}
</script>