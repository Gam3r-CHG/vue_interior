<script setup>
import { defineProps } from "vue";
defineProps({
  size: {
    type: String,
    validator(value) {
      return ["normal", "big"].includes(value);
    },
    default: "normal",
  },
  type: {
    type: String,
    validator(value) {
      return ["link", "button"].includes(value);
    },
    default: "link",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  reverse: {
    type: Boolean,
    default: false,
  },
  selected: {
    type: Boolean,
    default: false,
  },
  link: {
    type: String,
    default: "#",
  },
  text: {
    type: String,
  },
});
</script>

<template>
  <button
    v-if="this.$props.type === 'button'"
    class="project-card__link-arrow link-arrow"
    :class="{
      'link-arrow--big': size === 'big',
      'link-arrow--reverse': reverse,
      'link-arrow--disabled': disabled,
    }"
    :disabled="disabled"
  >
    <i v-if="!text" class="icon icon-arrow"></i>{{ text }}
  </button>
  <a
    v-else
    class="project-card__link-arrow link-arrow"
    :class="{
      'link-arrow--big': size === 'big',
      'link-arrow--reverse': reverse,
    }"
    :href="link"
  >
    <i v-if="!text" class="icon icon-arrow"></i>{{ text }}
  </a>
</template>

<style scoped>
.link-arrow {
  width: 52px;
  height: 52px;
  background: var(--lightGrey);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out;
  border: unset;
}

.link-arrow:hover,
.link-arrow:focus {
  background-color: white;
  box-shadow: 0 0 0 1px var(--brown);
}

.link-arrow:not(.link-arrow--disabled):active {
  transform: scale(0.95);
}

.link-arrow--reverse {
  transform: rotate(180deg);
}

.link-arrow--reverse:not(.link-arrow--disabled):active {
  transform: rotate(180deg) scale(0.95);
}

.link-arrow--disabled {
  transform: unset;
  opacity: 0.5;
  cursor: unset;
}

.link-arrow--reverse.link-arrow--disabled {
  transform: rotate(180deg);
}

.link-arrow--big {
  width: 70px;
  height: 70px;
}
</style>
