<template>
  <ul class="projects__filter">
    <li
      v-for="category in categories"
      :key="category.id"
      class="filter__item"
      :class="currentCategory === category.name ? 'filter__item--selected' : ''"
      @click="filterClickHandler(category.name)"
    >
      {{ category.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    categories: {
      type: Object,
      required: true,
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        require: true,
      },
    },
    currentCategory: {
      type: String,
      require: true,
    },
  },
  methods: {
    filterClickHandler(categoryName) {
      if (this.currentCategory !== categoryName) {
        this.$emit("categorySelected", categoryName);
      }
    },
  },
};
</script>

<style scoped>
.projects__filter {
  border-radius: 18px;
  border: 1px solid #cda274;
  display: flex;
  width: max-content;
  margin: 200px auto 61px;
  position: sticky;
  top: 16px;
  background-color: white;
  z-index: 1;
}
.filter__item {
  border-radius: 18px;
  background-color: #fff;
  padding: 26px 66px;
  transition: background-color 0.3s ease-in-out;
  text-transform: capitalize;
}
.filter__item:not(.filter__item--selected) {
  cursor: pointer;
}
.filter__item--selected {
  background-color: #cda274;
}
</style>
