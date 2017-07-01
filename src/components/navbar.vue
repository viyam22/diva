<style type="text/css" scoped>
  .navbar {
    box-shadow: 0 1px 5px rgba(0,0,0,.1), inset 0 0 0 rgba(0,0,0,.1);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 8vh;
    position: absolute;
    z-index: 100;
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
</style>
<template>
  <div>
    <div class="navbar" @click="showAlbum">
      <a class="switch link">MENU</a>
      <router-link class="info link" to="/info">info</router-link>
    </div>
  </div>
</template>
<script type="text/javascript">
export default {
  methods: {
    showAlbum() {
      BUS.$emit('showAlbum');
    },
  }
}
</script>