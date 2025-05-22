<template>
  <div class="map" id="map"></div>
</template>

<script>
import { ref, watch, onMounted } from 'vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './../assets/main.css';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

export default {
  name: 'LeafletMap',
  props: {
    latitude: Number,
    longitude: Number,
  },
  setup(props) {
    const map = ref(null);
    const marker = ref(null);

    const defaultLat = 46.279644;
    const defaultLng = 13.837924;

    onMounted(() => {
      const lat = props.latitude != null ? props.latitude : defaultLat;
      const lng = props.longitude != null ? props.longitude : defaultLng;

      map.value = L.map('map').setView([lat, lng], 13);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map.value);

      // Fix for marker icons
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow
      });

      // Initial marker
      marker.value = L.marker([lat, lng], {
        icon: L.divIcon({
          className: 'custom-marker',
          html: '<span class="material-symbols-outlined">location_on</span>',
          iconSize: [36, 36],
          iconAnchor: [18, 36],
        }),
      }).addTo(map.value);
    });

    // Watch for updates to props
    watch(
      () => [props.latitude, props.longitude],
      ([lat, lng]) => {
        if (lat != null && lng != null && map.value) {
          map.value.setView([lat, lng], 13);
          if (marker.value) {
            map.value.removeLayer(marker.value);
          }
          marker.value = L.marker([lat, lng], {
            icon: L.divIcon({
              className: 'custom-marker',
              html: '<span class="material-symbols-outlined">location_on</span>',
              iconSize: [36, 36],
              iconAnchor: [18, 36],
            }),
          }).addTo(map.value);
        }
      }
    );

    return {};
  },
};
</script>

<style scoped>
.map {
  width: 100%;
  height: 400px;
}
</style>
