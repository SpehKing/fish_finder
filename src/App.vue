<template>
  <div class="min-h-screen bg-lightMarine p-4">
    <header class="bg-blue-600 text-white p-4 text-center">
      <h1>Fish Finder - Sensor Dashboard</h1>
    </header>
    <div class="container mx-auto bg-white p-4 rounded shadow">
      <div class="status flex justify-between mb-4">
        <span>Sensor Status: <span id="sensor-status">Loading...</span></span>
        <span>Last Updated: <span id="last-updated">Loading...</span></span>
      </div>
      <div class="image-container text-center mb-4">
        <h2>Last Picture Taken</h2>
        <img id="last-picture" src=".assets/placeholder.jpg" alt="Last Picture Taken" class="rounded">
      </div>
      <div class="objects-detected text-center text-blue-600 font-bold">
        Objects Detected in Last 24 Hours: <span id="objects-detected">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Example: You can later replace this with real sensor data
const sensorStatus = ref("Loading...");
const lastUpdated = ref("Loading...");
const lastPicture = ref("placeholder.jpg");
const objectsDetected = ref("Loading...");
</script>

<style>
/* Add your global styles here or import them */
</style>
