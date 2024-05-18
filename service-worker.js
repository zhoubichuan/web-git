/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4388fa99cec0177529ef76900eb30fc2"
  },
  {
    "url": "assets/css/0.styles.ad29ce27.css",
    "revision": "ce6a97039dfea9e73c23f77e8bc67d42"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.bb8a8aea.js",
    "revision": "3652562047973f280b99aec6deacd85b"
  },
  {
    "url": "assets/js/11.3ff47837.js",
    "revision": "40af553c51dabb3ef24ed484a04230cb"
  },
  {
    "url": "assets/js/12.caa1272c.js",
    "revision": "1f969066854a7ef74604fadaf200728b"
  },
  {
    "url": "assets/js/13.ad210938.js",
    "revision": "2856e6506a50e10585dfd1a547db0582"
  },
  {
    "url": "assets/js/14.ef3c6b79.js",
    "revision": "2999543c93b56653be1fdd95a46934ef"
  },
  {
    "url": "assets/js/15.13ed3b03.js",
    "revision": "ebec4e55b52862d3c501e219c81ce568"
  },
  {
    "url": "assets/js/16.07501eb9.js",
    "revision": "a951d4e13ae8f6753d5e52c9edd50066"
  },
  {
    "url": "assets/js/17.1933654e.js",
    "revision": "d0103cd3e5989aa3a9fec301a2073ac7"
  },
  {
    "url": "assets/js/18.5b1ebfc9.js",
    "revision": "a38a3075b33bc401188f01dc9e8cd822"
  },
  {
    "url": "assets/js/19.83dcdcc6.js",
    "revision": "1318abcfdef48b90bcca6e11f25e8479"
  },
  {
    "url": "assets/js/2.591690c5.js",
    "revision": "23b47cf157b5b94c31832174a1eeb7ef"
  },
  {
    "url": "assets/js/20.a4b52cfd.js",
    "revision": "b6266bb2d21b8230568b21bc51cea7e2"
  },
  {
    "url": "assets/js/21.62b25753.js",
    "revision": "e4594b604986da3a023f0bd47b8c464f"
  },
  {
    "url": "assets/js/22.75682b13.js",
    "revision": "ec9ec1f3910cc071727a52e98939262f"
  },
  {
    "url": "assets/js/23.fef2be1b.js",
    "revision": "20d8ae92e8a100b2058b1b172fdbf77b"
  },
  {
    "url": "assets/js/24.15962703.js",
    "revision": "a139fa44295d3c48f2efd3691abe5e31"
  },
  {
    "url": "assets/js/25.e61d0c7f.js",
    "revision": "dbbffe3ff1a275323c7dd406f553e31b"
  },
  {
    "url": "assets/js/26.b6ebd05d.js",
    "revision": "cb4c58dd4ed29a65324b6fa4f69519d0"
  },
  {
    "url": "assets/js/27.526f1acb.js",
    "revision": "3a7cafab1cb490b732f791de7d30d644"
  },
  {
    "url": "assets/js/28.bc3ac8b6.js",
    "revision": "fd866bc8c9901c6c233f1530aa2b9e93"
  },
  {
    "url": "assets/js/29.c59570d2.js",
    "revision": "3a4d137a2995b8d9cbd724cd891338f1"
  },
  {
    "url": "assets/js/3.8d184c27.js",
    "revision": "5eff41699c3f64faf3d0ae35b0a1870c"
  },
  {
    "url": "assets/js/30.87473aa3.js",
    "revision": "788ed8b7cd9ec975da8fad09362dc411"
  },
  {
    "url": "assets/js/31.0b649fd1.js",
    "revision": "ae70e776f2417b1922f1573fb9196d08"
  },
  {
    "url": "assets/js/32.ecbb65c9.js",
    "revision": "eecef03b91a3306d4e842713f7ca3d88"
  },
  {
    "url": "assets/js/33.8f4fc6f0.js",
    "revision": "891669aa9be297b28408b790f641c49a"
  },
  {
    "url": "assets/js/34.432667fd.js",
    "revision": "0d603693b654ac3fed6d6e22828f5fec"
  },
  {
    "url": "assets/js/35.66e5f319.js",
    "revision": "c1689bb3d84cf127a47d6047d29da519"
  },
  {
    "url": "assets/js/36.48db8907.js",
    "revision": "1e6a7a4a4968c64f4b8067667db66b5e"
  },
  {
    "url": "assets/js/37.e48b2f50.js",
    "revision": "ecb4b745a1e502e1b671b630c3b50aca"
  },
  {
    "url": "assets/js/38.0936ed31.js",
    "revision": "bb7184c88b83c73d0a3a34b5a0951de2"
  },
  {
    "url": "assets/js/39.f8962f5d.js",
    "revision": "bdcd9157dd8c4a019d50e4bf7a0fdbc6"
  },
  {
    "url": "assets/js/4.849d65fa.js",
    "revision": "5f894aa106c3961868ad6b00f8cb9d55"
  },
  {
    "url": "assets/js/40.95b1881b.js",
    "revision": "aba9c2261add800a1945c40f21af877c"
  },
  {
    "url": "assets/js/41.22247e38.js",
    "revision": "3e9937a344b02a94a6a13a5002097688"
  },
  {
    "url": "assets/js/42.f8d6ec52.js",
    "revision": "74f719126cbb2930e4020178f60d2183"
  },
  {
    "url": "assets/js/43.7a933d7a.js",
    "revision": "e4437504e1999ed1693f31fd476ccd85"
  },
  {
    "url": "assets/js/44.342b62e8.js",
    "revision": "1d067da6cab584f142ed3bb248739bf7"
  },
  {
    "url": "assets/js/45.3096dde5.js",
    "revision": "392396bc22b5c3b6ea472e312a69b8e0"
  },
  {
    "url": "assets/js/46.13a32749.js",
    "revision": "0560e2620dfa2ef48939b957cf9a662b"
  },
  {
    "url": "assets/js/47.47e59ea1.js",
    "revision": "02f18307834fd694ea83e35ed4a0c7c9"
  },
  {
    "url": "assets/js/48.860c0f2f.js",
    "revision": "a686f736da9eb0e61733440421cd8430"
  },
  {
    "url": "assets/js/49.a6d59795.js",
    "revision": "aa3bd51a23a40b3b1fbafc772826044d"
  },
  {
    "url": "assets/js/5.03649c2e.js",
    "revision": "a30ea2194e5921aa5f45ace78e5206c6"
  },
  {
    "url": "assets/js/50.8d2ed184.js",
    "revision": "3f6a95ce91efac94a8faa5355e8d0fd8"
  },
  {
    "url": "assets/js/51.491b2512.js",
    "revision": "082b269b1c2bf7c57a277b93fca8ac16"
  },
  {
    "url": "assets/js/52.98bfbcbf.js",
    "revision": "2c5cbdad77069934efac0948aa9bfe30"
  },
  {
    "url": "assets/js/53.3d066a74.js",
    "revision": "b40392a945e0342a2b863e6de9080c15"
  },
  {
    "url": "assets/js/6.47852912.js",
    "revision": "b5ab3d4bc862fd074d8f5c66b5d7b79a"
  },
  {
    "url": "assets/js/7.1bb50d1a.js",
    "revision": "caf38f0192c62bd34ed15c4329db4e89"
  },
  {
    "url": "assets/js/8.33a8fef4.js",
    "revision": "e79da2e4254717f6b52e1ea254a4779b"
  },
  {
    "url": "assets/js/9.441ad959.js",
    "revision": "aef33e2d8671dd25e5ee4e206da10f99"
  },
  {
    "url": "assets/js/app.1ebf87c9.js",
    "revision": "732b55c734feabd0157a59be7008cd94"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "648f57f2588a75d52c9b259420e4a43d"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "aaeaeedab3e201c4ba313b3f28c974e3"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "beba4c7a810ef28ecd7b291e9f3a8063"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "c6aa66b1204f228bb63c97ffbeac69ec"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "cc255ef6aff318b638e71c5eb17f9268"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "a06e0432449e1e24ad6843a5717f3aa1"
  },
  {
    "url": "base/build/1.常用的cmd命令.html",
    "revision": "26b42ae0cd2e7ee5129a587fbffb7593"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "30fa79e29b4dd2756873fe1a9f3460b5"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "cd8d4aa444dfcb98f6debf267dd2d718"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "e8f4e5822de3cf1e7a7f103dc551436a"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "66dcc8e4c22a75d5218829a4bb4c8e3b"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "9396027aa66f6d403790c1070e61d414"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "368ad699f87b18da26f07b1044424760"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "8e371ad34202ff1191ddf397093afeff"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "314181854aa7649679f744a22defa058"
  },
  {
    "url": "base/build/4.cors.html",
    "revision": "6cc9ec5f4f3e29d796ad69f7d024446b"
  },
  {
    "url": "base/build/5.cache.html",
    "revision": "11bd2a089adbac349ebb5fb126217258"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "93141b20b0c09548de06bb7907f7a9c9"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "040809616a33c350e96a6493f4969980"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "f109c32e7413d182d7146302df79701a"
  },
  {
    "url": "base/practice/1.Tools.html",
    "revision": "5f5301b2991d1142f68b36284fcb9c39"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "a59beec1e7853109ad94396733330fba"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "1c3ea4d3520ccfe8dc1d2893d282c1a7"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "4d859957b0916cd35d017cf0b680a6dd"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "837eac548c0f730991ecbb9b9ac9f884"
  },
  {
    "url": "base/practice/test.html",
    "revision": "195d4efc5b9a850cc4f3446702c7c1c8"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "245555eb26ccdd82f7468f4cb38e0caa"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "942fc478c6acbd2a3cc543c584cf258a"
  },
  {
    "url": "index.html",
    "revision": "575035bf5b70ca547da5da6b6b7823a3"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "c5055cdde1938913d7ad921f55de3730"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "1de1698ca9863ad1c96b1e85f87a3053"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "404e59d14699bacd404c270a399661c7"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "02b459a829aef832bb5c1a80a6593f59"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "f7f43de0f5173546894a53a12c5c4ac0"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "87236d73e7109dfa9b94692ecb8523a5"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "4ec29c4848f744a06709687cbb5c2a1f"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "9f899ba045623a18a2dd03ea004f7560"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "50edbc686edd7ac67f928c435fc330c7"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "4cc3f04521b9cb53d5b2503bef04a588"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "46801821b86f97ff0a682fde22adaefd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
