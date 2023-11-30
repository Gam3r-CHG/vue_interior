<template>
  <footer class="footer wrapper">
    <section class="logos">
      <router-link to="/" class="footer-logo main-logo"
        ><i class="icon icon-logo"></i
      ></router-link>
      <p class="logos__text">
        It is a long established fact that a reader will be distracted lookings.
      </p>
      <div class="logos__social-links">
        <a class="social-link" href="#"><i class="icon icon-twitter"></i></a>
        <a class="social-link" href="#"><i class="icon icon-in"></i></a>
      </div>
    </section>
    <section class="pages">
      <h4 class="pages__title footer__title">Pages</h4>
      <ul class="pages__menu">
        <li class="menu-item">
          <router-link to="/" class="menu__link link">Home</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/projects" class="menu__link link"
            >Projects</router-link
          >
        </li>
        <li class="menu-item">
          <router-link to="/blog" class="menu__link link">Blog</router-link>
        </li>
      </ul>
    </section>
    <section class="contacts">
      <h4 class="contacts__title footer__title">Contact</h4>
      <p class="contacts__address">
        55 East Birchwood Ave. Brooklyn, New York 11201
      </p>
      <a class="contacts__email link" href="mailto:contact@interno.com"
        >contact@interno.com</a
      >
      <a class="contacts__phone link" href="tel:(123) 456 - 7890"
        >(123) 456 - 7890</a
      >
    </section>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
.footer {
  padding-bottom: 151px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.footer__title {
  font-family: "DM Serif Display", serif;
  font-size: 25px;
  line-height: 125%;
  color: var(--darkGrey);
  margin-bottom: 26px;
}

.footer-logo {
  margin-bottom: 18px;
}

.logos__text {
  letter-spacing: 0.01em;
  color: var(--dimmedText);
  margin-bottom: 31px;
}

.logos__social-links {
  display: flex;
  gap: 54px;
}

.pages {
  max-width: 393px;
  padding-left: 100px;
}

.pages__menu {
  line-height: 300%;
  letter-spacing: 0.01em;
  color: var(--dimmedText);
  display: flex;
  flex-direction: column;
}

.contacts {
  max-width: 258px;
  margin-left: auto;
}

.contacts__address,
.contacts__email,
.contacts__phone {
  letter-spacing: 0.01em;
  color: var(--dimmedText);
  margin-bottom: 30px;
  display: block;
}

@media screen and (max-width: 768px) {
  .footer {
    padding-bottom: 48px;
    grid-template-columns: 1fr 1fr;
  }

  .contacts {
    margin-top: 32px;
    margin-left: unset;
  }
}

@media screen and (max-width: 450px) {
  .footer {
    grid-template-columns: 1fr;
  }

  .pages {
    padding-left: unset;
    margin-top: 32px;
    margin-left: unset;
  }
}
</style>
