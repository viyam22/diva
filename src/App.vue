<style type="text/css">
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
