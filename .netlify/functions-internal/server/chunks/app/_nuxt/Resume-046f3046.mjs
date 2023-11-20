import { _ as __nuxt_component_2 } from './nuxt-img-af4057d1.mjs';
import { useSSRContext, resolveComponent, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from '../server.mjs';
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

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_img = __nuxt_component_2;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "interests mt-8 sm:mt-10" }, _attrs))} data-v-152e819c><div class="title" data-v-152e819c><h3 data-v-152e819c>Outside Influences</h3><div class="keyline" data-v-152e819c></div></div><div class="flex mb-6 justify-between" data-v-152e819c><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Star Wars",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/920bedd9b2/books.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Book Stores</h5></div><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Adventure Time",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/a20ef0821d/adventuretime.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Adventure Time</h5></div><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Chicago Bulls",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/2afa58ea6d/bulls.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Chicago Bulls</h5></div></div><div class="flex justify-between" data-v-152e819c><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Doctor Who",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/3161ae9365/drwho.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Doctor Who</h5></div><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Video Games",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/193ea499ba/games.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Video Games</h5></div><div class="w-1/3 px-3" data-v-152e819c>`);
  _push(ssrRenderComponent(_component_nuxt_img, {
    alt: "Virtual Reality",
    preload: "",
    class: "mb-2",
    src: "https://a-us.storyblok.com/f/1002617/x/502d68efdd/vr.svg"
  }, null, _parent));
  _push(`<h5 class="text-center" data-v-152e819c>Virtual Reality</h5></div></div></section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ResumeOutsideInterests.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-152e819c"]]);
const _sfc_main = {
  __name: "Resume",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Thomas Cober's Resume",
      meta: [
        {
          name: "description",
          content: "A json resume version of my resume."
        }
      ],
      bodyAttrs: {
        class: "resume"
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_2;
      const _component_ResumeOutsideInterests = __nuxt_component_1;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#0d112f]" }, _attrs))} data-v-42c20a37><main id="resume" class="bg-white max-w-4xl block relative mx-auto my-0 px-8 py-6" data-v-42c20a37><header class="resume-header flex flex-col sm:flex-row justify-start sm:items-center" data-v-42c20a37><div class="profile-pic mb-5 sm:mb-0 sm:mr-6" data-v-42c20a37>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        preload: "",
        src: "https://a-us.storyblok.com/f/1002617/800x800/3cde4e7148/profile-pic.jpg",
        alt: "profile-pic",
        provider: "storyblok",
        format: "webp",
        placeholder: "",
        quality: "70"
      }, null, _parent));
      _push(`</div><div class="flex flex-col sm:flex-row sm:items-end justify-start" data-v-42c20a37><div class="profile-header mr-6 mb-1 sm:mb-0" data-v-42c20a37><h1 class="mb-1" data-v-42c20a37>Thomas Cober</h1><h2 data-v-42c20a37>Senior Javascript Engineer</h2></div><div class="mb-0.5" data-v-42c20a37><p class="text-xs" data-v-42c20a37>tcober5@gmail.com</p><p class="text-xs" data-v-42c20a37>thomascober.com</p></div></div></header><div class="resume-content flex sm:flex-row flex-col-reverse" data-v-42c20a37><div class="left-column sm:w-1/2 sm:border-r-black sm:border-solid sm:border-r-2 sm:pr-8" data-v-42c20a37><div class="container work-container" data-v-42c20a37><div class="title" data-v-42c20a37><h3 data-v-42c20a37>Experience</h3><div class="keyline" data-v-42c20a37></div></div><section class="item" data-v-42c20a37><div class="section-header flex justify-between" data-v-42c20a37><h3 class="font-bold" data-v-42c20a37>RBC</h3><h5 class="italic" data-v-42c20a37><span class="startDate" data-v-42c20a37>02/2020</span><span class="endDate" data-v-42c20a37> - Present</span></h5></div><h4 data-v-42c20a37>Senior Developer</h4><p class="summary text-xs" data-v-42c20a37> Royal Bank of Canada Wealth Management helps people manage their financial future. </p><ul class="text-xs pl-7" data-v-42c20a37><li data-v-42c20a37>Contributed to an A+ Vue frontend</li><li data-v-42c20a37>Refactored and contributed to a Node middle tear</li></ul></section><section class="item" data-v-42c20a37><div class="section-header flex justify-between" data-v-42c20a37><h3 class="font-bold pull-left" data-v-42c20a37>SDG</h3><h5 class="italic pull-right" data-v-42c20a37><span class="startDate" data-v-42c20a37>05/2018</span><span class="endDate" data-v-42c20a37> - 09/2019</span></h5></div><h4 data-v-42c20a37>Contract Front End Developer</h4><p class="summary text-xs" data-v-42c20a37> Solution Design Group provides staffing augmentation to help companies all around the world meet their digital needs. </p><ul class="text-xs pl-7" data-v-42c20a37><li data-v-42c20a37>Built 2 enterprise sized web apps</li><li data-v-42c20a37>Learned how to be a great contractor</li></ul></section><section class="item" data-v-42c20a37><div class="section-header flex justify-between" data-v-42c20a37><h3 class="font-bold pull-left" data-v-42c20a37>Pediatric Home Service</h3><h5 class="italic pull-right" data-v-42c20a37><span class="startDate" data-v-42c20a37>04/2017</span><span class="endDate" data-v-42c20a37> - 05/2018</span></h5></div><h4 data-v-42c20a37>Front End Developer</h4><p class="summary text-xs" data-v-42c20a37> Pediatric Home Service helps severely disabled children get the medical help they need so they are able to live at home safely. </p><ul class="text-xs pl-7" data-v-42c20a37><li data-v-42c20a37> Built an ecommerce web app for delivering medical supplies </li><li data-v-42c20a37> Maintained and built several promotional Wordpress sites </li></ul></section><section class="item" data-v-42c20a37><div class="section-header flex justify-between" data-v-42c20a37><h3 class="font-bold pull-left" data-v-42c20a37>Iron Horse Interactive</h3><h5 class="italic pull-right" data-v-42c20a37><span class="startDate" data-v-42c20a37>10/2016</span><span class="endDate" data-v-42c20a37> - 04/2017</span></h5></div><h4 data-v-42c20a37>Front End Developer</h4><p class="summary text-xs" data-v-42c20a37> Iron Horse Interactive is a B2B marketing company focusing on the VR/AR industry. </p><ul class="text-xs pl-7" data-v-42c20a37><li data-v-42c20a37>Helped with marketing site development</li><li data-v-42c20a37>Installed analytics</li><li data-v-42c20a37>Made SEO optimizations</li></ul></section><section class="item" data-v-42c20a37><div class="section-header flex justify-between" data-v-42c20a37><h3 class="font-bold pull-left" data-v-42c20a37>Lytics</h3><h5 class="italic pull-right" data-v-42c20a37><span class="startDate" data-v-42c20a37>10/2015</span><span class="endDate" data-v-42c20a37> - 09/2016</span></h5></div><h4 data-v-42c20a37>Junior Developer</h4><p class="summary text-xs" data-v-42c20a37> Lytics is a marketing analytics customer data platform that consolidates data and uses AI to analyze that data. </p><ul class="text-xs pl-7" data-v-42c20a37><li data-v-42c20a37>Learned foundational developer skills</li><li data-v-42c20a37>Designed and programmed a new marketing site</li><li data-v-42c20a37>Designed and programmed promotional sites</li></ul></section></div><div class="container mt-3 sm:mt-0 education-container" data-v-42c20a37><div class="title" data-v-42c20a37><h3 data-v-42c20a37>Education</h3><div class="keyline" data-v-42c20a37></div></div><section class="item" data-v-42c20a37><div class="section-header" data-v-42c20a37><h3 class="font-bold pull-left" data-v-42c20a37>Portland State University</h3><h5 class="italic pull-right" data-v-42c20a37><span class="startDate" data-v-42c20a37>09/2010</span><span class="endDate" data-v-42c20a37> - 06/2013</span></h5></div><h4 class="tracking-wider text-xs" data-v-42c20a37> Bachelors in Graphic and Interactive Design </h4></section><section class="item" data-v-42c20a37><div class="section-header" data-v-42c20a37><h3 class="font-bold" data-v-42c20a37>Kishwaukee Community College</h3><h5 class="italic" data-v-42c20a37><span class="startDate" data-v-42c20a37>09/2010</span><span class="endDate" data-v-42c20a37> - 06/2009</span></h5></div><h4 class="tracking-wider text-xs" data-v-42c20a37> Associates in General Studies </h4></section></div>`);
      _push(ssrRenderComponent(_component_ResumeOutsideInterests, { class: "sm:hidden" }, null, _parent));
      _push(`</div><div class="right-column sm:w-1/2 sm:pl-8" data-v-42c20a37><div class="container" data-v-42c20a37><div class="title" data-v-42c20a37><h3 data-v-42c20a37>Skills</h3><div class="keyline" data-v-42c20a37></div></div><section class="flex flex-col" data-v-42c20a37><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Vue</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>HTML</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>CSS/SASS</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Angular 2+</h4><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Javascript</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Grunt</h4><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>PHP</h4><!--[-->`);
      ssrRenderList(2, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Adobe CC</h4><!--[-->`);
      ssrRenderList(2, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Storyblok</h4><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>CL Tools</h4><!--[-->`);
      ssrRenderList(4, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Git</h4><!--[-->`);
      ssrRenderList(4, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Jest</h4><!--[-->`);
      ssrRenderList(4, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Node</h4><!--[-->`);
      ssrRenderList(3, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Losing My Keys</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="flex flex-row mb-4" data-v-42c20a37><h4 class="w-44 font-light" data-v-42c20a37>Supporting My Team</h4><!--[-->`);
      ssrRenderList(5, (index) => {
        _push(ssrRenderComponent(_component_font_awesome_icon, {
          class: "text-base mr-1.5",
          icon: "fa-solid fa-circle"
        }, null, _parent));
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_ResumeOutsideInterests, { class: "hidden sm:block" }, null, _parent));
      _push(`</div></div></div></main></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Resume.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Resume = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-42c20a37"]]);

export { Resume as default };
//# sourceMappingURL=Resume-046f3046.mjs.map
