<script setup>
const { slug } = useRoute().params;

const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: "draft",
});
console.log(story);
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
