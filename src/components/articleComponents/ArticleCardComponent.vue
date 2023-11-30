<template>
  <transition appear>
    <article class="article">
      <router-link :to="'/article/' + article.id" class="article__image-block">
        <img
          :alt="article.alt"
          :src="require('@/' + articlesImageDir + article.imgSrc)"
          class="article__image"
        />
        <div class="article__image-description">
          {{ article.imgDescription }}
        </div>
      </router-link>
      <router-link :to="'/article/' + article.id" class="article__title">{{
        article.title
      }}</router-link>
      <div class="article__footer">
        <DateTime :date-time="article.date" />
        <CircleButton type="link" :link="'/article/' + article.id" />
      </div>
    </article>
  </transition>
</template>

<script>
import pathsMixin from "@/mixins/pathsMixin";

export default {
  name: "ArticleCardComponent",
  mixins: [pathsMixin],
  props: {
    article: {
      url: {
        type: String,
        required: true,
      },
      imgSrc: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      },
      imgDescription: {
        type: String,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        required: true,
      },
    },
  },
};
</script>

<style scoped>
.article {
  min-height: 521px;
  display: flex;
  flex-direction: column;
  padding: 21px 21px 37px 21px;
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  transition: opacity 0.3s ease-out, background-color 0.3s ease-out;
}

.article:hover,
.article:focus {
  background: var(--lightGrey);
}

.article:hover .link-arrow,
.article:focus .link-arrow {
  background-color: white;
}

.article__image-block {
  position: relative;
  margin-bottom: 21px;
  background: #eaeaea;
  border-radius: 45px 45px 0 0;
  overflow: clip;
  height: 290px;
  display: block;
}

.article__image {
  object-fit: cover;
}

.article__image-description {
  background: #ffffff;
  border-radius: 8px 8px 8px 0;
  padding: 4px 5px 8px 11px;
  position: absolute;
  left: 20px;
  bottom: 20px;
  font-size: 16px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: #4d5053;
}

.article__title {
  font-family: "DM Serif Display", serif;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: var(--darkGrey);
}

.article__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
}

@media screen and (max-width: 768px) {
  .article {
    min-height: 300px;
  }

  .article__title {
    font-size: 20px;
    margin-bottom: 16px;
  }
}
</style>
