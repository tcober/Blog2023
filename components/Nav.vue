<template>
  <transition>
    <div
      v-if="store.nav"
      class="w-full sm:w-1/3 fixed bottom-0 top-0 bg-[#0d112f] z-30"
    >
      <nav class="h-full">
        <ul
          class="justify-center flex flex-col space-y-8 font-bold m-4 h-full text-center"
        >
          <li @click="store.closeMenu">
            <NuxtLink
              to="/"
              class="display text-5xl text-white hover:text-[#50b0ae]"
              >Blog</NuxtLink
            >
          </li>
          <li @click="store.closeMenu">
            <NuxtLink
              to="/music"
              class="display text-5xl text-white hover:text-[#50b0ae]"
              >Music</NuxtLink
            >
          </li>
          <li @click="store.closeMenu">
            <NuxtLink
              to="/resume"
              class="display text-5xl text-white hover:text-[#50b0ae]"
              >Resume</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </div>
  </transition>
</template>

<script setup>
import { useNavStore } from "~/store/nav";
let store = useNavStore();
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
  @apply left-0;
}

.v-enter-from,
.v-leave-to {
  transition: all 0.5s ease;
  @apply -left-full sm:-left-1/3;
}
</style>
