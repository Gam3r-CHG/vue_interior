<template>
  <div class="article__quotation-block">
    <i class="icon icon-quotation"></i>
    <p class="article__quotation-text">
      {{ content }}
    </p>
  </div>
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
.article__quotation-block {
  min-height: 267px;
  border-radius: 62px;
  background-color: var(--lightGrey);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 53px;
  margin-bottom: 27px;
}
.article__quotation-text {
  color: #cda274;
  text-align: center;
  font-size: 25px;
  font-family: DM Serif Display, serif;
  font-style: italic;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
  max-width: 345px;
}

@media screen and (max-width: 768px) {
  .article__quotation-block {
    min-height: 100px;
    padding: 24px;
  }

  .article__quotation-text {
    font-size: 18px;
    max-width: 200px;
  }
}
</style>
