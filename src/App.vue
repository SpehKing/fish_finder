<template>
  <div class="min-h-screen bg-lightMarine p-4">
    <header class="bg-blue-600 text-white flex items-center p-4" style="height: 20vh;">
      <!-- Logo -->
      <img src="/images/AquaScope.png" alt="AquaScope Logo" class="logo" />
      <!-- App Name -->
      <h1 class="text-xl font-bold ml-4">AquaScope</h1>
      <!-- Navigation Bar -->
      <nav>
        <ul class="nav-bar">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sensor">Sensor Page</router-link></li>
          <li><router-link to="/about">About</router-link></li> 
        </ul>
      </nav>
    </header>
    <router-view />
    <LeafletMap v-if="isHomePage" />
  </div>
  
</template>

<script setup>
import LeafletMap from './components/LeafletMap.vue';

import { computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomePage = computed(() => route.path === '/');
</script>

<style>
.logo {
  height: 50px;
  width: auto;
}

.nav-bar {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

.nav-bar li {
  display: inline;
}

.nav-bar a {
  color: white;
  text-decoration: none;
}

.nav-bar a:hover {
  text-decoration: underline;
}
</style>
