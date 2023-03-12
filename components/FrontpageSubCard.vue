<template>
  <NuxtLink
    :to="`/${slug}/`"
    v-editable="article"
    class="w-full min-h-[500px] relative bg-[#fdf7f6] rounded-[5px] text-center overflow-hidden flex items-end justify-center"
  >
    <FrontpageTitles
      :title="article.title"
      :teaser="article.teaser"
      :rendered-date="renderedDate"
    />

    <nuxt-img
      preload
      quality="70"
      sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px"
      :src="article.image.filename"
      :alt="article.image.alt"
      provider="storyblok"
      format="webp"
      class="absolute top-0 left-0 z-0 w-full h-full object-cover"
      placeholder
    />
  </NuxtLink>
</template>

<script setup>
let props = defineProps({ article: Object, slug: String, created: String });

const renderedDate = computed(() => {
  let dateArray = new Date(props.created).toDateString().split(" ");
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
});
</script>
