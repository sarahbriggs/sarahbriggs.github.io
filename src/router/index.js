import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.10/dist/vue.esm.browser.js'
import Router from 'https://unpkg.com/vue-router/dist/vue-router.js'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Landing'
      }
    },
    {
      path: '/slideshow',
      name: 'Slideshow',
      component: Slideshow
    }
  ]
})
