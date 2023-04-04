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
          <h3 :class="`mt-n1 headline mb-4`">
            {{year.title}}
          </h3>
          <div>
            {{year.body}}
          </div>
        </div>
      </v-timeline-item>
    </v-timeline>
</template>

<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'blue',
          year: '2019 - Current',
          company: 'Salesforce',
          title: 'Software Engineering SMTS',
          body: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          color: 'blue',
          year: '2016 - 2019',
          company: 'MapAnything',
          title: 'Sr. Services Developer',
          body: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          color: 'amber',
          year: '2016 - 2016',
          company: 'SMS',
          title: 'Reporting Data Analyst',
          body: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
        {
          color: 'green',
          year: '2015 - 2016',
          company: 'Sunbelt',
          title: 'Technology Analyst',
          body: 'Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.',
        },
      ],
    }),
  }
</script>