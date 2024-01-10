<style>
  .job-details {
    padding-left: 05%;
    padding-right: 05%;
  }

  /* Use a media query to add a breakpoint at 600px: */
  @media screen and (max-width: 600px) {
    .v-timeline {
      display: block !important; /* change the layout, when the viewport is 600px or smaller */
    }
  }
</style>

<template>
    <v-timeline align="start">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :dot-color="year.color"
        size="small"
      >
        <template v-slot:opposite>
          <div
            :class="`pt-1 headline font-weight-bold text-${year.color}`"
            v-text="year.year"
          ></div>
        </template>
        <div>
          <h2 :class="`mt-n1 headline font-weight-bold text-${year.color}`">
            {{year.company}}
          </h2>
          <div>
            <!--{{year.body}}-->
            <template class="list-margin" v-for="role in year.role">
              <h3 :class="`mt-n1 headline mb-4`">
                {{role.title}}
              </h3>
              <div class="job-details">
                <template class="list-margin" v-for="item in role.bodyArray">
                  <p>{{ item }}</p><br>
                </template>
              </div>
            </template>
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
  import timelineContent from '../content/timeline.json'
  export default {
    data: () => (timelineContent),
  }
</script>