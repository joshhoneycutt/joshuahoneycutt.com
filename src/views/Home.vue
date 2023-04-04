<template>
  <v-container>
    <v-row class="mb-6">
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <AboutMe />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <Timeline />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import Timeline from '@/components/Timeline.vue';
  import AboutMe from '@/components/AboutMe.vue';
</script>

<style>

</style>