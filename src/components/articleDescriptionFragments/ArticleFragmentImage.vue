<script>
export default {
  props: {
    content: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
    },
  },
};
</script>

<template>
  <img class="article__image" :src="content.src" :alt="content.alt" />
</template>

<style scoped>
.article__image {
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  max-height: 365px;
  margin-bottom: 35px;
  object-fit: cover;
}
</style>
