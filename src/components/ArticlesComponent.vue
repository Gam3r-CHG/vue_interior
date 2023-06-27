<template>
  <section v-if="countArticles" class="articles wrapper">
    <ArticleTitleComponent :title="title" :text="showText ? text : ''" />

    <div class="articles__wrapper">
      <ArticleComponent
        v-for="article in articles"
        :key="article.id"
        :article="article"
      ></ArticleComponent>
    </div>

    <PaginationComponent
      v-if="pagination && countArticles > articlesPerPage"
      :numberOfPages="countPages"
      :initialPage="initialPage"
      @pageChanged="paginationClickHandler"
    ></PaginationComponent>
  </section>
</template>

<script>
import { getArticles, getCountArticles } from "@/api/articles";
import { ref } from "vue";
import ArticleTitleComponent from "@/components/articleComponents/ArticlesTitleComponent.vue";
import ArticleComponent from "@/components/articleComponents/ArticleCardComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
  name: "ArticlesComponent",
  props: {
    title: {
      type: String,
      default: "Articles & News",
    },
    text: {
      type: String,
      default:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
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
  data() {
    return {
      currentPage: 0,
    };
  },
  setup(props) {
    const countArticles = getCountArticles();
    if (!countArticles) {
      return {
        countArticles: 0,
      };
    }
    const countPages = Math.ceil(countArticles / props.articlesPerPage);
    const articles = ref(
      getArticles(
        props.articlesPerPage,
        (props.initialPage - 1) * props.articlesPerPage
      )
    );

    return {
      articles,
      countArticles,
      countPages,
    };
  },
  computed: {
    getCurrentOffset() {
      return (this.currentPage - 1) * this.articlesPerPage;
    },
  },
  methods: {
    paginationClickHandler(selectedPageNumber) {
      if (selectedPageNumber === 0) {
        return;
      }

      this.currentPage = selectedPageNumber;
      this.updateArticles();
    },
    updateArticles() {
      this.articles = getArticles(this.articlesPerPage, this.getCurrentOffset);
    },
  },
  components: {
    ArticleTitleComponent,
    ArticleComponent,
    PaginationComponent,
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
</style>
