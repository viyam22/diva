import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import photoList from '@/views/photoList.vue'
import info from '@/views/info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, {
      path: '/photoList',
      name: 'photoList',
      component: photoList
    }, {
      path: '/info',
      name: 'info',
      component: info
    }
  ]
})
