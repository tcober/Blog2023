<template>
  <div v-if="hero" class="relative z-10 w-full text-center py-10 px-6">
    <h1
      class="text-5xl sm:text-6xl drop-shadow-xl text-white pb-2 mx-auto max-w-screen-md"
    >
      {{ title }}
    </h1>
    <h2
      class="pb-1 max-w-screen-md text-3xl sm:text-4xl drop-shadow-xl text-white font-light mx-auto"
    >
      {{ teaser }}
    </h2>
    <h3 class="drop-shadow-xl mt-1 text-white font-light mx-auto">
      {{ renderedDate }}
    </h3>
  </div>
  <div v-else class="relative z-10 w-full text-center py-6 bottom-2 px-6">
    <h2
      class="drop-shadow-xl text-5xl sm:text-4xl text-white display font-bold mb-1 mx-auto"
    >
      {{ title }}
    </h2>
    <h3
      class="pb-1 sm:max-w-lg text-3xl sm:text-xl drop-shadow-xl line-clamp-4 font-light text-white mx-auto"
    >
      {{ teaser }}
    </h3>
    <h4 class="sm:text-xs drop-shadow-xl mt-1 text-white font-light mx-auto">
      {{ renderedDate }}
    </h4>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  teaser: String,
  hero: Boolean,
  renderedDate: String,
});
</script>
