<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="auto">
                <v-list lines="one">
                    <h2>Education & Certifications</h2>
                    <v-list-item
                    v-for="item in schools"
                    :key="item.title"
                    :prepend-avatar="item.avatar"
                    :title="item.title"
                    subtitle="Bachelor of Science (B.S.), Computer Science 2012-2016"
                    :href="item.link">{{ }}
                    </v-list-item>
                    <br>
                    <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    :prepend-avatar="item.avatar"
                    :href="item.link">{{ item.title }}
                    </v-list-item>
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        items: [
        {
            avatar: 'aws-cloud-practitioner.png',
            title: 'AWS Certified Cloud Practitioner',
            link: 'https://www.credly.com/badges/cfacfa40-3419-4502-9703-d8800c492185/public_url'
        },
        {
            avatar: '/Administrator.png',
            title: 'Salesforce Certified Administrator',
            link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL'
        },
        {
            avatar: '/Platform-App-Builder.png',
            title: 'Salesforce Certified Platform App Builder',
            link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL'
        },
        {
            avatar: 'Platform-Developer-I.png',
            title: 'Salesforce Certified Platform Developer I',
            link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL'
        },
        {
            avatar: 'Sales-Cloud-Consultant.png',
            title: 'Salesforce Certified Sales Cloud Consultant',
            link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL'
        },
        {
            avatar: 'Service-Cloud-Consultant.png',
            title: 'Salesforce Certified Service Cloud Consultant',
            link: 'https://trailhead.salesforce.com/en/credentials/certification-detail-print/?searchString=U1ZhzD1ua6SSex62QXeD5fczFhunP9nvEKBv5aaVeJzeNlSmPHeC+7wQ9Nf+u6bL'
        },
      ],
      schools: [
        {
            avatar: 'Charlotte.jpg',
            title: 'University of North Carolina at Charlotte',
            link: 'https://www.charlotte.edu/'
        },
      ],
    }),
  }
</script>