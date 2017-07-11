<style type="text/css">
@font-face {
  font-family: DINBold;
  src: url('./assets/font/DINBold.woff');
}
html {
  font-size: 62.5%;
}
html,body {
  font-family: DINBold, Futura, MeiHei, Helvetica, Arial, sans-serif;
  margin: 0;
  height: 100%;
  width: 100%;
  /*overflow: hidden;*/
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

a {
  text-decoration: none;
  color: #000;
}
.wrap {
  will-change: transform;
  transform: translateZ(0);
  padding-top: 8vh;
}
a {
  text-decoration: none;
  color: #000;
}
div,a,img {
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select:none;
}
.wrap {
  will-change: transform;
  transform: translateZ(0);
  padding-top: 8vh;
}
.hide {
  animation: dropdown 1.4s;
  transform: translateY(-92vh);
}
.show {
  animation: rollback 1.4s;
  transform: translateY(0);
}

@keyframes dropdown {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-92vh);
  }
}
@keyframes rollback{
  0% {
    transform: translateY(-92vh);
  }
  100% {
    transform: translateY(0);
  }
}

</style>
<template>
  <div id="app">
    <navbar :hide="hide"></navbar>
    <div class="wrap" :class="{'hide':hide, 'show': !hide}">
      <album :routenochange="routenochange" :hide="hide"></album>
      <router-view :key="$route.path"></router-view>
    </div>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';
import album from './components/album.vue';

export default {
  name: 'app',
  data() {
    return {
      hide : true,
      routenochange: true
    }
  },
  watch: {
    // '$route'(to, from) {
    //   console.log(from.name, to.name, this.routenochange);
    //   if (to.name !== from.name) {
    //     this.routenochange = false;
    //     setTimeout(() => {
    //         this.routenochange = true;
    //         console.log('fuck' ,from.name, to.name, this.routenochange);

    //     }, 1000);
    //     console.log('fuck2' ,from.name, to.name, this.routenochange);
    //   }
    // }
  },
  created() {
    BUS.$on('showAlbum',() => {
      this.hide = !this.hide;
    });
    BUS.$on('routeChange', (data) => {
      this.routenochange = data;
    })
  },
  components: {
    navbar,
    album
  },

}
</script>

<style>

</style>
