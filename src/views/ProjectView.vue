<template>
  <main class="main">
    <TopPageComponent image="/img/articles_banner.webp" title="Project" />
    <ProjectsComponent />
  </main>
</template>

<script>
// @ is an alias to /src
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
