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
import SliderComponent from "@/components/mainPage/SliderComponent.vue";
import ProjectsComponent from "@/components/projectComponents/Random4Projects.vue";
import NumbersComponent from "@/components/mainPage/NumbersComponent.vue";
import ArticlesComponent from "@/components/articleComponents/ArticlesComponent.vue";

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
