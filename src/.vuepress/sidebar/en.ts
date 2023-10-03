import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    {
      text: "Programming",
      icon: "laptop-code",
      prefix: "blog/programming/",
      children: "structure",
      collapsible: true,
    },
    {
      text: "Tips",
      icon: "lightbulb",
      prefix: "blog/tips/",
      children: "structure",
      collapsible: true,
    },
  ],
});
