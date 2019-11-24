import Vue from 'vue'
import Router from 'vue-router'
import Table from './components/table.vue'
import About from './components/about.vue'
import CrudTable from './components/crud-table.vue'
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
      path: '/crud-table',
      name: 'crud-table',
      component: CrudTable
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