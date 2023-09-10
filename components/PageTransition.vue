<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup>
let data = reactive({ isLoaded: false });

onMounted(() => {
  setTimeout(() => {
    data.isLoaded = true;
  }, 1);
});

onBeforeUnmount(() => {
  data.isLoaded = false;
});
</script>
