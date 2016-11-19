import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import routerMap from './global/reouter'
import vueResource from 'vue-resource'

Vue.use(vueRouter);
Vue.use(vueResource);

//  创建路由实例配置
const router = new vueRouter({
  routes: routerMap,
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App }
})
