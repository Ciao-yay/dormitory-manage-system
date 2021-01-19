import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login/Login'
import Home from '@/pages/Home/Home'
import Jurisdiction from '@/pages/Home/Jurisdiction/Jurisdiction'
import Projects from '@/pages/Home/Projects/Projects'
import CheckIn from '@/pages/Home/CheckIn/CheckIn'
import Maintain from '@/pages/Home/Maintain/Maintain'

import '@/assets/styles/reset.css'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'projects',
          component: Projects,
          name: 'Projects',
        }, {
          path: 'jurisdiction',
          component: Jurisdiction
        }, {
          path: 'checkin',
          component: CheckIn
        }, {
          path: 'maintain',
          component: Maintain
        }
      ]
    }
  ]
})
