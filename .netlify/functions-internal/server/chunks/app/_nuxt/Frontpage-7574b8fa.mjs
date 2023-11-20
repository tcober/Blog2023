import { _ as __nuxt_component_0$1 } from './nuxt-link-7821e608.mjs';
import { ref, withAsyncContext, unref, useSSRContext, computed, resolveDirective, mergeProps, withCtx, createVNode, openBlock, createBlock, createCommentVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_2 } from './nuxt-img-af4057d1.mjs';
import { _ as _export_sfc, P as Pe, b as useRuntimeConfig } from '../server.mjs';
import { u as useHead } from './index-6a088328.mjs';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main$3 = {
  __name: "FrontpageTitles",
  __ssrInlineRender: true,
  props: {
    title: String,
    teaser: String,
    hero: Boolean,
    renderedDate: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.hero) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-10 w-full text-center py-10 px-6" }, _attrs))}><h1 class="text-5xl sm:text-6xl drop-shadow-xl text-white pb-2 mx-auto max-w-screen-md">${ssrInterpolate(__props.title)}</h1><h2 class="pb-1 max-w-screen-md text-2xl sm:text-4xl drop-shadow-xl text-white font-light mx-auto">${ssrInterpolate(__props.teaser)}</h2><h3 class="sm:text-base text-xs drop-shadow-xl mt-1 text-white font-light mx-auto">${ssrInterpolate(__props.renderedDate)}</h3></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative z-10 w-full text-center py-6 bottom-2 px-6" }, _attrs))}><h2 class="drop-shadow-xl text-5xl sm:text-4xl text-white display-font font-bold mb-1 mx-auto">${ssrInterpolate(__props.title)}</h2><h3 class="pb-1 sm:max-w-lg text-2xl sm:text-xl drop-shadow-xl line-clamp-4 font-light text-white mx-auto">${ssrInterpolate(__props.teaser)}</h3><h4 class="text-xs drop-shadow-xl mt-1 text-white font-light mx-auto">${ssrInterpolate(__props.renderedDate)}</h4></div>`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FrontpageTitles.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = _sfc_main$3;
const _sfc_main$2 = {
  __name: "FrontpageHeroCard",
  __ssrInlineRender: true,
  props: { article: Object, slug: String, created: String },
  setup(__props) {
    let props = __props;
    const renderedDate = computed(() => {
      let dateArray = new Date(props.created).toDateString().split(" ");
      return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FrontpageTitles = __nuxt_component_1$1;
      const _component_nuxt_img = __nuxt_component_2;
      const _directive_editable = resolveDirective("editable");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/${__props.slug}/`
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.article)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-screen relative flex items-end justify-center my-4 mt-4 rounded-[5px] overflow-hidden"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FrontpageTitles, {
              title: __props.article.title,
              teaser: __props.article.teaser,
              "rendered-date": unref(renderedDate),
              hero: ""
            }, null, _parent2, _scopeId));
            if (__props.article.image.filename) {
              _push2(ssrRenderComponent(_component_nuxt_img, {
                preload: "",
                quality: "80",
                sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536pxx",
                src: __props.article.image.filename,
                alt: __props.article.image.alt,
                provider: "storyblok",
                format: "webp",
                class: "absolute top-0 left-0 z-0 w-full h-full object-cover",
                placeholder: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "h-screen relative flex items-end justify-center my-4 mt-4 rounded-[5px] overflow-hidden" }, [
                createVNode(_component_FrontpageTitles, {
                  title: __props.article.title,
                  teaser: __props.article.teaser,
                  "rendered-date": unref(renderedDate),
                  hero: ""
                }, null, 8, ["title", "teaser", "rendered-date"]),
                __props.article.image.filename ? (openBlock(), createBlock(_component_nuxt_img, {
                  key: 0,
                  preload: "",
                  quality: "80",
                  sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536pxx",
                  src: __props.article.image.filename,
                  alt: __props.article.image.alt,
                  provider: "storyblok",
                  format: "webp",
                  class: "absolute top-0 left-0 z-0 w-full h-full object-cover",
                  placeholder: ""
                }, null, 8, ["src", "alt"])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FrontpageHeroCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "FrontpageSubCard",
  __ssrInlineRender: true,
  props: { article: Object, slug: String, created: String },
  setup(__props) {
    let props = __props;
    const renderedDate = computed(() => {
      let dateArray = new Date(props.created).toDateString().split(" ");
      return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_FrontpageTitles = __nuxt_component_1$1;
      const _component_nuxt_img = __nuxt_component_2;
      const _directive_editable = resolveDirective("editable");
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: `/${__props.slug}/`,
        class: "w-full min-h-[500px] relative bg-[#fdf7f6] rounded-[5px] text-center overflow-hidden flex items-end justify-center"
      }, _attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.article)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FrontpageTitles, {
              title: __props.article.title,
              teaser: __props.article.teaser,
              "rendered-date": unref(renderedDate)
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_nuxt_img, {
              preload: "",
              quality: "70",
              sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px",
              src: __props.article.image.filename,
              alt: __props.article.image.alt,
              provider: "storyblok",
              format: "webp",
              class: "absolute top-0 left-0 z-0 w-full h-full object-cover",
              placeholder: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FrontpageTitles, {
                title: __props.article.title,
                teaser: __props.article.teaser,
                "rendered-date": unref(renderedDate)
              }, null, 8, ["title", "teaser", "rendered-date"]),
              createVNode(_component_nuxt_img, {
                preload: "",
                quality: "70",
                sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px",
                src: __props.article.image.filename,
                alt: __props.article.image.alt,
                provider: "storyblok",
                format: "webp",
                class: "absolute top-0 left-0 z-0 w-full h-full object-cover",
                placeholder: ""
              }, null, 8, ["src", "alt"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FrontpageSubCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$1;
const _sfc_main = {
  __name: "Frontpage",
  __ssrInlineRender: true,
  props: { blok: Object },
  async setup(__props) {
    let __temp, __restore;
    const articles = ref(null);
    const storyblokApi = Pe();
    const runtimeConfig = useRuntimeConfig();
    let local = runtimeConfig.local;
    const { data } = ([__temp, __restore] = withAsyncContext(() => storyblokApi.get("cdn/stories", {
      version: local === "true" ? "draft" : "public",
      starts_with: "blog",
      is_startpage: false
    })), __temp = await __temp, __restore(), __temp);
    articles.value = data.stories;
    useHead({
      title: "Thomas Cober's personal blog and what not",
      meta: [
        {
          name: "description",
          content: "Blogging about stuff and showing off things I have done for probably no one."
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FrontpageHeroCard = __nuxt_component_0;
      const _component_FrontpageSubCard = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-417123d2>`);
      _push(ssrRenderComponent(_component_FrontpageHeroCard, {
        article: unref(articles)[0].content,
        slug: unref(articles)[0].full_slug,
        created: unref(articles)[0].first_published_at
      }, null, _parent));
      _push(`<div data-v-417123d2><div class="grid md:grid-cols-2 gap-4 place-items-start" data-v-417123d2><!--[-->`);
      ssrRenderList(unref(articles).slice(1), (article) => {
        _push(ssrRenderComponent(_component_FrontpageSubCard, {
          key: article.uuid,
          article: article.content,
          slug: article.full_slug,
          created: article.first_published_at
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/Frontpage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Frontpage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-417123d2"]]);

export { Frontpage as default };
//# sourceMappingURL=Frontpage-7574b8fa.mjs.map
