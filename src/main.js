import Vue from 'vue'
import App from './App.vue'
import './plugins/fontawesome'
import './../node_modules/bulma/css/bulma.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
