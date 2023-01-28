import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  { text: "Timeline", icon: "time", link: "/timeline/" },
  {
    text: "Category",
    icon: "categoryselected",
    prefix: "/",
    children: [
      {
        text: "Tutorial",
        icon: "creative",
        link: "blog/tutorial/",
      },
      {
        text: "Android Game",
        icon: "android",
        link: "game/",
      },
      {
        text: "Programming",
        icon: "template",
        link: "blog/programming/",
      },
    ],
  },
  { text: "Feed", icon: "rss", link: "https://agisnrynt.github.io/sitemap.xml" },
]);
