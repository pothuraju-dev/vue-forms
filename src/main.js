import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router"

import 'bootstrap/dist/css/bootstrap.min.css'

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
