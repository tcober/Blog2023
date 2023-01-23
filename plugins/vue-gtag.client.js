// import VueGtag from "vue-gtag";

// export default defineNuxtPlugin((nuxtApp) => {
//   nuxtApp.vueApp.use(
//     VueGtag,
//     {
//       config: {
//         id: "G-ZJ8DPDM2QV",
//       },
//     },
//     nuxtApp.$router
//   );
// });

const gtagId = "G-ZJ8DPDM2QV";

export default defineNuxtPlugin(() => {
  // Create gtag function & define gtag deps (window.dataLayer array)
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());

  // Config with gtagId & send initial page view
  gtag("config", gtagId, { send_page_view: true });

  // Inject gtag function
  return { provide: { gtag } };
});
