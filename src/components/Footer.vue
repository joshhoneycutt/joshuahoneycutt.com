<script>
  export default {
    data: () => ({
      icons: [
        /*{
          image: 'mdi-facebook',
          name: "facebook",
          link: "https://www.facebook.com/joshuahoneycutt",
        },*/
        {
          image: 'mdi-twitter',
          name: "twitter",
          link: "https://twitter.com/joshhoneycutt?lang=en",
        },
        {
          image: 'mdi-linkedin',
          name: "linkedin",
          link: "https://www.linkedin.com/in/joshua-honeycutt-4b4a299",
        },
        {
          image: 'mdi-github',
          name: "github",
          link: "https://github.com/joshhoneycutt",
        },
        {
          image: 'mdi-email',
          name: "email",
          link: "joshdhh@gmail.com",
        },
        /*{
          image: 'mdi-instagram',
          name: "instagram",
          link: "https://www.instagram.com/josh_honeycutt/?hl=en",
        },*/
      ],
    }),
    // define methods under the `methods` object
    methods: {
      loadExternalPage: (value) => {
        if (value.name != 'email') {
          window.open(value.link, '_blank', 'noreferrer');
        } else {
          window.open('mailto:joshdhh@gmail.com');
        }      
      }
    }
  }
</script>

<template>
    <v-footer>
      <v-row justify="center" no-gutters>
        <v-btn @click="loadExternalPage(icon)"
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            :icon="icon.image"
            variant="text"
        >
      </v-btn>
        <v-col class="text-center mt-4" cols="12">
            © {{ new Date().getFullYear() }} — <strong>Joshua Honeycutt</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>