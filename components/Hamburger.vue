<template>
  <header class="z-50 h-10 w-12">
    <div class="nav-container">
      <input
        class="checkbox"
        type="checkbox"
        name="menu"
        id="menu"
        v-model="isMenuOn"
      />
      <div class="hamburger-lines">
        <span class="line line1 drop-shadow-xl"></span>
        <span class="line line2 drop-shadow-xl"></span>
        <span class="line line3 drop-shadow-xl"></span>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useNavStore } from "~/store/nav";
let store = useNavStore();
const emit = defineEmits(["showMenu"]);
const isMenuOn = computed({
  get() {
    return store.nav;
  },
  set() {
    emit("showMenu");
  },
});
</script>

<style>
.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  height: 36px;
  width: 32px;
  top: 12px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  display: block;
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 10px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 10px;
  background: rgb(206, 208, 249);
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0% 0%;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0% 100%;
  transition: transform 0.4s ease-in-out;
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}
</style>
