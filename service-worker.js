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
    "revision": "e01f813b00d0314fd024f1d1ea42ea45"
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
    "url": "assets/js/15.effc6a73.js",
    "revision": "5e80eb8f6543d980c67983b305502add"
  },
  {
    "url": "assets/js/16.ed552690.js",
    "revision": "992c97eb87aef229346c8992cf54dc8f"
  },
  {
    "url": "assets/js/17.43c630e5.js",
    "revision": "01f35e116e941852c314be8fadf8aba8"
  },
  {
    "url": "assets/js/18.3867391a.js",
    "revision": "c83d07c63ed77468ad60d92c065f3915"
  },
  {
    "url": "assets/js/19.ad4d6e9c.js",
    "revision": "a2eb63748aaf6e1e3536edd445d80a42"
  },
  {
    "url": "assets/js/2.3b3dad13.js",
    "revision": "058da46cdf8f19678b3d8d257e401c64"
  },
  {
    "url": "assets/js/20.68550292.js",
    "revision": "63a8d83a7a68d6bd4e58c4c6ad21f8b2"
  },
  {
    "url": "assets/js/21.bd9ccca7.js",
    "revision": "31f681b40430b0f4cb3a2d3339b0e5c4"
  },
  {
    "url": "assets/js/22.d20ae3d5.js",
    "revision": "8aa1ced40a1616084fe1314bb1177a22"
  },
  {
    "url": "assets/js/23.781c2c7a.js",
    "revision": "1494e21f6d6942b0d65924e75a665255"
  },
  {
    "url": "assets/js/24.542c929d.js",
    "revision": "0ad6aab26cbd7b3c81cc74ae6f0bfeef"
  },
  {
    "url": "assets/js/25.1d791b5f.js",
    "revision": "30a778bc26f52ce7518df32269fb5b2f"
  },
  {
    "url": "assets/js/26.8b7fa7df.js",
    "revision": "bbc5e8a3088300831996b8b6e9f39e13"
  },
  {
    "url": "assets/js/27.3a2cf598.js",
    "revision": "00de354108abd4bc6c12c1b02c195e7a"
  },
  {
    "url": "assets/js/28.0fd07f1e.js",
    "revision": "7156a2aef7c14edbae60d2055e0bff68"
  },
  {
    "url": "assets/js/29.a2664b28.js",
    "revision": "599b2ad34802fabd46b1cd691494b9e5"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.6239b59e.js",
    "revision": "051c7db009b77949196019f36095bd3c"
  },
  {
    "url": "assets/js/31.78a3a5cc.js",
    "revision": "8b6df4cf84ed32960f515624aa568ecb"
  },
  {
    "url": "assets/js/32.61e61d89.js",
    "revision": "843b4a1c1ceb3a8cd2d87ce6da814ae2"
  },
  {
    "url": "assets/js/33.d873e1f4.js",
    "revision": "152c17e2cb970ef2631b1ef9a7d232c8"
  },
  {
    "url": "assets/js/34.730b53b1.js",
    "revision": "1ec6738402669ce85a8f0d9b79024d25"
  },
  {
    "url": "assets/js/35.6e0e82e3.js",
    "revision": "57a1c0b4ae1e88d986797f7b818ee5a9"
  },
  {
    "url": "assets/js/36.fdf7a034.js",
    "revision": "43123facc57fddfbe82d8521975614e9"
  },
  {
    "url": "assets/js/37.760c4397.js",
    "revision": "2b230ff0192c897ff3d4edb9127d2472"
  },
  {
    "url": "assets/js/38.500a5ccf.js",
    "revision": "cb73ef24921afc2a9c6f619e0ed546f9"
  },
  {
    "url": "assets/js/39.9b1c6cf3.js",
    "revision": "f680fe648a8367e967f62cfa63745e4f"
  },
  {
    "url": "assets/js/4.fb7290dd.js",
    "revision": "f91b330643bf762a4fcee297536ebe91"
  },
  {
    "url": "assets/js/40.71639d71.js",
    "revision": "4e61bbde0b59304191d6dffa40287d7c"
  },
  {
    "url": "assets/js/41.7b9ffdc6.js",
    "revision": "d0ce1545ec0a14595795fe4f48d01293"
  },
  {
    "url": "assets/js/42.2cf55b9e.js",
    "revision": "0508820558f7b64d391325b01c4d2feb"
  },
  {
    "url": "assets/js/43.86ad69d6.js",
    "revision": "208c5d1e46462ec562d4bd17b4d450cb"
  },
  {
    "url": "assets/js/44.ff6175ff.js",
    "revision": "f60e9122a6f4bc57ad8c6438db9a10e6"
  },
  {
    "url": "assets/js/45.40e1c793.js",
    "revision": "0c5ceea0f8c6a46743c4511daa1d66d3"
  },
  {
    "url": "assets/js/46.bc2d649d.js",
    "revision": "694f22f5ce0a75aa91bd8f507ecd7216"
  },
  {
    "url": "assets/js/47.8acb2a50.js",
    "revision": "f847ad2b19dc48e61b01f766900fb01c"
  },
  {
    "url": "assets/js/48.9dac0ce1.js",
    "revision": "cc39b5623031de199ad0e1d3da3566c4"
  },
  {
    "url": "assets/js/49.a26cb490.js",
    "revision": "759390e0f5907f8a289946f86bc74448"
  },
  {
    "url": "assets/js/5.fb713732.js",
    "revision": "2a9d14c42947f7f15180d59e1b80e32b"
  },
  {
    "url": "assets/js/50.1750792b.js",
    "revision": "bee17aa59ac78296247fb729c06ad006"
  },
  {
    "url": "assets/js/51.e96303d9.js",
    "revision": "b807ebb8c1d8bc736e146b95ca931bfc"
  },
  {
    "url": "assets/js/52.658292a9.js",
    "revision": "9d3807ba7e9481e9646f5cc1c420b433"
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
    "url": "assets/js/8.0e4370a8.js",
    "revision": "0a94e16117f2d32961c478563a9d5aa5"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.1fb112f3.js",
    "revision": "e22741eeb8954602abb310e07eda8763"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "2a41bad44ad73cd7c6e601f403ea0c57"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "547e2286e307b695e41a4f31a19679ff"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "377e8de29bd3a92be4a6d669c42572c6"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "f9bfabfbd0a13d5fbc7d43ce1565e905"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "74633264ec85c0750551c2c2b1872344"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "339c3038b1f4566207d4f9c5967d88d3"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "5202e7012d7d38c0872159d19cbf49f3"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "638fbe62be09b76a41ce804f3941e3a1"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "d5e41e23b5511b36084bddb6edde702f"
  },
  {
    "url": "base/git/prem.html",
    "revision": "34407937778b64905fc8a00ccbae3bee"
  },
  {
    "url": "base/git/test.html",
    "revision": "ed45d2abdd234541b3832863894609af"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "c1f21b1f5789dc3193866640d63fc96e"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "002d8d729f67e48792566b28a0db3b0f"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "03c93e48e2053aef53cc579ebd66edb8"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "2907ad752717a53e069e7cdd80610ae7"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "abb75ca5eeec408c85f4215beab84034"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "507758c0caa88c7e7ef001afa4d33f68"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "217c7591e426afe75a2fc901d2acd8eb"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "656c1430ee192c92fce924f120ff06ee"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "cdf746f7ac68aeb9de8e586cc4819728"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "4f14f1b0e4008e802d69f1ed3fcc9035"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "46f8742202af84fe78ad9b60a4028842"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "95ef8ccd208eb80d4cdfd2739b0ab536"
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
    "revision": "74b84d712f6e1e661e109156fadfe80f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "078f14df180d168793c61ccb6397edc9"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "6f383bfec91edad920cd29aabaf678f8"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "3c06daaaccb0964b00b438acdfc36f7d"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "350359053588d2c51651d966ad172072"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "3a7b886017fb393e5a133f342dd749f0"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "bf52697512230f7ebf7976c7aae385b0"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "2caa20ae4b1fcab58fd1d70d23e9bd18"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "67b915585b4d3079628d2d2d87b0a363"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "e87c4a0e5377cb5b44de39809413df20"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "4ade752a57d78c9097b5f02cd3ff0b8e"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "a0bc893e73bd8296131037ea771a9568"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "f96f61190a136324332be5f09e6f7197"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "bf06a194750f1e66aa7cfd591f799a00"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "1234350dbe0069e7cb19c9e002fb0ed0"
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
