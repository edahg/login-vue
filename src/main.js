import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
const base = axios.create({
  baseURL: "http://localhost:3000"
});
Vue.prototype.$http = base;

const base2 = axios.create({
  baseURL: "https://glacial-everglades-74306.herokuapp.com"
});
Vue.prototype.$http2 = base2;



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
