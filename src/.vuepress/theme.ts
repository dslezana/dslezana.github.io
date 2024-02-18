import { hopeTheme } from "vuepress-theme-hope";
import { esNavbar } from "./navbar/index.js";
import { esSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://dslezana.github.io",

  author: {
    name: "Diegui Lezana",
  },

  iconAssets: "fontawesome-with-brands",

  favicon: "/logo.png",
  
  darkmode: "toggle",

  docsDir: "src",

  blog: {
    medias: {
    },
  },
  
  contributors: false,
  
  locales: {
    "/": {
      // navbar
      navbar: esNavbar,

    //   sidebar
    //   sidebar: esSidebar,

      footer: "",

      displayFooter: true,

      blog: {
        description: "En palabras me desnudo, en palabras me sensibilizo, en palabras te invito a que me acompañes en esta aventura.",
        intro: "/bienvenido.html",
      },

      metaLocales: {
      },
    },

  },

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/es/demo/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: true,

    copyright: true,

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,

      codetabs: true,

      demo: true,

      figure: true,

      imgLazyload: true,
      imgSize: true,
      include: true,

      mark: true,

      playground: {
        presets: ["ts", "vue"],
      },

      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },

  },
});
