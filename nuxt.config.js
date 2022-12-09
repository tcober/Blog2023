// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  transition: "page",
  generate: {
    fallback: true,
  },
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: { region: "us" },
        useApiClient: true,
        bridge: true,
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    "@nuxtjs/tailwindcss",
  ],
  target: "static",
  css: ["@/assets/css/main.css"],
});
