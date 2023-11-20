import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Diego Lezana",
      description: "Mi blog personal",
    },
  },

  theme,

});
