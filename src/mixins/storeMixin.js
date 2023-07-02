import store from "@/store";

export default {
  computed: {
    imageDir() {
      return store.getters.imageDir;
    },
    articlesImageDir() {
      return store.getters.articlesImageDir;
    },
    projectsImageDir() {
      return store.getters.projectsImageDir;
    },
    bannersImageDir() {
      return store.getters.bannersImageDir;
    },
  },
};
