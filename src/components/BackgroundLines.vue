<template>
  <div class="background-lines">
    <div class="background-lines__line"></div>
    <div class="background-lines__line"></div>
    <div class="background-lines__line"></div>
    <div class="background-lines__line"></div>
  </div>
</template>

<script>
export default {
  name: "BackgroundLines",
  props: {},
};
</script>

<style scoped>
.background-lines {
  position: fixed;
  z-index: -1;
  top: 0;
  padding: 0 16px;
  width: 100%;
  max-width: 1236px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  left: 50%;
}

.background-lines__line {
  border: 1px solid #e6e6e6;
  opacity: 0.5;
}
</style>
