<template>
  <section class="projects wrapper">
    <div class="projects__title-block">
      <h2 class="projects__title">{{ title }}</h2>
      <p class="projects__sub-title">{{ text }}</p>
    </div>
    <div class="projects__cards">
      <ProjectBigCard
        v-for="project in getFourRandomProject"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script>
import ProjectBigCard from "@/components/projectComponents/ProjectBigCard.vue";
import projectsMixin from "@/mixins/projectsMixin";

export default {
  components: { ProjectBigCard },
  mixins: [projectsMixin],
  data() {
    return {
      title: "Follow Our Projects",
      text: "It is a long established fact that a reader will be distracted by the of readable content of initialPage lookings at its layouts points.",
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
