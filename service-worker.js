if(!self.define){let e,s={};const a=(a,d)=>(a=new URL(a+".js",d).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(d,i)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(s[f])return;let r={};const c=e=>a(e,f),t={module:{uri:f},exports:r,require:c};s[f]=Promise.all(d.map((e=>t[e]||c(e)))).then((e=>(i(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.html-1f37b890.js",revision:"cd5f1d91d6fa079d362f006c383aa60a"},{url:"assets/404.html-7689c21f.js",revision:"f9fdc907a146b05864713b9115c623fb"},{url:"assets/app-d615c1f7.js",revision:"4bdd445e6c03265e7ac8dcb42d5ae659"},{url:"assets/auto-5a6868c8.js",revision:"0e4085cbbd1b14379623b9235b3c9f13"},{url:"assets/Catalog-456ad427.js",revision:"e17dbcf6e91dd6a5e30fcc374b40bdc8"},{url:"assets/diagram-definition.0faef4c2-4dda171c.js",revision:"a60e9e560547fcf23096d6233149cdab"},{url:"assets/flowchart.parse-0007e96c.js",revision:"5fce68ee48d56167c2948760a4066c2d"},{url:"assets/framework-03ed10d2.js",revision:"f0e73d917854a2c57e20e4c2e4c5ab01"},{url:"assets/highlight.esm-a794bb63.js",revision:"0949b348e0e7d26440159b7c6c417cad"},{url:"assets/how-to-install-termux-on-android.html-55ddf89a.js",revision:"48e89be82099609002bbdf080f7df7c2"},{url:"assets/how-to-install-termux-on-android.html-aeae0839.js",revision:"8930571b73c45d0a1b812329351aae9e"},{url:"assets/how-to-install-termux-on-android.html-e87eab80.js",revision:"8930571b73c45d0a1b812329351aae9e"},{url:"assets/how-to-install-termux-on-android.html-fa50c576.js",revision:"cd98306765b100d36cf2323102309a12"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index-8764208e.js",revision:"42b6232acbe6be5d6ef5707e7f046345"},{url:"assets/index.html-03c06d33.js",revision:"2a60b1271c3a5aab4d7a3f4b700252fc"},{url:"assets/index.html-06486e8c.js",revision:"3b1fd8ad30852b7fc447687719b0bf8c"},{url:"assets/index.html-0ee9c4e2.js",revision:"5e962d68371380cebe1c80dee841df79"},{url:"assets/index.html-1bae2a81.js",revision:"65d866ea83aaf3b3cf11d278cfb0b5d7"},{url:"assets/index.html-1fb5d080.js",revision:"da1b021079c8ad14bae3a5fdd0a50539"},{url:"assets/index.html-26d7332a.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-3247b760.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-37d85cb5.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-398542ed.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-40a5e1e8.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-4391bea3.js",revision:"716d860e1070ec0196455c45f9daea1c"},{url:"assets/index.html-5804c319.js",revision:"5e962d68371380cebe1c80dee841df79"},{url:"assets/index.html-588f32d5.js",revision:"57f0cb9e4e68454941b67c7cfb1d1685"},{url:"assets/index.html-6301b5a6.js",revision:"2eb56a14d566ff6b555d47efa310059f"},{url:"assets/index.html-6cf9bb3c.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-7167168d.js",revision:"ecb51f5818ac9653a525018a8f98e667"},{url:"assets/index.html-73e415c1.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-7694a60c.js",revision:"c7065d6c01e6ad966eb8917beb8a2e69"},{url:"assets/index.html-78022287.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-7c0f8b88.js",revision:"bbaff11d56729b7346fb839307010fe1"},{url:"assets/index.html-7fa5e2a0.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-81cd392d.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-8884223a.js",revision:"c7786b14f69bc0f3bd7c06a4ea9c8aef"},{url:"assets/index.html-921bcff0.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-92c467ea.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-99231e37.js",revision:"543415ef8061a7cec46ac0385decbf67"},{url:"assets/index.html-a65f12d4.js",revision:"6e90c7bb324fa3f0bd3dfa3e2fedf408"},{url:"assets/index.html-a9347f3b.js",revision:"5975b9ca8a335e89bc9ae3b5ce220150"},{url:"assets/index.html-af25b4a5.js",revision:"3222ceef7a90e4e3053dc83a91df27f6"},{url:"assets/index.html-b423eb59.js",revision:"d1c723827be2735c8fcdc2c4beb72be7"},{url:"assets/index.html-bbe7da41.js",revision:"7bfe535fbbd05f783337707280760b63"},{url:"assets/index.html-be242b8c.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-c3b0ab6f.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d203a6a8.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d38a2a5e.js",revision:"75fccab6d02e39b1365b9cc66ed05f80"},{url:"assets/index.html-d58b83f2.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-d6845357.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-dbd6b886.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-dc39fcc9.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-df306671.js",revision:"c1716ef0aa2d5f3bf33eb9c64cbc42b2"},{url:"assets/index.html-e085871d.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/index.html-e94cf44e.js",revision:"97980b89360c6a74610546465e569e88"},{url:"assets/index.html-e94d9a53.js",revision:"446f83c9905fc230cf6e55f6c15967e1"},{url:"assets/index.html-ed6de892.js",revision:"be22c803b6d35d6ef2bb4658368ad230"},{url:"assets/index.html-f060c82e.js",revision:"e8784b230d6241988a0dc721b4ae5eda"},{url:"assets/index.html-f8e73b86.js",revision:"3728d0835f6ba752879df20dff162de5"},{url:"assets/intro.html-1fa57e8c.js",revision:"62bae4170ac2bf37c3f9d00e01438c57"},{url:"assets/intro.html-5d9ba728.js",revision:"c9a29919a780e280d7e767cb9bfcd9c7"},{url:"assets/intro.html-c0510915.js",revision:"cdc94a29f0362d10eb04c5d054ba1afb"},{url:"assets/intro.html-ed17c2c9.js",revision:"62bae4170ac2bf37c3f9d00e01438c57"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/league-gothic-38fcc721.ttf",revision:"91295fa87df918411b49b7531da5d558"},{url:"assets/league-gothic-5eef6df8.woff",revision:"cd382dc8a9d6317864b5810a320effc5"},{url:"assets/league-gothic-8802c66a.eot",revision:"9900a4643cc63c5d8f969d2196f72572"},{url:"assets/markdown.esm-d92a2fc9.js",revision:"2782fb14c80757ca6a815363b87defce"},{url:"assets/math.esm-70a288c8.js",revision:"c5f77dc064ac53005c0e5446bb6715b0"},{url:"assets/mermaid-mindmap.esm.min-df00d773.js",revision:"940f09bbd61f947a5e5a64ab16bc20c3"},{url:"assets/mermaid.esm.min-bc08675d.js",revision:"e0d3e0388f4fdfd93ab5b9a67d2ab92b"},{url:"assets/notes.esm-224f94d9.js",revision:"fbad6b0fa80d99a444266ec8836ab70c"},{url:"assets/pageview-c64531c3.js",revision:"6e567986aa1a5a2c270fecee93f104d4"},{url:"assets/photoswipe.esm-a9093b7c.js",revision:"e5f2011f608af205681b3a6e1023fab7"},{url:"assets/privacy.html-3c151d46.js",revision:"d390f88f2ae9e0a57c0a70d6806ccce6"},{url:"assets/privacy.html-50b18fcc.js",revision:"d53884e693d8367c32c3bb44fdce4e04"},{url:"assets/privacy.html-68054e49.js",revision:"09dc89a467276fe33b5ffd587ac6d4da"},{url:"assets/privacy.html-f0be3ef1.js",revision:"09dc89a467276fe33b5ffd587ac6d4da"},{url:"assets/reveal.esm-e5069ce0.js",revision:"383acd58551019bedc482d68f9eaddef"},{url:"assets/search.esm-2c3fba7d.js",revision:"7c1ff9e9285b9354b44c719f60e1cfd0"},{url:"assets/SearchResult-da0fd678.js",revision:"f53327a3e6126d941eb6c75d5e8ac7b1"},{url:"assets/source-sans-pro-italic-05d3615f.woff",revision:"e74f0128884561828ce8c9cf5c284ab8"},{url:"assets/source-sans-pro-italic-ad4b0799.eot",revision:"72217712eb8d28872e7069322f3fda23"},{url:"assets/source-sans-pro-italic-d13268af.ttf",revision:"8256cfd7e4017a7690814879409212cd"},{url:"assets/source-sans-pro-regular-c1865d89.ttf",revision:"2da39ecf9246383937da11b44b7bd9b4"},{url:"assets/source-sans-pro-regular-d4eaa48b.woff",revision:"e7acc589bb558fe58936a853f570193c"},{url:"assets/source-sans-pro-regular-dce8869d.eot",revision:"1d71438462d532b62b05cdd7e6d7197d"},{url:"assets/source-sans-pro-semibold-a53e2723.ttf",revision:"f3565095e6c9158140444970f5a2c5ed"},{url:"assets/source-sans-pro-semibold-b0abd273.woff",revision:"1cb8e94f1185f1131a0c895165998f2b"},{url:"assets/source-sans-pro-semibold-ebb8918d.eot",revision:"0f3da1edf1b5c6a94a6ad948a7664451"},{url:"assets/source-sans-pro-semibolditalic-7225cacc.woff",revision:"6b058fc2634b01d837c3432316c3141f"},{url:"assets/source-sans-pro-semibolditalic-dfe0b47a.eot",revision:"58153ac7194e141d1e73ea88c6b63861"},{url:"assets/source-sans-pro-semibolditalic-e8ec22b6.ttf",revision:"c7e698a4d0956f4a939f42a05685bbf5"},{url:"assets/style-50fffd33.css",revision:"05455ed7a55921ead2c68ac86ec31d08"},{url:"assets/test-2.html-08a68f7d.js",revision:"551de79277d0d3e799fac76c4cf81fde"},{url:"assets/test-2.html-2503f954.js",revision:"2b08301caa301bcc0a5a20be38144fe2"},{url:"assets/test-3.html-025b434c.js",revision:"82232d6e29941b62ddf80e6133ba67c0"},{url:"assets/test-3.html-e557c04e.js",revision:"2bee707a6cc525181d54d57ff25fb1d0"},{url:"assets/test.html-ac59565c.js",revision:"e7298ec93815ce1f2aef9196f62d1f28"},{url:"assets/test.html-e0f1d04e.js",revision:"b4d0f36c360ed3b752ff60432696b1df"},{url:"assets/vue-repl-4f80696f.js",revision:"b76d34fa5da186d0e99220c8f8e502e5"},{url:"assets/VuePlayground-8b370054.js",revision:"0aef4482933f03799cf7333b17033b07"},{url:"assets/waline-meta-a31b78ed.js",revision:"4003eee21f800e7d4662bda5f1875047"},{url:"assets/zoom.esm-b83b91d0.js",revision:"9ea0d576c1bddb5122016122d8a24c68"},{url:"logo.svg",revision:"1a8e6bd1f66927a7dcfeb4b22f33ffde"},{url:"404.html",revision:"17dfa9436eb09c5ec9d6419907452bc7"},{url:"article/index.html",revision:"00ffb16d4a59177be24f87fa45c63ebc"},{url:"blog/index.html",revision:"950eb7b97bec02f374edc04b9729abaf"},{url:"blog/programming/index.html",revision:"eafc220b21b596d99671080c9ca70cc2"},{url:"blog/tutorial/how-to-install-termux-on-android.html",revision:"8106fcd1111632882874485c331c7137"},{url:"blog/tutorial/index.html",revision:"f360e2b87429547387d1c7cf210aa192"},{url:"category/index.html",revision:"7311e07df5143b686b8b24760a3e33b0"},{url:"game/index.html",revision:"f17d435a7de675e71bc78825cbd9464e"},{url:"id/article/index.html",revision:"c03b769508fc232a80d8771564f5cd3b"},{url:"id/blog/index.html",revision:"de8e64875f9d02b5c85f9629130c63bc"},{url:"id/blog/programming/index.html",revision:"07f35e5567aa25ea28d99e794cbdfd31"},{url:"id/blog/test-2.html",revision:"3d8de5431d35d90800eb51fe8f1999c2"},{url:"id/blog/test-3.html",revision:"b54da051f2f0e623820b768e7639cb71"},{url:"id/blog/test.html",revision:"342bd801a18925742b377a4976a82a2b"},{url:"id/blog/tutorial/how-to-install-termux-on-android.html",revision:"c2d304d4012a19f00c1aaf7d771f3a1e"},{url:"id/blog/tutorial/index.html",revision:"2b0787b8e25bc4d091aaf97be9031b6b"},{url:"id/category/article/index.html",revision:"80b0849c183a0292b7cc62123212b5fb"},{url:"id/category/game/index.html",revision:"fe1342ca87f0997a2a656ecba9a11b23"},{url:"id/category/index.html",revision:"1a410cdf5fda24e424b6d3df3b62527a"},{url:"id/category/programming/index.html",revision:"70ed4e71c2b8bfa3992774e7d001208b"},{url:"id/game/index.html",revision:"1094a212558c841b56dc09223dd40d03"},{url:"id/index.html",revision:"4d92d8619199aea50e29570a669fa24b"},{url:"id/intro.html",revision:"b6a10b87a9984f6120369729f1533bd2"},{url:"id/privacy.html",revision:"f758d604886e8072b9794d39eea800ff"},{url:"id/star/index.html",revision:"83f2ef1c33e7905e8af3a7e59470efed"},{url:"id/tag/index.html",revision:"9fa4c0215f8a19a7c6b52cd41c4c27ab"},{url:"id/timeline/index.html",revision:"62c004d803e0d9bf5a3cf02615a039a0"},{url:"index.html",revision:"7090b431df569efe6256f0baa7605369"},{url:"intro.html",revision:"bca9d2586db807034813f5fe6d4fe592"},{url:"privacy.html",revision:"cf6ebe5834ba0852b3a618a66dc08589"},{url:"star/index.html",revision:"9304119536bd576e623d6b461d67232b"},{url:"tag/index.html",revision:"ce48dcae9aebe63e942d191884729e9d"},{url:"timeline/index.html",revision:"aec56447575b507115f9e9694c08a30f"},{url:"assets/hero-197a9d2d.jpg",revision:"b62ddd9c4a72085202b5218e4c98fd68"},{url:"assets/icon/apple-icon-152.png",revision:"8b700cd6ab3f7ff38a82ee491bf3c994"},{url:"assets/icon/chrome-192.png",revision:"6d4cd350c650faaed8da00eb05a2a966"},{url:"assets/icon/chrome-512.png",revision:"b08fe93ce982da9d3b0c7e74e0c4e359"},{url:"assets/icon/chrome-mask-192.png",revision:"a05b03eeb7b69dc96355f36f0766b310"},{url:"assets/icon/chrome-mask-512.png",revision:"3c4d57a60277792c6c005494657e1dce"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/icon/ms-icon-144.png",revision:"2fe199405e0366e50ac0442cc4f33a34"},{url:"assets/images/wallpaper.jpg",revision:"05a80f51472175f1015a49c275ff6929"},{url:"logo.png",revision:"b1cc915c4cbb67972e27267862bcd80a"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
