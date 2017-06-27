<style type="text/css">
#app {
  overflow: hidden;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
<template>
  <div id="app">
    <transition name="router">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>

</style>
