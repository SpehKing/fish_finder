<template>
  <div class="min-h-screen bg-lightMarine p-4">
    <header class="bg-blue-600 text-white p-4 text-center">
      <h1>Fish Finder - Sensor Dashboard</h1>
<nav class="mt-4">
        <ul class="flex justify-center space-x-4">
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/sensor">Sensor Page</router-link></li>
          <!-- Add more links here for other pages -->
        </ul>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script setup>
// No additional logic needed here for now
</script>

<style>
/* Add your global styles here or import them */
nav ul {
  list-style: none;
  padding: 0;
}

nav li {
  display: inline;
}

nav a {
      color: white;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  text-decoration: underline;
}
</style>
