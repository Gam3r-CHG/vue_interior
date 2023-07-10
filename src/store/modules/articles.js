import { getAllArticles } from "@/api/articles";

export default {
  namespaced: true,
  state: {
    articles: [],
  },
  getters: {
    getAllArticles(state) {
      return state.articles;
    },
    getAllArticlesWithFirstArticleByIndex(state) {
      return function (articleId) {
        const allArticles = [...state.articles];
        const indexOfSelectedArticle = allArticles.findIndex(
          (article) => article.id === articleId
        );
        const selectedArticle = allArticles[indexOfSelectedArticle];
        allArticles.splice(indexOfSelectedArticle, 1);
        allArticles.unshift(selectedArticle);
        return allArticles;
      };
    },
    getArticle(state) {
      return function (articleId) {
        return state.articles.find((article) => article.id === articleId);
      };
    },
    getLastArticle(state) {
      return state.articles[state.articles.length - 1];
    },
    getLastArticleShortContent(state, getters) {
      const latestPost = getters.getLastArticle;
      const content = latestPost.content;
      const paragraphs = content.filter((item) => item.type === "Paragraph");
      paragraphs.length = 2;
      latestPost.content = paragraphs;
      return latestPost;
    },
    getArticles(state) {
      return function (amount, offset = 0) {
        return state.articles.slice(offset, offset + amount);
      };
    },
    getCountArticles(state) {
      return state.articles.length;
    },
    getArticlesWithTag(state) {
      return function (tagName) {
        return state.articles.filter((article) =>
          article.tags.includes(tagName)
        );
      };
    },
  },
  mutations: {
    fetchArticlesFromApi(state) {
      state.articles = getAllArticles();
    },
  },
};
