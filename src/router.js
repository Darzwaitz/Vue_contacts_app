import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: 'coaches' }, // redirect to this page when no page chosen
    { path: '/coaches', component: null },
    {
      path: '/coaches/:id',
      component: null,
      children: [{ path: 'contact', component: null }],
    },
    { path: '/register', component: null },
    { path: '/requests', component: null },
    { path: '/:notFound(.*)', component: null }, // NB notFound can be any name
  ],
});

export default router;
