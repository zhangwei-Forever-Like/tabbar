import Vue from 'vue'
import App from './App'
import router from './router/router.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
