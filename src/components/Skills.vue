<template>
    <v-container>
        <v-row justify="center">
            <v-sheet class="text-md-center pa-2 ma-2">
                <h2>Web Technologies</h2>
                <template v-for="item in webTechnologies">
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width=logoPxSize
                                    width=logoPxSize
                                    aspect-ratio=aspectRatio
                                    cover
                                    :src="item.photo"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                {{ item.name }}
                            </v-sheet>
                        </v-col>
                    </v-row>
                </template>
            </v-sheet>
            <v-sheet class="text-md-center pa-2 ma-2">
                <h2>Languages</h2>
                <template v-for="item in languages">
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width=logoPxSize
                                    width=logoPxSize
                                    aspect-ratio=aspectRatio
                                    cover
                                    :src="item.photo"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                {{ item.name }}
                            </v-sheet>
                        </v-col>
                    </v-row>
                </template>
            </v-sheet>
            <v-sheet class="text-md-center pa-2 ma-2">
                <h2>Cloud & Other</h2>
                <template v-for="item in cloudAndDatabases">
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width=logoPxSize
                                    width=logoPxSize
                                    aspect-ratio=aspectRatio
                                    cover
                                    :src="item.photo"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                {{ item.name }}
                            </v-sheet>
                        </v-col>
                    </v-row>
                </template>
            </v-sheet>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        logoPxSize: 40,
        aspectRatio: "16/9",
        webTechnologies: [
        {
            name: 'HTML',
            photo: 'html_logo.png'
        },
        {
            name: 'CSS',
            photo: 'css_logo.png'
        },
        {
            name: 'VueJS',
            photo: 'vuejs_logo.png'
        },
        ],
        languages: [
        {
            name: 'Javascript',
            photo: 'js_logo.png'
        },
        {
            name: 'Apex',
            photo: 'salesforce_logo.png'
        },
        {
            name: 'Java',
            photo: 'java_logo.png'
        },
        {
            name: 'Python',
            photo: 'python_logo.png'
        },
        {
            name: 'Golang',
            photo: 'golang_logo.png'
        },
        {
            name: 'C#',
            photo: 'csharp_logo.png'
        },
        ],
        cloudAndDatabases: [
        {
            name: 'Salesforce',
            photo: 'salesforce_logo.png'
        },
        {
            name: 'AWS',
            photo: 'aws_logo.png'
        },
        {
            name: 'Kubernetes',
            photo: 'kubernetes_logo.png'
        },
        {
            name: 'Microsoft SQL Server',
            photo: 'microsoft_sql_server_logo.png'
        },
        ],
  })
  }
</script>