<template>
  <div>
    <NavBar />
    <h1>Nos Cuisiniers Togolais</h1>
    <div v-for="chef in chefs" :key="chef.id">
      <ChefCard :chef="chef" />
    </div>
  </div>
</template>

<script>
import ChefCard from '../components/chefComponent.vue';
export default {
  components: { ChefCard },
  data() {
    return {
      chefs: [
        { id: 1, name: 'Chef Kwame', specialty: 'Fufu et Sauce Gombo' },
        { id: 2, name: 'Chef Akouvi', specialty: 'Aklui et Poisson' },
        { id: 3, name: 'Chef Koffi', specialty: 'Eba et Sauce Arachide' },
        { id: 4, name: 'Chef Yawa', specialty: 'Kpalikpo et Viande' },
        { id: 5, name: 'Chef Dédé', specialty: 'Légumes Braisés et Riz' },
        { id: 6, name: 'Chef Tessi', specialty: 'Tchékli et Poulet Grillé' }
      ]
    };
  }
};
</script>

<style scoped>
  h1 {
    text-align: center;
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 30px;
    font-weight: bold;
  }
  .chef-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 0 20px;
  }

  .chef-card {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: all 0.3s ease;
  }

  .chef-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  }

  .chef-name {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .chef-specialty {
    font-size: 1rem;
    color: #666;
  }
</style>
