import Vue from 'vue'
import Router from 'vue-router'

import Recommend from './views/recommend'
import Singer from './views/singer'
import Rank from './views/rank'
import Search from './views/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend
    }, {
      path: '/singer',
      component: Singer
    }, {
      path: '/rank',
      component: Rank
    }, {
      path: '/search',
      component: Search
    }
  ]
})
