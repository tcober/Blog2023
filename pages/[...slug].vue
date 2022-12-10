<script setup>
useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: { lang: "en" },
});
const { slug } = useRoute().params;

const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: "draft",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
