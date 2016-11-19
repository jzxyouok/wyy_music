/**
 * Created by guojingfeng on 2016/11/19.
 */
const routerMap = [
  { path: '/index',
    component: require('../components/index.vue')
  },
  { path: '*',
    redirect: '/index'
  },
];
export default routerMap
