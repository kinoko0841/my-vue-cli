import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Coconut from '@/components/Coconuts/Coconut'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/',
      name: 'Coconut',
      component: Coconut
    }
  ]
})
