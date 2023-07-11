<template>
  <header class="header wrapper">
    <router-link to="/" class="header__logo main-logo"
      ><i class="icon icon-logo"></i
    ></router-link>
    <nav>
      <ul class="header__menu">
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
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
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
</style>
