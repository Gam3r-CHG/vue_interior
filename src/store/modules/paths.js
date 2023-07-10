export default {
  namespaced: true,
  state: {
    imageDir: "assets/img/",
  },
  getters: {
    imageDir(state) {
      return state.imageDir;
    },
    articlesImageDir(state) {
      return state.imageDir + "articles/";
    },
    projectsImageDir(state) {
      return state.imageDir + "projects/";
    },
    bannersImageDir(state) {
      return state.imageDir + "banners/";
    },
  },
};
