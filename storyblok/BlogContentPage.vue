<template>
  <div v-if="resolvedRichText" v-editable="blok">
    <nuxt-img
      preload
      v-if="blok.show_hero && blok.image.filename"
      :src="blok.image.filename"
      :alt="blok.image.alt"
      class="w-full h-[360px] lg:h-[450px] object-cover"
      placeholder
    />
    <div class="container px-5 mx-auto mb-12">
      <h1
        class="text-5xl sm:text-6xl font-bold mt-12 mb-5 mx-auto max-w-screen-md"
      >
        {{ blok.title }}
      </h1>
      <h2
        class="text-3xl sm:text-4xl text-[#1d243d] font-light mb-4 mx-auto max-w-screen-md"
      >
        {{ blok.teaser }}
      </h2>
      <div class="article">
        <Vue3RuntimeTemplate
          :key="blok.id"
          v-if="resolvedRichText"
          :template="resolvedRichText"
        ></Vue3RuntimeTemplate>
      </div>
    </div>
    <client-only>
      <disqus
        class="max-w-screen-md m-auto py-10 px-8"
        ref="disqus"
        v-bind:shortname="'thomascober-com'"
        :identifier="blok.title"
        lang="en"
      ></disqus>
    </client-only>
  </div>
</template>

<script setup>
import Vue3RuntimeTemplate from "vue3-runtime-template";
import { useSyntax } from "~/composables/syntax";
const props = defineProps({ blok: Object });

useHead({
  title: props.blok.title,
  meta: [{ name: "description", content: props.blok.teaser }],
  bodyAttrs: {
    class: "blog",
  },
});

const resolvedRichText = computed(() =>
  renderRichText(props.blok.content, {
    resolver: (component, blok) => {
      // console.log("I fired");
      switch (component) {
        case "blog-image":
          return `<component :blok='${JSON.stringify(blok)}'
                     is="${component}"></component>`;
        case "blog-code":
          return `<component :blok='${JSON.stringify(blok)}'
                     is="${component}"></component>`;
        default:
          return "Resolver not defined";
      }
    },
  })
);

useSyntax();
</script>

<style scoped>
.article {
  @apply mx-auto;
}

.article p {
  @apply pb-4 text-lg;
}

.article pre {
  @apply mb-8 mt-4;
}

.article pre,
code {
  font-family: "PT Mono";
  @apply max-w-4xl mx-auto min-w-0;
}

.article h2 {
  @apply text-3xl sm:text-4xl pb-6 pt-2;
}

.article .function_ {
  color: rgb(175, 211, 255) !important;
}

.article code {
  @apply bg-violet-800 text-yellow-100 px-2 py-1;
}

.fade-enter-active,
.fade-leave-active {
  @apply opacity-100 transition-opacity duration-1000 ease-in-out;
}

.v-enter-from,
.fade-leave-to {
  @apply opacity-0;
}
</style>
