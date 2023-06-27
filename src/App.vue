<template>
  <BackgroundLines />
  <HeaderComponent />
  <transition>
    <router-view></router-view>
  </transition>
  <FooterComponent />
</template>

<style src="@/assets/styles/style.css"></style>

<script>
import { defineComponent } from "vue";
import BackgroundLines from "@/components/BackgroundLines.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default defineComponent({
  components: {
    BackgroundLines,
    HeaderComponent,
    FooterComponent,
  },
});
</script>
