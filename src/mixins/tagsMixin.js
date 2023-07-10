import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("tags", ["tags"]),
    ...mapGetters("tags", ["getAllTags", "getCountTags"]),
  },
  methods: {
    ...mapMutations("tags", ["fetchTagsFromApi"]),
  },
  created() {
    if (this.getCountTags === 0) {
      console.log("Getting tags from api...");
      this.fetchTagsFromApi();
    }
  },
};
