<template>
  <v-app-bar flat color="background" class="app-bar-border">
    <v-container class="d-flex align-center py-0 h-100" style="max-width: 960px;">
      <a href="#about" class="nav-brand text-decoration-none font-weight-bold text-subtitle-1" @click.prevent="scrollTo('about')">
        Joshua Honeycutt
      </a>
      <v-spacer />

      <!-- Desktop nav -->
      <div class="d-none d-sm-flex">
        <v-btn variant="text" size="small" class="text-capitalize text-medium-emphasis" @click="scrollTo('skills')">Skills</v-btn>
        <v-btn variant="text" size="small" class="text-capitalize text-medium-emphasis" @click="scrollTo('education')">Education</v-btn>
        <v-btn variant="text" size="small" class="text-capitalize text-medium-emphasis" @click="scrollTo('experience')">Experience</v-btn>
        <v-btn variant="text" size="small" class="text-capitalize text-medium-emphasis" @click="scrollTo('contact')">Contact</v-btn>
      </div>

      <!-- Mobile hamburger -->
      <v-btn class="d-flex d-sm-none" icon="mdi-menu" variant="text" @click="drawer = true" />
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary location="right" width="220">
    <v-list nav class="pt-4">
      <v-list-item
        v-for="link in navLinks"
        :key="link.id"
        :title="link.label"
        rounded="lg"
        class="mb-1"
        @click="navTo(link.id)"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const navLinks = [
  { id: 'about',      label: 'About'      },
  { id: 'skills',     label: 'Skills'     },
  { id: 'education',  label: 'Education'  },
  { id: 'experience', label: 'Experience' },
  { id: 'contact',    label: 'Contact'    },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (!el) return
  const offset = document.querySelector('.v-app-bar')?.offsetHeight ?? 64
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset - 16, behavior: 'smooth' })
}

function navTo(id) {
  drawer.value = false
  // brief delay so the drawer closes before scrolling
  setTimeout(() => scrollTo(id), 150)
}
</script>

<style scoped>
.app-bar-border {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08) !important;
}
.nav-brand {
  color: inherit;
  letter-spacing: -0.02em;
  transition: color 0.2s;
}
.nav-brand:hover {
  color: rgb(var(--v-theme-primary));
}
</style>
