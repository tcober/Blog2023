<script setup>
const runtimeConfig = useRuntimeConfig();
const { slug } = useRoute().params;
let local = runtimeConfig.local;
useCookie(undefined, { sameSite: true });

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: { lang: "en" },
});

const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: local === "true" ? "draft" : "public",
});
</script>

<template>
  <StoryblokComponent v-if="story" :blok="story.content" />
</template>
