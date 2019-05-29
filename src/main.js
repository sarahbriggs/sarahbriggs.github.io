import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
import App from './App'
import Landing from './components/Landing'

Vue.config.productionTip = false 
Vue.component('Landing', Landing)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
