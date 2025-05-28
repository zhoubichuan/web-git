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
    "revision": "c747ac9849dec140a04b447327425765"
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
    "url": "assets/img/image-2.c082171d.png",
    "revision": "c082171dc3b17acc86eaff9866534ca4"
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
    "url": "assets/img/image.598d4d91.png",
    "revision": "598d4d912f499e61a211439e6bbf4d6e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.406ee16c.js",
    "revision": "74ee01ea63828cdf5f9c73b20b694723"
  },
  {
    "url": "assets/js/11.86ddde0b.js",
    "revision": "e42d7d4b3f80a15a3024db69d04c7265"
  },
  {
    "url": "assets/js/12.3c9fc9e1.js",
    "revision": "5ed1c7657052bd07c5e6358cbdfdca1e"
  },
  {
    "url": "assets/js/13.496ac9ce.js",
    "revision": "388528c3790ef05bbb1c54a5d9f1575b"
  },
  {
    "url": "assets/js/14.0b6f4fb4.js",
    "revision": "f17f27bc6d69de40fc8d00f89ec3ed8e"
  },
  {
    "url": "assets/js/15.16c15e02.js",
    "revision": "7de3e908fc07142db96e2a6ff80d6005"
  },
  {
    "url": "assets/js/16.9a81da62.js",
    "revision": "d4745952930cea950fc6afaece6d3937"
  },
  {
    "url": "assets/js/17.b6403125.js",
    "revision": "c926d896dce2b3c783cc121949d44db8"
  },
  {
    "url": "assets/js/18.3b6fef60.js",
    "revision": "bd0ad94b694f724b0a3d4520edf950f0"
  },
  {
    "url": "assets/js/19.2188ce82.js",
    "revision": "fe0cb03e715d3ccbc80bd9d6850f8404"
  },
  {
    "url": "assets/js/2.c8b06f7b.js",
    "revision": "fd2127bf3b6c8ad16829b7da2fbf8a5c"
  },
  {
    "url": "assets/js/20.2293cd5d.js",
    "revision": "b44796c792dd9fcde969443ca804562d"
  },
  {
    "url": "assets/js/21.46f9c47e.js",
    "revision": "4c9f0fb5ec3f0f3ee0500aa700576281"
  },
  {
    "url": "assets/js/22.bdc7d724.js",
    "revision": "990b6d34aae6099073aeee0b358dfad1"
  },
  {
    "url": "assets/js/23.5605ea14.js",
    "revision": "532c99c6a36b18e98664e7e416e68d5f"
  },
  {
    "url": "assets/js/24.d79abb4b.js",
    "revision": "0f7ef7fd17f27974d9ce6df0d36716c9"
  },
  {
    "url": "assets/js/25.2822666b.js",
    "revision": "cf36e76de9e894ef9ffc2658de54d878"
  },
  {
    "url": "assets/js/26.a4977f2a.js",
    "revision": "96b7b543098f0e4ba7ccacac24453955"
  },
  {
    "url": "assets/js/27.e99ed794.js",
    "revision": "0563df37d1bccc0cf054ea4b51edc631"
  },
  {
    "url": "assets/js/28.26eb2a65.js",
    "revision": "f83215ebd25859432fd3989538a9cbb8"
  },
  {
    "url": "assets/js/29.37889990.js",
    "revision": "0794bb17c9c8da6db8c95e1942f19527"
  },
  {
    "url": "assets/js/3.c3911b5e.js",
    "revision": "840309b171531fbdde8f8ad4646ebe68"
  },
  {
    "url": "assets/js/30.34aef2c3.js",
    "revision": "b3c5c0e08741eb7763f46aa8fdfbd8fb"
  },
  {
    "url": "assets/js/31.2a0386f7.js",
    "revision": "5dc9a30543ac9a985347f6867e392d21"
  },
  {
    "url": "assets/js/32.2caac872.js",
    "revision": "eed794e84cea88c2265d62868bcf63e8"
  },
  {
    "url": "assets/js/33.da32987e.js",
    "revision": "b030d44c39a0dfd70cb42e7796a04115"
  },
  {
    "url": "assets/js/34.9d171a58.js",
    "revision": "9a5dbe56a33541542cab40180be7d500"
  },
  {
    "url": "assets/js/35.b1ae85ea.js",
    "revision": "844ab05f5ed1b15f11acfe34a0dff4ef"
  },
  {
    "url": "assets/js/36.d4156029.js",
    "revision": "ca9e9988b68c0ae685305d5b7c597641"
  },
  {
    "url": "assets/js/37.b17fab48.js",
    "revision": "ea678460ff4d0f3f41b8e184a69c30cd"
  },
  {
    "url": "assets/js/38.af781799.js",
    "revision": "88c604bbeef1ea34346b2d9786acac47"
  },
  {
    "url": "assets/js/39.ff32fb96.js",
    "revision": "56b15fb82fecbd217d525ef5e13eabac"
  },
  {
    "url": "assets/js/4.c37d4293.js",
    "revision": "4ba9a7267274b1517f5c5407c3779197"
  },
  {
    "url": "assets/js/40.67b74a7b.js",
    "revision": "97aac24f9fcdaa0a8731b41599c15fb2"
  },
  {
    "url": "assets/js/41.f298f6dc.js",
    "revision": "dda0bf791c8290562ab36f5d8a1c7a51"
  },
  {
    "url": "assets/js/42.a9806195.js",
    "revision": "3cc60a3bd07bdea2ac1651ea3f7ce5d7"
  },
  {
    "url": "assets/js/43.87f496a2.js",
    "revision": "8cdc0845668043b595fd6a81ec55b5e1"
  },
  {
    "url": "assets/js/44.5ae46c31.js",
    "revision": "12457cb7956015b0afdffbad791e6757"
  },
  {
    "url": "assets/js/45.96ca4676.js",
    "revision": "d4f63eaa64c577f2486515465c034cd8"
  },
  {
    "url": "assets/js/46.4a997a52.js",
    "revision": "bcee1e9c1d6c8727008a66b400c7d6cd"
  },
  {
    "url": "assets/js/47.65205fa4.js",
    "revision": "714d0f6b6f70affd1c5b0212e307920e"
  },
  {
    "url": "assets/js/48.5e187de9.js",
    "revision": "86ae533ad2ec2aa3ed605003771405a1"
  },
  {
    "url": "assets/js/49.0e676f57.js",
    "revision": "9e12097084c370efa80ca44d5f6adfb3"
  },
  {
    "url": "assets/js/5.ee62f05e.js",
    "revision": "701fbb1bff82965890cc9a3443b9a6d1"
  },
  {
    "url": "assets/js/50.d5c0112c.js",
    "revision": "77360404a0508e4145120bf5471cc2a6"
  },
  {
    "url": "assets/js/51.cc4ca905.js",
    "revision": "afcb5bac5dcb5ee7ef223173b08df928"
  },
  {
    "url": "assets/js/52.22681df2.js",
    "revision": "4290c15f0b5f192bea593d22986226c8"
  },
  {
    "url": "assets/js/6.2b326366.js",
    "revision": "7926e7acf2f8d3183292fadefcf6a592"
  },
  {
    "url": "assets/js/7.7b0558b4.js",
    "revision": "365de630e4102b01075e3b36bfe7705a"
  },
  {
    "url": "assets/js/8.90295d2c.js",
    "revision": "5514b92a7ddb6a7cbcb138856ecd52dd"
  },
  {
    "url": "assets/js/9.c38be7d3.js",
    "revision": "b0ff5b285d9389b08b1b807318a18327"
  },
  {
    "url": "assets/js/app.c8cca537.js",
    "revision": "44a8c6e6ed4396c5208e5be036a7438b"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "a18101e4562f4b544fbfe74bd37b8672"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "e62f04c640b5ce4b641427eb6e82e930"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "803bd604b0190e06a193e3a118443232"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "30241038822caea4462fe85e1371519a"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "90c9549eaf2a8c8c83a2a49c99a21f68"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "e8e13ae5cdd541817c60583b5d4a9017"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "f15fa49eaffc09563a8a0f6d16f4e9ad"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "5841dfe110a3cd82aa7d7a0407407f0e"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "d4277cd7c473683dfbc94924750963cc"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "a36618dd6c5223d4015c8f0befb150b3"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "2106e3e0a9d0c580331b3c79ebbc333b"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "93e25cc7437e96dea113c5c991ff235c"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "600d30eeef6adb6fd64a86b302baf924"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "89e077e064eba24c001ee40ffe1cf885"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "f02d2b22df61c8a1c66a2a9e9a0ec488"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "5f4c0515ebca80fab433d6a3f5f693b1"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "fc26234d11810b9e513ec711fe9fcb83"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "a0b3c9a527d49b1f363b8b68954238b7"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "0e2d79783496dfa4bbd4af47359aea83"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "65561a73b78a7787ae47526f1fd21a64"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "9435f748341bdd4dbf08a4f494d17bae"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "1cf4cf296d13cc92d513245f2b440208"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "be158b555400e2d41ffacacb47a09daa"
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
    "revision": "b895c922d653cdb27843a0ffafe299ad"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "361db8d22a2f7596c073a9a0d65b68e2"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "f940e670413f6194ddb8b9bd8c341343"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "dcbe1c178e0140a964398a4b25fb6402"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "320453a0ece9b065fe882e44d9422ddd"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "4a184b574183ccc9c9033efa8e6d5b21"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "3f4ee64368b7e29c02989e93d9ceba8e"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "13a510f0f45882a61a48d5aeccf5493e"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "0936cbaffc5457d86a2ed3ae1c6e4cc4"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "ae5f183c794e048f014016ccb4a8a70c"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "cf240b238e740b10dbdd551067295657"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "7e79e3756f3635b1b6966468b236cc6e"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "37ed2f4e483cd91d7812705ccd37e10d"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "015e7a9a95c6871f24e586f054e74423"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "4566f292011b37907a641fead658af43"
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
