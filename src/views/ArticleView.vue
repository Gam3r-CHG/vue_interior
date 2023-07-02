<template>
  <main class="main">
    <TopPageComponent image="article_banner.webp" />
    <ArticleInDetail class="wrapper"></ArticleInDetail>
  </main>
</template>

<script>
import TopPageComponent from "@/components/TopPageComponent.vue";
import ArticleInDetail from "@/components/ArticleInDetail.vue";

export default {
  name: "ArticleView",
  components: {
    ArticleInDetail,
    TopPageComponent,
  },
};
</script>
