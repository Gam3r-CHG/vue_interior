<template>
  <section class="top">
    <img alt="top-image" class="top__image" :src="image" />
    <div v-if="title" class="top__text-block">
      <h1 class="top__title">{{ title }}</h1>
      <ul class="top__breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="breadcrumbs__item">
          <router-link :to="$route.path">{{ $route.name }}</router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "TopPageComponent",
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
  },
};
</script>

<style scoped>
.top {
  position: relative;
  height: 356px;
}

.top__image {
  object-fit: cover;
}

.top__text-block {
  padding: 41px 78px;
  background-color: white;
  border-radius: 37px 37px 0 0;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.top__title {
  font-family: "DM Serif Display", serif;
  font-size: 50px;
  line-height: 125%;
  color: #292f36;
  margin: 0;
}

.top__breadcrumbs {
  display: flex;
  justify-content: center;
}

.breadcrumbs__item {
  letter-spacing: 0.01em;
  color: #4d5053;
}

.breadcrumbs__item:not(:last-of-type)::after {
  margin-left: 8px;
  margin-right: 8px;
  content: "/";
}
</style>
