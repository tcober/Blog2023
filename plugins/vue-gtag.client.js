import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { default: VueGtag } = await import("vue-gtag-next");

  nuxtApp.vueApp.use(VueGtag, {
    property: {
      id: "UA-43614936-1",
    },
  });
});
