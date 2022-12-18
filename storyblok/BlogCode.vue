<template>
  <div>
    <pre><code :class="`language-${props.blok.language}`" v-html="props.blok.code"></code></pre>
  </div>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>

<style>
.article pre {
  @apply mb-8 mt-4;
}

.article pre,
code {
  font-family: "PT Mono";
  @apply max-w-4xl mx-auto min-w-0;
}
</style>
