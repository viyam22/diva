<style type="text/css">
  html,body {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
<template>
  <div id="app">
    <navbar></navbar>
    <transition name="router">
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
import navbar from './components/navbar.vue';

export default {
  name: 'app',
  components: {
    navbar
  }
}
</script>

<style>

</style>
