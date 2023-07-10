<template>
  <img
    class="article__image"
    :src="require('@/' + articlesImageDir + content.src)"
    :alt="content.alt"
  />
</template>

<script>
import pathsMixin from "@/mixins/pathsMixin";

export default {
  mixins: [pathsMixin],
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

<style scoped>
.article__image {
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  max-height: 365px;
  margin-bottom: 35px;
  object-fit: cover;
}
</style>
