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
    "revision": "81702f9f9b85232dd83debf5316aa3b6"
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
    "url": "assets/js/10.57dd80a1.js",
    "revision": "dcbe0d162392a0e69c12b4f67d7c8d6d"
  },
  {
    "url": "assets/js/11.00ccce8d.js",
    "revision": "5296d4322c836e70dd7289a506883655"
  },
  {
    "url": "assets/js/12.94c6f543.js",
    "revision": "705f475786cf9e34da83418e7c4ee36e"
  },
  {
    "url": "assets/js/13.5bb2c555.js",
    "revision": "a7e9ec4791f39b01fda0b7acbde75dd6"
  },
  {
    "url": "assets/js/14.4ad8a231.js",
    "revision": "3a4506a508129883ca0ea63d1ff74365"
  },
  {
    "url": "assets/js/15.c47bf3bd.js",
    "revision": "4d37e188e6fded88955be19bfade67d5"
  },
  {
    "url": "assets/js/16.5bfb4956.js",
    "revision": "08671bcbf5cf734cf70656018386f191"
  },
  {
    "url": "assets/js/17.46e8a616.js",
    "revision": "e8dc196d2115a0cff6d7fd56bd2a8f50"
  },
  {
    "url": "assets/js/18.3867391a.js",
    "revision": "c83d07c63ed77468ad60d92c065f3915"
  },
  {
    "url": "assets/js/19.93dd1296.js",
    "revision": "ed709b4d20ce84f67ea33db710a5ec76"
  },
  {
    "url": "assets/js/2.3b3dad13.js",
    "revision": "058da46cdf8f19678b3d8d257e401c64"
  },
  {
    "url": "assets/js/20.4e3228e3.js",
    "revision": "2292ea22df44fd90f7f41417f9868c21"
  },
  {
    "url": "assets/js/21.bd9ccca7.js",
    "revision": "31f681b40430b0f4cb3a2d3339b0e5c4"
  },
  {
    "url": "assets/js/22.4ee09b4d.js",
    "revision": "0ed55d1868570b0b798b7085bc6a756f"
  },
  {
    "url": "assets/js/23.c04f9003.js",
    "revision": "fb0d71d72f1677472199959128fafe6b"
  },
  {
    "url": "assets/js/24.2c72f637.js",
    "revision": "71a2d313057c9370f9b97a793f632826"
  },
  {
    "url": "assets/js/25.468baf58.js",
    "revision": "0838557a8341075c6abeb6a97814b50a"
  },
  {
    "url": "assets/js/26.c4b593aa.js",
    "revision": "cb4c58dd4ed29a65324b6fa4f69519d0"
  },
  {
    "url": "assets/js/27.2ad09a7a.js",
    "revision": "1c7ce0aecd0cfff071f4e4c74a4d2792"
  },
  {
    "url": "assets/js/28.1829cd49.js",
    "revision": "114e39fb7c6cd9d9b6f7549ca19ff8dc"
  },
  {
    "url": "assets/js/29.f510b04e.js",
    "revision": "505eb84834ef055eb083f89b71d8b044"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.5bb0fb82.js",
    "revision": "c7ba60f31f10d054bbd83b0f185b65f8"
  },
  {
    "url": "assets/js/31.bf215d4f.js",
    "revision": "993e9b4cde43affc3e076e08a55a497d"
  },
  {
    "url": "assets/js/32.8a3e7cee.js",
    "revision": "dae9a8ac6b8844ed8acf8a264ed360e4"
  },
  {
    "url": "assets/js/33.757ac679.js",
    "revision": "d7b49a6112132e5109049d8a62757fd2"
  },
  {
    "url": "assets/js/34.07292b73.js",
    "revision": "67c96422d43f22cc776c51193928ea36"
  },
  {
    "url": "assets/js/35.3347767b.js",
    "revision": "ac511110467ba37e4b3b5069eee11209"
  },
  {
    "url": "assets/js/36.40e9536e.js",
    "revision": "f4d3d57ba4b5285a72bc025c6a02c041"
  },
  {
    "url": "assets/js/37.9e8064af.js",
    "revision": "73458812c922ff51f9a84290f0996022"
  },
  {
    "url": "assets/js/38.33cb8444.js",
    "revision": "87a96904d9fbc221f04d3149de9a2337"
  },
  {
    "url": "assets/js/39.5994be90.js",
    "revision": "f680fe648a8367e967f62cfa63745e4f"
  },
  {
    "url": "assets/js/4.0b2cde7d.js",
    "revision": "b3dea958a6fe2f4361c675184fe538c0"
  },
  {
    "url": "assets/js/40.b79d66a3.js",
    "revision": "4e92bb69601171ae99434d97160abb34"
  },
  {
    "url": "assets/js/41.ff23eb87.js",
    "revision": "3e9937a344b02a94a6a13a5002097688"
  },
  {
    "url": "assets/js/42.e1f84025.js",
    "revision": "0508820558f7b64d391325b01c4d2feb"
  },
  {
    "url": "assets/js/43.aa51157a.js",
    "revision": "208c5d1e46462ec562d4bd17b4d450cb"
  },
  {
    "url": "assets/js/44.738eb29a.js",
    "revision": "8c21067c430e825edcda2ec43f55891b"
  },
  {
    "url": "assets/js/45.fc74819c.js",
    "revision": "f3ba928815b172d4b7dfcd4697216424"
  },
  {
    "url": "assets/js/46.9c659ccc.js",
    "revision": "377a2262899c5e41e0aadfa053f903e3"
  },
  {
    "url": "assets/js/47.4a9e1a78.js",
    "revision": "84966fff64345742a84321244bc2ae44"
  },
  {
    "url": "assets/js/48.14dcdc18.js",
    "revision": "3beeb0ef00a251792eefe943bd34ad76"
  },
  {
    "url": "assets/js/49.a6d59795.js",
    "revision": "aa3bd51a23a40b3b1fbafc772826044d"
  },
  {
    "url": "assets/js/5.fb713732.js",
    "revision": "2a9d14c42947f7f15180d59e1b80e32b"
  },
  {
    "url": "assets/js/50.50e4a719.js",
    "revision": "fa18e03a7eb2ba6f1257850c0e331e3f"
  },
  {
    "url": "assets/js/51.0f9cf554.js",
    "revision": "554fc2feec2fb735cbe44a2212e62821"
  },
  {
    "url": "assets/js/52.f83c6378.js",
    "revision": "6f68f0c3f72e8c7310c30537c171a0ee"
  },
  {
    "url": "assets/js/53.000b2ad2.js",
    "revision": "acca5378a6f9e62d52ecbc439b3b9bdf"
  },
  {
    "url": "assets/js/6.40bc6441.js",
    "revision": "e298fef8e232ac0424415fbc7ca8dbe0"
  },
  {
    "url": "assets/js/7.3e3f7ab6.js",
    "revision": "e9be2d34671128d42345192255fc862f"
  },
  {
    "url": "assets/js/8.b8bd2f0a.js",
    "revision": "af9d9a8097551c9f39fe30e3e139485f"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.ba61bf74.js",
    "revision": "b740c6d0f0b91a2083887c8b81df597c"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "0852433a461afb20ddbabcbfec7cb9f9"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "6a73710840c22a688a60636febfdb696"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "8114e42dd151156ac3ac68b28e1513a9"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "5569e5e6a8247a21f6cd88c41907cf7a"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "8b9e34d9bdf2286f0dfb2f2172d94c38"
  },
  {
    "url": "base/git/1.Tools.html",
    "revision": "beb5512c9deecd2fb4e9d589094ff7a3"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "58d2c72c26a78d877c7d7fca66851f9a"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "121ab38e2ecef50d8a45249599f4ec50"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "a6b27797bff48bc6549f7d9d95d194b2"
  },
  {
    "url": "base/git/prem.html",
    "revision": "aa86c984a93b1c4d583d621c8f28ed87"
  },
  {
    "url": "base/git/test.html",
    "revision": "514a2e07c0183cca855365730aba5b5e"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "d320d1c4ab5228afbd572f50f88e16f8"
  },
  {
    "url": "base/svn/1.index.html",
    "revision": "a71b4a4e98c9c6f21c5e71e98c2ac73e"
  },
  {
    "url": "base/svn/1.常用的cmd命令.html",
    "revision": "ee1ddb83f07cce8fa913f4946faa6dd5"
  },
  {
    "url": "base/svn/10.ui.html",
    "revision": "227f1ef12dd705ce3b5a041ee5b720f8"
  },
  {
    "url": "base/svn/11.data.html",
    "revision": "1fff6e0580e6d7f89bfd41c184af2d9d"
  },
  {
    "url": "base/svn/12.skill.html",
    "revision": "7f9823166754e282d98a85b9d032d1d4"
  },
  {
    "url": "base/svn/13.com.html",
    "revision": "8fad065d1fb7c715ca47372de1a18bc4"
  },
  {
    "url": "base/svn/14.data.html",
    "revision": "f0bdb545c6f957751c7144eb2d286d78"
  },
  {
    "url": "base/svn/15.api.html",
    "revision": "161d1b3fbbcd5afaccafc57b22adc39a"
  },
  {
    "url": "base/svn/2.service.html",
    "revision": "75024f3884fb97b7f958809f5d1253f8"
  },
  {
    "url": "base/svn/3.cdn.html",
    "revision": "09712b44988a11d3f53a47be91892809"
  },
  {
    "url": "base/svn/4.cors.html",
    "revision": "cadda0897ea855639bcd26d81933dcbf"
  },
  {
    "url": "base/svn/5.cache.html",
    "revision": "339817262f3457178135c32b057e6ce5"
  },
  {
    "url": "base/svn/7.module.html",
    "revision": "6f03f3732e2cedf83886652fe20f21e2"
  },
  {
    "url": "base/svn/8.project.html",
    "revision": "3862c7c467d5ae9be538a83ff5f9a3e5"
  },
  {
    "url": "base/svn/9.utils.html",
    "revision": "16c7d377db8b8ddb77a8bf9c0bdbb40f"
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
    "revision": "130a3c35426dbba403a557698587726f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "10bc43d136eec4190e1cb1bd30204d3c"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "03e5ef90114ca7734e9d5979543de50e"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "d7adcacd3191346a683a2081f5c32c39"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "c16c1e1d1e9dbe658d9cdf77dd0f0e8e"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "18b3823a255fc90f98e2fd3fcc4c78cd"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "2eb8dfd41cc4f6531d5b3214a00a0c1a"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "443022a4793ba13bd8c3c13fdf2ca893"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "e5f1422f7a5d52fed567877bcc60e4f9"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "6be8a37cc93dc69c9405f5c0bd0677ce"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "5f07ca764cb38f1e9d4b81370d58fb4a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "98629748894ad684976f797ed8c08fec"
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
