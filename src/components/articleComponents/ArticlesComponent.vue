<template>
  <section v-if="getCountArticles" class="articles wrapper">
    <ArticleTitleComponent :title="title" :text="showText ? text : ''" />

    <div class="articles__wrapper">
      <ArticleComponent
        v-for="article in currentArticles"
        :key="article.id"
        :article="article"
      ></ArticleComponent>
    </div>

    <PaginationComponent
      v-if="pagination && getCountArticles > articlesPerPage"
      :numberOfPages="countPages"
      :currentPage="currentPage"
      @pageChanged="paginationClickHandler"
    ></PaginationComponent>
  </section>
</template>

<script>
import ArticleTitleComponent from "@/components/articleComponents/ArticlesTitleComponent.vue";
import ArticleComponent from "@/components/articleComponents/ArticleCardComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import articlesMixin from "@/mixins/articlesMixin";
import { ref } from "vue";

export default {
  name: "ArticlesComponent",
  components: {
    ArticleTitleComponent,
    ArticleComponent,
    PaginationComponent,
  },
  mixins: [articlesMixin],
  props: {
    title: {
      type: String,
      default: "Articles & News",
    },
    text: {
      type: String,
      default:
        "It is a long established fact that a reader will be distracted by the of readable content of a initialPage when lookings at its layouts the points of using.",
    },
    showText: {
      type: Boolean,
      required: true,
    },
    pagination: {
      type: Boolean,
      default: true,
    },
    initialPage: {
      type: Number,
      default: 1,
    },
    articlesPerPage: {
      type: Number,
      default: 6,
    },
  },
  computed: {
    currentArticles() {
      return this.getArticles(this.articlesPerPage, this.getCurrentOffset);
    },
    getCurrentOffset() {
      return (this.currentPage - 1) * this.articlesPerPage;
    },
    countPages() {
      return Math.ceil(this.getCountArticles / this.articlesPerPage);
    },
  },
  data() {
    return {
      currentPage: ref(this.initialPage),
    };
  },
  created() {
    if (this.currentPage <= 0) {
      this.currentPage = 1;
    }

    if (this.currentPage > this.countPages) {
      this.currentPage = this.countPages;
      this.$router.push(`/blog/${this.currentPage}`);
    }
  },
  methods: {
    paginationClickHandler(selectedPageNumber) {
      this.currentPage = selectedPageNumber;
      this.$router.push(`/blog/${selectedPageNumber}`);
    },
  },
};
</script>

<style scoped>
.articles {
  margin-bottom: 96px;
}

.articles__wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 27px;
}

@media screen and (max-width: 768px) {
  .articles {
    margin-bottom: 48px;
  }
}
</style>
