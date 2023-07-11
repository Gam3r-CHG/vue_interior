<template>
  <main class="main">
    <TopPageComponent image="all_projects_banner.webp" title="Project" />
    <ProjectsComponent />
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import projectsMixin from "@/mixins/projectsMixin";

export default {
  mixins: [projectsMixin],
  components: {
    TopPageComponent,
    ProjectsComponent,
  },
};
</script>
