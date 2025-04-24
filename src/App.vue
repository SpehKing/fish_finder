<template>
  <div class="min-h-screen bg-lightMarine p-4">
    <div class="relative">
      <!--GoogleMapCard class="absolute top-4 right-4" :sensors="sensors" /-->
      <LeafletMap class="absolute top-4 right-4" :sensors="sensors" />
    </div>
    <div class="mt-80">
      <Dashboard :sensors="sensors" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import sensorsData from "./assets/sensors.json";
import GoogleMapCard from "./components/GoogleMapCard.vue";
import Dashboard from "./components/Dashboard.vue";
import LeafletMap from "./components/LeafletMap.vue";

const sensors = ref(sensorsData);
</script>

<style>
/* global styles */
/* global styles */
</style>
