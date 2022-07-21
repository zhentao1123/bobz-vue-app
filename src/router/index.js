import { createRouter, createWebHistory } from 'vue-router';

import Layout from '@/views/layout/Layout.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/demo', component: ()=>import('@/views/demo/SlotDemo.vue')},
    {
      path: '/login',
      component: () => import('@/views/login/index.vue'),
      hidden: true,
    },
    {
      path: '',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index.vue'),
        },
      ],
    },
  ],
});
