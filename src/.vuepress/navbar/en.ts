import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Timeline", icon: "time", link: "/timeline/" },
  {
    text: "Category",
    icon: "categoryselected",
    prefix: "/category/",
    children: [
      {
        text: "Tutorial",
        icon: "creative",
        link: "tutorial/",
      },
      {
        text: "Android Game",
        icon: "android",
        link: "game/",
      },
      {
        text: "Programming",
        icon: "template",
        link: "programming/",
      },
    ],
  },
  { text: "Feed", icon: "rss", link: "/sitemap.xml" },
]);
