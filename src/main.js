import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from "./router"

import 'bootstrap/dist/css/bootstrap.min.css'
import VueMask from "v-mask"
import Vuelidate from 'vuelidate'

Vue.use(VueMask)
Vue.use(Vuelidate)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
