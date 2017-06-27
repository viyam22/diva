<style type="text/css">
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
    height: 50px;
  }
  .link {
    color: #000;
    text-transform: uppercase;
    font-weight: 700;
    text-decoration: none;
  }
  .switch {
    font-size: 1.2rem;
  }
  .info {
    font-size: 1rem;
    position: absolute;
    /*top: 1%;*/
    right: 2%;
  }
  .album {
    height: 40rem;
    overflow: hidden;
  }
  .album-container {
    box-sizing: border-box;
    margin: auto;
    display: table;
    /*position: absolute;
    left: 50%;
    top: 50%;*/
    transform: translateY(50%);
  }
  .album-box {
    float: left;
    text-align: center;
    margin: 0 2rem;
    line-height: 7rem;
    font-size: 1.8rem;
  }
  .album-img {
    height: 12rem;
    width: 12rem;
    display: block;
  }
</style>
<template>
  <div>
    <div class="navbar">
      <!--<router-link class="switch link" to="/" @click="switchFun">{{navTitle}}</router-link>-->
      <a class="switch link" @click="switchFun">{{navTitle}}</a>
      <router-link class="info link" to="/info"><p @click="closeAlbum">info</p></router-link>
    </div>
    
    <div class="album" v-if="hasAlbum">
      <div class="album-container" @click="closeAlbum">
        <router-link class="album-box" to="/photoList/photos">
          <img class="album-img" src="../assets/info.jpg">
          PHOTO
        </router-link>
        <router-link class="album-box" to="/photoList">
          <img class="album-img" src="../assets/info.jpg">
          PHOTO
        </router-link>
        <router-link class="album-box" to="/photoList">
          <img class="album-img" src="../assets/info.jpg">
          PHOTO
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
        var _this = this;
        _this.hasAlbum = _this.navTitle === '-----' ? true : false;
        _this.navTitle = _this.navTitle === '-----' ? 'CLOSE' : '-----';
        console.log(_this.hasAlbum);
      },
      closeAlbum() {
        var _this = this;
        _this.hasAlbum = false;
        _this.navTitle = "-----";
      }
    }
  }
</script>