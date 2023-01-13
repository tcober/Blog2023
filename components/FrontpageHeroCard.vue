<template>
  <NuxtLink :to="`/${slug}/`" v-editable="article">
    <div
      class="min-h-[500px] min-h-screen relative flex items-end justify-center my-4 mt-4 rounded-[5px] overflow-hidden"
    >
      <FrontpageTitles
        :title="article.title"
        :teaser="article.teaser"
        :rendered-date="renderedDate"
        hero
      />

      <nuxt-img
        preload
        :src="article.image.filename"
        :alt="article.image.alt"
        provider="storyblok"
        format="webp"
        class="absolute top-0 left-0 z-0 w-full h-full object-cover"
        placeholder
      />
    </div>
  </NuxtLink>
</template>

<script setup>
let props = defineProps({ article: Object, slug: String, created: String });

const renderedDate = computed(() => {
  let dateArray = new Date(props.created).toDateString().split(" ");
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
});
</script>
