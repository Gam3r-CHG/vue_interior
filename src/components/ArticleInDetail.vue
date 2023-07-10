<template>
  <div class="article-in-detail">
    <div class="articles-wrapper">
      <transition-group>
        <ArticleDescription
          v-for="article in currentArticles"
          :key="article.id"
          :article="article"
        />
      </transition-group>
    </div>
    <ArticleTagsFilter
      :tags="tags"
      :initialTagId="isAllShowing === true ? 0 : selectedTag"
      @tagSelected="tagClickHandler"
    />
  </div>
</template>

<script>
import ArticleDescription from "@/components/articleComponents/ArticleFullDescription.vue";
import ArticleTagsFilter from "@/components/articleComponents/ArticleTagsFilter.vue";
import articlesMixin from "@/mixins/articlesMixin";
import tagsMixin from "@/mixins/tagsMixin";

export default {
  mixins: [articlesMixin, tagsMixin],
  data() {
    return {
      selectedTag: this.initialTagId,
      selectedTagName: "Bedroom",
      isAllShowing: false,
      currentArticleId: 1,
    };
  },
  components: {
    ArticleDescription,
    ArticleTagsFilter,
  },
  methods: {
    tagClickHandler(selectedTag) {
      this.selectedTag = selectedTag.id;
      this.selectedTagName = selectedTag.name;
      this.isAllShowing = false;
    },
  },
  computed: {
    currentArticles() {
      return this.isAllShowing
        ? this.getAllArticlesWithFirstArticleByIndex(this.currentArticleId)
        : this.getArticlesWithTag(this.selectedTagName);
    },
  },
  created() {
    const routeArticleId = +this.$route.params.articleId;

    if (routeArticleId) {
      if (routeArticleId > this.getCountArticles) {
        this.currentArticleId = this.getCountArticles;
        this.$router.push(`/article/${this.currentArticleId}`);
      } else {
        this.currentArticleId = routeArticleId;
      }
      this.isAllShowing = true;
    }
  },
};
</script>

<style scoped>
.article-in-detail {
  display: grid;
  grid-template-columns: 2fr 1fr;
  margin-top: 200px;
  margin-bottom: 96px;
}
</style>
