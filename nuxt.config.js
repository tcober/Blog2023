// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "W5NN5IDb3ObQs4yhS66VrQtt",
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
