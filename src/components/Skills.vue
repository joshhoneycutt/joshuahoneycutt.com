<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="auto">
                <v-sheet class="pa-2 ma-2">
                    Web Technologies
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                :min-width="25"
                                width="25"
                                aspect-ratio="16/9"
                                cover
                                src="@/assets/html_logo.png"
                            ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                HTML
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/css_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                CSS
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/vuejs_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                VueJS
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <v-col cols="auto">
                <v-sheet class="pa-2 ma-2">
                    Languages
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                :min-width="25"
                                width="25"
                                aspect-ratio="16/9"
                                cover
                                src="@/assets/js_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                Javascript
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img class="image-adjustment"
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/java_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                Java
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/python_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                Python
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/golang_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                Golang
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/csharp_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                C#
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
            <v-col cols="auto">
                <v-sheet class="pa-2 ma-2">
                    Cloud / Databases
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/aws_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                AWS
                            </v-sheet>
                        </v-col>
                    </v-row>
                    <v-row no-gutters>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                <v-img
                                    :min-width="25"
                                    width="25"
                                    aspect-ratio="16/9"
                                    cover
                                    src="@/assets/salesforce_logo.png"
                                ></v-img>
                            </v-sheet>
                        </v-col>
                        <v-col cols="auto">
                            <v-sheet class="pa-2 ma-2">
                                Salesforce
                            </v-sheet>
                        </v-col>
                    </v-row>
                </v-sheet>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
        webTechnologies: [
        {
            name: '',
            photo: ''
        },
        ],
        other: [
        {
            avatar: '',
            title: '',
            link: ''
        },
        ],
  })
  }
</script>