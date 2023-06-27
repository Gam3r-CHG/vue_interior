<template>
  <div
    class="articles__title-block"
    :class="{ 'articles__title-block--blog': !text }"
  >
    <h2 class="articles__title" :class="{ 'articles__title--left': !text }">
      {{ title }}
    </h2>
    <p v-show="text" class="articles__sub-title">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ArticlesTitleComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style scoped>
.articles__title-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 52px;
  padding-top: 96px;
}

.articles__title-block--blog {
  padding-top: 0;
  margin-bottom: 30px;
}

.articles__title {
  max-width: 811px;
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: var(--darkGrey);
  text-align: center;
}

.articles__title--left {
  align-self: flex-start;
}

.articles__sub-title {
  max-width: 811px;
  letter-spacing: 0.01em;
  color: #4d5053;
  text-align: center;
}
</style>
