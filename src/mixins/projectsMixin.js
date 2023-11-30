import { mapGetters, mapMutations, mapState } from "vuex";

export default {
  computed: {
    ...mapState("projects", ["projects"]),
    ...mapGetters("projects", [
      "getAllProjects",
      "getCountProjects",
      "getProjects",
      "getProject",
      "getLastProject",
      "getCountProjectsWithCategory",
      "getAllProjectsWithCategory",
      "getProjectsWithCategory",
      "getRandomProject",
      "getFourRandomProject",
    ]),
  },
  methods: {
    ...mapMutations("projects", ["fetchProjectsFromApi", "switchFavourite"]),
  },
  created() {
    if (this.getCountProjects === 0) {
      console.log("Getting projects from api...");
      this.fetchProjectsFromApi();
    }
  },
};
