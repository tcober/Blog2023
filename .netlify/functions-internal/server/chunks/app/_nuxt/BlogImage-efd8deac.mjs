import { _ as __nuxt_component_2 } from './nuxt-img-af4057d1.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
import './index-6a088328.mjs';
import '@unhead/shared';
import '../../nitro/netlify.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:url';
import 'ipx';
import 'unhead';
import 'vue-router';
import '@fortawesome/free-solid-svg-icons';

const _sfc_main = {
  __name: "BlogImage",
  __ssrInlineRender: true,
  props: { blok: Object },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_2;
      _push(ssrRenderComponent(_component_nuxt_img, mergeProps({
        preload: "",
        quality: "70",
        sizes: "xs:320px sm:640px md:768px lg:1024px xl:1280px xxl:1536px",
        provider: "storyblok",
        format: "webp",
        src: props.blok.image.filename,
        alt: props.blok.image.alt,
        placeholder: ""
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("storyblok/BlogImage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BlogImage = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-554fc348"]]);

export { BlogImage as default };
//# sourceMappingURL=BlogImage-efd8deac.mjs.map
