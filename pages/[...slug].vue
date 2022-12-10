<script setup>
const runtimeConfig = useRuntimeConfig();
const { slug } = useRoute().params;

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: { lang: "en" },
});
console.log(runtimeConfig.buildType);

const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: runtimeConfig.buildType === "local" ? "draft" : "public",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
