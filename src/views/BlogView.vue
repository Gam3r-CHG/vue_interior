<template>
  <main class="main">
    <TopPageComponent image="articles_banner.webp" title="Articles & News" />
    <LatestPostComponent />
    <ArticlesComponent :page="1" :articlesPerPage="6" :showText="false" />
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
};
</script>
