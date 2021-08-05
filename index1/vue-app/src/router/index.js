import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import live from '../views/live.vue'
import vip from '../views/vip.vue'
import video from '../views/video.vue'
import market from '../views/market.vue'
import my from '../views/my.vue'


Vue.use(VueRouter)

const routes = [
  {path: '/',name: 'Home',component: Home},
  {path: '/live',name: 'live',component: live},
  {path: '/vip',name: 'vip',component: vip},
  {path: '/video',name: 'video',component: video},
  {path: '/market',name: 'market',component: market},
  {path: '/my',name: 'my',component: my},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
