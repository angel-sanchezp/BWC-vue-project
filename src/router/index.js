import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BWApp from '../views/BWApp.vue'
import BWDetails from '../views/BWDetails.vue'
import BWPay from '../views/BWPay.vue'
import BWMoves from '../views/BWMoves.vue'
import BWContactEdit from '../views/BWContactEdit.vue'
import BWCharts from '../views/BWCharts.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/contact/edit/:id?',
      name: 'BWContactEdit',
      component: BWContactEdit
    },
    {
      path: '/moves',
      name: 'BWMoves',
      component: BWMoves
    },
    {
      path: '/graphs',
      name: 'BWCharts',
      component: BWCharts
    },
    {
      path: '/pay/:id',
      name: 'BWPay',
      component: BWPay
    },
    {
      path: '/contact/:id',
      name: 'BWDetails',
      component: BWDetails
    },
    {
      path: '/bitwall',
      name: 'BWApp',
      component: BWApp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
