<template>
  <div class="bg-white shadow-lg rounded-lg overflow-hidden w-96 h-64">
    <div ref="mapRef" class="w-full h-full"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps({
  sensors: Array,
});
const mapRef = ref(null);

onMounted(() => {
  const loader = new Loader({ apiKey: "YOUR_API_KEY", version: "weekly" });
  loader.load().then(() => {
    const map = new google.maps.Map(mapRef.value, {
      center: { lat: 0, lng: 0 },
      zoom: 2,
    });
    props.sensors.forEach((s) => {
      const marker = new google.maps.Marker({
        position: { lat: s.lat, lng: s.lng },
        map,
      });
      const infowindow = new google.maps.InfoWindow({
        content: `<div class=\"p-2\"><p>Sensor ${s.id}</p><p>Fish count: ${s.fishCount}</p><p>Avg size: ${s.avgSize}</p></div>`,
      });
      marker.addListener("click", () => infowindow.open(map, marker));
    });
  });
});
</script>

<style scoped></style>
