<template>
  <section class="projects wrapper">
    <div class="projects__title-block">
      <h2 class="projects__title">{{ title }}</h2>
      <p class="projects__sub-title">{{ text }}</p>
    </div>
    <div class="projects__cards">
      <ProjectComponent
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectComponent from "@/components/projectComponents/ProjectBigCard.vue";
import { getAllProjects } from "@/api/projects";
import { ref } from "vue";
export default {
  name: "ProjectsComponent",
  components: { ProjectComponent },
  props: {},
  data() {
    return {
      title: "Follow Our Projects",
      text: "It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.",
    };
  },
  setup() {
    return {
      projects: ref(getAllProjects()),
    };
  },
};
</script>

<style scoped>
.projects__title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 96px 0;
}

.projects__title {
  max-width: 737px;
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: var(--darkGrey);
  text-align: center;
}

.projects__sub-title {
  max-width: 737px;
  letter-spacing: 0.01em;
  color: #4d5053;
  text-align: center;
}

.projects__cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 60px;
  grid-column-gap: 104px;
  padding-bottom: 96px;
}
</style>
