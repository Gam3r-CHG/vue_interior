<template>
  <div class="post__content">
    <div class="post__image">
      <img
        :alt="post.imgAlt"
        :src="require('@/' + articlesImageDir + post.imgSrc)"
      />
    </div>
    <div class="post__text-block">
      <h3 class="post__post-title">
        {{ post.title }}
      </h3>
      <p
        v-for="(paragraph, index) in post.content"
        :key="index"
        class="post__text"
      >
        {{ paragraph.content }}
      </p>
      <div class="post__footer">
        <DateTime :dateTime="post.date"></DateTime>
        <CircleButton :link="'/article/' + post.id"></CircleButton>
      </div>
    </div>
  </div>
</template>

<script>
import pathsMixin from "@/mixins/pathsMixin";

export default {
  name: "LatestPostContent",
  mixins: [pathsMixin],
  props: {
    post: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      imgSrc: {
        type: String,
        required: true,
      },
      imgAlt: {
        type: String,
        required: true,
      },
      content: {
        type: Array,
        required: true,
      },
      url: {
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
.post__content {
  min-height: 522px;
  padding: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid #e7e7e7;
  filter: drop-shadow(0px 10px 30px rgba(255, 255, 255, 0.25));
  border-radius: 62px;
}

.post__image {
  background: #c4c4c4;
  border-radius: 50px;
  overflow: clip;
}

.post__image img {
  object-fit: cover;
}

.post__text-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 52px 16px 64px;
}

.post__post-title {
  font-family: "DM Serif Display", serif;
  font-size: 25px;
  line-height: 125%;
  letter-spacing: 0.02em;
  color: #292f36;
  margin-bottom: 22px;
}

.post__text {
  letter-spacing: 0.01em;
  color: #4d5053;
  margin-bottom: 36px;
}

.post__text:last-of-type {
  margin-bottom: 41px;
}

.post__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
