<template>
  <v-container class="home-container py-12 px-4 px-sm-6">
    <section id="about" class="mb-14">
      <AboutMe />
    </section>

    <v-divider class="mb-14" />

    <section id="skills" class="mb-14">
      <Skills />
    </section>

    <v-divider class="mb-14" />

    <section id="education" class="mb-14">
      <Education />
    </section>

    <v-divider class="mb-14" />

    <section id="experience" class="mb-14">
      <Timeline />
    </section>

    <v-divider class="mb-14" />

    <section id="contact" class="mb-14">
      <ContactSection />
    </section>
  </v-container>

  <Footer />
</template>

<script setup>
import AboutMe from '@/components/AboutMe.vue';
import Skills from '@/components/Skills.vue';
import Education from '@/components/Education.vue';
import Timeline from '@/components/Timeline.vue';
import Footer from '@/components/Footer.vue';
import ContactSection from '@/components/ContactSection.vue';
</script>

<style scoped>
.home-container {
  max-width: 960px;
}
</style>
