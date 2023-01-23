<script setup>
const runtimeConfig = useRuntimeConfig();
const { slug } = useRoute().params;
let local = runtimeConfig.local;
useCookie(undefined, { sameSite: true });
const publishDates = reactive({ created: String, lastUpdated: String });

const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: local === "true" ? "draft" : "public",
});

publishDates.created = story.value.first_published_at;
publishDates.lastUpdated = story.value.published_at;

useHead({
  link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  htmlAttrs: { lang: "en" },
  title: story?.content?.title,
  meta: [
    {
      name: "description",
      content: story?.content?.teaser,
    },
  ],
});
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :dates="publishDates"
  />
</template>
