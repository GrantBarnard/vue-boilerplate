import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // ...other routes...
  {
    path: '/blog-articles/:slug',
    name: 'BlogArticle',
    props: true,
    component: (route) => import(`../views/blog-articles/${route.params.slug}.vue`)
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
