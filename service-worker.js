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
    "revision": "6a811ee539928cb24ed1c4460f362d5d"
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
    "url": "assets/img/image-3.2e1ceb38.png",
    "revision": "2e1ceb38f9a1cfe71d8acf642533fe6a"
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
    "url": "assets/img/image-4.cf891ac6.png",
    "revision": "cf891ac64b91554db5a2b9ded56c931a"
  },
  {
    "url": "assets/img/image-5.34e21d19.png",
    "revision": "34e21d19c5b9a75410fdf3484a3a3f59"
  },
  {
    "url": "assets/img/image-5.52f88e4c.png",
    "revision": "52f88e4c6bc64d74b94cac784a48e271"
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
    "url": "assets/js/10.2e4907d4.js",
    "revision": "b5acb19787fa5abbfc61fa99d9c4ac28"
  },
  {
    "url": "assets/js/11.74c5f715.js",
    "revision": "5d1d7afb36bc90583a0fa979ddbecf2f"
  },
  {
    "url": "assets/js/12.a23ba3ac.js",
    "revision": "f9584bacc59bfd40dc15a6b872e8ba2a"
  },
  {
    "url": "assets/js/13.c47da8ca.js",
    "revision": "3065aec57e3cd1fe1f870aa4eb8f379e"
  },
  {
    "url": "assets/js/14.67554bae.js",
    "revision": "163ebffaf7913f71f9d6151972a61da0"
  },
  {
    "url": "assets/js/15.d534fe52.js",
    "revision": "53d4c4adb192f3bde26d7e520a356525"
  },
  {
    "url": "assets/js/16.c8974ca4.js",
    "revision": "c6582d8e33b19b831489cd2aee246a80"
  },
  {
    "url": "assets/js/17.d4a27d0b.js",
    "revision": "6bdfd07b50d4d2ea4e863b7de6e7bdae"
  },
  {
    "url": "assets/js/18.6e233c70.js",
    "revision": "066b49f78bd8ac774d6ea85aac06c07f"
  },
  {
    "url": "assets/js/19.d71d8185.js",
    "revision": "8b9e4f0899f63ef88ae175fe0990a517"
  },
  {
    "url": "assets/js/2.5ab90b5d.js",
    "revision": "edb18046ebe2286fda6b50f021df00c7"
  },
  {
    "url": "assets/js/20.e90828a1.js",
    "revision": "c12099542234895509c34671a05f426b"
  },
  {
    "url": "assets/js/21.b855baea.js",
    "revision": "d1d8ebaf1d578768b0439029c6dfd0b9"
  },
  {
    "url": "assets/js/22.5eec34ba.js",
    "revision": "0fd1e392e56d1bb3f203802749659ad6"
  },
  {
    "url": "assets/js/23.e27b3383.js",
    "revision": "6bd7e1224cad0d75fe8d44cff0949845"
  },
  {
    "url": "assets/js/24.a11a2c4f.js",
    "revision": "19156243e1d70a02c3d9af116e99759d"
  },
  {
    "url": "assets/js/25.aa8c69f8.js",
    "revision": "b27d81280f74ed38e40bf2234bf321c4"
  },
  {
    "url": "assets/js/26.d7b89b97.js",
    "revision": "821c0076ec29af7b1805f85da1d5ea9e"
  },
  {
    "url": "assets/js/27.43a17475.js",
    "revision": "08b498880eb198a074e471d3d08b5277"
  },
  {
    "url": "assets/js/28.02d872d8.js",
    "revision": "eb5921f3b4b8e1d2805e7b66a23a0fec"
  },
  {
    "url": "assets/js/29.85ad7a17.js",
    "revision": "416874eb05cdfdc15fd6b98be8aa65fa"
  },
  {
    "url": "assets/js/3.dc604785.js",
    "revision": "447ec7b97d2c799f265a99be6bc98815"
  },
  {
    "url": "assets/js/30.282862ed.js",
    "revision": "9112d39696df6f17c095d7e660ab6dac"
  },
  {
    "url": "assets/js/31.cbb63d67.js",
    "revision": "0b60b311a201adba16515f530c2102df"
  },
  {
    "url": "assets/js/32.261a26f7.js",
    "revision": "5e85613a9aa6dc1685166489e2626d50"
  },
  {
    "url": "assets/js/33.7ad74bad.js",
    "revision": "4cf7cab6efc7aeb689283139c93bb6dd"
  },
  {
    "url": "assets/js/34.5c702ee9.js",
    "revision": "58bfa9a0c6c7d193df751c013416a507"
  },
  {
    "url": "assets/js/35.434ee042.js",
    "revision": "f76aa4d03c61a95fb05766ad3a1c3ca7"
  },
  {
    "url": "assets/js/36.068d24e7.js",
    "revision": "12498a49183b736cb5ce1653d291679c"
  },
  {
    "url": "assets/js/37.605f7edb.js",
    "revision": "4bae340da578df79b46711e8d9d5e71b"
  },
  {
    "url": "assets/js/38.658dea61.js",
    "revision": "9fd744613082ff5873a140afba44aa83"
  },
  {
    "url": "assets/js/39.732ffd5c.js",
    "revision": "97a9f6852c86852b9afe3cfee2ffa50b"
  },
  {
    "url": "assets/js/4.46fd9c32.js",
    "revision": "2dbc24d706b752fa7dc9b80ba37b95fa"
  },
  {
    "url": "assets/js/40.ed9e11aa.js",
    "revision": "5e86514ed90c85c2e15812c2771b68b2"
  },
  {
    "url": "assets/js/41.e1d314e4.js",
    "revision": "3fb2a4749e009ae905bdcabaedfd7b80"
  },
  {
    "url": "assets/js/42.5fd901d9.js",
    "revision": "ce4bf27758b9e825fd03383b22da6d11"
  },
  {
    "url": "assets/js/43.26095cc1.js",
    "revision": "b7ba2cf1faf0283aa0c210b9832eb240"
  },
  {
    "url": "assets/js/44.4f67684e.js",
    "revision": "c69740a4907a75af6964312c9df6aedb"
  },
  {
    "url": "assets/js/45.1da8cea5.js",
    "revision": "1c221ee8b734ec34a684868b58e8031d"
  },
  {
    "url": "assets/js/46.f9e67225.js",
    "revision": "15a05fffb6643b5fc1c5e00c327b7109"
  },
  {
    "url": "assets/js/47.b9ed9276.js",
    "revision": "9fbf9ee52ee950de088b681cbb8caf01"
  },
  {
    "url": "assets/js/48.6b775c6d.js",
    "revision": "eba98d3817114caece1980e72f03ab05"
  },
  {
    "url": "assets/js/49.25427b30.js",
    "revision": "e1ea3963ec92cfe2d7e6eed0cc61e5c6"
  },
  {
    "url": "assets/js/5.3311c24b.js",
    "revision": "60edc6509038036be8de3e89dad24cf0"
  },
  {
    "url": "assets/js/50.ee4c009f.js",
    "revision": "1c49bc92ba9c3aeb6c0ba1e220970970"
  },
  {
    "url": "assets/js/51.d7ab7dfc.js",
    "revision": "e889186396c7b52f8465f24c7b11d4d1"
  },
  {
    "url": "assets/js/52.30b118e9.js",
    "revision": "78b53680de3be5d0fca0f5c02fdd16fc"
  },
  {
    "url": "assets/js/6.d0dcf50d.js",
    "revision": "8de1df0475f0f7cbf1500f620041cf6b"
  },
  {
    "url": "assets/js/7.6163ce85.js",
    "revision": "3a8491f7a980b3987df76f9746586e73"
  },
  {
    "url": "assets/js/8.2346a74b.js",
    "revision": "1bb945145df8245b7cd10be82bd43a53"
  },
  {
    "url": "assets/js/9.44f89740.js",
    "revision": "1fda90b5b86280d4399c7f28b933e42b"
  },
  {
    "url": "assets/js/app.e9e62d17.js",
    "revision": "033f72f78c292d8c731dff60ec483b6f"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "2934e93d59d73317e5b324af0df1e098"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "7c5b2f0a4cd3329ee3e7524475f33897"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "2db2ab7eb077bbc73e90a5f05b986dd6"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "fdff18b4b6c1004081c8d91e886aba0a"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "24a8dc6279da52d11b754b15ec0b0585"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "61cbc08a617af9092d6d6f26fe9d1192"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "4d1fc074431047d031ba4af46a8f5142"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "f6b5173b1d4c00dad9f46330b2e4b97d"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "7db12a7822e03f35127be643932703b5"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "abdf212dd204b16b7790756de1e33f7e"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "dded49e22b8a1f794977bc9760cd84c6"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "d6fa531a031282d100bd2e63ab0dd6aa"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "e4c614dc8333fcba5484f7714b7b0c23"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "f33cd6e3b9a63e7a36bf804765f3f3e7"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "f79bd8e96bb81868ec58da080222803a"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "4319737bf029a08c3a7bc4aa5804f7e9"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "8c846d22391c52b626aafc2fb2a09761"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "06d4fa6108bd8bf90e0a78cd09fc6688"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "6c5b1aebcaccc96a138e002aedb73be1"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "193b6b184e3696f1e1c2f9a1d30d2100"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "4835411f42397ddcb2a8adcc7abd13ae"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "7ba1398a9c46447f106c381bd9c15f73"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "48433a6c8ee3b95b6cf5207f4fd89de2"
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
    "revision": "32563e3f8a994c5ea7819bf36a15a377"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "2e4b718fdf654efb2927b7f4e5bfa499"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "fb268dc55c69a5c4a592733ab687aaa0"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "c2f3ce9decd0e0e474e820e4fd402221"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "a2c23d8ee6832e4aa67dc8d367b8abbb"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "670e33ee62014ecb1da79b56a7465902"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "6c5034f846c5e49c9008ed45a43342db"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "a495e0f7986cbc4470866179b61327e2"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "f847a85ede36cc3692b9686686fef215"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "4c4da9185c95cc8b9c0e1dad2412bf9e"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "c42ec07ddd82a41b934eeb41cbab0144"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "4a168c1ec685f16b5db20699675b293e"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "90e514c694667c6718d0ab3725d06cec"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "f67e7323ad048da83afcefb894f5c73c"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "f5032553d2f0bcecb0feec127655f2fc"
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
