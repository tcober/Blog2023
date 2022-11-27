<template>
  <div v-editable="blok">
    <img
      v-if="blok.show_hero"
      :src="blok.image.filename + '/m/1600x0'"
      :alt="blok.image.alt"
      class="w-full h-[360px] lg:h-[450px] object-cover"
    />
    <div class="container px-3 sm:mx-auto mb-12">
      <h1 class="text-6xl font-bold mt-12 mb-4">
        {{ blok.title }}
      </h1>
      <h2 class="text-4xl text-[#1d243d] font-light mb-4">
        {{ blok.teaser }}
      </h2>
      <div v-html="resolvedRichText" class="my-2"></div>
    </div>
  </div>
</template>

<script setup>
import { useSyntax } from "~/composables/syntax.js";

const props = defineProps({ blok: Object });
const resolvedRichText = computed(() => renderRichText(props.blok.content));

//If code block exists use syntax highlighting
let result = props.blok.content.content.find((content) => {
  return content.type === "code_block";
});

if (result !== undefined) {
  useSyntax();
}
</script>
