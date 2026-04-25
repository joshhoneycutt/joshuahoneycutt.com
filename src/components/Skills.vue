<template>
  <div>
    <h2 class="section-heading text-h5 font-weight-bold mb-6">Skills</h2>
    <v-row>
      <v-col cols="12" sm="4" v-for="group in skillGroups" :key="group.title">
        <p class="text-overline text-medium-emphasis mb-3">{{ group.title }}</p>
        <div class="d-flex flex-wrap" style="gap: 8px;">
          <div
            v-for="item in group.items"
            :key="item.name"
            class="skill-chip d-flex align-center rounded-lg px-3 py-2"
          >
            <div class="logo-wrap mr-2">
              <v-img :src="item.photo" :width="18" :height="18" contain />
            </div>
            <span class="text-body-2 font-weight-medium">{{ item.name }}</span>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    skillGroups: [
      {
        title: 'Frontend',
        items: [
          { name: 'HTML', photo: 'html_logo.png' },
          { name: 'CSS', photo: 'css_logo.png' },
          { name: 'JavaScript', photo: 'js_logo.png' },
          { name: 'VueJS', photo: 'vuejs_logo.png' },
        ],
      },
      {
        title: 'Languages',
        items: [
          { name: 'Apex', photo: 'salesforce_logo.png' },
          { name: 'Golang', photo: 'golang_logo.png' },
          { name: 'Python', photo: 'python_logo.png' },
          { name: 'C#', photo: 'csharp_logo.png' },
          { name: 'Java', photo: 'java_logo.png' },
        ],
      },
      {
        title: 'Cloud & Infrastructure',
        items: [
          { name: 'Salesforce', photo: 'salesforce_logo.png' },
          { name: 'AWS', photo: 'aws_logo.png' },
          { name: 'Kubernetes', photo: 'kubernetes_logo.png' },
          { name: 'MS SQL Server', photo: 'microsoft_sql_server_logo.png' },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
.skill-chip {
  background: rgb(var(--v-theme-surface-variant));
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: border-color 0.2s;
  cursor: default;
}
.skill-chip:hover {
  border-color: rgb(var(--v-theme-primary));
}
.logo-wrap {
  background: white;
  border-radius: 3px;
  width: 22px;
  height: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
}
</style>
