<template>
  <div
    :class="{
      'opacity-100 translate-y-0': data.isLoaded,
      'opacity-0 translate-y-4': !data.isLoaded,
    }"
    class="duration-1000 transition-all"
  >
    <slot></slot>
  </div>
</template>

<script setup>
let data = reactive({ isLoaded: false });

onMounted(() => {
  setTimeout(() => {
    data.isLoaded = true;
    console.log("Hello");
  }, 1);
});
</script>
