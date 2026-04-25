<template>
  <div>
    <h2 class="section-heading text-h5 font-weight-bold mb-6">Experience</h2>
    <v-timeline
      align="start"
      :side="smAndDown ? 'end' : undefined"
      :truncate-line="smAndDown ? 'start' : 'both'"
    >
      <v-timeline-item
        v-for="(job, i) in years"
        :key="i"
        :dot-color="job.color"
        size="small"
      >
        <template v-if="!smAndDown" #opposite>
          <span class="text-body-2 font-weight-bold text-medium-emphasis">{{ job.year }}</span>
        </template>
        <div class="pb-6">
          <div class="d-flex align-center gap-2 mb-1 flex-wrap">
            <h3 class="text-h6 font-weight-bold" :style="`color: rgb(var(--v-theme-${job.color}))`">
              {{ job.company }}
            </h3>
            <span v-if="smAndDown" class="text-caption text-medium-emphasis">{{ job.year }}</span>
          </div>
          <template v-for="(role, j) in job.role" :key="j">
            <p class="text-body-2 font-weight-semibold text-medium-emphasis mt-3 mb-2">
              {{ role.title }}
            </p>
            <ul class="role-list">
              <li
                v-for="(bullet, k) in role.bodyArray"
                :key="k"
                class="text-body-2 text-medium-emphasis mb-2"
              >
                {{ bullet }}
              </li>
            </ul>
          </template>
        </div>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'
import timelineContent from '../content/timeline.json'

const { smAndDown } = useDisplay()
const { years } = timelineContent
</script>

<style scoped>
.role-list {
  padding-left: 18px;
  list-style: none;
}
.role-list li::before {
  content: '–';
  margin-left: -18px;
  margin-right: 8px;
  color: rgba(255, 255, 255, 0.3);
}
</style>
