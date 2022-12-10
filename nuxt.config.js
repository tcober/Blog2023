// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  transition: "page",
  generate: {
    fallback: true,
  },
  target: "static",
  css: ["@/assets/css/main.css"],
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        apiOptions: { region: "us" },
        useApiClient: true,
      },
    ],
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore"],
      },
    ],
    "@nuxtjs/robots",
    "@nuxt/image-edge",
    "@nuxtjs/tailwindcss",
  ],
});
