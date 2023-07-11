import { createStore } from "vuex";
import paths from "@/store/modules/paths";
import articles from "@/store/modules/articles";
import numberBlocks from "@/store/modules/numberBlocks";
import tags from "@/store/modules/tags";
import projects from "@/store/modules/projects";
import categories from "@/store/modules/categories";

export default createStore({
  modules: { paths, articles, numberBlocks, tags, projects, categories },
});
