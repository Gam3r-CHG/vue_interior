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
import SliderComponent from "@/components/SliderComponent.vue";
import ProjectsComponent from "@/components/Random4Projects.vue";
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
