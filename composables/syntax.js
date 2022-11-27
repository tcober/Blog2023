import { onMounted } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/gradient-dark.css";

// by convention, composable function names start with "use"
export function useSyntax() {
  hljs.registerLanguage("vue", xml);
  hljs.registerLanguage("javascript", javascript);
  hljs.registerLanguage("json", json);
  hljs.configure({
    languages: ["javascript", "vue", "json"],
  });

  // a composable can also hook into its owner component's
  onMounted(() => {
    hljs.highlightAll();
  });
}
