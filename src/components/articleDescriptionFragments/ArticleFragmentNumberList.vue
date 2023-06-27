<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>

<template>
  <ul class="article__number-list">
    <li
      v-for="(listItem, index) in content"
      :key="index"
      :data-category-id="index + 1"
      class="article__number-list-item"
    >
      {{ listItem }}
    </li>
  </ul>
</template>

<style scoped>
.article__number-list {
  list-style-type: decimal;
  margin-bottom: 44px;
}
.article__number-list-item {
  padding-right: 66px;
  margin-bottom: 32px;
  display: flex;
  color: #4d5053;
  font-size: 22px;
  font-family: Jost, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.22px;
}
.article__number-list-item::before {
  content: attr(data-category-id) " ";
  color: #cda274;
  font-size: 20px;
  font-family: DM Serif Display, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.4px;
  margin-right: 14px;
}
</style>
