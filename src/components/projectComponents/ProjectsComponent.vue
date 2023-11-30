<template>
  <section class="projects wrapper">
    <ProjectCategoriesFilter
      :categories="getAllCategories"
      :currentCategory="currentCategory"
      @categorySelected="filterClickHandler"
    />
    <div class="projects__wrapper">
      <ProjectCard
        v-for="project in currentProjects"
        :key="project.id"
        :project="project"
      >
      </ProjectCard>
    </div>
    <PaginationComponent
      v-if="
        getCountProjectsWithCategory(this.currentCategory) >
        this.projectsPerPage
      "
      :numberOfPages="countPages"
      :currentPage="currentPage"
      @pageChanged="paginationClickHandler"
    ></PaginationComponent>
  </section>
</template>

<script>
import projectsMixin from "@/mixins/projectsMixin";
import pathsMixin from "@/mixins/pathsMixin";
import PaginationComponent from "@/components/PaginationComponent.vue";
import categoriesMixin from "@/mixins/categoriesMixin";
import ProjectCard from "@/components/projectComponents/ProjectCard.vue";
import ProjectCategoriesFilter from "@/components/projectComponents/ProjectCategoriesFilter.vue";

export default {
  components: { ProjectCategoriesFilter, ProjectCard, PaginationComponent },
  mixins: [pathsMixin, projectsMixin, categoriesMixin],
  data() {
    return {
      projectsPerPage: 8,
      currentPage: 1,
      currentCategory: "",
    };
  },
  computed: {
    currentProjects() {
      return this.getProjectsWithCategory(
        this.currentCategory,
        this.projectsPerPage,
        this.getCurrentOffset
      );
    },
    getCurrentOffset() {
      return (this.currentPage - 1) * this.projectsPerPage;
    },
    countPages() {
      return Math.ceil(
        this.getCountProjectsWithCategory(this.currentCategory) /
          this.projectsPerPage
      );
    },
  },
  methods: {
    filterClickHandler(categoryName) {
      this.currentCategory = categoryName;
      if (this.currentPage > this.countPages) {
        this.currentPage = this.countPages;
      }
      this.$router.push(
        `/projects/${this.currentCategory}/${this.currentPage}`
      );
    },
    paginationClickHandler(selectedPageNumber) {
      this.currentPage = selectedPageNumber;
      this.$router.push(
        `/projects/${this.currentCategory}/${selectedPageNumber}`
      );
    },
  },
  created() {
    let routeCategory = this.$route.params.category;
    let routePageNumber = +this.$route.params.pageNumber;
    if (routeCategory && routePageNumber) {
      this.currentPage = routePageNumber;
      this.currentCategory = routeCategory.toLowerCase();
    }

    if (
      !this.categories.some(
        (category) => category.name === this.currentCategory.toLowerCase()
      )
    ) {
      this.currentCategory = this.getDefaultCategory.name;
    }

    if (this.currentPage <= 0) {
      this.currentPage = 1;
    }

    if (this.currentPage > this.countPages) {
      this.currentPage = this.countPages;
    }

    this.$router.push(`/projects/${this.currentCategory}/${this.currentPage}`);
  },
};
</script>

<style scoped>
.projects__wrapper {
  columns: 2;
  column-gap: 30px;
}

@media screen and (max-width: 600px) {
  .projects__wrapper {
    columns: 1;
    column-gap: 30px;
  }
}
</style>
