<template>
  <div>
    <Hero
      :article="articles[0].content"
      :slug="articles[0].full_slug"
      :created="articles[0].published_at"
    />
    <div>
      <div class="grid md:grid-cols-2 gap-4 place-items-start">
        <ArticleCard
          v-for="article in articles.slice(1)"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
          :created="article.published_at"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
const articles = ref(null);
const storyblokApi = useStoryblokApi();
const { data } = await storyblokApi.get("cdn/stories", {
  version: "draft",
  starts_with: "blog",
  is_startpage: true,
});
articles.value = data.stories;
</script>
