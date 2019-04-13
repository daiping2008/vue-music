import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'
import './assets/styles/global.scss'
import './assets/styles/iconfont.scss'

Vue.use(VueLazyload, {
  err: './assets/images/error.png',
  loading: './assets/images/loading.png'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
