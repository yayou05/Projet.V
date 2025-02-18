<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/navComponent.vue';

  export default {
    components: { Header},
  };
</script>