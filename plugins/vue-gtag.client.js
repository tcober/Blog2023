import VueGtag from "vue-gtag-next";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    property: {
      defer:true,
      id: "UA-43614936-1",
    },
  });
});
