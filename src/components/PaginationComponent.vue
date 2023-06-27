<template>
  <div class="articles__pagination-block">
    <ul class="pagination">
      <li class="pagination__item">
        <CircleButton
          type="button"
          :reverse="true"
          :disabled="currentPage === 1"
          @click.prevent="prevPage"
        ></CircleButton>
      </li>
      <li
        v-for="pageNumber in numberOfPages"
        :key="pageNumber"
        class="pagination__item"
        :class="{ 'pagination__item--selected': pageNumber === currentPage }"
      >
        <CircleButton
          @click.prevent="this.currentPage = pageNumber"
          :text="numberFormat(pageNumber)"
        ></CircleButton>
      </li>
      <li class="pagination__item">
        <CircleButton
          type="button"
          :disabled="currentPage === numberOfPages"
          @click.prevent="nextPage()"
        ></CircleButton>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    initialPage: {
      type: Number,
      required: true,
    },
    numberOfPages: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      currentPage: this.$props.initialPage,
    };
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.numberOfPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    numberFormat(number) {
      return number.toLocaleString("ru", {
        minimumIntegerDigits: 2,
      });
    },
  },
  watch: {
    currentPage: function () {
      this.$emit("pageChanged", this.currentPage);
    },
  },
};
</script>

<style scoped>
.pagination {
  padding-top: 51px;
  padding-bottom: 104px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

.pagination__item {
  font-weight: 500;
  font-size: 16px;
  color: #292f36;
}

.pagination__item:not(.pagination__item--selected) .link-arrow {
  background-color: white;
  box-shadow: 0 0 0 1px var(--brown);
}
</style>
