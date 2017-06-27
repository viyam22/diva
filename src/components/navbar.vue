<style type="text/css" scoped>
  .navbar {
    box-shadow: 0 1px 5px rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 8vh;
  }
  .link {
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
  }
  .switch {
    font-size: 1.2rem;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .info {
    font-size: 1rem;
    position: absolute;
    /*top: 1%;*/
    right: 2%;
  }
  .album {
    height: 0;
    width: 100%;
    overflow: hidden;
  }
  .album-container {
    width: 100%;
    box-sizing: border-box;
    margin: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .album-box {
    text-align: center;
    line-height: 7rem;
    font-size: 1.8rem;
  }
  .album-img-wrap {
    width: 24vw;
    height: 24vw;
    background-color: rgba(0,0,0, 0.9);
    box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.19);
    animation: showImg 2s;

  }
  .album-img {
    width: 100%;
    height: 100%;
    display: block;
    opacity: 0.1;
    transition: opacity 1.5s

  }
  .album-img:hover {
    opacity: 0.6;
  }
  .album-box span {
    text-transform: uppercase;
    padding-top: 1.5em;
    font-size: 24px;
    text-align: center;
    font-weight: 700;
    animation: showImg 3s;
  }
  .show {
    animation: dropdown 1.5s;
    opacity: 1;
    position: relative;
    height: 92vh;
  }
  .hide {
    animation: rollback 2s;
  }
  @keyframes dropdown {
    0% {
      height: 0vh;
    }
    100% {
      height: 92vh;
    }
  }
  @keyframes rollback{
    0% {
      height: 92vh;
    }
    100% {
      height: 0vh;
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
      opacity: 1;
    }
  }

</style>
<template>
  <div>
    <div class="navbar" @click="switchFun">
      <!--<router-link class="switch link" to="/" @click="switchFun">{{navTitle}}</router-link>-->
      <a class="switch link">{{navTitle}}</a>
      <router-link class="info link" to="/info">info</router-link>
    </div>
    
    <div class="album" :class="{'show': hasAlbum, 'hide': !hasAlbum}">
      <div class="album-container" @click="closeAlbum" v-if="hasAlbum">
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
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      navTitle: '-----',
      hasAlbum: false,
    }
  },

  methods: {
    switchFun() {
      this.hasAlbum = this.navTitle === '-----' ? true : false;
      this.navTitle = this.navTitle === '-----' ? 'CLOSE' : '-----';
      console.log(this.hasAlbum);
    },
    closeAlbum() {
      console.log(111);
      // this.hasAlbum = false;
      // this.navTitle = "-----";
    }
  }
}
</script>