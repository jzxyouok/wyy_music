/**
 * Created by guojingfeng on 2016/11/19.
 */
const routerMap = [
  { path: '/index',
    component: require('../components/index.vue'),
  },
  {
    path: '/player',// 音频播放界面
    component: require('../components/player/player.vue')
  },
  {
    path: '*',
    redirect: '/index'
   },
];
export default routerMap
