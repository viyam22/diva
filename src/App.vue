<style type="text/css">
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
    <navbar></navbar>
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
    '$route'(to, from) {
      if (to.name !== from.name) {
        this.hide = true;
      }
    }
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
