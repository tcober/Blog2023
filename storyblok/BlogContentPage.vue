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
    <div class="container px-5 mx-auto mb-12 mt-12 mx-auto max-w-screen-md">
      <div class="mt-12 mb-5">
        <h1 class="text-5xl sm:text-6xl font-bold">
          {{ blok.title }}
        </h1>
        <p class="italic text-xs">
          created: {{ renderDate(dates.created) }} / last updated:
          {{ renderDate(dates.lastUpdated) }}
        </p>
      </div>
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
const props = defineProps({ blok: Object, dates: Object });

useHead({
  title: props.blok.title,
  meta: [{ name: "description", content: props.blok.teaser }],
  bodyAttrs: {
    class: "blog",
  },
});

const renderDate = (date) => {
  let dateArray = new Date(date).toDateString().split(" ");
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
};

const resolvedRichText = computed(() =>
  renderRichText(props.blok.content, {
    resolver: (component, blok) => {
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
