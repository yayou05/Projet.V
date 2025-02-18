<template>
  <div class="home-container">
    <NavBar />
    <div class="content">
      <h1>Bienvenue sur notre Application de Vente de Plats à Emporter</h1>
      <p class="description">Découvrez les délices de la cuisine togolaise préparés par des cuisiniers locaux. Commandez dès maintenant pour une expérience culinaire authentique!</p>
      <router-link to="/chefs">
  <button class="cta-button">Liste de nos chefs</button>
</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
  }
</script>

<style scoped>
  .home-container {
    background-image: url('https://example.com/your-image.jpg'); 
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  .content {
    text-align: center;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 30px;
    border-radius: 10px;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  .description {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  .cta-button {
    padding: 10px 20px;
    background-color: #3f3e3e;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 5px;
  }

  .cta-button:hover {
    background-color: #000000;
  }
</style>
