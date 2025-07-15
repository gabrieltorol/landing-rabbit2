import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/que-es-rpa',
      name: 'about-rpa',
      component: () => import('../views/AboutRPAView.vue')
    },
    {
      path: '/capacitacion',
      name: 'courses',
      component: () => import('../views/CoursesView.vue')
    },
    {
      path: '/recursos',
      name: 'resources',
      component: () => import('../views/ResourcesView.vue')
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/soluciones',
      name: 'soluciones',
      component: () => import('../views/SolucionesView.vue')
    }
  ]
})

export default router
