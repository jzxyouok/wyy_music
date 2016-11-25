import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import routerMap from './global/router'
import vueResource from 'vue-resource'
import Vuikit from 'vuikit'
import filter from './global/filter'
import mixin from './global/mixin'
import Vuex from 'vuex'
import storeOption from './global/store'

Vue.use(Vuex);
Vue.use(vueRouter);
Vue.use(vueResource);
Vue.use(Vuikit);

//  使用混合对象
Vue.mixin(mixin);

Vue.http.options.root = process.env.NODE_ENV !== 'production' ?  'api' : '';
//  请求中断器
Vue.http.interceptors.push((req, next) => {
  // 解析请求返回体
  next((response) => {
    // modify response
    response.data = JSON.parse( response.data );
  });
});
//  创建路由实例配置
const router = new vueRouter({
  routes: routerMap,
})

//  状态管理
const store = new Vuex.Store(storeOption);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
})
