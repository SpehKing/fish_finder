<template>
    <div class="sensor-page">
        <h1>Sensor Page</h1>

        <!-- Sensor Live Status -->
        <div class="sensor-status">
            <h2>Sensor Status: <span :class="{ live: isSensorLive, offline: !isSensorLive }">{{ isSensorLive ? 'Live' : 'Offline' }}</span></h2>
        </div>

        <!-- Last Picture Taken -->
        <div class="last-picture">
            <h2>Last Picture Taken</h2>
            <img v-if="lastPicture" :src="lastPicture" alt="Last Picture" />
            <p v-else>No picture available</p>
        </div>

        <!-- Objects Detected in Last 24 Hours -->
        <div class="objects-detected">
            <h2>Objects Detected in Last 24 Hours</h2>
            <ul>
                <li>No Object: {{ objectsDetected.noObject }}</li>
                <li>Small Object: {{ objectsDetected.smallObject }}</li>
                <li>Big Object: {{ objectsDetected.bigObject }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SensorPage",
    data() {
        return {
            isSensorLive: false, // Boolean to track if the sensor is live
            lastPicture: null, // URL of the last picture taken
            objectsDetected: {
                noObject: 0,
                smallObject: 0,
                bigObject: 0,
            }, // Object counts in the last 24 hours
        };
    },
    methods: {
        fetchSensorData() {
            // Simulate fetching data from the sensor
            // Replace this with actual API calls or WebSocket logic
            const sensorData = {
                isLive: true,
                lastPicture: "https://via.placeholder.com/300", // Replace with actual image URL
                objectsDetected: {
                    noObject: 10,
                    smallObject: 5,
                    bigObject: 2,
                },
            };

            this.isSensorLive = sensorData.isLive;
            this.lastPicture = sensorData.lastPicture;
            this.objectsDetected = sensorData.objectsDetected;
        },
    },
    mounted() {
        // Fetch sensor data when the component is mounted
        this.fetchSensorData();

        // Optionally, set up a timer to refresh data periodically
        setInterval(this.fetchSensorData, 60000); // Refresh every 60 seconds
    },
};
</script>

<style scoped>
.sensor-page {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.sensor-status span.live {
    color: green;
}

.sensor-status span.offline {
    color: red;
}

.last-picture img {
    max-width: 100%;
    height: auto;
}

.objects-detected ul {
    list-style-type: none;
    padding: 0;
}

.objects-detected li {
    margin: 5px 0;
}
</style>
<template>
    <div class="sensor-page">
        <h1>Sensor Page</h1>

        <!-- Sensor Live Status -->
        <div class="sensor-status">
            <h2>Sensor Status: <span :class="{ live: isSensorLive, offline: !isSensorLive }">{{ isSensorLive ? 'Live' : 'Offline' }}</span></h2>
        </div>

        <!-- Last Picture Taken -->
        <div class="last-picture">
            <h2>Last Picture Taken</h2>
            <img v-if="lastPicture" :src="lastPicture" alt="Last Picture" />
            <p v-else>No picture available</p>
        </div>

        <!-- Objects Detected in Last 24 Hours -->
        <div class="objects-detected">
            <h2>Objects Detected in Last 24 Hours</h2>
            <ul>
                <li>No Object: {{ objectsDetected.noObject }}</li>
                <li>Small Object: {{ objectsDetected.smallObject }}</li>
                <li>Big Object: {{ objectsDetected.bigObject }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SensorPage",
    data() {
        return {
            isSensorLive: false, // Boolean to track if the sensor is live
            lastPicture: null, // URL of the last picture taken
            objectsDetected: {
                noObject: 0,
                smallObject: 0,
                bigObject: 0,
            }, // Object counts in the last 24 hours
        };
    },
    methods: {
        fetchSensorData() {
            // Simulate fetching data from the sensor
            // Replace this with actual API calls or WebSocket logic
            const sensorData = {
                isLive: true,
                lastPicture: "https://via.placeholder.com/300", // Replace with actual image URL
                objectsDetected: {
                    noObject: 10,
                    smallObject: 5,
                    bigObject: 2,
                },
            };

            this.isSensorLive = sensorData.isLive;
            this.lastPicture = sensorData.lastPicture;
            this.objectsDetected = sensorData.objectsDetected;
        },
    },
    mounted() {
        // Fetch sensor data when the component is mounted
        this.fetchSensorData();

        // Optionally, set up a timer to refresh data periodically
        setInterval(this.fetchSensorData, 60000); // Refresh every 60 seconds
    },
};
</script>

<style scoped>
.sensor-page {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.sensor-status span.live {
    color: green;
}

.sensor-status span.offline {
    color: red;
}

.last-picture img {
    max-width: 100%;
    height: auto;
}

.objects-detected ul {
    list-style-type: none;
    padding: 0;
}

.objects-detected li {
    margin: 5px 0;
}
</style></div>