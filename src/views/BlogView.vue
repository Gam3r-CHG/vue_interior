<template>
  <main class="main">
    <TopPageComponent image="articles_banner.webp" title="Articles & News" />
    <LatestPostComponent />
    <ArticlesComponent
      :initialPage="initialPage"
      :articlesPerPage="6"
      :showText="false"
    />
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import ArticlesComponent from "@/components/ArticlesComponent.vue";
import LatestPostComponent from "@/components/articleComponents/LatestPostComponent.vue";

export default {
  name: "HomeView",
  components: {
    TopPageComponent,
    LatestPostComponent,
    ArticlesComponent,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    initialPage() {
      const routePageNumber = +this.$route.params.pageNumber;
      return isNaN(routePageNumber) || routePageNumber === 0
        ? 1
        : routePageNumber;
    },
  },
};
</script>
