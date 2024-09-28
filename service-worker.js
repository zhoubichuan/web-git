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
    "revision": "4a26a0d8e730e3b83409ba33d80b028e"
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
    "url": "assets/js/16.c1747cc7.js",
    "revision": "d54c3a736d438156c7fc0ebf96e79acc"
  },
  {
    "url": "assets/js/17.46e8a616.js",
    "revision": "e8dc196d2115a0cff6d7fd56bd2a8f50"
  },
  {
    "url": "assets/js/18.9f6e1bde.js",
    "revision": "0a6b068b3caefdc0236e321ca17d6aef"
  },
  {
    "url": "assets/js/19.c3fdd87a.js",
    "revision": "4e05b00f8b9057ac5c1bcdcee647cfaf"
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
    "url": "assets/js/22.173ab40f.js",
    "revision": "bb880de6805d116b5a62c525a6f5dee2"
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
    "url": "assets/js/25.82e961ca.js",
    "revision": "dbbffe3ff1a275323c7dd406f553e31b"
  },
  {
    "url": "assets/js/26.57b2decb.js",
    "revision": "759f0708e838f9bb802cef0a160a26e3"
  },
  {
    "url": "assets/js/27.70be8810.js",
    "revision": "9c3616ebe3cde6cb4038c7b8e1612e23"
  },
  {
    "url": "assets/js/28.e0d8fd87.js",
    "revision": "8cf08e61999ed719cc5bdd309f727844"
  },
  {
    "url": "assets/js/29.c5451a5f.js",
    "revision": "984e2fda7a9d130a733d44c42f34c7fa"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.fe95914d.js",
    "revision": "7b3104b47d11f88472bdabbb855aa682"
  },
  {
    "url": "assets/js/31.51a00585.js",
    "revision": "8b1f8555fd7327d0c4accff3c7d21f02"
  },
  {
    "url": "assets/js/32.2ba5cd8f.js",
    "revision": "eecef03b91a3306d4e842713f7ca3d88"
  },
  {
    "url": "assets/js/33.ea4056f4.js",
    "revision": "d7b49a6112132e5109049d8a62757fd2"
  },
  {
    "url": "assets/js/34.ae9dc71b.js",
    "revision": "0d603693b654ac3fed6d6e22828f5fec"
  },
  {
    "url": "assets/js/35.62e2b10d.js",
    "revision": "26ebd3a5161d1d503001e2f1a8a1d74d"
  },
  {
    "url": "assets/js/36.5480da51.js",
    "revision": "869917202de56dcfe22e1a1077b5f07f"
  },
  {
    "url": "assets/js/37.dae6f4a3.js",
    "revision": "6999f5c9f332ab38e66a8cfc363c2642"
  },
  {
    "url": "assets/js/38.e978e66f.js",
    "revision": "2403ec3a3fb2d5d7c00f9bbd01b7fa6e"
  },
  {
    "url": "assets/js/39.fd60c61d.js",
    "revision": "28b39c9d6d83a56b6fcf3f9f898c8858"
  },
  {
    "url": "assets/js/4.0b2cde7d.js",
    "revision": "b3dea958a6fe2f4361c675184fe538c0"
  },
  {
    "url": "assets/js/40.7b636372.js",
    "revision": "aba9c2261add800a1945c40f21af877c"
  },
  {
    "url": "assets/js/41.b64bf355.js",
    "revision": "3e9937a344b02a94a6a13a5002097688"
  },
  {
    "url": "assets/js/42.00fb7b6f.js",
    "revision": "74f719126cbb2930e4020178f60d2183"
  },
  {
    "url": "assets/js/43.45bff8c3.js",
    "revision": "208c5d1e46462ec562d4bd17b4d450cb"
  },
  {
    "url": "assets/js/44.8795614b.js",
    "revision": "8c21067c430e825edcda2ec43f55891b"
  },
  {
    "url": "assets/js/45.83f59a87.js",
    "revision": "f3ba928815b172d4b7dfcd4697216424"
  },
  {
    "url": "assets/js/46.d09ef11a.js",
    "revision": "6cba3e4310755c7717998d9db24f9e3c"
  },
  {
    "url": "assets/js/47.d40e0973.js",
    "revision": "e82bd843abc726f416294bbce782bfcb"
  },
  {
    "url": "assets/js/48.e82be906.js",
    "revision": "aa71848bb0059f26b22f1aa99a8577d1"
  },
  {
    "url": "assets/js/49.44cff85e.js",
    "revision": "342a09dc1d6ac76a968ae5997862c558"
  },
  {
    "url": "assets/js/5.fb713732.js",
    "revision": "2a9d14c42947f7f15180d59e1b80e32b"
  },
  {
    "url": "assets/js/50.36dd0656.js",
    "revision": "556585fba79af31b5b812d415712c3ef"
  },
  {
    "url": "assets/js/51.e299de40.js",
    "revision": "554fc2feec2fb735cbe44a2212e62821"
  },
  {
    "url": "assets/js/52.0be3cf61.js",
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
    "url": "assets/js/8.ede6976d.js",
    "revision": "cdc153784a062137dbfd329c2be17818"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.361c5092.js",
    "revision": "f0c0c2770b14fb49c698bc8d98535e67"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "c51010b09d728d02ff1b36772463a4bf"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "aec703e07b5fb3837e34b582f065a3ea"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "f2454216ab9f3cb8e0dccc266d829197"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "6be50b28a571d37f7aa391e2a568df4f"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "aadb0124ae17c5144cc64646b40bc652"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "3018c97424228cf8bd2634e4b01cf670"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "303b5ae54a188eedbdac33cda338da99"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "86b5adeb6391ccf0b664b8c33d16508f"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "21fe3d67738a91a972eb0c31d049d164"
  },
  {
    "url": "base/git/prem.html",
    "revision": "d92336971ab738a30217850f59303ab1"
  },
  {
    "url": "base/git/test.html",
    "revision": "882273be19fbb2291216c3db50c9bc69"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "66047aeaf88534c231469c01c80decbf"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "cb029d0776e3a4aa1f937233806063a4"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "b74b003ef90e6a017d2256f8c8adbe61"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "1e25bb1152046e50f804823403aaf9f9"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "0707854a7931ee116a3fac6f9e36ac80"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "fc138e58cdae8a7b3c5e8c9d8fcf65f4"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "778c84474ef62420beaa8263067297cc"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "bcc6d6e02a6f791134a71455e83beb05"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "0234c64dc406165de80385c3c36920b9"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "d0ee29dad764aad9fd1ec584911f423c"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "286bb8a0e068cd85ae3caa83e57c2473"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "d8490292ff05020d338594845cdb1571"
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
    "revision": "439d7d152eb745f555f7925dc5f6fb7c"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "b23ddefa835c6047045b31f206580836"
  },
  {
    "url": "senior/svn/1.常用的cmd命令.html",
    "revision": "a843e611c5cc209f381cfc8c1a61d562"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "85f5479be56e10235a4e006cbd6419b1"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "92fa1681ec25a98f85ab209d1a5430e7"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "3b2678beecfc5d64a4e2f9c08fce1b76"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "4644a2d0558cdaa69cf69f1184fa808c"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "13e4cf5e9be40e37fa8b2990fde74e17"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "3caeffdbd68be68e14d88ca891426e61"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "091ee29c160920fdb7c0caa91cc9bd6a"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "c6516b1d9ad3a03cdc5f9e4d4a151f61"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "a1fdc9e9e110533d188bf65cadffece9"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "b972fc779973bf4e2b220977ff902dc3"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "6338ed25228f67406c27b7d2422ed43f"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "70ab682e2ba19c6412927087c7bee4b0"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "c26dcb2ccab9813c9547f0f6132fae64"
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
