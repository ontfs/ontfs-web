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
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
