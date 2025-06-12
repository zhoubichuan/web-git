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
    "revision": "28ca7efa761e5b45b488e3a0aa90b450"
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
    "url": "assets/img/image-1.6824be94.png",
    "revision": "6824be94481020f9ee57e9a4dbc8ec5f"
  },
  {
    "url": "assets/img/image-1.eda09967.png",
    "revision": "eda0996714fcdd7dc41d5e2997943348"
  },
  {
    "url": "assets/img/image-2.c082171d.png",
    "revision": "c082171dc3b17acc86eaff9866534ca4"
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
    "url": "assets/img/image.598d4d91.png",
    "revision": "598d4d912f499e61a211439e6bbf4d6e"
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
    "url": "assets/js/10.160cc774.js",
    "revision": "912fdfa76c9cf7d03db1e715b3570957"
  },
  {
    "url": "assets/js/11.4f2e55f7.js",
    "revision": "1d4a31e68103da56850ef6610b2e77fa"
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
    "url": "assets/js/18.693988fa.js",
    "revision": "ad4734d04f9fcc9d45cb95ed68113a01"
  },
  {
    "url": "assets/js/19.a42fccb1.js",
    "revision": "9e723d029bb1beb28359a492c9891dc7"
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
    "url": "assets/js/21.b3d781c9.js",
    "revision": "46fa18aaa4e529084012a4827052d2a4"
  },
  {
    "url": "assets/js/22.6d8964a5.js",
    "revision": "385a76df3abb9fdea0d57e61701aea6f"
  },
  {
    "url": "assets/js/23.3f8b3214.js",
    "revision": "75d21d6ff5370741ba56bd88a62fc401"
  },
  {
    "url": "assets/js/24.b80dbff3.js",
    "revision": "9a3fe4afd76f87c937befc7ecf690384"
  },
  {
    "url": "assets/js/25.df84165e.js",
    "revision": "3ae2b11f956a8121985a98d392790172"
  },
  {
    "url": "assets/js/26.252b2dd1.js",
    "revision": "d98b516a2655481fc82afcb6866a83a2"
  },
  {
    "url": "assets/js/27.6cba144e.js",
    "revision": "30b68a093e137ee5d4e59b6ee222e3b3"
  },
  {
    "url": "assets/js/28.ccd0fb64.js",
    "revision": "1abafd9d1ffed9764b0f9e847cfa1389"
  },
  {
    "url": "assets/js/29.85ad7a17.js",
    "revision": "416874eb05cdfdc15fd6b98be8aa65fa"
  },
  {
    "url": "assets/js/3.9a6668e5.js",
    "revision": "f075441392055dd0fcec2eb9f2923a2e"
  },
  {
    "url": "assets/js/30.8753108a.js",
    "revision": "8d5ccad0acd5f461dcdea604d91159e6"
  },
  {
    "url": "assets/js/31.f866d48e.js",
    "revision": "fead0d598f460d263375fbc5d1705ffe"
  },
  {
    "url": "assets/js/32.653569a6.js",
    "revision": "a75671b816bc6a846e17f539f3a331f1"
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
    "url": "assets/js/35.04d14306.js",
    "revision": "c9ef3ad9b3ce2ba87da6495525fccd23"
  },
  {
    "url": "assets/js/36.0a8b8fc8.js",
    "revision": "b5be3647a10809e11ccb28610269fc23"
  },
  {
    "url": "assets/js/37.6bd58f8e.js",
    "revision": "75236d89d3ada252d3a08c649d4e1596"
  },
  {
    "url": "assets/js/38.32718a39.js",
    "revision": "c119bf7d91ae7efc2a00c6259e246b29"
  },
  {
    "url": "assets/js/39.31329a78.js",
    "revision": "3f3c7a19efb192bbde8c63f79c9c895d"
  },
  {
    "url": "assets/js/4.22bdd02e.js",
    "revision": "0f73bed8b46c048d6c77d10e9c155fdf"
  },
  {
    "url": "assets/js/40.ed9e11aa.js",
    "revision": "5e86514ed90c85c2e15812c2771b68b2"
  },
  {
    "url": "assets/js/41.328f02c8.js",
    "revision": "a6903bb9ac9211463c8dfcb0e8b97e1d"
  },
  {
    "url": "assets/js/42.f5b619c5.js",
    "revision": "c679dd1ae623c4f6c985b760cd3bc18d"
  },
  {
    "url": "assets/js/43.aa45f3a1.js",
    "revision": "95e0f23d60729fa091c9edd57ee38bae"
  },
  {
    "url": "assets/js/44.0da7baca.js",
    "revision": "1a663cedb0a7da01cc968aa6a53277e6"
  },
  {
    "url": "assets/js/45.a42c26be.js",
    "revision": "2b7ce0345a7e5454d5b2f1dc2d225375"
  },
  {
    "url": "assets/js/46.c4da6803.js",
    "revision": "080cf538805ed63f997f3948d9b0a7b1"
  },
  {
    "url": "assets/js/47.4788e7fd.js",
    "revision": "fcd12838c4408633986ca3bcf5dbc2e5"
  },
  {
    "url": "assets/js/48.b26a0d36.js",
    "revision": "381f172efb158e59ed0dd024b89cc82b"
  },
  {
    "url": "assets/js/49.8fa486a9.js",
    "revision": "dfee3dd8150ae92c2c5d3f01f0986569"
  },
  {
    "url": "assets/js/5.bf9802bb.js",
    "revision": "c14bc8416badd9c297a157dc29759b35"
  },
  {
    "url": "assets/js/50.a9d02bdf.js",
    "revision": "5f51402414b8077c97ec2d117d20fbaf"
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
    "url": "assets/js/app.a1b1bbcb.js",
    "revision": "925519d8cb397e1681ebc8bfbc991b00"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "93120c03ae736a628be999018d16903e"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "d15a1f7460b5f3951a2ca508a174d3d9"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "ea27d1331844dfbea54be32ff0c3cc0b"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "9c461eb73395f99cf2e78d9b8f6c144f"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "021a0db6ee0602be67663e1984f333d7"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "1f12f058776e7b2e887938a30f95e653"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "53aa35bdd3571b79edaf78d53acacc08"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "639ffb2dc9ac0e3956f62b9c4d5d52b3"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "bb0dde79155a1b84b75e792893449a4a"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "6b14599fa8d86665483185dda812814e"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "74c8298f9f614e8172bbd404992b6a6a"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "0b027ca630ced2a1aac0f500ba5a8cde"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "d08811ddc0e61bec40875bfcd9e4b1be"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "9684f9f2d2ca72f757c35b92b6a7a7bc"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "ee3ad1d8bf26b4c3d152fbe752985e9a"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "a2db95aa6c5e769126e7d59a2d7df8e6"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "b413e8fee432ffa3e12ef4cedf3a31f0"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "322dba799083f02c680f9e74e03503eb"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "745b8093b5606623679b751677d17467"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "e2bc5c41cf93ecffd87b042df14c8939"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "b6fd32dbf6d6413303121a29ed1354fb"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "894499d280ca2dc65bff976ab6dc8276"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "2fe170bfaa25ab9157071bb886ada672"
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
    "revision": "eef20eef73125011f992e72eda6234e1"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "f93cac4013bdea179cd68ce777ef72d8"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "fb89cf62d395d4c372021037badf77b5"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "bb3bde3b021864384d8c6d5a8b3b0c74"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "92a16cb4a92f53f08fb93beeac011e96"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "4c9f001a4df973b56d73389d75ae62a9"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "8a24413b03f2bbd62a714cbcf6123e7a"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "54e1f27a67ab5640fd6899573d614e95"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "f17cac01b370fbaa056aa5b6ebb27c4a"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "c9919efa9988f80e17491506c0a2d690"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "931dc236244e681300522a0997195d97"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "96838cc1f122741163465eae2a36c063"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "2e3a4abba7f75e9f57d242b315b473f5"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "4d75bebe3dd15ebd080fcee63ed73091"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "5fbbefa7aa3c32bc6660d130e6aa9a83"
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
