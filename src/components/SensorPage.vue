<template>
  <div class="container">
    <!-- Left Section: Information -->
    <div class="info-section">
      <div class="info-box">
        Sensor Status: 
        <span :class="sensorStatusClass" class="status-indicator"></span>
        {{ sensorStatus }}
      </div>
      <div class="info-box">
        Last Updated: <span id="last-updated">{{ lastUpdated }}</span>
      </div>
      <div class="info-box">
        Objects Detected in Last 24 Hours: <span id="objects-detected">{{ objectsDetected }}</span>
      </div>
    </div>

    <!-- Right Section: Image -->
    <div class="image-container">
      <h2>Last Picture Taken</h2>
      <img id="last-picture" :src="lastPicture" alt="Last Picture Taken" class="rounded">
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const sensorStatus = ref("Live");
const lastUpdated = ref("2023-10-01 12:00 PM"); // Placeholder date and time
// In a real application, this would be dynamically updated
const lastPicture = ref("images/fish.jpg"); // Placeholder image path
const objectsDetected = ref("Loading...");

// Dynamically set the class for the status indicator
const sensorStatusClass = computed(() =>
  sensorStatus.value === "Live" ? "status-live" : "status-offline"
);

</script>