import { getAllProjects } from "@/api/projects";

export default {
  namespaced: true,
  state: {
    projects: [],
  },
  getters: {
    getAllProjects(state) {
      return state.projects;
    },
    getProject(state) {
      return function (projectId) {
        return state.articles.find((project) => project.id === projectId);
      };
    },
    getLastProject(state) {
      return state.projects[state.projects.length - 1];
    },
    getProjects(state) {
      return function (amount, offset = 0) {
        return state.projects.slice(offset, offset + amount);
      };
    },
    getCountProjects(state) {
      return state.projects.length;
    },
    getProjectsWithTag(state) {
      return function (tagName) {
        return state.projects.filter((project) =>
          project.tags.includes(tagName)
        );
      };
    },
    getFourRandomProject(state, getters) {
      const randomIndexes = [];
      const randomProjects = [];

      while (randomIndexes.length < 4) {
        const newRandomIndex = getRandomIndex();
        if (!randomIndexes.includes(newRandomIndex)) {
          randomIndexes.push(newRandomIndex);
          randomProjects.push(state.projects[newRandomIndex]);
        }
      }

      return randomProjects;

      function getRandomIndex() {
        return getRandomInt(0, getters.getCountProjects);
      }

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
      }
    },
  },
  mutations: {
    fetchProjectsFromApi(state) {
      state.projects = getAllProjects();
    },
  },
};
