<template>
  <section class="project wrapper">
    <h2 class="project__title">{{ project.title }}</h2>
    <p
      v-for="(paragraph, index) in project.content"
      :key="index"
      class="project__paragraph"
    >
      {{ paragraph }}
    </p>
  </section>
  <ProjectSlider :images="project.images" />
</template>

<script>
import projectsMixin from "@/mixins/projectsMixin";
import ProjectSlider from "@/components/projectComponents/ProjectSlider.vue";

export default {
  components: { ProjectSlider },
  mixins: [projectsMixin],
  props: {
    project: {
      type: Object,
      require: true,
      title: {
        type: String,
        require: true,
      },
      images: {
        type: Array,
        require: true,
      },
      imageAlt: {
        type: String,
        require: true,
      },
      content: {
        type: Array,
        require: true,
      },
    },
  },
};
</script>

<style scoped>
.project {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.project__title {
  max-width: 565px;
  text-align: center;
  color: #292f36;
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 11px;
}

.project__paragraph {
  max-width: 658px;
  color: #4d5053;
  font-family: Jost, serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}

.project__paragraph:not(.project__paragraph:last-of-type) {
  margin-bottom: 52px;
}

.project__paragraph:last-of-type {
  margin-bottom: 100px;
}

@media screen and (max-width: 768px) {
  .project {
    margin-top: 36px;
  }

  .project__title {
    max-width: 300px;
    font-size: 36px;
  }

  .project__paragraph {
    font-size: 16px;
  }

  .project__paragraph:not(.project__paragraph:last-of-type) {
    margin-bottom: 24px;
  }

  .project__paragraph:last-of-type {
    margin-bottom: 36px;
  }
}
</style>
