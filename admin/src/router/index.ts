import checkLogin from '@/middleware/auth';
// import checkLogin from '@/middleware/auth';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Auth from '@/auth';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Auth.vue'),
    beforeEnter: checkLogin
  },
  // {
  //   path: '/Test',
  //   name: 'Test',
  //   component: () => import('@/views/Test.vue')
  // },
  {
    path: '/dash-board',
    name: 'DashBoard',
    // beforeEnter: checkLogin,
    component: () => import('../views/DashBoard.vue'),
    beforeEnter: Auth.routeGuard,
    children: [
      {
        // when /dash-board/user is matched
        path: 'user',
        component: () => import('@/components/UserComponent.vue')
      },
      {
        // when /dash-board/chat-bot is matched
        path: 'chat-bot',
        component: () => import('@/components/ChatBot.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
