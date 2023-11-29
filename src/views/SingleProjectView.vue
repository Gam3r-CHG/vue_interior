<template>
  <main class="main">
    <TopPageComponent image="single_project_banner.webp" />
    <SingleProject :project="getProject(projectId)" />
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import SingleProject from "@/components/projectComponents/SingleProject.vue";
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
    let routeProjectId = +this.$route.params.projectId;
    if (routeProjectId) {
      const projectCount = this.getCountProjects;
      if (routeProjectId > projectCount) {
        this.projectId = projectCount;
        this.$router.push(`/project/${projectCount}`);
      } else {
        this.projectId = routeProjectId;
      }
    }
  },
};
</script>
