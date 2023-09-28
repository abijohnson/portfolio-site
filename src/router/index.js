import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import About from '../pages/About.vue'
import ExperienceAndProjects from '@/pages/ExperienceAndProjects.vue'
import Articles from "@/pages/Articles.vue"
import VueVSNuxt from '@/pages/VueVSNuxt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/experience-and-projects',
      name: 'experience-and-projects',
      component: ExperienceAndProjects
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
    },
    {
      path: '/vue-vs-nuxt',
      name: 'vue-vs-nuxt',
      component: VueVSNuxt
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router
