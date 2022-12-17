// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  transition: "page",
  buildEnvironment: process.env.BUILD_ENV,
  runtimeConfig: {
    public: {
      local: process.env.LOCAL,
    },
  },
  generate: {
    fallback: true,
  },
  target: "static",
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
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
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
});
