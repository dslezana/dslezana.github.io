import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "es-ES",
      title: "Diegui Lezana",
      description: "Mi blog personal",
    },
  },

  theme,

});
