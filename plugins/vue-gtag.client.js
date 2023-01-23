import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(
    VueGtag,
    {
      config: {
        id: "G-ZJ8DPDM2QV",
      },
      disableScriptLoad: true,
      deferScriptLoad: true,
    },
    nuxtApp.$router
  );
});
