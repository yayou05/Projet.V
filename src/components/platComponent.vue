<template>
    <div class="dish-card">
      <img :src="dish.image" :alt="dish.name" />
      <h3>{{ dish.name }}</h3>
      <p>{{ dish.price }} €</p>
      <button @click="$emit('add-to-cart', dish)">Ajouter au panier</button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['dish']
  };
  </script>
  
  <style scoped>
  .dish-card { border: 1px solid #ddd; padding: 10px; text-align: center; }
  </style>