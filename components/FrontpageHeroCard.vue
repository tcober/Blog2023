<template>
  <NuxtLink :to="`/${slug}/`" v-editable="article">
    <div
      class="h-screen relative flex items-end justify-center my-4 mt-4 rounded-[5px] overflow-hidden"
    >
      <FrontpageTitles
        :title="article.title"
        :teaser="article.teaser"
        :rendered-date="renderedDate"
        hero
      />

      <nuxt-img
        preload
        quality="80"
        sizes="sm:640px md:768px lg:1024px xl:1500px"
        v-if="article.image.filename"
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
