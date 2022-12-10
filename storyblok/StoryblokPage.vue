<template>
  <div v-editable="blok" class="px-4">
    <StoryblokComponent
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>

<script setup>
let props = defineProps({ blok: Object });
useHead({
  title: "Thomas Cober's personal blog and what not",
  meta: [
    {
      name: "description",
      content:
        "Blogging about stuff and showing off things I have done for probably no one.",
    },
  ],
  bodyAttrs: {
    class: "blog",
  },
});
</script>
