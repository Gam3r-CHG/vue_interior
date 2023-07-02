<template>
  <p class="article__paragraph">{{ content }}</p>
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
.article__paragraph {
  color: #4d5053;
  font-size: 22px;
  font-family: Jost, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
  margin-bottom: 35px;
}
</style>
