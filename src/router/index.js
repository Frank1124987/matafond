import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/home/:school',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    redirect: {path: '/home/nycu'}
  },
  { path: '/:pathMatch(.*)*', 
  name: 'NotFound', 
  component: () => import('../views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
