<template>
  <div>
    <!-- Make the hero card -->
    <FrontpageHeroCard
      :article="articles[0].content"
      :slug="articles[0].full_slug"
      :created="articles[0].first_published_at"
    />
    <h1 class="text-3xl font-bold text-center mt-8 mb-4">Latest articles</h1>
    <!-- Make the sub cards -->
    <div>
      <div class="grid md:grid-cols-2 gap-4 place-items-start">
        <FrontpageSubCard
          v-for="article in articles.slice(1)"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
          :created="article.first_published_at"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
// Define props
defineProps({ blok: Object });
// Make the articles reactive
const articles = ref(null);
// Get the storyblok api
const storyblokApi = useStoryblokApi();
// Get the runtime config
const runtimeConfig = useRuntimeConfig();
// Get the local config from the runtime config
let local = runtimeConfig.local;

// Fetch the data from the storyblok api
const { data } = await storyblokApi.get("cdn/stories", {
  version: local === "true" ? "draft" : "public",
  starts_with: "blog",
  is_startpage: false,
});
// Set the articles to the data
articles.value = data.stories;
// Set the head of the page
useHead({
  title: "Thomas Cober's personal blog and what not",
  meta: [
    {
      name: "description",
      content:
        "Blogging about stuff and showing off things I have done for probably no one.",
    },
  ],
});
</script>

<style scoped>
@import "~/assets/css/main.css";
</style>
