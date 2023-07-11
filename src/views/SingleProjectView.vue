<template>
  <main class="main">
    <TopPageComponent image="single_project_banner.webp" />
    <SingleProject :project="getProject(projectId)" />
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import SingleProject from "@/components/SingleProject.vue";
import projectsMixin from "@/mixins/projectsMixin";

export default {
  mixins: [projectsMixin],
  data() {
    return {
      projectId: 1,
    };
  },
  components: {
    TopPageComponent,
    SingleProject,
  },
  created() {
    const routeProjectId = +this.$route.params.projectId;
    if (routeProjectId) {
      console.log("Project id:", routeProjectId);
      this.projectId = routeProjectId;
    }
  },
};
</script>
