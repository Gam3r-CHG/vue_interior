<template>
  <section class="numbers">
    <div class="numbers__blocks">
      <div
        v-for="numberBlock in numberBlocks"
        :key="numberBlock.id"
        class="numbers-block"
      >
        <div class="numbers-block__number">{{ numberBlock.number }}</div>
        <div class="numbers-block__description">{{ numberBlock.text }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "NumbersComponent",
  computed: {
    ...mapState("numberBlocks", ["numberBlocks"]),
  },
};
</script>

<style scoped>
.numbers {
  padding-top: 151px;
  padding-bottom: 151px;
  display: flex;
  justify-content: center;
  gap: 100px;
  background: var(--lightGrey);
}

.numbers__blocks {
  width: 100%;
  max-width: 1200px;
  display: flex;
}

.numbers-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 2px solid var(--brown);
  border-image-source: linear-gradient(
    to bottom,
    var(--brown) 0%,
    var(--brown) 75%,
    var(--lightGrey) 90%
  );
  border-image-slice: 1;
  flex-grow: 1;
  padding-left: 16px;
  padding-right: 16px;
}

.numbers-block:last-of-type {
  border-right-color: transparent;
}

.numbers-block__number {
  font-family: "DM Serif Display", serif;
  font-size: 85px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: var(--brown);
}

.numbers-block__description {
  letter-spacing: 0.01em;
  color: #4d5053;
  text-align: center;
  max-width: 140px;
}
</style>
