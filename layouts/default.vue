<template>
  <main>
    <NavHamburger class="fixed top-10 right-10" @show-menu="store.toggleMenu" />
    <Nav />
    <div class="fix">
      <slot />
    </div>
  </main>
</template>

<script setup>
import { useNavStore } from "~/store/nav";
import { bootstrap } from "vue-gtag";
let store = useNavStore();
onMounted(() => {
  bootstrap();
});
</script>

<style scoped></style>
