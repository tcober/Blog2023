<template>
  <div>
    <pre><code ref="code-block" :class="`language-${props.blok.language}`" v-html="escape(props.blok.code)"></code></pre>
  </div>
</template>

<script setup>
import escape from "lodash/escape";
const props = defineProps({ blok: Object });
</script>
