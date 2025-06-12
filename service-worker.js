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
    "revision": "83c4def3e942a0b1caa206c63949b75c"
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
    "url": "assets/img/image-1.eda09967.png",
    "revision": "eda0996714fcdd7dc41d5e2997943348"
  },
  {
    "url": "assets/img/image-2.d56bdf13.png",
    "revision": "d56bdf131779c2cde32bb276ba53f059"
  },
  {
    "url": "assets/img/image-3.db23ab3a.png",
    "revision": "db23ab3abdcfad1c777640ffbdefaaa3"
  },
  {
    "url": "assets/img/image-4.589f0f2e.png",
    "revision": "589f0f2e93d80215945a59a28d35d135"
  },
  {
    "url": "assets/img/image-5.34e21d19.png",
    "revision": "34e21d19c5b9a75410fdf3484a3a3f59"
  },
  {
    "url": "assets/img/image-6.e9a28d85.png",
    "revision": "e9a28d85abe621519380d291ba4526f8"
  },
  {
    "url": "assets/img/image-7.bd3fe06d.png",
    "revision": "bd3fe06d5118460f815718dd91ae368d"
  },
  {
    "url": "assets/img/image-8.68abbec7.png",
    "revision": "68abbec7776d7e6b2555678e2b341b19"
  },
  {
    "url": "assets/img/image-9.b72a0022.png",
    "revision": "b72a00222926e08e5bbf39ae269f2691"
  },
  {
    "url": "assets/img/image.f7f6f695.png",
    "revision": "f7f6f6950edfb416f10b46852e20dffc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f91085dd.js",
    "revision": "22f25afabfa103104faeb2eabccbbfcb"
  },
  {
    "url": "assets/js/11.72ab4987.js",
    "revision": "aa9aca2a996c87344ef9c45a14d0443c"
  },
  {
    "url": "assets/js/12.c5b1f6c9.js",
    "revision": "40214d067067e680cfc866c6bcf5486f"
  },
  {
    "url": "assets/js/13.38580831.js",
    "revision": "e3560fdb6aea866ed0757223514592fe"
  },
  {
    "url": "assets/js/14.6d598aa5.js",
    "revision": "1ffc3c51b218009a1bed5ec64c15b718"
  },
  {
    "url": "assets/js/15.93ef8b86.js",
    "revision": "2a9247607b6df1e72e6eef539fe2bd48"
  },
  {
    "url": "assets/js/16.1e82613e.js",
    "revision": "c5bb66eb83240019b96e3388a20ef55e"
  },
  {
    "url": "assets/js/17.1f53e10d.js",
    "revision": "690cfd2471a53208b99115baa0567688"
  },
  {
    "url": "assets/js/18.71a7f99c.js",
    "revision": "1d8727e1467c5953d0b5ba3387f2510f"
  },
  {
    "url": "assets/js/19.eba355b9.js",
    "revision": "ed1c00d1633921524acd77419e0ec558"
  },
  {
    "url": "assets/js/2.f3b2e48b.js",
    "revision": "f972d771365d268de235e7ee29ab8a70"
  },
  {
    "url": "assets/js/20.716031e7.js",
    "revision": "6e95d7b47add1756bb7e9100c79a2e9c"
  },
  {
    "url": "assets/js/21.9738c6e9.js",
    "revision": "a3fc07b929eb05f34b1d2aedfe3af810"
  },
  {
    "url": "assets/js/22.0a6b726c.js",
    "revision": "cea563aee74b0e4aba843bb507bf61f3"
  },
  {
    "url": "assets/js/23.3f8b3214.js",
    "revision": "75d21d6ff5370741ba56bd88a62fc401"
  },
  {
    "url": "assets/js/24.ee74de3c.js",
    "revision": "394d56f04d8ac988c9a0d09e2acfae21"
  },
  {
    "url": "assets/js/25.2ccfa8ed.js",
    "revision": "f5509d49c6041bb0aa8e59e4b437be75"
  },
  {
    "url": "assets/js/26.085f1586.js",
    "revision": "cd2d02171498e7a934f44ef22d95d557"
  },
  {
    "url": "assets/js/27.f7727dbc.js",
    "revision": "6104b560ff315304621f76e0f6850172"
  },
  {
    "url": "assets/js/28.cdbf01c9.js",
    "revision": "87f071df8a49a1ae9e9e6442962ccad5"
  },
  {
    "url": "assets/js/29.d558921e.js",
    "revision": "24a5e779c5a1cbe45df626d14d2bebb5"
  },
  {
    "url": "assets/js/3.23d46297.js",
    "revision": "2b448fb70f08a43f84432c23440c8e1f"
  },
  {
    "url": "assets/js/30.7be72b18.js",
    "revision": "379efc8a758aca976f8dc663174d1c13"
  },
  {
    "url": "assets/js/31.a581f12b.js",
    "revision": "e7bc01f74c2d3e1b3b736be0703b9719"
  },
  {
    "url": "assets/js/32.a4fb073d.js",
    "revision": "c00697f86d5525bda877d44e89064c77"
  },
  {
    "url": "assets/js/33.846b108b.js",
    "revision": "43fa522fd21e2ef99a49ee2d157f8d82"
  },
  {
    "url": "assets/js/34.2e66821c.js",
    "revision": "5fa1826d61fd4e6c01cd7f2e0e05a900"
  },
  {
    "url": "assets/js/35.396040db.js",
    "revision": "d7ffdf03a448349783eba0546366b4de"
  },
  {
    "url": "assets/js/36.f64b3afb.js",
    "revision": "dc2cb02f527bd0a1a8dd8735ba14fe2a"
  },
  {
    "url": "assets/js/37.9d95a383.js",
    "revision": "dbad309ba68c7427a518f3546d04eddd"
  },
  {
    "url": "assets/js/38.bc2561db.js",
    "revision": "83adb4ec297ec6af11e073ec04f45ff9"
  },
  {
    "url": "assets/js/39.732ffd5c.js",
    "revision": "97a9f6852c86852b9afe3cfee2ffa50b"
  },
  {
    "url": "assets/js/4.74e77c6f.js",
    "revision": "d1008d0b4ad7c9d71c5243731fb043b6"
  },
  {
    "url": "assets/js/40.46ccd8ad.js",
    "revision": "61379f5902a7740b7abd46345cf2f503"
  },
  {
    "url": "assets/js/41.20876ff6.js",
    "revision": "06a2e21bfc8800be69dc7d5174bf9ccf"
  },
  {
    "url": "assets/js/42.f5b619c5.js",
    "revision": "c679dd1ae623c4f6c985b760cd3bc18d"
  },
  {
    "url": "assets/js/43.2b6452b1.js",
    "revision": "0c6c12acbe2e647202d9cc4d64981948"
  },
  {
    "url": "assets/js/44.64c17ea7.js",
    "revision": "8a3876fba0bbe02ea8dfcaa32f6d3d7e"
  },
  {
    "url": "assets/js/45.bb4136cb.js",
    "revision": "e769ad1dce67bd094143c384afa25cda"
  },
  {
    "url": "assets/js/46.c4da6803.js",
    "revision": "080cf538805ed63f997f3948d9b0a7b1"
  },
  {
    "url": "assets/js/47.5d7f96a0.js",
    "revision": "60d739ef5b73ae66369575b023300470"
  },
  {
    "url": "assets/js/48.457a44d9.js",
    "revision": "81315078a1c355bd80d9984ee65635b6"
  },
  {
    "url": "assets/js/49.5a4d9193.js",
    "revision": "94883ecf85860c4bd287890f1bbb8f07"
  },
  {
    "url": "assets/js/5.bf9802bb.js",
    "revision": "c14bc8416badd9c297a157dc29759b35"
  },
  {
    "url": "assets/js/50.673fbdda.js",
    "revision": "d9a0484900873cba78803d3432372da0"
  },
  {
    "url": "assets/js/51.6666b24f.js",
    "revision": "49d7337be1a101fee98de326202e159d"
  },
  {
    "url": "assets/js/52.bf0eff8c.js",
    "revision": "757f1b29ea2f2fae6ac889dd609fa594"
  },
  {
    "url": "assets/js/6.60618a87.js",
    "revision": "86509192ee68261c7606f99309451f38"
  },
  {
    "url": "assets/js/7.9f530cff.js",
    "revision": "6e538fb94097e0165a2004820c3410c6"
  },
  {
    "url": "assets/js/8.6641cbdc.js",
    "revision": "8ca7884fd65f2417a0a3315f274d4357"
  },
  {
    "url": "assets/js/9.9c117710.js",
    "revision": "9044b5940b56dcd36f01fe8cd4da1365"
  },
  {
    "url": "assets/js/app.8f4ab3c1.js",
    "revision": "e89c2c1e2da827728ac55838b01d6121"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "aed95a4c58bbe76a493b96382bb885c7"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "148774edc4b8190da6b2f1d144e9a814"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "eb766898ba7941db5d398c23c647c21c"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "12b0855eb8f8174bc958839fa8d48327"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "9caabdc6ec0b926947bceac58641b3ff"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "8f256eb4d118daef0c5183fbb70bf423"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "f8e8074147d57d8dfec344f21ec472aa"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "6b40a2e84cebe182176aeebfdb4b43c4"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "fb0e4714acc5499268c68b04dfe80e95"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "0c51b459f1a583900d346d059fccf2db"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "f9629fe7b8cf46f95db42a9e9bf2082b"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "df60005a1a5d68ff6da7586716a6c592"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "42942bfaf88f8779deab8ac32ccf91f1"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "4cbc39d615fb979d8e851af2753b4e58"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "0d9fe12ca1f9102947492b97be0cdb74"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "b6bd77ef9f8425803e20d7ca61f1fd19"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "33938a73a8cbfea3c568b51cc801d6e1"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "69b7edaa515f53d95eddd2f6ec3c15fb"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "db313f851efd10fe0412e22e8339f528"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "c1e0e35094e216c9e840be58d644bc58"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "b3d697596536cd21e92217f10b0b595b"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "f2f9b961d560c6066464d7684d9b4e92"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "39e985eb3b5971ae18fa0a9c4b9e45eb"
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
    "revision": "15aad9b7519b4733b8e0a8091a65b6be"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "86287a98923ed3a427ec82b0dc57ba1a"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "1b85df82d99281134aca9079bb000d51"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "5463e330f29e5329c81b759c98e1f167"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "6384998a28566d540b60040f13eac505"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "cbbb904719496b0fc2d594c5de31fd4c"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "34bd9d81cae2c66b3ba54e2518ed2472"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "ddeb02c2e51855d89f912d67e66d4db5"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "96db14c20eb9aec551c8753f6cb8a287"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "df60dd05cef564b20d79deec9fc15472"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "8c87d9f97ffd069e628017d7ed0db348"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "7ccfb87a51eb73bd05f446fc0f4ca5e3"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "3322856172f3a716c57854bff55a11a4"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "14d5a86f5c117d45989c9ffc48737c6a"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "c286575828449665fae22c4e3b015de1"
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
