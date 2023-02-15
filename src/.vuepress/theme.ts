import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  head: [
    ['meta', { name: 'google-site-verification', content:'8lVFhUiR8crIG720g91nh-p7X3GYinywBRUMdVJxNiY' }],
    ['meta', { name: 'msvalidate.01', content:'F1823D2F2EE21D91D830BEC4C68FBC95' }],
    ['meta', { name: 'yandex-verification', content:'2632c5647ee38f86' }],
  ],

  hostname: "https://agisnrynt.github.io",

  author: {
    name: "Agis Nuryanto",
    url: "https://agisnrynt.github.io/intro",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "agisnrynt/agisnrynt.github.io",

  repoLabel: "GitHub",

  repoDisplay: true,

  themeColor: {
    blue: "#2196f3",
    red: "#f26d6d",
    green: "#3eaf7c",
    orange: "#fb9b5f",
  },

  darkmode: "switch",

  fullscreen: true,

  docsDir: "src",

  docsBranch: 'master',

  lastUpdated: true,

  editLink: true,

  contributors: true,

  blog: {
    avatar: "/assets/images/avatar.jpg",
    roundAvatar: true,
    medias: {
      BiliBili: "/assets/images/medias/bilibili.png",
      Discord: "https://discordapp.com/users/715209992151498814",
      Email: "mailto:agisnuryanto@outlook.co.id",
      Facebook: "https://facebook.com/agisnrynt",
      GitHub: "https://github.com/agisnrynt",
      Instagram: "https://instagram.com/agisnrynt",
      Lines: "https://line.me/ti/p/YLmy7IbizW",
      Linkedin: "https://id.linkedin.com/in/agisnrynt",
      Pinterest: "https://pinterest.com/agisnrynt",
      QQ: "/assets/images/medias/qq.jpg",
      Qzone: "/assets/images/medias/qzone.png",
      Reddit: "https://www.reddit.com/user/agisnrynt/",
      Twitter: "https://twitter.com/agisnrynt",
      Wechat: "/assets/images/medias/wechat.png",
      Weibo: "/assets/images/medias/weibo.png",
      Youtube: "https://youtube.com/@agisnrynt",
      Zhihu: "https://www.zhihu.com/people/79-30-80-16",
      MrHope: [
        "https://example.com",
        '<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient gradientTransform="matrix(.2478 .78133 -2.54797 .63622 910.35 281.58)" gradientUnits="userSpaceOnUse" id="a" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".75" stop-color="#e33939"/><stop offset=".998" stop-color="#fff"/></linearGradient><linearGradient gradientTransform="matrix(.13814 .80797 2.55599 -.6032 34.087 494.369)" gradientUnits="userSpaceOnUse" id="b" x1="37.827" x2="159.988" y1="272.916" y2="274.63"><stop offset=".815" stop-color="#e33939"/><stop offset="1" stop-color="#fff"/></linearGradient></defs><path d="M135.637 588.067c-48.891-201.334 74.605-404.162 275.837-453.028 201.233-48.866 403.998 74.734 452.889 276.068 48.892 201.335-74.606 404.162-275.838 453.029-201.233 48.866-403.997-74.734-452.888-276.069Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M596.076 197.044c-3.342-56.09 56.897-77.831 89.017-51.361m-410.65 128.819c-22.753-51.377-86.256-43.07-102.659-4.816" fill="none" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M833.568 288.02c.05 18.046-12.584 30.699-21.346 32.211-8.762 1.512-17.031-1.099-18.584-1.341 0 0-61.363-6.103-105.627 6.921-44.265 13.026-87.04 47.387-94.637 51.892-6.627 3.928-29.112 7.697-44.462-12.938-15.351-20.636.024-41.526.024-41.526s12.685-18.279 40.771-35.123c28.088-16.844 24.624-13.226 52.326-25.696 15.247-6.865 43.319-14.186 67.429-17.069 25.193-3.011 46.348-1.384 57.673.769 22.165 4.212 28.632 5.93 39.169 9.229 12.451 3.898 27.214 14.516 27.264 32.671Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M558.351 345.632c-3.458-14.237 5.214-28.566 19.367-32.003 14.154-3.437 28.43 5.32 31.887 19.557 3.458 14.238-5.212 28.567-19.367 32.004-14.152 3.437-28.43-5.319-31.887-19.558Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M220.249 483.416c46.81-11.689 91.323-.467 99.42 25.064 8.098 25.532-23.286 55.706-70.097 67.393-46.811 11.689-91.323.467-99.42-25.064-8.097-25.532 23.286-55.706 70.097-67.393Z" fill="url(#a)" fill-rule="evenodd" opacity=".261"/><path d="M739.9 357.226c-46.959 11.082-81.367 41.469-76.853 67.871 4.514 26.402 46.241 38.821 93.198 27.738 46.958-11.081 81.366-41.467 76.853-67.869-4.514-26.403-46.241-38.821-93.198-27.74Z" fill="url(#b)" fill-rule="evenodd" opacity=".261"/><path d="M400.934 398.917c-.599 18.034-13.681 30.218-22.494 31.409-8.812 1.192-16.982-1.716-18.526-2.014 0 0-61.109-8.334-105.819 3.07-44.709 11.404-88.696 44.181-96.452 48.406-6.763 3.683-29.372 6.632-43.972-14.546-14.6-21.18 1.519-41.494 1.519-41.494s13.335-17.803 42.013-33.612c28.677-15.809 25.085-12.319 53.222-23.772 15.484-6.304 43.803-12.598 68.005-14.6 25.288-2.093 46.373.305 57.616 2.867 22 5.016 28.401 6.968 38.813 10.649 12.304 4.348 26.677 15.496 26.075 33.637Z" fill="#fff" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M129.05 445.546c-3.458-14.239 5.213-28.566 19.367-32.003 14.153-3.437 28.429 5.318 31.887 19.557 3.458 14.238-5.213 28.566-19.367 32.003-14.153 3.437-28.43-5.318-31.887-19.557Z" fill="#6d5e56" fill-rule="evenodd" stroke="#6d5e56" stroke-linecap="round" stroke-linejoin="round" stroke-width="6.268"/><path d="M424.381 696.386s64.427 13.646 101.996 5.757C640.653 678.146 690.8 521.894 690.8 521.894" fill="none" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="11"/><path d="M796.04 666.774s-10.734-44.165-41.405-11.348c-9.681 10.359-10.438 40.604-28.217 81.89-15.942 37.02-39.564 60.728-42.938 76.063-3.374 15.335.451 35.992 26.352 41.537 25.902 5.545 41.967-23.381 41.967-23.381l44.241-164.761Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/><path d="M793.337 664.734c-37.075 160.045-51.73 163.145-40.343 184.845 11.387 21.701 51.417 33.716 71.876-7.313 6.734-13.505-1.31-43.317-1.511-78.077-.307-53.06 16.865-86.111 10.403-98.1-15.332-28.452-39.377-5.875-40.425-1.355Z" fill="#fde68a" fill-rule="evenodd" stroke="#d08819" stroke-linecap="round" stroke-linejoin="round" stroke-width="10"/></svg>',
      ],

    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: "heading",

      footer: '<a href="/privacy" rel="noopener noreferrer " target="_blank">Privacy</a> |  <a href="/intro" rel="noopener noreferrer " target="_blank">About</a> | <a href="mailto:agisnuryanto@outlook.co.id" rel="noopener noreferrer " target="_blank">Contact</a></br>Theme by <a href="https://theme-hope.vuejs.press/" target="_blank">VuePress Theme Hope</a> | <a href="https://github.com/agisnrynt/agisnrynt.github.io/blob/master/LICENSE" rel="noopener noreferrer " target="_blank">MIT Licensed</a>',

      displayFooter: true,

      blog: {
        description: "Hi, I am the author of this blog.I love playing games and learn programming, and that's what this blog is for.</br></br>If you found this blog useful, share it on your social media.</br>You can also follow me on my social media links below",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Suggest an edit",
      },
    },
    "/id/": {
      outlookLocales: {
        themeColor: "Pilih warna",
        darkmode: "Mode gelap",
        fullscreen: "Layar penuh",
      },
      blogLocales: {
        article: "Artikel",
        articleList: "Daftar artikel",
        category: "Kategori",
        tag: "Tag",
        timeline: "Linimasa",
        timelineTitle: "Linimasa Postingan",
        all: "Semua",
        intro: "Bio",
        star: "Di pin",
        slides: "Halaman presentasi",
        encrypt: "Halaman yang dikunci",
      },
      paginationLocales: {
        prev: "Sebelumnya",
        next: "Selanjutnya",
        navigate: "Ke Halaman",
        action: "Pergi",
        errorText: "Halaman tidak tersedia",
      },
      encryptLocales: {
        iconLabel: "Halaman ini di kunci",
        placeholder: "Masukkan kata sandi",
        remember: "Ingat kata sandi",
        errorHint: "Kata sandi yang anda masukkan salah",
      },
      navbarLocales: {
        selectLangAriaLabel: "Indonesian",
        langName: "Bahasa",
      },

      metaLocales: {
        author: "penulis",
        date: "tanggal",
        origin: "dibuat",
        views: "dilihat",
        tag: "tag",
        category: "kategori",
        readingTime: "waktu untuk membaca",
        words: "jumlah kata",
        toc: "daftar isi",
        prev: "sebelumnya",
        next: "selanjutnya",
        lastUpdated: "diperbarui",
        contributors: "kontributor",
        editLink: "Sarankan pengeditan",
      },

      routeLocales: {
        skipToContent: "ke halaman utama",
        notFoundMsg: ["Halaman yang anda tuju tidak tersedia", "Anda telah memasukkan tautan yang salah", "Tautan yang anda tuju mungkin telah dihapus"],
        home: "Ke Beranda",
        back: "Kembali",
        openInNewWindow: "Buka di tab baru",
      },
  
      // navbar
      navbar: [
        { text: "Beranda", icon: "home", link: "/id/" },
        { text: "Linimasa", icon: "line", link: "/id/timeline/" },
        {
          text: "Kategori",
          icon: "categoryselected",
          prefix: "/id/",
          children: [
            {
              text: "Tutorial",
              icon: "creative",
              link: "blog/tutorial/", 
            },
            {
              text: "Game Android",
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
        { text: "Peta situs", icon: "rss", link: "https://agisnrynt.github.io/sitemap.xml" },
      ],

      // sidebar
      sidebar: "heading",

      footer: '<a href="/id/privacy" rel="noopener noreferrer " target="_blank">Privasi</a> |  <a href="/id/intro" rel="noopener noreferrer " target="_blank">Tentang</a> | <a href="mailto:agisnuryanto@outlook.co.id" rel="noopener noreferrer " target="_blank">Kontak</a> | <a href="https://github.com/agisnrynt/agisnrynt.github.io/blob/master/LICENSE" rel="noopener noreferrer " target="_blank">Lisensi</a>',

      displayFooter: true,

      // blogLocales: 
      blog: {
        description: "Hi, aku adalah penulis di blog ini. Aku suka bermain game dan belajar pemrograman, dan untuk itulah tujuan dari blog ini dibuat .</br></br>Jika kamu merasa blog ini bermanfaat, bagikan di media sosialmu.</br>Kamu juga bisa mengikutiku di link sosmed yang telah kucantumkan di bawah",
        intro: "/id/intro.html",
      },
    },
  },

  encrypt: {
    config: {
      "/blog/index.html": ["agis4915"],
      "/id/blog/index.html": ["agis4915"],
    },
  },

  plugins: {
    blog: true,

    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://waline-olwj29lg4-agisnrynt.vercel.app/",
    },

    // Disable features you don’t want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
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
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Agis",
            short_name: "Agis",
            url: "/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
