import { getAllCategories } from "@/api/categories";

export default {
  namespaced: true,
  state: {
    categories: [],
  },
  getters: {
    getAllCategories(state) {
      return state.categories;
    },
    getCountCategories(state) {
      return state.categories.length;
    },
  },
  mutations: {
    fetchCategoriesFromApi(state) {
      state.categories = getAllCategories();
    },
  },
};
