export default defineNuxtPlugin(async (nuxtApp) => {
  const { VueGtag } = await import("vue-gtag-next");

  nuxtApp.vueApp.use(
    VueGtag,
    {
      property: {
        id: "UA-43614936-1",
      },
    },
    nuxtApp.vueApp.router
  );
});
