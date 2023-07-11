<script>
import pathsMixin from "@/mixins/pathsMixin";

export default {
  mixins: [pathsMixin],
  data() {
    return {
      title: "404",
      text: "We are sorry, but the page you requested was not found",
      image: "404.webp",
    };
  },
};
</script>

<template>
  <section class="not-found wrapper">
    <div class="text-block">
      <h1 class="title">{{ title }}</h1>
      <p class="text">{{ text }}</p>
      <router-link to="/" class="button">
        Back To Home<i class="icon icon-arrow-right"></i>
      </router-link>
    </div>
    <div class="image-block">
      <img class="image" :src="require('@/' + imageDir + image)" />
    </div>
  </section>
</template>

<style scoped>
.not-found {
  display: flex;
}
.text-block {
  width: 50%;
  height: calc(100vh - 166px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.title {
  color: #cda274;
  font-family: DM Serif Display, serif;
  font-size: 250px;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
  margin-bottom: 15px;
  max-width: 569px;
}
.text {
  color: #292f36;
  font-family: DM Serif Display, serif;
  font-size: 35px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.35px;
  margin-bottom: 23px;
  max-width: 569px;
}

.image-block {
  position: absolute;
  left: 50%;
  border-radius: 0 0 0 353px;
  background-color: #ebebeb;
  overflow: hidden;
  bottom: 0;
  width: 50%;
  height: calc(100% - 166px);
}

.image {
  object-fit: cover;
}

.button {
  width: max-content;
}
</style>
