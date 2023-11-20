import { unref, useSSRContext, computed, mergeProps, withCtx, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrIncludeBooleanAttr, ssrLooseContain } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc } from '../server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-7821e608.mjs';
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

const useNavStore = defineStore({
  id: "nav-store",
  state: () => {
    return {
      navOpen: false
    };
  },
  actions: {
    openMenu() {
      this.navOpen = true;
    },
    closeMenu() {
      this.navOpen = false;
    },
    toggleMenu() {
      this.navOpen = !this.navOpen;
    }
  },
  getters: {
    nav: (state) => state.navOpen
  }
});
const _sfc_main$2 = {
  __name: "NavHamburger",
  __ssrInlineRender: true,
  emits: ["showMenu"],
  setup(__props, { emit: __emit }) {
    let store = useNavStore();
    const emit = __emit;
    const isMenuOn = computed({
      get() {
        return store.nav;
      },
      set() {
        emit("showMenu");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "z-50 h-10 w-12" }, _attrs))} data-v-ae389212><div class="nav-container print:invisible" data-v-ae389212><input id="menu" class="checkbox" type="checkbox" name="menu"${ssrIncludeBooleanAttr(Array.isArray(unref(isMenuOn)) ? ssrLooseContain(unref(isMenuOn), null) : unref(isMenuOn)) ? " checked" : ""} aria-label="Menu" data-v-ae389212><div for="menu" class="hamburger-lines" data-v-ae389212><span class="line line1 drop-shadow-2xl" data-v-ae389212></span><span class="line line2 drop-shadow-2xl" data-v-ae389212></span><span class="line line3 drop-shadow-2xl" data-v-ae389212></span></div></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavHamburger.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ae389212"]]);
const _sfc_main$1 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useNavStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      if (unref(store).nav) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full sm:w-1/3 fixed bottom-0 top-0 bg-[#0d112f] z-30" }, _attrs))} data-v-e2a26785><nav class="h-full" data-v-e2a26785><ul class="justify-center flex flex-col space-y-8 font-bold m-4 h-full text-center" data-v-e2a26785><li data-v-e2a26785>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/",
          class: "display-font text-5xl text-white hover:text-[#50b0ae]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Blog`);
            } else {
              return [
                createTextVNode("Blog")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-e2a26785>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/music",
          class: "display-font text-5xl text-white hover:text-[#50b0ae]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Music`);
            } else {
              return [
                createTextVNode("Music")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li data-v-e2a26785>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/resume",
          class: "display-font text-5xl text-white hover:text-[#50b0ae]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Resume`);
            } else {
              return [
                createTextVNode("Resume")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></nav></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-e2a26785"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    let store = useNavStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavHamburger = __nuxt_component_0;
      const _component_Nav = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NavHamburger, {
        class: "fixed top-10 right-10",
        onShowMenu: unref(store).toggleMenu
      }, null, _parent));
      _push(ssrRenderComponent(_component_Nav, null, null, _parent));
      _push(`<div class="fix">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-9d05cd0f.mjs.map
