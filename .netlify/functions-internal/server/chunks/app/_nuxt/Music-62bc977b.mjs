import { u as useHead } from './index-6a088328.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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
  __name: "Music",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Thomas Cober's music",
      // This is the meta tag for the page description
      meta: [
        {
          name: "description",
          content: "Some music from bands and solo projects from a long time ago."
        }
      ],
      // This is the body class
      bodyAttrs: {
        class: "music"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0d112f] relative" }, _attrs))} data-v-476087bb><h1 class="mx-auto text-6xl text-center py-10 text-white px-10 md:px-32 md:whitespace-nowrap" data-v-476087bb> MUSIC BY ME </h1><div class="mx-auto px-8 pb-48" data-v-476087bb><iframe width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/12351544&amp;color=%23000&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=false&amp;visual=false" data-v-476087bb></iframe></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Music.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Music = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-476087bb"]]);

export { Music as default };
//# sourceMappingURL=Music-62bc977b.mjs.map
