<template>
  <Navbar />
  <div class="min-h-screen bg-lightMarine p-4">
    <div class="relative">
      <LeafletMap class="absolute top-4 right-4" :sensors="sensors" />
    </div>
    <div class="mt-80">
      <Dashboard :sensors="sensors" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import sensorsData from "./assets/sensors.json";
import Dashboard from "./components/Dashboard.vue";
import LeafletMap from "./components/LeafletMap.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Navbar,
    Dashboard,
    LeafletMap
  },
  setup() {


    const sensors = ref(sensorsData);
    return {
      sensors
    }
  }
}
</script>

<style>
/* global styles */
</style>
