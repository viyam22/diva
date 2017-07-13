<style scoped type="text/css">
  .main {
    width: 100%;
    height: 92vh;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
    position: relative;
    background-color: #000;
  }
  .main-text-wrap {
    width: 100%;
    height: 100%;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
    font-weight: lighter;
    font-size: 1rem;
  }
  @media screen and (min-width:800px) {
    .main-bg {
      width: 100%;
      padding-bottom: 66%;
      opacity: 1;
      transition: all 2s;
      background: #000 center top/100% auto url('../assets/main-web.jpg') no-repeat;
    }
    .main-op {
      opacity: 0;
    }
    .main-text-wrap {
      text-align: center;
      font-size: 1.8rem;

    }
  }

  @media screen and (max-width:800px) {
    .main-bg {
      width: 100%;
      padding-bottom: 176%;
      opacity: 1;
      transition: all 2.4s;
      background: #000 top/100% auto url('../assets/main-mobile.jpg') no-repeat;

    }
    .main-op {
      opacity: 0;
    }
    .main-text-wrap {
      opacity: 1;
      text-align: center;
      font-size: 1.3rem;
    }
  }
  .main-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .to-center {
    display: block;
    opacity: 1;
    animation: floatCenter 1.4s;
  }
  @keyframes floatCenter {
    0% {
      top: 40%;
      opacity: 0;
    } 
    100% {
      top: 50%;
      opacity: 1;
    }
  }

</style>
<template>
  <div>
    <div class="main">
      <div class="main-bg" :class="{'main-op': showText}" @click="showText=!showText">
      </div>
      <div class="main-text-wrap" :class="{'to-center': showText}" @click.stop.capture="showAlbum">
        <div class="main-text">
          <p>Time flies and my roles may change.</p>
          <p>Yet my life time goal will always be the same</p>
          <p>All I wanna do is to witness, record and feel</p>
          <p>that every single moment in your life is real</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  data() {
    return {
      showText: false
    }
  },
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
      setTimeout(()=>{
        this.showText = !this.showText;
      }, 1500);
    }
  },
}
</script>