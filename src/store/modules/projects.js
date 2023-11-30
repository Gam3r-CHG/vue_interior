import { getAllProjects } from "@/api/projects";
import { getRandomInt } from "@/utils/randomData";

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
        return state.projects.find((project) => project.id === projectId);
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
    getCountProjectsWithCategory(state) {
      return function (categoryName) {
        return state.projects.filter((project) =>
          project.categories.includes(categoryName)
        ).length;
      };
    },
    getAllProjectsWithCategory(state) {
      return function (categoryName) {
        return state.projects.filter((project) =>
          project.categories.includes(categoryName)
        );
      };
    },
    getProjectsWithCategory(state, getters) {
      return function (categoryName, amount, offset = 0) {
        return getters
          .getAllProjectsWithCategory(categoryName)
          .slice(offset, offset + amount);
      };
    },
    getRandomProject(state, getters) {
      const newRandomIndex = getRandomInt(0, getters.getCountProjects);
      return state.projects[newRandomIndex];
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
    },
  },
  mutations: {
    fetchProjectsFromApi(state) {
      state.projects = getAllProjects();
    },
    switchFavourite(state, projectId) {
      const projectIndex = state.projects.findIndex(
        (project) => project.id === projectId
      );
      state.projects[projectIndex].favourite =
        !state.projects[projectIndex].favourite;
    },
  },
};
