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
      "getProjectsWithTag",
      "getFourRandomProject",
    ]),
  },
  methods: {
    ...mapMutations("projects", ["fetchProjectsFromApi"]),
  },
  created() {
    if (this.getCountProjects === 0) {
      console.log("Getting projects from api...");
      this.fetchProjectsFromApi();
    }
  },
};
