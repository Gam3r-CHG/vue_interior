<template>
  <header class="header wrapper">
    <router-link to="/" class="header__logo main-logo"
      ><i class="icon icon-logo"></i
    ></router-link>
    <nav>
      <ul
        v-on:click="menuClickHandler"
        class="header__menu"
        :class="menuOpened ? 'header__menu--opened' : 'header__menu--closed'"
      >
        <li>
          <router-link class="menu__link link link--dark-grey" to="/"
            >Home</router-link
          >
        </li>
        <li>
          <router-link to="/projects" class="menu__link link link--dark-grey"
            >Projects</router-link
          >
        </li>
        <li>
          <router-link class="menu__link link link--dark-grey" to="/blog"
            >Blog</router-link
          >
        </li>
        <li>
          <router-link class="menu__link link link--dark-grey" to="/article"
            >Articles</router-link
          >
        </li>
      </ul>
    </nav>
    <button class="button button--transparent burger" v-on:click="toggleMenu">
      <i class="icon burger-menu"></i>
    </button>
    <div class="background" v-if="menuOpened" v-on:click="toggleMenu"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuOpened: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpened = !this.menuOpened;
    },
    menuClickHandler() {
      if (this.menuOpened) {
        this.toggleMenu();
      }
    },
  },
};
</script>

<style scoped>
.close-button {
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 101;
}
.burger {
  display: none;
}

.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.2;
  z-index: 10;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 56px;
  margin-bottom: 56px;
}

.header__menu {
  display: flex;
  list-style: none;
  gap: 56px;
  font-size: 20px;
  line-height: 125%;
  color: var(--darkGrey);
}

@media screen and (max-width: 768px) {
  .burger {
    display: unset;
  }

  .header {
    margin-top: 16px;
    margin-bottom: 16px;
  }

  .header__menu {
    z-index: 100;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    background-color: gainsboro;
    padding: 24px 80px;
    transition: left 0.3s ease;
    border-bottom-right-radius: 24px;
  }

  .header__menu--closed {
    left: -500px;
  }

  .header__menu--opened {
    left: 0;
  }
}
</style>
