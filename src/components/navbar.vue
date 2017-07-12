<style type="text/css" scoped>
  .navbar {
    font-family: DINBold, Futura, MeiHei, Helvetica, Arial, sans-serif;
    box-shadow: 0 1px 5px rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vh;
    background-color: #fff;
    position: absolute;
    z-index: 100; 
  }

  @media screen and (min-width:800px) {
    .switch {
      font-size: 1.7rem !important;
    }
  }
  .navbar a {
    height: 8vh;
    line-height: 8vh;
    color: #000;
    text-transform: uppercase;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
  }
  .switch {
    
    font-size: 1.2rem;
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .index {
    font-size: 1rem;
    position: absolute;
    left: 2%;
  }
  .info {
    font-size: 1rem;
    position: absolute;
    /*top: 1%;*/
    right: 2%;
  }
</style>
<template>
  <div>
    <div class="navbar"  @click="showAlbum">
      <a class="index" @click="toIndex">HOME</a>
      <a class="switch">MENU</a>
      <a class="info" @click="toInfo">info</a>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  props: ['hide'],
  // watch:{
  //   '$route'(to, from) {
  //     if (to.name === 'info' && to.name !== from.name) {
  //       setTimeout(function() {
  //       }, 1000);
  //     }
  //   }
  // },
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
    toIndex() {
      if (this.$route.name === 'index') return;
      if (this.hide === false) {
        this.$router.push('');
      } else {
        BUS.$emit('routeChange', false);
        setTimeout(() => {
          BUS.$emit('routeChange', true);
          this.$router.push({name: 'index'});
          BUS.$emit('showAlbum');
        }, 1400);
      }      
    },
    toInfo() {
      if (this.$route.name === 'info') return;
      if (this.hide === false) {
        this.$router.push({name: 'info'});

      } else {
        BUS.$emit('routeChange', false);
        setTimeout(() => {
          BUS.$emit('routeChange', true);
          this.$router.push({name: 'info'});
          BUS.$emit('showAlbum');
        }, 1400);
      }
    }
  }
}
</script>