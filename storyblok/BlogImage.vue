<template>
  <nuxt-img
    provider="storyblok"
    format="webp"
    :src="props.blok.image.filename"
    placeholder
  />
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style scoped>
img {
  @apply mb-8 mt-4 max-w-4xl mx-auto w-full;
}
</style>
