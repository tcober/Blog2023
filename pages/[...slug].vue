<script setup>
import { useSyntax } from "~/composables/syntax";
const runtimeConfig = useRuntimeConfig();
const { slug } = useRoute().params;
let local = runtimeConfig.local;
useCookie(undefined, { sameSite: true });

// Get the story from Storyblok
const story = await useStoryblok(slug ? slug.join("/") : "main", {
  version: local === "true" ? "draft" : "public",
});

// Get the publish dates from Storyblok
const publishDates = reactive({ created: String, lastUpdated: String });
publishDates.created = story.value.first_published_at;
publishDates.lastUpdated = story.value.published_at;

// Define the page transition
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onAfterEnter: () => {
      useSyntax();
    },
  },
});
</script>

<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :dates="publishDates"
  />
</template>
