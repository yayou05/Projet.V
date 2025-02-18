<template>
  <div class="chef-page">
    <NavBar />
    <div class="chef-info">
      <h1>{{ chef.name }}</h1>
      <p class="specialty">Spécialité: {{ chef.specialty }}</p>
    </div>
    <div class="dish-list">
      <div v-for="dish in chef.dishes" :key="dish.id" class="dish-card">
        <h2>{{ dish.name }}</h2>
        <p class="description">{{ dish.description }}</p>
        <p class="price">{{ dish.price }} €</p>
        <div class="rating">
          <span v-for="n in 5" :key="n" :class="{'filled': n <= dish.rating}">★</span>
        </div>
        <button class="add-to-cart" @click="addToCart(dish)">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .chef-page {
    background-color: #fff;
    padding: 20px;
    font-family: Arial, sans-serif;
  }

  .chef-info {
    text-align: center;
    margin-bottom: 20px;
  }

  .chef-info h1 {
    font-size: 2rem;
    color: #333;
  }

  .specialty {
    font-size: 1.2rem;
    color: #666;
  }

  .dish-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .dish-card {
    background-color: #f9f9f9;
    border-radius: 8px;
    padding: 20px;
    width: 250px;
    text-align: center;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
  }

  .dish-card:hover {
    transform: scale(1.05);
  }

  .dish-card h2 {
    font-size: 1.4rem;
    color: #333;
  }

  .description {
    font-size: 1rem;
    color: #777;
    margin: 10px 0;
  }

  .price {
    font-size: 1.1rem;
    color: #333;
    font-weight: bold;
  }

  .rating {
    margin: 10px 0;
  }

  .rating span {
    color: #ddd;
  }

  .rating .filled {
    color: #ff9900;
  }

  .add-to-cart {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;
  }

  .add-to-cart:hover {
    background-color: #555;
  }
</style>


<script>
import DishCard from '../components/platComponent.vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../store/index.js';

export default {
  components: { DishCard },
  data() {
  return {
    chef: {},
    chefs: [
      { id: 1, name: 'Chef Kwame', specialty: 'Fufu et Sauce Gombo', dishes: [
        { id: 1, name: 'Fufu avec Gombo', price: 5, description: 'Fufu servi avec une sauce gombo épicée', rating: 4.5 },
        { id: 2, name: 'Sauce Gombo et Poisson', price: 7, description: 'Poisson accompagné d\'une sauce gombo savoureuse', rating: 4.7 }
      ]},
      { id: 2, name: 'Chef Akouvi', specialty: 'Aklui et Poisson', dishes: [
        { id: 1, name: 'Aklui avec Poisson', price: 6, description: 'Aklui accompagné de poisson frit et sauce', rating: 4.6 },
        { id: 2, name: 'Poisson Grillé avec Sauce', price: 8, description: 'Poisson grillé servi avec une sauce épicée', rating: 4.8 }
      ]},
      { id: 3, name: 'Chef Koffi', specialty: 'Eba et Sauce Arachide', dishes: [
        { id: 1, name: 'Eba avec Sauce Arachide', price: 5, description: 'Eba accompagné de sauce arachide crémeuse', rating: 4.3 },
        { id: 2, name: 'Eba et Viande Grillée', price: 7, description: 'Eba avec viande grillée et sauce', rating: 4.4 }
      ]},
      { id: 4, name: 'Chef Yawa', specialty: 'Kpalikpo et Viande', dishes: [
        { id: 1, name: 'Kpalikpo avec Viande', price: 7, description: 'Kpalikpo servi avec une viande tendre', rating: 4.5 },
        { id: 2, name: 'Kpalikpo et Sauce d\'Arachide', price: 8, description: 'Kpalikpo avec une sauce d\'arachide savoureuse', rating: 4.6 }
      ]},
      { id: 5, name: 'Chef Dédé', specialty: 'Légumes Braisés et Riz', dishes: [
        { id: 1, name: 'Riz et Légumes Braisés', price: 6, description: 'Riz accompagné de légumes braisés frais', rating: 4.2 },
        { id: 2, name: 'Riz au Poulet', price: 7, description: 'Riz avec du poulet grillé et sauce épicée', rating: 4.7 }
      ]},
      { id: 6, name: 'Chef Tessi', specialty: 'Tchékli et Poulet Grillé', dishes: [
        { id: 1, name: 'Tchékli avec Poulet Grillé', price: 8, description: 'Tchékli accompagné de poulet grillé', rating: 4.8 },
        { id: 2, name: 'Tchékli et Sauce Tomate', price: 7, description: 'Tchékli servi avec une sauce tomate riche', rating: 4.6 }
      ]}
    ]
  };
},
  methods: {
    addToCart(dish) {
      useCartStore().addToCart(dish);
    }
  },
  computed: {
    chef() {
      const route = useRoute();
      return this.chefs.find(chef => chef.id === parseInt(route.params.id));
    }
  }
};
</script>

<style scoped>
  div {
    padding: 20px;
    background-color: #f9f9f9;
  }

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
  }

  .dish-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    margin-top: 20px;
  }

  .dish-card {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .dish-card h2 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  .dish-card p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 15px;
  }

  .dish-card .price {
    font-size: 1.2rem;
    color: #333;
    font-weight: bold;
  }

  .button {
    background-color: #333;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .button:hover {
    background-color: #555;
  }
</style>
