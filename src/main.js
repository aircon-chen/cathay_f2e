import Vue from 'vue'
import App from './App.vue'
import store from './store'
import 'bootstrap'; // Import js file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import css file
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
