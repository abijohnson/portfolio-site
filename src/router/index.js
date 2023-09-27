import { createRouter, createWebHistory } from 'vue-router'
import Index from '../pages/index.vue'
import About from '../pages/About.vue'
import ExperienceAndProjects from '@/pages/ExperienceAndProjects.vue'
import Articles from "@/pages/Articles.vue"
import NuxtVsVue from '@/pages/NuxtVsVue.vue'

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
      path: '/nuxt-vs-vue',
      name: 'nuxt-vs-vue',
      component: NuxtVsVue
    },
  ]
})

export default router
