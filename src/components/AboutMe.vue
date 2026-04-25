<template>
  <div class="about-hero d-flex flex-column flex-sm-row align-start">
    <v-avatar size="140" class="profile-avatar flex-shrink-0 mr-8 mb-4">
      <v-img src="/profile.jpg" cover alt="Joshua Honeycutt" />
    </v-avatar>
    <div>
    <p class="text-overline text-medium-emphasis mb-2" style="letter-spacing: 0.12em;">
      Lead Member of Technical Staff · Salesforce
    </p>
    <h1 class="text-h3 font-weight-bold mb-3 hero-name">
      Joshua Honeycutt
    </h1>
    <p class="text-primary text-h6 font-weight-medium mb-6">
      I Solve Problems With Code
    </p>
    <p class="text-body-1 text-medium-emphasis mb-4 bio-text">
      Lead Member of Technical Staff at Salesforce with over 10 years of experience building custom solutions across
      B2B and B2C environments. Proficient in Apex, JavaScript, Go, Python, C#, and Microsoft SQL Server, with a B.S.
      in Computer Science from the University of North Carolina at Charlotte and a track record of delivering
      high-quality software on time and at scale.
    </p>
    <p class="text-body-1 text-medium-emphasis bio-text">
      Deep experience across the Salesforce ecosystem — from platform development and managed packages to CRM
      architecture and cloud infrastructure. Currently serving as Scrum Lead for the team, driving delivery cadence
      and cross-functional alignment alongside a broad full-stack engineering background.
    </p>
    <div class="d-flex mt-7" style="gap: 20px;">
      <v-btn
        icon="mdi-linkedin"
        variant="tonal"
        size="small"
        href="https://www.linkedin.com/in/joshua-honeycutt-4b4a299"
        target="_blank"
        rel="noreferrer"
      />
      <v-btn
        icon="mdi-github"
        variant="tonal"
        size="small"
        href="https://github.com/joshhoneycutt"
        target="_blank"
        rel="noreferrer"
      />
      <v-btn
        icon="mdi-email"
        variant="tonal"
        size="small"
        href="mailto:joshdhh@gmail.com"
      />
    </div>
    </div>
  </div>
</template>

<script setup>
//
</script>

<style scoped>
.hero-name {
  letter-spacing: -0.03em;
}
.bio-text {
  max-width: 680px;
  line-height: 1.75;
}
.profile-avatar {
  border: 2px solid rgba(255, 255, 255, 0.1);
}
</style>
