<template>
    <div class="chef-card">
      <h3>{{ chef.name }}</h3>
      <p>{{ chef.specialty }}</p>
      <router-link :to="`/chefs/${chef.id}`">Voir plus</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['chef']
  };
  </script>
  
  <style scoped>
  .chef-card { border: 1px solid #ddd; padding: 10px; text-align: center; }
  </style>