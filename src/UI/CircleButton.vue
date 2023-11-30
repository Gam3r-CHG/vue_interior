<template>
  <button
    v-if="type === 'button'"
    class="project-card__link-arrow link-arrow"
    :class="{
      'link-arrow--big': size === 'big',
      'link-arrow--reverse': reverse,
      'link-arrow--disabled': disabled,
      'link-arrow--selected': selected,
    }"
    :disabled="disabled"
  >
    <i v-if="!text" class="icon icon-arrow"></i>{{ text }}
  </button>
  <router-link
    v-else
    class="project-card__link-arrow link-arrow"
    :class="{
      'link-arrow--big': size === 'big',
      'link-arrow--reverse': reverse,
      'link-arrow--selected': selected,
    }"
    :to="link"
  >
    <i v-if="!text" class="icon icon-arrow"></i>{{ text }}
  </router-link>
</template>

<script setup>
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

<style scoped>
.link-arrow {
  width: 52px;
  height: 52px;
  background-color: white;
  box-shadow: 0 0 0 1px var(--brown);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease-out;
  border: unset;
  cursor: default;
}

@media (hover: hover) and (pointer: fine) {
  .link-arrow:not(.link-arrow--disabled):not(.link-arrow--selected) {
    cursor: pointer;
  }

  .link-arrow:not(.link-arrow--disabled):not(.link-arrow--selected):hover {
    background: bisque;
    box-shadow: 0 0 0 1px var(--brown);
  }
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

.link-arrow--selected {
  background: var(--lightGrey);
  box-shadow: 0 0 0 1px transparent;
}

.link-arrow--big {
  width: 70px;
  height: 70px;
}

@media screen and (max-width: 1024px) {
  .link-arrow {
    width: 48px;
    height: 48px;
  }

  .link-arrow--big {
    width: 48px;
    height: 48px;
  }
}

@media screen and (max-width: 768px) {
  .link-arrow {
    width: 36px;
    height: 36px;
  }

  .link-arrow--big {
    width: 36px;
    height: 36px;
  }
}
</style>
