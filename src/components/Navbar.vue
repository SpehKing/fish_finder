<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/settings">Settings</router-link>
      </li>
      <li>
        <router-link to="/sensor">Sensor</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style scoped>
nav {
  background-color: #333;
  padding: 10px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 10px;
}

a {
  color: white;
  text-decoration: none;
}
</style>