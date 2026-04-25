<template>
  <router-view />
</template>

<script setup>
//
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.section-heading {
  position: relative;
  padding-bottom: 10px;
}

.section-heading::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 36px;
  height: 2px;
  background: rgb(var(--v-theme-primary));
}
</style>
