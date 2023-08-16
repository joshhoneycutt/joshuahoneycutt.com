<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<template>
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon"
            variant="text"
        ></v-btn>
        <v-col class="text-center mt-4" cols="12">
            © {{ new Date().getFullYear() }} — <strong>Joshua Honeycutt</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>