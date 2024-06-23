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
    "revision": "ccc2e28ea4577f0cc24b21972c843c25"
  },
  {
    "url": "assets/css/0.styles.f48728fc.css",
    "revision": "b66d26cbe1e93657a4b41f021c149c54"
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
    "url": "assets/js/16.14a75ceb.js",
    "revision": "dc2bbb10e372cb301f3845a3fee31fcb"
  },
  {
    "url": "assets/js/17.a9d0feb7.js",
    "revision": "821855a1891fa3f54220335563fc6167"
  },
  {
    "url": "assets/js/18.5b1ebfc9.js",
    "revision": "a38a3075b33bc401188f01dc9e8cd822"
  },
  {
    "url": "assets/js/19.695f05f9.js",
    "revision": "206ab53b8e70c2ed2836292cfe37c5a4"
  },
  {
    "url": "assets/js/2.591690c5.js",
    "revision": "23b47cf157b5b94c31832174a1eeb7ef"
  },
  {
    "url": "assets/js/20.24a945b4.js",
    "revision": "3a8ed3276823c688f7be305abeb0d3e0"
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
    "url": "assets/js/23.85f23e44.js",
    "revision": "160b52bbff9b94d4222d9a68d35d50ba"
  },
  {
    "url": "assets/js/24.83b4e7af.js",
    "revision": "3cc2cfb8d50350d72eea6c0b5bec45f6"
  },
  {
    "url": "assets/js/25.e61d0c7f.js",
    "revision": "dbbffe3ff1a275323c7dd406f553e31b"
  },
  {
    "url": "assets/js/26.05b20450.js",
    "revision": "a7ad5d9f367e3142e29340742dd7bdee"
  },
  {
    "url": "assets/js/27.671a4be9.js",
    "revision": "9c3616ebe3cde6cb4038c7b8e1612e23"
  },
  {
    "url": "assets/js/28.effe5ffd.js",
    "revision": "f266bd00d77674a2be357a2cb220013d"
  },
  {
    "url": "assets/js/29.d24d10dc.js",
    "revision": "cbf73cfca1402528ec5840bcf149a8ab"
  },
  {
    "url": "assets/js/3.8d184c27.js",
    "revision": "5eff41699c3f64faf3d0ae35b0a1870c"
  },
  {
    "url": "assets/js/30.3bfbf073.js",
    "revision": "5eec94d968a3b361e89bcf0d7b71b296"
  },
  {
    "url": "assets/js/31.8c34e366.js",
    "revision": "6612d23cb26464dbc82a0a5c14250900"
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
    "url": "assets/js/34.fdc47aae.js",
    "revision": "1c307295dba1542d4d8cb20727543dd1"
  },
  {
    "url": "assets/js/35.9f65a92e.js",
    "revision": "570cf3e07c493732325d05b18cc89c1e"
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
    "url": "assets/js/38.b1daf473.js",
    "revision": "f5c5a357b0ce2459abfff82a6562dda1"
  },
  {
    "url": "assets/js/39.9aa84f8e.js",
    "revision": "639253faea656533fd263b2b13ce6263"
  },
  {
    "url": "assets/js/4.849d65fa.js",
    "revision": "5f894aa106c3961868ad6b00f8cb9d55"
  },
  {
    "url": "assets/js/40.d9e6dde9.js",
    "revision": "6eecaa3c2f413821176288cc047bca98"
  },
  {
    "url": "assets/js/41.0c015759.js",
    "revision": "aede68727d6407df2b10096be2323337"
  },
  {
    "url": "assets/js/42.e1f84025.js",
    "revision": "0508820558f7b64d391325b01c4d2feb"
  },
  {
    "url": "assets/js/43.4adb40e9.js",
    "revision": "bb731660908c3cfb6045253c9227a286"
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
    "url": "assets/js/47.4a9e1a78.js",
    "revision": "84966fff64345742a84321244bc2ae44"
  },
  {
    "url": "assets/js/48.7464a3f6.js",
    "revision": "aa04d6c6e6ae585f6f6a8b4b2f5ad465"
  },
  {
    "url": "assets/js/49.942dc99a.js",
    "revision": "759390e0f5907f8a289946f86bc74448"
  },
  {
    "url": "assets/js/5.03649c2e.js",
    "revision": "a30ea2194e5921aa5f45ace78e5206c6"
  },
  {
    "url": "assets/js/50.0413348e.js",
    "revision": "556585fba79af31b5b812d415712c3ef"
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
    "url": "assets/js/app.5a60dcc4.js",
    "revision": "9a83b3d1dbddf1a9faf48386f3ffd1b4"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "9f2f5b55df2631f674d2c79e4e85061c"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "c6e4a837a2bfb6d3bed5db69ee3eaaa9"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "0e9e0d81fbe745f322e07bedf735395d"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "174e55b8cd4703fd968bcca4379a66c1"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "02a0c9fcdcbc5f0ff37c7f93148e1b3a"
  },
  {
    "url": "base/build/1.index.html",
    "revision": "80ba0094571a413ca26738967ebb95af"
  },
  {
    "url": "base/build/1.常用的cmd命令.html",
    "revision": "e032cecc51322ed982cf8d25c502806f"
  },
  {
    "url": "base/build/10.ui.html",
    "revision": "48eb8ecabc5def9074380dc9c773b9dd"
  },
  {
    "url": "base/build/11.data.html",
    "revision": "707586dc3601223444c1b01292e6efb0"
  },
  {
    "url": "base/build/12.skill.html",
    "revision": "9517e0cfb72a59b410f8b4d2c70cbdad"
  },
  {
    "url": "base/build/13.com.html",
    "revision": "1bf52b3aa09a077e48009e2fcb073b9d"
  },
  {
    "url": "base/build/14.data.html",
    "revision": "97a221db3285349a2bf4b77022fdbfbf"
  },
  {
    "url": "base/build/15.api.html",
    "revision": "25e744db3fc78f0e938a6518ce78442c"
  },
  {
    "url": "base/build/2.service.html",
    "revision": "7dbdd261f6297144e816cf982c543785"
  },
  {
    "url": "base/build/3.cdn.html",
    "revision": "cb010c5d67c21b5c5446e4403967e1c0"
  },
  {
    "url": "base/build/4.cors.html",
    "revision": "e2348b314d916ac7735f6a4e0174549d"
  },
  {
    "url": "base/build/5.cache.html",
    "revision": "b4b8de5f19ef74e680f0a8ce75c0566e"
  },
  {
    "url": "base/build/7.module.html",
    "revision": "7e857e0f003fdbe44c7d82d82f550bb6"
  },
  {
    "url": "base/build/8.project.html",
    "revision": "c82b71a663b19fb10bd38e1262f868ef"
  },
  {
    "url": "base/build/9.utils.html",
    "revision": "7abd67a6c67cc996e377218200cf1c85"
  },
  {
    "url": "base/practice/1.Tools.html",
    "revision": "20b0b1d1e8730e20299cf23e6a260e6c"
  },
  {
    "url": "base/practice/2.Jenkins.html",
    "revision": "45bf57ac3a7fc946f7fe5663d812b77d"
  },
  {
    "url": "base/practice/3.gitlab.html",
    "revision": "345d8d707cff87d90608b583ee398f27"
  },
  {
    "url": "base/practice/i18n.html",
    "revision": "c14901c400f1630e2ca569dce7ac1e72"
  },
  {
    "url": "base/practice/prem.html",
    "revision": "45f67c7d436476c720609ce4970121a1"
  },
  {
    "url": "base/practice/test.html",
    "revision": "6c4c76b2bfba4565aaf602380d67a0da"
  },
  {
    "url": "base/practice/vscode.html",
    "revision": "1f6c85e87ceb0bc21553dc0a39bdbe37"
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
    "revision": "f428c6d981fc19d57878854b4695c192"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "c45c0244e2e7784b45ec8e7f0b386ab8"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "e231ca56cfcc3d5f4e4619a11e2a08f4"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "7b962a61084b41c7896eaca355f1e24e"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "7ba10618b993fc4fc496e6a94b1c21f1"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "5bf66c0cbd1921ba3350ebc0ec140187"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "465244a10aea56124087918bae7caf42"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "1bd523e62e436693d997fac6d21a7dc9"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "85cc4dd97354147700459ea529d443d6"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "8c5cda9bcde5b913f3f0d62937c6cdd3"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "fe3394339fce2bdeeb8371cd274bfff8"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "5348ce7bbd000c8ed1331e73001e6df4"
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
