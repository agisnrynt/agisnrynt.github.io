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

  editLink: true,

  blog: {
    medias: {
      BiliBili: "https://example.com",
      Discord: "https://example.com",
      Email: "mailto:agisnuryanto@outlook.co.id",
      Facebook: "https://facebook.com/agisnrynt",
      GitHub: "https://example.com",
      Instagram: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Youtube: "https://example.com",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: "heading",

      footer: "Released under the MIT License",

      displayFooter: true,

      blog: {
        description: "A FrontEnd programmer",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
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
        selectLangAriaLabel: "Indonesia",
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
        editLink: "edit halaman ini",
      },

      routeLocales: {
        skipToContent: "ke halaman utama",
        notFoundMsg: ["Halaman yang anda tuju tidak tersedia", "Anda telah memasukkan tautan yang salah", "Tautan yang anda tuju mungkin telah dihapus"],
        home: "Ke Beranda",
        back: "Kembali",
        openInNewWindow: "Buka di tab baru",
      },
      plugins: {
        walineLocales: {
          nick: 'Nama pengguna',
          nickError: 'Nama pengguna tidak boleh kurang dari 3 huruf.',
          mail: 'E-mail',
          mailError: 'Konfirmasi alamat emailmu',
          Link: 'Alamat situs',
          optional: 'Opsional',
          placeholder: 'Masukkan Komentar disini...',
          sofa: 'Belum ada komentar',
          submit: 'Kirim',
          like: 'Suka',
          cancelLike: 'Batal menyukai',
          reply: 'Balas',
          cancelReply: 'Batalkan membalas',
          comment: 'Komentar',
          refresh: 'Perbarui',
          more: 'Muat lebih banyak...',
          preview: 'Pratinjau',
          emoji: 'Emoji',
          uploadImage: 'Unggah gambar',
          seconds: 'detik yang lalu',
          minutes: 'menit yang lalu',
          hours: 'jam yang lalu',
          days: 'hari yang lalu',
          now: 'baru saja',
          uploading: 'Mengunggah',
          login: 'Masuk',
          logout: 'Keluar',
          admin: 'Admin',
          sticky: 'Sticky',
          word: 'Kata',
          wordHint: 'Please input comments between $0 and $1 words!\n Current word number: $2',
          anonymous: 'Anonim',
          level0: 'Dwarves',
          level1: 'Hobbits',
          level2: 'Ents',
          level3: 'Wizards',
          level4: 'Elves',
          level5: 'Maiar',
          gif: 'GIF',
          gifSearchPlaceholder: 'Search GIF',
          profile: 'Profil',
          approved: 'Disetujui',
          waiting: 'Menunggu',
          spam: 'Spam',
          unsticky: 'Unsticky',
          oldest: 'Terlama',
          latest: 'Terbaru',
          hottest: 'Terpopuler',
          reactionTitle: 'Bagaimana menurutmu?',
        },
      },
  
      // navbar
      navbar: [
        { text: "Beranda", icon: "home", link: "/id/" },
        { text: "Linimasa", icon: "time", link: "/id/timeline/" },
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
        { text: "Peta situs", icon: "rss", link: "/sitemap" },
      ],

      // sidebar
      sidebar: "heading",

      footer: "Dirilis di bawah Lisensi MIT",

      displayFooter: true,

      // blogLocales: 
      blog: {
        description: "Halaman Bahasa indonesia",
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
