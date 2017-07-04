<style scoped type="text/css">
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
  }
@media screen and (min-width:800px) {
  .main {
    background: #000 center/100% auto url('../assets/main-web.jpg') no-repeat;
  }
}

@media screen and (max-width:800px) {
  .main {
    background: #000 center/100% auto url('../assets/main-mobile.jpg') no-repeat;
  }
}
</style>
<template>
  <div>
    <div class="main"></div>
  </div>
</template>
<script type="text/javascript">
export default {
}
</script>