<template>
  <div class="container">
    <!-- TTN LoRa Message Display Test -->
    <div class="mt-8 p-4 bg-white rounded shadow w-full max-w-md mx-auto">
      <h2 class="text-lg font-bold mb-2">Sensor Status</h2>
      <div class="flex items-center mb-2">
        <span :class="['status-indicator', isLive ? 'status-live' : 'status-offline']"></span>
        <span class="ml-2 font-semibold">{{ isLive ? 'Live' : 'Offline' }}</span>
      </div>
      <div>
        <span class="font-bold">Last Message Time:</span>
        <span>{{ lastMessageTime || 'N/A' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'

const message = ref(null)
const lastMessageTime = ref('')
const isLive = ref(false)

// Use the public TTN endpoint for fetching data
const API_URL = '/.netlify/functions/proxy'

function parseMessage(msg) {
  // Extract last message time
  if (msg && msg.uplink_message && msg.uplink_message.received_at) {
    lastMessageTime.value = new Date(msg.uplink_message.received_at).toLocaleString()
    // Consider sensor live if last message within 10 minutes
    const last = new Date(msg.uplink_message.received_at)
    const now = new Date()
    isLive.value = (now - last) < 10 * 60 * 1000
  } else {
    lastMessageTime.value = ''
    isLive.value = false
  }
}

async function fetchMessage() {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Network response was not ok')
    const data = await res.json()
    message.value = data
    parseMessage(data)
  } catch (e) {
    message.value = { error: 'Error fetching message.' }
    lastMessageTime.value = ''
    isLive.value = false
  }
}

onMounted(() => {
  fetchMessage()
  setInterval(fetchMessage, 5000) // Poll every 5 seconds
})
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  padding: 20px;
}
.status-indicator {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 8px;
}
.status-live {
  background-color: #4caf50;
}
.status-offline {
  background-color: #f44336;
}
</style>