import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'
import photoList from '@/views/photoList.vue'
import info from '@/views/info.vue'
import photoIndex from '@/views/photoIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    }, 
    {
      path: '/photo',
      name: 'photo',
      component: photoList
    }, 
    {
      path: '/art',
      name: 'art',
      component: photoList
    }, 
    {
      path: '/project',
      name: 'project',
      component: photoList
    }, 
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/photoindex/:name/:length',
      name: 'photoindex',
      component: photoIndex
    }
  ]
})
