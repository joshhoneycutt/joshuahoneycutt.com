<template>
  <v-footer class="footer-bar">
    <v-container class="d-flex flex-column align-center py-5" style="max-width: 960px;">
      <div class="d-flex gap-2 mb-3">
        <v-btn
          v-for="icon in icons"
          :key="icon.name"
          :icon="icon.image"
          variant="text"
          size="small"
          class="text-medium-emphasis"
          @click="loadExternalPage(icon)"
        />
      </div>
      <span class="text-caption text-medium-emphasis">
        &copy; {{ new Date().getFullYear() }} Joshua Honeycutt
      </span>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      { image: 'mdi-linkedin', name: 'linkedin', link: 'https://www.linkedin.com/in/joshua-honeycutt-4b4a299' },
      { image: 'mdi-github', name: 'github', link: 'https://github.com/joshhoneycutt' },
      { image: 'mdi-email', name: 'email', link: 'joshdhh@gmail.com' },
    ],
  }),
  methods: {
    loadExternalPage(value) {
      if (value.name !== 'email') {
        window.open(value.link, '_blank', 'noreferrer');
      } else {
        window.open('mailto:joshdhh@gmail.com');
      }
    },
  },
}
</script>

<style scoped>
.footer-bar {
  border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
}
</style>
