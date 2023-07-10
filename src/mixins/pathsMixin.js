import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("paths", [
      "imageDir",
      "articlesImageDir",
      "projectsImageDir",
      "bannersImageDir",
    ]),
  },
};
