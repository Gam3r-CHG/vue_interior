import { getAllTags } from "@/api/tags";

export default {
  namespaced: true,
  state: {
    tags: [],
  },
  getters: {
    getAllTags(state) {
      return state.tags;
    },
    getCountTags(state) {
      return state.tags.length;
    },
  },
  mutations: {
    fetchTagsFromApi(state) {
      state.tags = getAllTags();
    },
  },
};
