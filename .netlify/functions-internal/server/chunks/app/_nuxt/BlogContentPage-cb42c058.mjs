import { _ as __nuxt_component_2 } from './nuxt-img-af4057d1.mjs';
import { defineComponent, ref, createElementBlock, computed, resolveDirective, unref, mergeProps, useSSRContext } from 'vue';
import { u as useHead } from './index-6a088328.mjs';
import { C as Ce } from '../server.mjs';
import { ssrRenderAttrs, ssrGetDirectiveProps, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import Vue3RuntimeTemplate from 'vue3-runtime-template';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import '@unhead/shared';
import 'unhead';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';

const __nuxt_component_1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = {
  __name: "BlogContentPage",
  __ssrInlineRender: true,
  props: { blok: Object, dates: Object },
  setup(__props) {
    const props = __props;
    useHead({
      title: props.blok.title,
      meta: [{ name: "description", content: props.blok.teaser }],
      bodyAttrs: {
        class: "blog"
      }
    });
    const renderDate = (date) => {
      let dateArray = new Date(date).toDateString().split(" ");
      return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
    };
    const content = ref(null);
    const resolvedRichText = computed(
      () => Ce(props.blok.content, {
        resolver: (component, blok) => {
          switch (component) {
            case "blog-image":
              return `<component :blok='${JSON.stringify(blok)}'
                     is="${component}"></component>`;
            case "blog-code":
              return `<component :blok='${JSON.stringify(blok)}'
                     is="${component}"></component>`;
            default:
              return "Resolver not defined";
          }
        }
      })
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_2;
      const _component_client_only = __nuxt_component_1;
      const _directive_editable = resolveDirective("editable");
      if (unref(resolvedRichText)) {
        _push(`<div${ssrRenderAttrs(mergeProps(_attrs, ssrGetDirectiveProps(_ctx, _directive_editable, __props.blok)))}>`);
        if (__props.blok.show_hero && __props.blok.image.filename) {
          _push(ssrRenderComponent(_component_nuxt_img, {
            preload: "",
            quality: "90",
            sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px",
            src: __props.blok.image.filename,
            alt: __props.blok.image.alt,
            class: "w-full h-[360px] lg:h-[450px] object-cover",
            placeholder: ""
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="container px-5 mx-auto mb-12 mt-12 mx-auto max-w-screen-md"><div class="mt-12 mb-5"><h1 class="text-5xl sm:text-6xl font-bold">${ssrInterpolate(__props.blok.title)}</h1><p class="italic text-xs"> created: ${ssrInterpolate(renderDate(__props.dates.created))} / last updated: ${ssrInterpolate(renderDate(__props.dates.lastUpdated))}</p></div><h2 class="text-3xl sm:text-4xl text-[#1d243d] font-light mb-4 mx-auto max-w-screen-md">${ssrInterpolate(__props.blok.teaser)}</h2><div class="article">`);
        if (unref(resolvedRichText)) {
          _push(ssrRenderComponent(unref(Vue3RuntimeTemplate), {
            ref_key: "content",
            ref: content,
            key: __props.blok.id,
            template: unref(resolvedRichText)
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/BlogContentPage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=BlogContentPage-cb42c058.mjs.map
