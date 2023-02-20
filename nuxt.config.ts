// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-ZJ8DPDM2QV",
          async: true,
        },
      ],
    },
  },
  buildEnvironment: process.env.BUILD_ENV,
  runtimeConfig: {
    public: {
      local: process.env.LOCAL,
    },
  },
  target: "static",
  css: [
    "~/assets/css/main.css",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  image: {
    storyblok: {
      baseURL: "https://a-us.storyblok.com",
    },
  },
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
    "@nuxtjs/google-fonts",
  ],
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
    ],
  },
  buildModules: ["@aceforth/nuxt-optimized-images"],
  googleFonts: {
    download: true,
    preload: true,
    display: "swap",
    families: {
      "Lilita+One": true,
      "PT+Mono": true,
      Merriweather: [300, 900],
    },
  },
  hooks: {
    "vite:extendConfig": (config, { isClient, isServer }) => {
      if (isClient) config.resolve.alias.vue = "vue/dist/vue.esm-bundler.js";
    },
  },
  nitro: {
    preset: "netlify",
    prerender: {
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },
});
