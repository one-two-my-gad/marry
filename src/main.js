import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

wx.cloud.init({
  env: 'test1-4gqpf0yy03d701f7'
})

const app = new Vue(App)
app.$mount()
