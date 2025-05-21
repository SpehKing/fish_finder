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
    <!-- TTN LoRa Message Display Test -->
    <div class="mt-8 p-4 bg-white rounded shadow w-full max-w-md mx-auto">
      <h2 class="text-lg font-bold mb-2">Latest LoRa Message</h2>
      <div v-if="message">
        <pre class="text-xs bg-gray-100 p-2 rounded overflow-x-auto">{{ JSON.stringify(message, null, 2) }}</pre>
      </div>
      <div v-else class="text-gray-500">Waiting for message...</div>
    </div>
  </div>
  
</template>

<script setup>
import LeafletMap from './components/LeafletMap.vue';

import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
const isHomePage = computed(() => route.path === '/');

const message = ref(null)

// Use the public TTN endpoint for fetching data
const API_URL = 'http://lukamali.com/ttn2value/data/70B3D57ED007083A.json'

async function fetchMessage() {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Network response was not ok')
    message.value = await res.json()
  } catch (e) {
    message.value = { error: 'Error fetching message.' }
  }
}

onMounted(() => {
  fetchMessage()
  setInterval(fetchMessage, 5000) // Poll every 5 seconds
})
</script>
