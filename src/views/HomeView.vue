<template>
  <main class="main">
    <SliderComponent />
    <ProjectsComponent />
    <NumbersComponent />
    <ArticlesComponent
      :articlesPerPage="3"
      :pagination="false"
      :showText="true"
    />
  </main>
</template>

<script>
// @ is an alias to /src
import SliderComponent from "@/components/SliderComponent.vue";
import ProjectsComponent from "@/components/ProjectsComponent.vue";
import NumbersComponent from "@/components/NumbersComponent.vue";
import ArticlesComponent from "@/components/ArticlesComponent.vue";

export default {
  name: "HomeView",
  components: {
    SliderComponent,
    ProjectsComponent,
    NumbersComponent,
    ArticlesComponent,
  },
};
</script>
