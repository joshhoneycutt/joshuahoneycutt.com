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
    <v-row class="mb-6">
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <Skills />
        </v-sheet>
      </v-col>
    </v-row>
    <v-row class="mb-6">
      <v-col>
        <v-sheet class="pa-2 ma-2">
          <Education />
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import AboutMe from '@/components/AboutMe.vue';
  import Skills from '@/components/Skills.vue';
  import Education from '@/components/Education.vue';
  import Timeline from '@/components/Timeline.vue';
</script>

<style>

</style>