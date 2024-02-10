import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "es-ES",
      title: "Home",
      description: "Mi blog personal",
    },
  },

  theme,

});
