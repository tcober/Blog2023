<script setup>
import { useSyntax } from "~/composables/syntax";
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
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onAfterEnter: (el) => {
      useSyntax();
    },
  },
});
</script>

<template>
  <PageTransition>
    <StoryblokComponent
      v-if="story"
      :blok="story.content"
      :dates="publishDates"
    />
  </PageTransition>
</template>
