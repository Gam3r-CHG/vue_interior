<template>
  <div class="article-in-detail">
    <div class="articles-wrapper">
      <transition-group>
        <ArticleDescription
          v-for="article in articles"
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
import { getAllArticles, getArticlesWithTag } from "@/api/articles";
import { ref } from "vue";
import { getAllTags } from "@/api/tags";
import { useRoute } from "vue-router";

export default {
  data() {
    return {
      selectedTag: this.initialTagId,
      selectedTagName: "",
      isAllShowing: this.initialIsAllShowing,
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
      this.articles = getArticlesWithTag(this.selectedTagName);
      this.isAllShowing = false;
    },
  },
  setup() {
    const allTags = getAllTags();
    let firstSelectedTagId = 1;
    let firstSelectedTagName = allTags[0].name;

    const route = useRoute();
    const articleId = +route.params.articleId;

    let initialIsAllShowing = false;

    let allArticles = [];

    if (articleId === 0 || isNaN(articleId)) {
      allArticles = getArticlesWithTag(firstSelectedTagName);
    } else {
      allArticles = getAllArticles();
      const indexOfSelectedArticle = allArticles.findIndex(
        (article) => article.id === articleId
      );
      const selectedArticle = allArticles[indexOfSelectedArticle];
      allArticles.splice(indexOfSelectedArticle, 1);
      allArticles.unshift(selectedArticle);
      const firstTagInSelectedArticle = selectedArticle.tags[0];

      firstSelectedTagId = allTags.find(
        (tag) => tag.name === firstTagInSelectedArticle
      ).id;

      initialIsAllShowing = true;
    }

    return {
      articles: ref(allArticles),
      tags: ref(allTags),
      initialTagId: ref(firstSelectedTagId),
      initialIsAllShowing: ref(initialIsAllShowing),
    };
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
