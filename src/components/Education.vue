<template>
  <div>
    <h2 class="section-heading text-h5 font-weight-bold mb-6">Education & Certifications</h2>

    <v-card variant="outlined" class="mb-6" rounded="lg">
      <v-card-item>
        <template #prepend>
          <v-avatar size="52" rounded="lg" class="mr-2" style="background: white;">
            <v-img src="Charlotte.jpg" contain />
          </v-avatar>
        </template>
        <v-card-title class="text-body-1 font-weight-bold">
          University of North Carolina at Charlotte
        </v-card-title>
        <v-card-subtitle class="mt-1">
          Bachelor of Science, Computer Science &middot; 2012&ndash;2016
        </v-card-subtitle>
      </v-card-item>
    </v-card>

    <p class="text-overline text-medium-emphasis mb-4">Certifications</p>
    <v-row justify="center">
      <v-col
        v-for="item in items"
        :key="item.title"
        cols="12"
        sm="6"
      >
        <v-card
          variant="outlined"
          rounded="lg"
          class="cert-card h-100"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
        >
          <v-card-item>
            <template #prepend>
              <div class="cert-logo-wrap mr-2">
                <v-img :src="item.avatar" :width="36" :height="36" contain />
              </div>
            </template>
            <v-card-title class="text-body-2 font-weight-medium" style="white-space: normal; line-height: 1.4;">
              {{ item.title }}
            </v-card-title>
          </v-card-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        avatar: 'aws-cloud-practitioner.png',
        title: 'AWS Certified Cloud Practitioner',
        link: 'https://www.credly.com/badges/cfacfa40-3419-4502-9703-d8800c492185/public_url',
      },
      {
        avatar: '/Administrator.png',
        title: 'Salesforce Certified Administrator',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
      {
        avatar: '/Platform-App-Builder.png',
        title: 'Salesforce Certified Platform App Builder',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
      {
        avatar: 'Platform-Developer-I.png',
        title: 'Salesforce Certified Platform Developer I',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
      {
        avatar: 'Sales-Cloud-Consultant.png',
        title: 'Salesforce Certified Sales Cloud Consultant',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
      {
        avatar: 'Service-Cloud-Consultant.png',
        title: 'Salesforce Certified Service Cloud Consultant',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
      {
        avatar: 'triple-star-ranger.png',
        title: 'Salesforce Triple Star Ranger',
        link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL',
      },
    ],
  }),
}
</script>

<style scoped>
.cert-card {
  transition: border-color 0.2s;
  text-decoration: none;
}
.cert-card:hover {
  border-color: rgb(var(--v-theme-primary)) !important;
}
.cert-logo-wrap {
  background: white;
  border-radius: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  overflow: hidden;
  padding: 2px;
}
</style>
