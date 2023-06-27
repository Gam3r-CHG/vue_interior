<script setup>
import { defineProps } from "vue";
const props = defineProps({
  dateTime: {
    type: String,
    required: true,
  },
});

const formattedDateTime = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(Date.parse(props.dateTime));
</script>

<template>
  <time :datetime="dateTime" class="date-time">{{ formattedDateTime }}</time>
</template>

<style scoped>
.date-time {
  font-size: 16px;
  letter-spacing: 0.01em;
  text-transform: capitalize;
  color: var(--dimmedText);
}
</style>
