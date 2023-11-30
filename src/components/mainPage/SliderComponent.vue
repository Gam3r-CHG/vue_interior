<template>
  <section class="slider wrapper">
    <div class="slider__banner">
      <img
        data-id="2"
        class="slider__image"
        :src="require('@/' + bannersImageDir + image)"
      />
      <div class="slider__content">
        <h1 class="slider__title">{{ title }}</h1>
        <p class="slider__text">{{ text }}</p>
        <button v-if="buttonText" class="slider__button button">
          {{ buttonText }}<i class="icon icon-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import pathsMixin from "@/mixins/pathsMixin";

export default {
  name: "SliderComponent",
  mixins: [pathsMixin],
  data() {
    return {
      image: "main_banner.webp",
      title: "Let Your Home Be Unique",
      text: "There are many variations of the passages of lorem Ipsum fromavailable, majority.",
      buttonText: "Get Started",
      buttonLink: "",
    };
  },
};
</script>

<style scoped>
.slider__banner {
  position: relative;
  background: #f4f0ec;
  border-radius: 70px;
  overflow: clip;
  height: 758px;
}

.slider__image {
  object-fit: cover;
}

.slider__content {
  position: absolute;
  top: 0;
  width: 100%;
  max-width: 480px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 52px;
}

.slider__title {
  font-family: "DM Serif Display", serif;
  font-size: 65px;
  line-height: 125%;
  color: var(--darkGrey);
  margin-bottom: 18px;
}

.slider__text {
  color: #4d5053;
  margin-bottom: 21px;
}

@media screen and (max-width: 768px) {
  .slider__banner {
    height: 400px;
  }

  .slider__content {
    padding-left: 16px;
    padding-right: 16px;
  }

  .slider__title {
    font-size: 36px;
    line-height: 125%;
    color: var(--darkGrey);
    margin-bottom: 18px;
  }
}
</style>
