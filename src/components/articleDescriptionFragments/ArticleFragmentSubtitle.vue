<template>
  <h4 class="article__subtitle">{{ content }}</h4>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.article__subtitle {
  color: #292f36;
  font-size: 50px;
  font-family: DM Serif Display, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 20px;
}

@media screen and (max-width: 768px) {
  .article__subtitle {
    font-size: 24px;
  }
}
</style>
