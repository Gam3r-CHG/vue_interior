<template>
  <article class="article">
    <h4 class="article__title">
      {{ article.title }}
    </h4>
    <img
      class="article__top-image"
      :src="require('@/' + articlesImageDir + article.imgSrc)"
      :alt="article.imgAlt"
    />
    <div class="article__top">
      <DateTime :date-time="article.date" />
      <ul class="article__categories">
        <li
          v-for="(tag, index) in article.tags"
          :key="index"
          class="article__category"
        >
          <a class="article__category-link link">
            {{ tag }}
          </a>
        </li>
      </ul>
    </div>
    <component
      v-for="(fragment, index) in article.content"
      :key="index"
      :is="'ArticleFragment' + fragment.type"
      :content="fragment.content"
    />
    <div class="article__bottom-line"></div>
  </article>
</template>

<script>
import ArticleFragmentParagraph from "@/components/articleDescriptionFragments/ArticleFragmentParagraph.vue";
import ArticleFragmentImage from "@/components/articleDescriptionFragments/ArticleFragmentImage.vue";
import ArticleFragmentNumberList from "@/components/articleDescriptionFragments/ArticleFragmentNumberList.vue";
import ArticleFragmentSubtitle from "@/components/articleDescriptionFragments/ArticleFragmentSubtitle.vue";
import ArticleFragmentQuotation from "@/components/articleDescriptionFragments/ArticleFragmentQuotation.vue";
import pathsMixin from "@/mixins/pathsMixin";

export default {
  components: {
    ArticleFragmentQuotation,
    ArticleFragmentSubtitle,
    ArticleFragmentNumberList,
    ArticleFragmentImage,
    ArticleFragmentParagraph,
  },
  mixins: [pathsMixin],
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.article {
  margin-bottom: 96px;
  transition: opacity 0.3s ease;
}
.article__title {
  color: #292f36;
  font-size: 50px;
  font-family: DM Serif Display, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1px;
  margin-bottom: 21px;
}
.article__top-image {
  border: 1px solid #e7e7e7;
  border-radius: 62px;
  max-height: 539px;
  object-fit: cover;
}
.article__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0;
}
.article__categories {
  display: flex;
}
.article__category {
  color: #4d5053;
  font-size: 16px;
  font-family: Jost, serif;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.article__category:not(.article__category:last-of-type)::after {
  content: "/";
  margin-left: 8px;
  margin-right: 8px;
}

.article__bottom-line {
  border-bottom: 2px solid var(--brown);
  border-image-source: linear-gradient(
    to left,
    var(--lightGrey) 0%,
    var(--brown) 30%,
    var(--brown) 70%,
    var(--lightGrey) 100%
  );
  border-image-slice: 1;
}
</style>
