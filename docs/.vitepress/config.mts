import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "note",
  description: "note",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "目录",
        items: [
          { text: "操作系统", link: "/操作系统/linux内核" },
          { text: "数据库", link: "/数据库/mysql" },
        ],
      },
    ],

    sidebar: {
      "/操作系统": [
        {
          text: "操作系统",
          items: [{ text: "Linux内核", link: "/操作系统/linux内核" }],
        },
      ],

      "/数据库": [
        {
          text: "数据库",
          items: [{ text: "MySQL", link: "/数据库/mysql" }],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
