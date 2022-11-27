<template>
  <main>
    <Hamburger class="fixed top-10 right-10" @show-menu="store.toggleMenu" />
    <Nav />
    <slot />
  </main>
</template>

<script setup>
import { useNavStore } from "~/store/nav";
let store = useNavStore();
</script>
