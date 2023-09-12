<template>
  <v-app-bar flat>
    <v-app-bar-title>
      <router-link to='/' class="link_style">Joshua Honeycutt</router-link>
    </v-app-bar-title>
    <v-tab>
      <router-link to='/about' class="link_style">About Me</router-link>
    </v-tab>
    <v-tab>
      <router-link to='/contact' class="link_style">Contact Me</router-link>
    </v-tab>
  </v-app-bar>
</template>

<script setup>
  //
</script>

<style>
  .link_style {
    text-decoration: none;
    color: inherit;
  }
</style>