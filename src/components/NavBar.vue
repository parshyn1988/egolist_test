<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__item">Home</router-link>
    <router-link to="/cats/new" class="navbar__item">Upload</router-link>
    <router-link to="/cats/view" class="navbar__item">View</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
