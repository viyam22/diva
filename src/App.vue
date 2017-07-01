<style type="text/css">
/*
  * 屏幕高大于500px用以下css
  */

  @media screen and (min-height:501px) {
    #app {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
  }

/*  
  * 屏幕高小于500px用以下css
  */

  @media screen and (max-height:500px) {
    #app {
      width: 100%;
      height: 100%;
    }
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
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
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
  animation: dropdown 1s;
  transform: translateY(-92vh);
}
.show {
  animation: rollback 1s;
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
      <album :hide="hide"></album>
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
    }
  },
  watch: {
  },
  created() {
    BUS.$on('showAlbum',() => {
      this.hide = !this.hide;
    });
  },
  components: {
    navbar,
    album
  },

}
</script>

<style>

</style>
