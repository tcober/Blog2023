<template>
  <NuxtLink :to="'/' + slug" v-editable="article">
    <div
      class="min-h-[500px] min-h-screen relative flex items-end justify-center my-4 mt-4 rounded-[5px] overflow-hidden"
    >
      <div class="relative z-10 w-full text-center py-10 px-6">
        <h1 class="text-5xl sm:text-6xl drop-shadow-xl text-white">
          {{ article.title }}
        </h1>
        <h2 class="text-3xl sm:text-4xl drop-shadow-xl text-white font-light">
          {{ article.teaser }}
        </h2>
        <h3 class="drop-shadow-xl mt-1 text-white font-light">
          {{ renderedDate }}
        </h3>
      </div>
      <img
        :src="article.image.filename"
        :alt="article.image.alt"
        class="absolute top-0 left-0 z-0 w-full h-full object-cover"
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
