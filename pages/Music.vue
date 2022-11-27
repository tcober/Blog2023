<template>
  <div class="bg-black relative">
    <h1
      class="mx-auto text-6xl text-center py-10 text-white px-10 md:px-32 md:whitespace-nowrap"
    >
      MUSIC BY ME
    </h1>
    <div class="mx-auto px-8 pb-48">
      <iframe
        width="100%"
        height="200"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/12351544&color=%23000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=false"
      ></iframe>
    </div>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
  border: none;
  min-height: 75vh;
  @apply max-h-screen;
}
</style>
