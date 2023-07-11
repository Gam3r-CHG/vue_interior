import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("categories", ["categories"]),
    ...mapGetters("categories", ["getAllCategories", "getCountCategories"]),
    getDefaultCategory() {
      return this.categories[1];
    },
  },
  methods: {
    ...mapMutations("categories", ["fetchCategoriesFromApi"]),
  },
  created() {
    if (this.getCountCategories === 0) {
      console.log("Getting categories from api...");
      this.fetchCategoriesFromApi();
    }
  },
};
