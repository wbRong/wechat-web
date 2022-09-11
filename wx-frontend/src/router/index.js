import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  linkActiveClass: 'active',
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../layout/Layout.vue'),
      redirect: '/chat',
      children: [
        {
          name: 'Friends',
          path: 'friends',
          component: () => import('../views/Friends.vue')
        },
        {
          name: 'Chat',
          path: 'chat',
          component: () => import('../views/Chat.vue')
        },
        {
          path: 'collection',
          component: () => import('../views/Collection.vue')
        }
      ]
    },
    {
      name: 'Login',
      path: '/login',
      component: () => import('../views/Login.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      component: () => import("../views/404.vue")
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  } else {
    const user = localStorage.getItem('user')
    if (user) {
      next()
    } else {
      // alert('请先登录')
      next('/login')
    }
  }
  
})

export default router
