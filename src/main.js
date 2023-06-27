import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/router";
import store from "@/store";
import UIComponents from "@/UI";

const app = createApp(App);

UIComponents.forEach((el) => {
  app.component(el.__name, el);
});

app.use(store).use(router).mount("#app");
