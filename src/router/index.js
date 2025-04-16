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
      path: '/sponsor',
      name: 'sponsor',
      component: () => import('../views/SponsorView.vue')
    },
    {
      path: '/updates',
      name: 'updates',
      component: () => import('../views/UpdatesView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
    // Redirect from /dist to root
    {
      path: '/dist',
      redirect: '/'
    },
    // Redirect from /dist/anything to the proper route
    {
      path: '/dist/:pathMatch(.*)*',
      redirect: to => {
        const { params } = to
        return `/${params.pathMatch.join('/')}`
      }
    },
    // 404 pagina
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 