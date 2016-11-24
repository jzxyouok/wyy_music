/**
 * Created by guojingfeng on 2016/11/19.
 */
const routerMap = [
  { path: '/index',
    component: require('../components/index.vue'),
    children: [
      {
        path: 'discover',// 发现好音乐
        component: require('../components/index/discover.vue')
      },
      {
        path: 'music',//  我的音乐
        component: require('../components/index/music.vue')
      },
      {
        path: 'friends',//  好友和动态
        component: require('../components/index/friends.vue')
      },
    ],
    redirect: '/index/discover',//  默认显示
  },
  {
    path: '/player',// 音频播放界面
    component: require('../components/player/player.vue')
  },
  {
    path: '/recommendedDaily',// 每日推荐列表
    component: require('../components/list/recommendedDaily.vue')
  },
  {
    path: '/kindOfMusic',// 公共歌单列表
    component: require('../components/list/kindOfMusic.vue')
  },
    { path: '*',
   redirect: '/index'
   },
];
export default routerMap
