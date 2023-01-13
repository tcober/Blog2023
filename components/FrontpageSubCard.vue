<template>
  <NuxtLink
    :to="`/${slug}/`"
    v-editable="article"
    class="w-full min-h-[500px] relative bg-[#fdf7f6] rounded-[5px] text-center overflow-hidden flex items-end justify-center"
  >

    <div class="relative z-10 w-full text-center py-6 bottom-2 px-6">
      <h2
        class="drop-shadow-xl text-5xl sm:text-4xl text-white display font-bold mb-1 mx-auto"
      >
        {{ article.title }}
      </h2>
      <h3
        class="pb-1 sm:max-w-lg text-3xl sm:text-xl drop-shadow-xl line-clamp-4 font-light text-white mx-auto"
      >
        {{ article.teaser }}
      </h3>
      <h4 class="sm:text-xs drop-shadow-xl mt-1 text-white font-light mx-auto">
        {{ renderedDate }}
      </h4>
    </div>

    <nuxt-img
      preload
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
