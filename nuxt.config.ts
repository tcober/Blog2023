// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          defer: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-ZJ8DPDM2QV",
          async: true,
        },
      ],
    },
  },
  //eslint-disable-next-line @typescript-eslint/no-var-requires
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
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
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
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
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
