<style scoped type="text/css">
  .main {
    width: 100%;
    height: 92vh;
    overflow: scroll;
  }
@media screen and (min-width:800px) {
  .main > div {
    width: 100%;
    padding-bottom: 66%;
    background: #000 center top/100% auto url('../assets/main-web.jpg') no-repeat;
  }
}

@media screen and (max-width:800px) {
  .main > div {
    width: 100%;
    padding-bottom: 176%;
    background: #000 top/100% auto url('../assets/main-mobile.jpg') no-repeat;
  }
}
</style>
<template>
  <div>
    <div class="main">
      <div @click="showAlbum"></div>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
  },
}
</script>