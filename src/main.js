import Vue from 'vue'
import App from '@/App'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VeeValidate from 'vee-validate'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
 
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VeeValidate)

Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
