<template>
  <div class="cart-page">
    <NavBar />
    <h1>Votre Panier</h1>
    <div v-if="cart.length === 0" class="empty-cart">
      <p>Votre panier est vide.</p>
    </div>
    <div v-for="(item, index) in cart" :key="index" class="cart-item">
      <div class="item-info">
        <div>
          <p class="item-name">{{ item.name }}</p>
          <p class="item-price">{{ item.price }} €</p>
          <p class="item-quantity">Quantité: {{ item.quantity }}</p>
        </div>
      </div>
      <button class="remove-btn" @click="removeFromCart(index)">Retirer</button>
    </div>
    <div v-if="cart.length > 0" class="total">
      <p>Total : {{ totalPrice }} €</p>
      <button class="checkout-btn">Passer à la caisse</button>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../store/index.js';
export default {
  computed: {
    cart() {
      return useCartStore().cart;
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    }
  },
  methods: {
    removeFromCart(index) {
      useCartStore().removeFromCart(index);
    }
  }
};
</script>

<style scoped>
.cart-page {
  font-family: 'Helvetica Neue', sans-serif;
  background-color: #f7f7f7;
  padding: 20px;
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  font-size: 2.2rem;
  color: #222;
  margin-bottom: 30px;
}

.empty-cart {
  text-align: center;
  font-size: 1.1rem;
  color: #888;
  margin-top: 50px;
}

.cart-item {
  background-color: #fff;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
}

.item-info {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}

.item-name {
  font-size: 1.3rem;
  color: #333;
}

.item-price,
.item-quantity {
  font-size: 1.1rem;
  color: #555;
}

.remove-btn {
  background-color: black;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  align-self: flex-start; 
  margin-top: 10px;
}

.remove-btn:hover {
  background-color: #e53935;
}

.total {
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 40px;
  color: #333;
}

.checkout-btn {
  background-color: #333;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 15px;
}

.checkout-btn:hover {
  background-color: #444;
}
</style>
