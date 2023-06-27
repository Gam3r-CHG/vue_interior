<template>
  <section class="post wrapper">
    <h2 class="post__title">Latest Post</h2>
    <PostComponent :post="latestPost" />
  </section>
</template>

<script>
import PostComponent from "@/components/articleComponents/LatestPostContent.vue";
import { getLastArticle } from "@/api/articles";

export default {
  name: "LatestPostComponent",
  components: { PostComponent },
  props: {},
  setup() {
    const latestPost = getLastArticle();
    const content = latestPost.content;
    const paragraphs = content.filter((item) => item.type === "Paragraph");
    paragraphs.length = 2;
    latestPost.content = paragraphs;

    return {
      latestPost,
    };
  },
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
</style>
