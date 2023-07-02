<template>
  <div class="tags">
    <h5 class="tags__title">Tags</h5>
    <ul class="tags__list">
      <li v-for="tag in tags" :key="tag.id" class="tag">
        <button
          class="button tag__button"
          :class="{ 'tag__button--selected': selectedTag === tag.id }"
          @click="tagClicked({ id: tag.id, name: tag.name })"
          :disabled="selectedTag === tag.id"
        >
          {{ tag.name }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tags: {
      type: Object,
      required: true,
    },
    initialTagId: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      selectedTag: this.initialTagId,
    };
  },
  methods: {
    tagClicked(clickedTag) {
      if (this.selectedTag === clickedTag.id) {
        return;
      }

      this.selectedTag = clickedTag.id;
      this.$emit("tagSelected", clickedTag);
    },
  },
};
</script>

<style scoped>
.tags {
  padding-left: 52px;
  position: sticky;
  top: 32px;
  height: max-content;
}
.tags__title {
  margin-bottom: 24px;
  color: #292f36;
  font-size: 25px;
  font-family: DM Serif Display, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.5px;
}
.tags__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
}
.tag__button {
  padding: 9px 30px;
  border-radius: 10px;
  background: #f4f0ec;
  color: #292f36;
  text-align: center;
  font-size: 18px;
  font-family: Jost, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 0.36px;
  box-shadow: unset;
}
.tag__button--selected {
  background-color: #292f36;
  color: #fff;
}
</style>
