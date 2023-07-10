import { createStore } from "vuex";
import paths from "@/store/modules/paths";
import articles from "@/store/modules/articles";
import numberBlocks from "@/store/modules/numberBlocks";
import tags from "@/store/modules/tags";
import projects from "@/store/modules/projects";

export default createStore({
  modules: { paths, articles, numberBlocks, tags, projects },
});
