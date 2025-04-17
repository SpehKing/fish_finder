<template>
  <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white shadow rounded p-4 h-64">
      <h2 class="text-lg font-semibold mb-2 text-marineBlue">
        Fish Count per Sensor
      </h2>
      <Bar :chart-data="countData" :options="chartOptions" />
    </div>
    <div class="bg-white shadow rounded p-4 h-64">
      <h2 class="text-lg font-semibold mb-2 text-marineBlue">
        Average Size per Sensor
      </h2>
      <Bar :chart-data="sizeData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const props = defineProps({
  sensors: Array,
});

const labels = computed(() => props.sensors.map((s) => `Sensor ${s.id}`));

const countData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Fish Count",
      data: props.sensors.map((s) => s.fishCount),
      backgroundColor: "#3b82f6",
    },
  ],
}));

const sizeData = computed(() => ({
  labels: labels.value,
  datasets: [
    {
      label: "Avg Size",
      data: props.sensors.map((s) => s.avgSize),
      backgroundColor: "#1e3a8a",
    },
  ],
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<style scoped></style>
