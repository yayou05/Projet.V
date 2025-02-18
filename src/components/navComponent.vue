<template>
  <h1>Bienvenue chez HomeMade</h1>
  <nav>
    <router-link to="/">Accueil</router-link>
    <router-link to="/chefs">Cuisiniers</router-link>
    <router-link to="/panier">Panier</router-link>
    <router-link to ="/auth">Connexion</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scoped>
  nav {
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    background-color: #333;
    padding: 15px 20px;
    border-radius: 5px;
  }

  nav a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    padding: 8px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }

  nav a:hover {
    background-color: #555;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }
</style>
