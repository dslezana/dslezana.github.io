import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
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

  plugins: [
    googleAnalyticsPlugin({
      id: 'G-MJKM2N7KEF',
    }),
  ],

});
