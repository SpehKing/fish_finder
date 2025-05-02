<template>
  <div class="container mx-auto bg-white p-4 rounded shadow">
    <div class="status flex justify-between mb-4">
      <span>Sensor Status: <span id="sensor-status">{{ sensorStatus }}</span></span>
      <span>Last Updated: <span id="last-updated">{{ lastUpdated }}</span></span>
    </div>
    <div class="image-container text-center mb-4">
      <h2>Last Picture Taken</h2>
      <img id="last-picture" :src="lastPicture" alt="Last Picture Taken" class="rounded">
    </div>
    <div class="objects-detected text-center text-blue-600 font-bold">
      Objects Detected in Last 24 Hours: <span id="objects-detected">{{ objectsDetected }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const sensorStatus = ref("Loading...");
const lastUpdated = ref("Loading...");
const lastPicture = ref("placeholder.jpg");
const objectsDetected = ref("Loading...");
</script>