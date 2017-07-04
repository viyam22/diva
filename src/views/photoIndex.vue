<style type="text/css">
  .photoIndex {
    width: 100%;
    height: 92vh;
    overflow: scroll;
  }
  .photoIndex > img {
    width: 100%;

  }
</style>
<template>
  <div class="photoIndex">
    <img v-for="n in +$route.params.length" v-lazy="'http://oqwhnnwix.bkt.clouddn.com/' + photosName + '/' + n + '.jpg'">
    <img v-for="n in +$route.params.length" v-lazy="'http://oqwhnnwix.bkt.clouddn.com/' + photosName + '/' + n + '.jpg'">
  </div>
</template>

<script type="text/javascript">
export default {
  created() {
    console.log(this.$route)
  },
  computed: {
    photosName() {
      return this.$route.params.name
    },
  }
}
</script>