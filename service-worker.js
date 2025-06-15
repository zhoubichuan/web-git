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
    "revision": "a87c638d6f71f9eb16cbd6fe94eb3239"
  },
  {
    "url": "assets/css/0.styles.f8c9b5c3.css",
    "revision": "920feffec2336721579cc05f0e1e11d4"
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
    "url": "assets/img/image-10.7031dbf0.png",
    "revision": "7031dbf097c27b00d08ff0ceb8dd467d"
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
    "url": "assets/js/10.a68d4a59.js",
    "revision": "fcf10cb6e6ce8f70d702b23636c76335"
  },
  {
    "url": "assets/js/11.c0253c83.js",
    "revision": "5de037a5b0855c02b41f27d63e16caa3"
  },
  {
    "url": "assets/js/12.2459487b.js",
    "revision": "3ad51e783e439b2524f686e4dc2838b8"
  },
  {
    "url": "assets/js/13.e8e0e4d5.js",
    "revision": "b503a6c7fe9843aee9ecac7213a85541"
  },
  {
    "url": "assets/js/14.cb363608.js",
    "revision": "e03e76a9a4c27ed9545016f1fe1546e7"
  },
  {
    "url": "assets/js/15.a072d2e9.js",
    "revision": "d0809d2266858bbb838662cf2085ee4b"
  },
  {
    "url": "assets/js/16.095b60d8.js",
    "revision": "04aa881f2778476b26139ed249805011"
  },
  {
    "url": "assets/js/17.e4769705.js",
    "revision": "f7f554c60c47aba2e8138f8875ac12a8"
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
    "url": "assets/js/2.7c8762e9.js",
    "revision": "2906a97bef359a297d023ecadf762427"
  },
  {
    "url": "assets/js/20.e754ba18.js",
    "revision": "d814c89ecf9ef2d829b22804527a44f9"
  },
  {
    "url": "assets/js/21.ab4cc67c.js",
    "revision": "09ca0c6105d1157afd234409ede8508f"
  },
  {
    "url": "assets/js/22.5eec34ba.js",
    "revision": "0fd1e392e56d1bb3f203802749659ad6"
  },
  {
    "url": "assets/js/23.eaa7df98.js",
    "revision": "974fc0868790fea6ce510f39898744f9"
  },
  {
    "url": "assets/js/24.f580fbf4.js",
    "revision": "3232975869cf03b1b1fe147f2c2a12ae"
  },
  {
    "url": "assets/js/25.c420921a.js",
    "revision": "52962bf5fac490cd51fa9ae2a6f6c5e1"
  },
  {
    "url": "assets/js/26.c82f12b7.js",
    "revision": "78b5226d1388e7891d52aee2c87714a8"
  },
  {
    "url": "assets/js/27.d1ee44b8.js",
    "revision": "7b62c95f0ce8435ba81e6bdf4a5c1447"
  },
  {
    "url": "assets/js/28.45e93bef.js",
    "revision": "0203a0f38544aec0230275eebac8c140"
  },
  {
    "url": "assets/js/29.4f9833fc.js",
    "revision": "6f1d6efe38815a62edaf0c30c9181665"
  },
  {
    "url": "assets/js/3.e8a318d8.js",
    "revision": "f3de82c4a7cf76c06bd4d52cbb696c31"
  },
  {
    "url": "assets/js/30.d1d50e33.js",
    "revision": "4da46922837703e3018933256b02b3b0"
  },
  {
    "url": "assets/js/31.74a6c528.js",
    "revision": "bf3937317abdb08c83eeb87160ddcdfd"
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
    "url": "assets/js/35.fb798e74.js",
    "revision": "35cf1f0a5f3d8b37ce94577751292479"
  },
  {
    "url": "assets/js/36.7eead800.js",
    "revision": "66631932dbb6bcb8512a89330154a698"
  },
  {
    "url": "assets/js/37.6bd58f8e.js",
    "revision": "75236d89d3ada252d3a08c649d4e1596"
  },
  {
    "url": "assets/js/38.58cd6870.js",
    "revision": "53060c3895f8c0c78c1dac0c0b25ed7a"
  },
  {
    "url": "assets/js/39.e9962d95.js",
    "revision": "159f8c92cac0591fd255474541f1fc78"
  },
  {
    "url": "assets/js/4.c80cb1eb.js",
    "revision": "498148b4d4afbbfe3843c66192c8ae39"
  },
  {
    "url": "assets/js/40.81ce07b7.js",
    "revision": "0942b5d302f44379c5acfb46f87396b1"
  },
  {
    "url": "assets/js/41.3f8b3235.js",
    "revision": "06a6a0436019aa872ecfed6f3125d50b"
  },
  {
    "url": "assets/js/42.b0ce8ffb.js",
    "revision": "58884c8e3cd5ede7b87052f1718a8077"
  },
  {
    "url": "assets/js/43.2d058594.js",
    "revision": "696934fb304a5c5e0749dc5182877a4c"
  },
  {
    "url": "assets/js/44.7d70c551.js",
    "revision": "6ac3b14a52ad903ef7f9654c0fcc9da7"
  },
  {
    "url": "assets/js/45.80ae2032.js",
    "revision": "ccbb0fa0b371ecf59e73c91632ab4dc7"
  },
  {
    "url": "assets/js/46.f9e67225.js",
    "revision": "15a05fffb6643b5fc1c5e00c327b7109"
  },
  {
    "url": "assets/js/47.78f27a21.js",
    "revision": "82b890b0abac6987980e87d0968cb826"
  },
  {
    "url": "assets/js/48.3c449459.js",
    "revision": "63e1e2aed4d09bbe85abc4baf2e467cb"
  },
  {
    "url": "assets/js/49.251964cf.js",
    "revision": "f2a1a1fcec4ba98d99a445febb725b24"
  },
  {
    "url": "assets/js/5.7c89ed01.js",
    "revision": "3ecd61554f27281eae1bf27be1a39c3b"
  },
  {
    "url": "assets/js/50.f634fdb8.js",
    "revision": "1e3d7529e9063fb9775dcb16191a5aa6"
  },
  {
    "url": "assets/js/51.8a6398a3.js",
    "revision": "6bba4a628a2d697ce953c9475c62318a"
  },
  {
    "url": "assets/js/52.5c8d9d56.js",
    "revision": "151105e2d3a11d123d40892535222fd3"
  },
  {
    "url": "assets/js/6.d016b8f3.js",
    "revision": "0dbcb1e55374a25341345746e34f4391"
  },
  {
    "url": "assets/js/7.161072be.js",
    "revision": "5eb61596b3cd1b9e6714dacda71c117f"
  },
  {
    "url": "assets/js/8.180731aa.js",
    "revision": "2fee843cef1507c063b6d12903728f56"
  },
  {
    "url": "assets/js/9.caa209e3.js",
    "revision": "53ab99f6eb8c3130b3c90fa026844453"
  },
  {
    "url": "assets/js/app.139c54f4.js",
    "revision": "d1966f5a23a26ae342a2245461c757d1"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "96583bd861700276de9ee1b6513351b7"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "bcbcd6a89bd6888c50a27eab54a4f84e"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "d57f8771302d006cafab9f09fb472f07"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "5cb6ba52a411b1f84fd7fae19f030fdd"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "daffba680d0e432ce66500a91fdc9d90"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "f7da32710efea09183f4f92a6cedb055"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "b9aff6810d95fe7f309d89629b8cebfa"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "cda91f37b78978ad325e0cfbb1663259"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "8af74b665e8a13a4a26a00382bf17213"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "f34f78ee7cb3ed14ca2eaa18e475370f"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "7f024c5dbf67b7d62e1378d380c6e22e"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "a671537b62f1668489b526bf04954ed8"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "651b75711791043fe9dffe33774a1b0d"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "628c12cb3493e197d0b034bf6747743e"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "1faf7d3ca77395352c6665afc3148939"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "ee1e814b8725797fc3ea132c0cdd3216"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "a5645fc76c4a8ab9154466fcb02752e2"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "f1f4454809917718b4d8c6849353202c"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "f7fac7109776a7dcac70cfceb254e5c9"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "f1dd1780086f0da5c29f5f5cb3032d9f"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "acecddbf51ffc4192ba98046267897ce"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "bdc659e493dca050906353c7106f0e78"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "58a5de71c1aabfe1cad9e02a277bb057"
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
    "revision": "3224da81419a6f1ea134ffc335c55352"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "251d7c941ff86d9b2c75fa24eb5ecf78"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "e528b3451638c2e55db83b4d38b61858"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "0bbfccb112751e36deebffe7c4a88c7d"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "9c58de9dcada875812f11e48c76ab7ac"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "ad1a02e5f43f2396cae45a3b1168c8e8"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "a3b27ae441988babbee6adc13d44bbc7"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "609901b824fd03265b373341485e3b73"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "5a1c3206af5413ba878eb3fe0ffaf0d7"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "68a298ac2aa2284bed0255cb949d6ffe"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "0ac9359f34b975822d36b51e02793af0"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "fb7b37e511718767484009212e8027c3"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "62c52f0573371ffdc6bfe73b00f9a1cf"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "d5a4c2ad65ff0936b8c94b87c9db1b18"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "783ba143828a72ec6b340b3b7999e797"
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
