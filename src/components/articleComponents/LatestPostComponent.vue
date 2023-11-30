<template>
  <section class="post wrapper">
    <h2 class="post__title">Latest Post</h2>
    <PostComponent :post="getLastArticleShortContent" />
  </section>
</template>

<script>
import PostComponent from "@/components/articleComponents/LatestPostContent.vue";
import articlesMixin from "@/mixins/articlesMixin";

export default {
  name: "LatestPostComponent",
  mixins: [articlesMixin],
  components: { PostComponent },
};
</script>

<style scoped>
.post {
  margin-top: 200px;
  margin-bottom: 150px;
}

.post__title {
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #292f36;
  margin-bottom: 27px;
}

@media screen and (max-width: 768px) {
  .post {
    margin-top: 48px;
    margin-bottom: 48px;
  }

  .post__title {
    font-size: 36px;
  }
}
</style>
