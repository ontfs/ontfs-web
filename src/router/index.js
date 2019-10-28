import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Download from '../components/download'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/download',
    name: 'Download',
    component: Download
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: "history",
  routes
})

export default router
