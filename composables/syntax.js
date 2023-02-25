import { onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import css from "highlight.js/lib/languages/css";
import "highlight.js/styles/gradient-dark.css";
import debounce from "lodash/debounce";

// by convention, composable function names start with "use"
export function useSyntax() {
  hljs.registerLanguage("vue", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("json", json);
  hljs.registerLanguage("css", css);
  hljs.configure({
    languages: ["javascript", "vue", "json", "css"],
  });

  onMounted(() => {
    hljs.highlightAll();
  });
}
