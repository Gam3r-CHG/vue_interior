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
      <li v-for="pageNumber in numberOfPages" :key="pageNumber">
        <CircleButton
          @click.prevent="this.currentPage = pageNumber"
          :text="numberFormat(pageNumber)"
          :selected="pageNumber === currentPage"
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
    currentPage: function (to, from) {
      console.log(`Pagination change from ${from} to ${to}`);
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
  font-weight: 500;
  font-size: 16px;
  color: #292f36;
}
</style>
