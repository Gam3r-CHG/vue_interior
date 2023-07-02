<template>
  <main class="main">
    <TopPageComponent image="articles_banner.webp" title="Project" />
    <ProjectsComponent />
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";

export default {
  name: "HomeView",
  components: {
    TopPageComponent,
    ProjectsComponent,
  },
};
</script>
