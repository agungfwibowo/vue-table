import Vue from 'vue'
import Router from 'vue-router'
import Table from './components/table.vue'
import About from './components/about.vue'
import Index from './components/index.vue'
import Create from './components/create.vue'
import Patch from './components/patch.vue'
 
Vue.use(Router);

export default new Router ({
  routes:[
    {
      path: '/',
      name: 'table',
      component: Table
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    {
      path: '/patch/:id',
      name: 'patch',
      component: Patch
    }
  ]
})