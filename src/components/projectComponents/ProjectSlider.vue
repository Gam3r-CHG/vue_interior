<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Zoom, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import pathsMixin from "@/mixins/pathsMixin";

export default {
  mixins: [pathsMixin],
  data() {
    return {
      swiper: {},
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    images: {
      type: Array,
      require: true,
    },
  },
  methods: {
    zoomClickHandler() {
      this.swiper.zoom.toggle();
    },
    swiperInit(swiper) {
      this.swiper = swiper;
    },
  },
  setup() {
    return {
      modules: [Zoom, Pagination],
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <div
      class="project__slider-wrapper"
      style="
        --swiper-pagination-bullet-inactive-color: #f4f0ec;
        --swiper-pagination-bullet-inactive-opacity: 1;
        --swiper-pagination-color: #cda274;
        --swiper-pagination-bullet-size: 20px;
        --swiper-pagination-bullet-horizontal-gap: 9px;
      "
    >
      <i class="icon magnifier" @click="zoomClickHandler"></i>
      <div class="project__slider">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :loop="true"
          :zoom="true"
          :pagination="{ el: '.swiper-pagination', clickable: true }"
          @swiper="swiperInit"
          class=""
        >
          >
          <swiper-slide v-for="(image, index) in images" :key="index">
            <div class="swiper-zoom-container">
              <img
                :src="require('@/' + projectsImageDir + image)"
                class="project__image"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<style scoped>
.project__slider {
  height: 799px;
  border-radius: 70px;
  margin-bottom: 200px;
  display: flex;
  overflow: hidden;
  position: relative;
}

.magnifier {
  position: absolute;
  width: 132px;
  height: 132px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
}

.magnifier:hover {
  transform: translate(-50%, -50%) scale(1.2);
}

.project__slider-wrapper {
  position: relative;
}

.swiper-zoom-container {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.swiper-pagination {
  bottom: -50px;
}

.project__image {
  object-fit: cover;
}
</style>
