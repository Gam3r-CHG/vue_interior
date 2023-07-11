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

    <div class="project__slider">
      <img
        v-for="(image, index) in project.images"
        :key="index"
        :src="require('@/' + projectsImageDir + image)"
        class="project__image"
      />
    </div>
  </section>
</template>

<script>
import projectsMixin from "@/mixins/projectsMixin";
import pathsMixin from "@/mixins/pathsMixin";

export default {
  mixins: [pathsMixin, projectsMixin],
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
  data() {
    return {};
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

.project__slider {
  display: flex;
  flex-direction: column;
  margin-bottom: 200px;
  width: 100%;
}

.project__image {
  max-width: 1201px;
  max-height: 799px;
  min-height: 799px;
  border-radius: 70px;
  background: #c4c4c4;
  object-fit: cover;
}
</style>
