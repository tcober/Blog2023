<template>
  <NuxtLink
    :to="'/' + slug"
    v-editable="article"
    class="w-full min-h-[500px] relative bg-[#fdf7f6] rounded-[5px] text-center overflow-hidden flex items-end justify-center"
  >
    <div class="relative z-10 w-full text-center py-6 bottom-2">
      <h2 class="drop-shadow-xl text-4xl text-white display font-bold">
        {{ article.title }}
      </h2>
      <h3 class="text-xl drop-shadow-xl line-clamp-4 font-light text-white">
        {{ article.teaser }}
      </h3>
      <h4 class="text-xs drop-shadow-xl mt-1 text-white font-light">
        {{ renderedDate }}
      </h4>
    </div>
    <img
      :src="article.image.filename + '/m/600x0'"
      :alt="article.image.alt"
      class="absolute top-0 left-0 z-0 w-full h-full object-cover"
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
