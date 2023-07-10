import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("articles", ["articles"]),
    ...mapGetters("articles", [
      "getAllArticles",
      "getAllArticlesWithFirstArticleByIndex",
      "getArticles",
      "getArticle",
      "getLastArticle",
      "getLastArticleShortContent",
      "getCountArticles",
      "getArticlesWithTag",
    ]),
  },
  methods: {
    ...mapMutations("articles", ["fetchArticlesFromApi"]),
  },
  created() {
    if (this.getCountArticles === 0) {
      console.log("Getting articles from api");
      this.fetchArticlesFromApi();
    }
  },
};
