import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: "UA-43614936-1",
      },
      bootstrap: false,
    },
    nuxtApp.$router
  );
});
