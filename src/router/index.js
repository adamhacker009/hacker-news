import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import NewsItemPage from '@/pages/NewsItemPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/news/:id',
      component: NewsItemPage,
      name: 'news',
    },
  ],
})

export default router
