<template>
  <div class="project-card">
    <router-link
      :to="`/project/${project.id}`"
      class="project-card__image-block"
    >
      <i
        class="icon"
        :class="project.favourite ? 'star--yellow' : 'star--empty'"
        @click.prevent="starClickHandler(project.id)"
      ></i>
      <img
        :alt="project.alt"
        class="project-card__image"
        :src="require('@/' + projectsImageDir + project.images[0])"
      />
    </router-link>
    <div class="project-card__footer">
      <div class="project-card__title-block">
        <router-link
          class="project-card__title link link--dark-grey"
          :to="`/project/${project.id}`"
          >{{ project.title }}</router-link
        >
        <div class="project_card__tags">
          <a
            v-for="(tag, index) in project.tags"
            :key="index"
            href="#"
            class="project-card__tag link"
            >{{ tag }}</a
          >
        </div>
      </div>
      <CircleButton :link="`/project/${project.id}`" size="big" />
    </div>
  </div>
</template>

<script>
import pathsMixin from "@/mixins/pathsMixin";
import projectsMixin from "@/mixins/projectsMixin";

export default {
  mixins: [pathsMixin, projectsMixin],
  props: {
    project: {
      id: {
        type: Number,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      tags: {
        type: Array,
        required: true,
      },
    },
  },
  methods: {
    starClickHandler(projectIndex) {
      this.switchFavourite(projectIndex);
    },
  },
};
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  break-inside: avoid;
  margin-bottom: 30px;
}

.project-card {
  aspect-ratio: 1 / 1.1;
}

.project-card:nth-of-type(1),
.project-card:nth-of-type(3),
.project-card:nth-of-type(6),
.project-card:nth-of-type(8) {
  aspect-ratio: 1 / 1.6;
}

.project-card__image-block {
  margin-bottom: 28px;
  width: 100%;
  height: 100%;
  position: relative;
}

.project-card__image-block .icon {
  position: absolute;
  top: 0;
  right: 0;
  width: 36px;
  height: 36px;
  transition: transform 0.2s ease-in-out;
}

.project-card__image-block .icon:hover {
  transform: scale(1.1);
}

.project-card__image-block img {
  object-fit: cover;
}

.project-card__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-card__title {
  font-family: "DM Serif Display", serif;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}

.project-card__tag {
  letter-spacing: 0.01em;
  text-transform: capitalize;
}

.project-card__tag:not(.project-card__tag:last-of-type)::after {
  content: "/";
  margin-left: 7px;
  margin-right: 7px;
}

@media screen and (max-width: 768px) {
  .project-card__title {
    font-size: 20px;
  }
}
</style>
