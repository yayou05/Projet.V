import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);
  const login = (userData) => { user.value = userData; };
  const logout = () => { user.value = null; };
  return { user, login, logout };
});

export const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  const addToCart = (item) => { cart.value.push(item); };
  const removeFromCart = (index) => { cart.value.splice(index, 1); };
  return { cart, addToCart, removeFromCart };
});