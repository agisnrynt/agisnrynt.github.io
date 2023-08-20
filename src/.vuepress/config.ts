import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  plugins: [
    searchProPlugin({
      // index all contents
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
  ],
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Agis Nuryanto",
      description: "A documentation blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Agis Nuryanto",
      description: "文档博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
