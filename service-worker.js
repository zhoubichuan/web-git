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
    "revision": "c77167aca8d1189be7a624fcf0429016"
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
    "url": "assets/js/10.a88befe0.js",
    "revision": "8a351ef2e0ccd22fec29de5593b664c5"
  },
  {
    "url": "assets/js/11.76a6f2f6.js",
    "revision": "bd9d44a73893f93c2d153b334153bbbd"
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
    "url": "assets/js/18.4537180b.js",
    "revision": "79abe6df953039e854783b99058e2b8f"
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
    "url": "assets/js/20.e797dcc5.js",
    "revision": "c85a8cf5a73fe8c2ce90635266f453fe"
  },
  {
    "url": "assets/js/21.a22dc792.js",
    "revision": "3afd862ce93e90d74ceac8c10dfca2be"
  },
  {
    "url": "assets/js/22.5e2ac874.js",
    "revision": "fd33be157b36e55f0b91067ea46e1ace"
  },
  {
    "url": "assets/js/23.66714fe5.js",
    "revision": "75e5b624e059e47f975306941566f3a3"
  },
  {
    "url": "assets/js/24.2209b6cd.js",
    "revision": "20691f6b2a0575ce0ebd1f3698e8409c"
  },
  {
    "url": "assets/js/25.d4f6b0fc.js",
    "revision": "2ad137397d497aa0047e529860f5ad12"
  },
  {
    "url": "assets/js/26.b937b32d.js",
    "revision": "a9db7644e97241704bced4a42fc494cb"
  },
  {
    "url": "assets/js/27.43a17475.js",
    "revision": "08b498880eb198a074e471d3d08b5277"
  },
  {
    "url": "assets/js/28.8a50aa73.js",
    "revision": "5a6080fdba8b61feaaf1f3fd2d7a687b"
  },
  {
    "url": "assets/js/29.3e9e7527.js",
    "revision": "85e5bb4694a10247afdafe6c734a3c52"
  },
  {
    "url": "assets/js/3.34653c3f.js",
    "revision": "dca3f76af15fb7a4e3ae32cd29c450ca"
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
    "url": "assets/js/32.748d4b58.js",
    "revision": "755778b133c9e5fec02f6dc01435266c"
  },
  {
    "url": "assets/js/33.062b1bb0.js",
    "revision": "94ae1ce20ccf54a38c8c74f36560440e"
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
    "url": "assets/js/39.e9962d95.js",
    "revision": "159f8c92cac0591fd255474541f1fc78"
  },
  {
    "url": "assets/js/4.af14d398.js",
    "revision": "7d96d5b224c78c98661d0eca018eddd3"
  },
  {
    "url": "assets/js/40.091eebad.js",
    "revision": "c031e69a056d7bc85eb54f4bda8d367d"
  },
  {
    "url": "assets/js/41.e1d314e4.js",
    "revision": "3fb2a4749e009ae905bdcabaedfd7b80"
  },
  {
    "url": "assets/js/42.b0ce8ffb.js",
    "revision": "58884c8e3cd5ede7b87052f1718a8077"
  },
  {
    "url": "assets/js/43.dd688603.js",
    "revision": "5d7c3d2f8e86ee88229b32063343dc92"
  },
  {
    "url": "assets/js/44.5b1ef267.js",
    "revision": "702ac4e1907ecb9a2045f8fee445e597"
  },
  {
    "url": "assets/js/45.1da8cea5.js",
    "revision": "1c221ee8b734ec34a684868b58e8031d"
  },
  {
    "url": "assets/js/46.34c3da74.js",
    "revision": "5759d57a8dfda2f4532335804d77c9e9"
  },
  {
    "url": "assets/js/47.78f27a21.js",
    "revision": "82b890b0abac6987980e87d0968cb826"
  },
  {
    "url": "assets/js/48.ebae4a64.js",
    "revision": "03de7690aef7d9876bc2ae19ae2dce56"
  },
  {
    "url": "assets/js/49.dd0bcffd.js",
    "revision": "e7a3f244af8c4e0c399455869fe6627c"
  },
  {
    "url": "assets/js/5.3311c24b.js",
    "revision": "60edc6509038036be8de3e89dad24cf0"
  },
  {
    "url": "assets/js/50.ed87fe5f.js",
    "revision": "9b058d53a8f6d579f6435cc4596d2527"
  },
  {
    "url": "assets/js/51.0788f8fc.js",
    "revision": "d7fbefca183e654724c804576ea362a0"
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
    "url": "assets/js/app.f0d228b4.js",
    "revision": "3e7b53d1fc9002bcfb7f5b8d810c2cc6"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "36a38e996d73044002756424a6b49730"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "3284ae1d7c0e206c8ce38f61e3b3edd4"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "809aaf0b651cc66e2684fa9b0848c773"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "1471da47647cc020c40bab169b4e787b"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "22952d18d8a09213bc3dc7efb2f898d0"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "cce555a3102e97805b3fa31da9e50430"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "b0797a7a79d90b605652115971eb19d2"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "5f01ce37d20da1a3b8d9e34e353117e4"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "36afc1712014ea67bf68fc44937ef79c"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "42653776240c7edc4939bfe898a38851"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "fa64f2fa4eaa4def2fd7b4789f642c90"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "6c15b59d8a83c5caebe3018fe1ac1b56"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "94780fc3395cd5edae8d0ea7f5f1d21f"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "4128962cf96871f70f00d6d63a8beebe"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "ac104aa117b31991277f7d2985402035"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "c65bcbdf4882e94eaf83a0b540b4980b"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "24c2231d627e4114528774e78af7ee80"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "eb4465af2f2b9ae47d49c47a3baac26c"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "58794df0c096de27f7cc613b58658996"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "5ce251d7a4f5d9e566c033e3086242f7"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "f271de7a11f882c8c26ba84c29ecfc6a"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "5ca5766be706bd7dc6986a3e36bcb47e"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "a9cd3d6046e9d8f9b4e878d81dbe4865"
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
    "revision": "8216f9742df276b2c244b0335614b770"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "db266c2a868ecc0568841c50df1f67f7"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "aa2fe10569cc650062511ad67bffd76d"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "5591369b7a68260a35ee5fb2a2a5879a"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "fd05408c913ed7d87b5fd212a9639929"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "f7cc4b2f13ea82ebe934197a5779b552"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "c4b04d15c4f236fa40500f9f50fa36c7"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "bc08ea3b4c5d707b7460711f48f1f94e"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "9813119790d4698318d9a32c38a84fed"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "7dac0b3da8934690ad57db906f7d8b23"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "72658d4c7ae24a463331ad07776a81cd"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "b0ca88864b64a1d889ef7193656dc2d1"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "5acfc65c994290d6aec312394bedb9bd"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "0819869013d6ec5d4b0c52f9eb167194"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "ce76250450c1df551d1c00e0e4ebe40a"
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
