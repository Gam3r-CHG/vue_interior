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

<template>
  <h4 class="article__subtitle">{{ content }}</h4>
</template>

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
</style>
