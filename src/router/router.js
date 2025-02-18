import { createRouter, createWebHistory } from 'vue-router';

import Chefs from '../pages/ListChef.vue';
import Detail from '../pages/detail.vue';
import Auth from '../pages/auth.vue';
import Panier from '../pages/panier.vue';
import Home from '../pages/home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/chefs', component: Chefs },
  { path: '/chefs/:id', component: Detail },
  { path: '/auth', component: Auth },
  { path: '/panier', component: Panier }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;