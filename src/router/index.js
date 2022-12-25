import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyCats from '@/views/MyCats.vue';
import NewCat from '@/views/NewCat.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/cats',
    redirect: '/cats/view',
  },
  {
    path: '/cats/view',
    name: 'MyCats',
    component: MyCats
  },
  {
    path: '/cats/new',
    name: 'NewCat',
    component: NewCat
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
