import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Coconut from '@/components/Coconuts/Coconut'
import student from '@/components/Coconuts/student'
import mentor from '@/components/Coconuts/mentor'
import admin from '@/components/Coconuts/admin'

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
    },
    {
      path: '/student',
      name: 'student',
      component: student
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/mentor',
      name: 'mentor',
      component: mentor
    }
  ]
})
