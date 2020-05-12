import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/index.vue'
import Error404 from '../components/errors/404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/demo',
    name: 'Demo',
    // /* webpackChunkName: "demo" 添加这个注释之后，打包时方便找到对应的页面而非数字序号*/
    component: () => import(/* webpackChunkName: "demo" */ '../views/demo.vue')
  },
  {
    path: '/404',
    component: () => Error404,
    hidden: true
  },
  // {
  //   path: '*',
  //   redirect: '/404',
  //   hidden: true
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
