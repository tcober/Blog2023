<template>
  <nuxt-img
    preload
    quality="70"
    sizes="xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px"
    provider="storyblok"
    format="webp"
    :src="props.blok.image.filename"
    :alt="props.blok.image.alt"
    placeholder
  />
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
img {
  @apply mb-4 mt-4 max-w-4xl mx-auto w-full;
}
</style>
