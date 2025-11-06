import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/cloud-note/", // 设置站点的基础路径
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
          { text: "java", link: "/java/java标准库" },
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
          items: [
            { text: "MySQL", link: "/数据库/mysql" },
            { text: "高性能MySQL", link: "/数据库/高性能MySQL" },
            { text: "深入浅出存储引擎", link: "/数据库/深入浅出存储引擎" },
            { text: "Redis", link: "/数据库/redis" },
          ],
        },
      ],

      "/java": [
        {
          text: "java",
          items: [
            { text: "java标准库", link: "/java/java标准库" },
            { text: "jvm", link: "/java/jvm" },
          ],
        },
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },
});
