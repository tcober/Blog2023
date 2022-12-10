<template>
  <div v-editable="blok">
    <nuxt-img
      v-if="blok.show_hero && blok.image.filename"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="w-full h-[360px] lg:h-[450px] object-cover"
      placeholder
    />
    <div class="container px-5 sm:mx-auto mb-12">
      <h1 class="text-6xl font-bold mt-12 mb-5">
        {{ blok.title }}
      </h1>
      <h2 class="text-4xl text-[#1d243d] font-light mb-4">
        {{ blok.teaser }}
      </h2>
      <div v-html="resolvedRichText" class="my-2 article"></div>
    </div>
    <client-only>
      <disqus
        class="max-w-screen-md m-auto py-10"
        ref="disqus"
        v-bind:shortname="'thomascober-com'"
        :identifier="blok.title"
        lang="en"
      ></disqus>
    </client-only>
  </div>
</template>

<script setup>
import { useSyntax } from "~/composables/syntax.js";
const props = defineProps({ blok: Object });
const resolvedRichText = computed(() => renderRichText(props.blok.content));

useHead({
  title: props.blok.title,
  meta: [{ name: "description", content: props.blok.teaser }],
  bodyAttrs: {
    class: "blog",
  },
});

let codeBlocks = props.blok.content.content.find((content) => {
  return content.type === "code_block";
});

if (codeBlocks !== undefined) {
  useSyntax();
}
</script>
