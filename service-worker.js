if(!self.define){let e,s={};const a=(a,f)=>(a=new URL(a+".js",f).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(f,i)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const c=e=>a(e,d),b={module:{uri:d},exports:r,require:c};s[d]=Promise.all(f.map((e=>b[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-1f37b890.js",revision:"cd5f1d91d6fa079d362f006c383aa60a"},{url:"assets/404.html-7689c21f.js",revision:"f9fdc907a146b05864713b9115c623fb"},{url:"assets/app-f698ad11.js",revision:"a053e0144e91ac55adb13649265aaacc"},{url:"assets/auto-5a6868c8.js",revision:"0e4085cbbd1b14379623b9235b3c9f13"},{url:"assets/Catalog-06e079cb.js",revision:"4d2c1fc5f4d8b4f4cbca4492ff137c60"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-03ed10d2.js",revision:"f0e73d917854a2c57e20e4c2e4c5ab01"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/how-to-install-termux-on-android.html-b0cffcfd.js",revision:"ca88f9f34085b30a8010f5e00cb5e31f"},{url:"assets/how-to-install-termux-on-android.html-b4a4d847.js",revision:"b03a5e0c0e74eafa3e93787e67aedcdc"},{url:"assets/how-to-install-termux-on-android.html-fc8b79c5.js",revision:"b03a5e0c0e74eafa3e93787e67aedcdc"},{url:"assets/how-to-install-termux-on-android.html-fd04668d.js",revision:"f7f167e0a96f69904b7e3b7a6f9e91a4"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-0b12bb93.js",revision:"8c3d15360ccba12e5ebd69809f6a4643"},{url:"assets/index.html-11e1d83a.js",revision:"17709e4b299cb4c168349fd0c8367758"},{url:"assets/index.html-17532b22.js",revision:"9d6e8bce5002e08df10af8ce81fa26e8"},{url:"assets/index.html-1bae2a81.js",revision:"65d866ea83aaf3b3cf11d278cfb0b5d7"},{url:"assets/index.html-26d7332a.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-3247b760.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-398542ed.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-40a5e1e8.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-49b9c064.js",revision:"ecb3177228b5f616544c9d5761422de9"},{url:"assets/index.html-4dcade5d.js",revision:"daa3f35752291cfc6f9a7d46433cc99c"},{url:"assets/index.html-588f32d5.js",revision:"57f0cb9e4e68454941b67c7cfb1d1685"},{url:"assets/index.html-600bc5d6.js",revision:"49cb549a9cd1d18df62b021cfba62ff0"},{url:"assets/index.html-62dc750c.js",revision:"e6f517bc17efa746dc469c7896ed9b99"},{url:"assets/index.html-6301b5a6.js",revision:"2eb56a14d566ff6b555d47efa310059f"},{url:"assets/index.html-6cf9bb3c.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-73e415c1.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-7694a60c.js",revision:"c7065d6c01e6ad966eb8917beb8a2e69"},{url:"assets/index.html-78022287.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-7fa5e2a0.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-81cd392d.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-921bcff0.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-92c467ea.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-99231e37.js",revision:"543415ef8061a7cec46ac0385decbf67"},{url:"assets/index.html-a9347f3b.js",revision:"5975b9ca8a335e89bc9ae3b5ce220150"},{url:"assets/index.html-a9643d4f.js",revision:"6b3b16447ef43a8e0342dbe21aa5694d"},{url:"assets/index.html-b423eb59.js",revision:"d1c723827be2735c8fcdc2c4beb72be7"},{url:"assets/index.html-be242b8c.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-c3b0ab6f.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d203a6a8.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d38a2a5e.js",revision:"75fccab6d02e39b1365b9cc66ed05f80"},{url:"assets/index.html-d58b83f2.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d6845357.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-dbd6b886.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-dc39fcc9.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-df306671.js",revision:"c1716ef0aa2d5f3bf33eb9c64cbc42b2"},{url:"assets/index.html-e085871d.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-e5bde3dd.js",revision:"c40c686ed8e98e22d44b10754b942956"},{url:"assets/index.html-e94d9a53.js",revision:"446f83c9905fc230cf6e55f6c15967e1"},{url:"assets/index.html-ed584e55.js",revision:"d1caf07e112e5f30569f4877a01b7ea1"},{url:"assets/index.html-f8e73b86.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/intro.html-1fa57e8c.js",revision:"62bae4170ac2bf37c3f9d00e01438c57"},{url:"assets/intro.html-5d9ba728.js",revision:"c9a29919a780e280d7e767cb9bfcd9c7"},{url:"assets/intro.html-c0510915.js",revision:"cdc94a29f0362d10eb04c5d054ba1afb"},{url:"assets/intro.html-ed17c2c9.js",revision:"62bae4170ac2bf37c3f9d00e01438c57"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-fa2551ae.js",revision:"4c76942b56764dd6d3785a300fb10a6b"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/pageview-9710ed1b.js",revision:"406a89d45b5be7ecc130a82128125c64"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/privacy.html-3c151d46.js",revision:"d390f88f2ae9e0a57c0a70d6806ccce6"},{url:"assets/privacy.html-50b18fcc.js",revision:"d53884e693d8367c32c3bb44fdce4e04"},{url:"assets/privacy.html-68054e49.js",revision:"09dc89a467276fe33b5ffd587ac6d4da"},{url:"assets/privacy.html-f0be3ef1.js",revision:"09dc89a467276fe33b5ffd587ac6d4da"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/SearchResult-2b93313f.js",revision:"49eb932cee3a8035ed3d7666af7197e3"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-50fffd33.css",revision:"05455ed7a55921ead2c68ac86ec31d08"},{url:"assets/vue-repl-8d0cd682.js",revision:"1cb0206424991f2689f1e875a92eaf7e"},{url:"assets/VuePlayground-729529d8.js",revision:"a76e34198b0f43f5d402c88d0bbcef59"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"0af53ac28eb97346e45440d09ad1c1f9"},{url:"article/index.html",revision:"d980f4f703fb087792247fa7b80b64a9"},{url:"blog/index.html",revision:"98ad4cbd67665372b033ff3b3e72b1c2"},{url:"blog/programming/index.html",revision:"ce9a21704eb0eaff482d9c61d28167a5"},{url:"blog/tutorial/how-to-install-termux-on-android.html",revision:"e0e4b4a91e1a9ab3026229e50f2f5640"},{url:"blog/tutorial/index.html",revision:"8ca630a6b54766a135ea57d58eaf3e15"},{url:"category/index.html",revision:"6f869bdc40b2a9e1780237189776684c"},{url:"game/index.html",revision:"b4fcc3fdc1d79b8b4890cc081d673fc5"},{url:"id/article/index.html",revision:"640cf0c2e2edca793dacccfd4a6dc20e"},{url:"id/blog/index.html",revision:"4590a75442c829126226754fc186fae6"},{url:"id/blog/programming/index.html",revision:"2e759d5fbfef7b24333f04c7dbb837c2"},{url:"id/blog/tutorial/how-to-install-termux-on-android.html",revision:"10c631ee24567ca0f84606f8a91b2e4d"},{url:"id/blog/tutorial/index.html",revision:"24e9e53af7e36728e02157ec078bd4c7"},{url:"id/category/index.html",revision:"c13733a341acc17849a2743e6cd7ca4d"},{url:"id/game/index.html",revision:"59f910bf5aa9bdec5f8d3b7c612c6072"},{url:"id/index.html",revision:"15b5bc6944c920b978a4f40fb071de8b"},{url:"id/intro.html",revision:"702639365b1cf3bf76619962db53f300"},{url:"id/privacy.html",revision:"c1c7a3870c86ac7d7792f6d9e9c3982e"},{url:"id/star/index.html",revision:"20f8c324ae9cf894618cece3c16829ab"},{url:"id/tag/index.html",revision:"e2c037ed629a1e877326450d8b3d98e7"},{url:"id/timeline/index.html",revision:"1c5ffcfa5363eb48ef9ad2977978f6dc"},{url:"index.html",revision:"0dea228df1f3d37c8d540a10a7129dcc"},{url:"intro.html",revision:"f01c44bed9153f82ffe7ec0ab638bed3"},{url:"privacy.html",revision:"c626f8cb649c6859f940f1732f68b69e"},{url:"star/index.html",revision:"a380dbd880e6bb6292a88bae11a625c7"},{url:"tag/index.html",revision:"99c1bd2b0e8d0ff9dd459830611af6df"},{url:"timeline/index.html",revision:"7ea6f8264f0a88b34145c1e3b5f4bfca"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/avatar.jpg",revision:"0b131caec8c9497335d61344d5b59d53"},{url:"assets/images/medias/bilibili.png",revision:"436b6816a680e80f985bde2f7adcd238"},{url:"assets/images/medias/qq.jpg",revision:"cf307fbffe6a1e2ff150e908683a8193"},{url:"assets/images/medias/qzone.png",revision:"4820be2d0307663947bb43522bde8390"},{url:"assets/images/medias/wechat.png",revision:"c67e82c43fd2989aa314723979776188"},{url:"assets/images/medias/weibo.png",revision:"522d90f51c624c024eef2b086758d4ce"},{url:"assets/images/wallpaper.jpg",revision:"05a80f51472175f1015a49c275ff6929"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
