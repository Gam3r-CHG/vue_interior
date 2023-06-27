<template>
  <div class="project-card">
    <a class="project-card__image-block" :href="project.url">
      <img
        :alt="project.alt"
        class="project-card__image"
        :src="project.image"
      />
    </a>
    <div class="project-card__footer">
      <div class="project-card__title-block">
        <a
          class="project-card__title link link--dark-grey"
          :href="project.url"
          >{{ project.title }}</a
        >
        <div class="project_card__tags">
          <a
            v-for="tag in project.tags"
            :key="tag.id"
            :href="tag.url"
            class="project-card__tag link"
            >{{ tag.title }}</a
          >
        </div>
      </div>
      <CircleButton :link="project.url" size="big" />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectBigCard",
  props: {
    project: {
      id: {
        type: Number,
        required: true,
      },
      image: {
        type: String,
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
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  },
};
</script>

<style scoped>
.project-card__image-block {
  display: block;
  background: #c4c4c4;
  overflow: clip;
  margin-bottom: 28px;
  aspect-ratio: 1 / 1.04;
}

.project-card:nth-of-type(1) .project-card__image-block {
  border-radius: 0 80px 0 0;
}

.project-card:nth-of-type(2) .project-card__image-block {
  border-radius: 80px 0 0 0;
}

.project-card:nth-of-type(3) .project-card__image-block {
  border-radius: 0 0 80px 0;
}

.project-card:nth-of-type(4) .project-card__image-block {
  border-radius: 0 0 0 80px;
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
}

.project-card__tag:not(.project-card__tag:last-of-type)::after {
  content: "/";
  margin-left: 7px;
  margin-right: 7px;
}
</style>
