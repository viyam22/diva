<style scoped type="text/css">
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
  }
  .main-bg {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: -1;
  }
</style>
<template>
  <div>
    <navbar></navbar>
    <div class="main">
      <img class="main-bg" src="../assets/main-web.jpg">
    </div>
  </div>
</template>
<script type="text/javascript">
import navbar from '../components/navbar.vue';
export default {
  components: {
    navbar
  }
}
</script>