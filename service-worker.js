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
    "revision": "d891b52cf737a70c8eb40acde00d5170"
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
    "url": "assets/js/10.b956fae8.js",
    "revision": "5d0d728db35090bf5600f16dfd4739d7"
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
    "url": "assets/js/19.eefc8c69.js",
    "revision": "9af09d60630326db31739049861f4a82"
  },
  {
    "url": "assets/js/2.7c8762e9.js",
    "revision": "2906a97bef359a297d023ecadf762427"
  },
  {
    "url": "assets/js/20.94c0f764.js",
    "revision": "ed284c3a4b8fb6049463c467f8d59928"
  },
  {
    "url": "assets/js/21.edb4c9f2.js",
    "revision": "b5d7b160e59a3d32d20d926cee559a68"
  },
  {
    "url": "assets/js/22.cdedf66e.js",
    "revision": "00f0d8c533d36b897d11ac5a619d1948"
  },
  {
    "url": "assets/js/23.e58be289.js",
    "revision": "a251636f7896e2d19ba7136eb7c75046"
  },
  {
    "url": "assets/js/24.846aed18.js",
    "revision": "bb46270c15c592b8babf11d4f79612e5"
  },
  {
    "url": "assets/js/25.404330e8.js",
    "revision": "c686b3bf55ff8c89abdd7f81f7282e50"
  },
  {
    "url": "assets/js/26.659de0f1.js",
    "revision": "1933ba25a7136527d8ccaad9639aac00"
  },
  {
    "url": "assets/js/27.d1ee44b8.js",
    "revision": "7b62c95f0ce8435ba81e6bdf4a5c1447"
  },
  {
    "url": "assets/js/28.8a50aa73.js",
    "revision": "5a6080fdba8b61feaaf1f3fd2d7a687b"
  },
  {
    "url": "assets/js/29.4f9833fc.js",
    "revision": "6f1d6efe38815a62edaf0c30c9181665"
  },
  {
    "url": "assets/js/3.2d9721d8.js",
    "revision": "8e05fe4eb15b776626f84ab760345ee3"
  },
  {
    "url": "assets/js/30.f603f75d.js",
    "revision": "28b57acb270f72856cd010c67d1ba98f"
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
    "url": "assets/js/33.7c9ef87b.js",
    "revision": "73b9bd106975264bb8518eae650ab5c7"
  },
  {
    "url": "assets/js/34.470247b4.js",
    "revision": "cc0793165b8a648c28a293f02e92fe01"
  },
  {
    "url": "assets/js/35.732da0fd.js",
    "revision": "ecfad1735c532228a2c7f36047d693ee"
  },
  {
    "url": "assets/js/36.7eead800.js",
    "revision": "66631932dbb6bcb8512a89330154a698"
  },
  {
    "url": "assets/js/37.83513d04.js",
    "revision": "423074e5af792c41da32416837f88884"
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
    "url": "assets/js/4.e20437b2.js",
    "revision": "e68a0ea5ca7983433f56361d99aaed42"
  },
  {
    "url": "assets/js/40.81ce07b7.js",
    "revision": "0942b5d302f44379c5acfb46f87396b1"
  },
  {
    "url": "assets/js/41.1a5c59e4.js",
    "revision": "375f5557262e5407729f9b3cdf81338c"
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
    "url": "assets/js/44.7d70c551.js",
    "revision": "6ac3b14a52ad903ef7f9654c0fcc9da7"
  },
  {
    "url": "assets/js/45.80ae2032.js",
    "revision": "ccbb0fa0b371ecf59e73c91632ab4dc7"
  },
  {
    "url": "assets/js/46.85db5aba.js",
    "revision": "09943a568da52ff36032402601192ccb"
  },
  {
    "url": "assets/js/47.9d41fe07.js",
    "revision": "806556e53290b30e27ca2d9562cd9d48"
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
    "url": "assets/js/7.3b08d93c.js",
    "revision": "3770f097520bf8fc92839135f5a6e940"
  },
  {
    "url": "assets/js/8.466aacd1.js",
    "revision": "b6430271086ba9682992526a182922e8"
  },
  {
    "url": "assets/js/9.caa209e3.js",
    "revision": "53ab99f6eb8c3130b3c90fa026844453"
  },
  {
    "url": "assets/js/app.f34db992.js",
    "revision": "0bcc82ea4f9105009b06a863bc6df6b1"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "1b9e24bb1532fd15cefabc543ecd5d61"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "5b5a716da3147de8a15227de61e4c4c8"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "872ebad42ad22a16bf4f545ba80bb238"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "da5c06ee47ba4bc52e59fcd7096b037a"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "ff6d2e3d5396ea131ee2ad16247af3b5"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "cb68cf327435a77ba1f8e86563e61e8d"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "24fe13f0423dab7b3c9ff6226304be6b"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "00c2b14d66c26ca34b227792e2381fca"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "79831605c85d246f15b63a308c07143f"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "6ed49c3d301b6936392d92f1473dff65"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "42254f334abc2f460b0aa4a83d8b542f"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "c62598b3b22d8af76ff5ce4b2ee832d8"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "1714c64b8aeab73de3ce4e04ed84e57c"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "9892d6f54de279757e66d06f21ad1a5a"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "b111b211e78bd067d369f3effe1484c2"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "023d2c4c2317a648aa196e1ddde9107f"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "44cdb74e02cc78a02403124e843a0406"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "21e30ce8488ac77a749a74c79693592b"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "92ae8edd2b553c2ea98a27a33efc4476"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "bd7b97a44bf24b24b73dc5d4b5f01490"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "45351633d3abb7d3d1ffe5c6c01d306e"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "3ffc59686d59b15c2684fe168c4cf7e3"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "4c4d0b9f94edb87223c6460e48ae7756"
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
    "revision": "30382f0f8d3a3acbd006b1099c8c4cfb"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "02d9426d7cdc8ac426572acd9ec3b443"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "a45a38361aac03d8ac432d4611cc515e"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "d230c5c76d96165cc72a62193f577e59"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "d73d0f423ce1ef55d77b45d66cfc990d"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "44e7bd391afa86f59c86e7a0862453f5"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "b031a93fd9f830a63b26f390a5a647af"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "393c3edce14de3d1d64437ff7a6499ca"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "90fdead89e32662e58474c78da26f24d"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "6a63cd3c2019dc659e7b2e6dd11c7c93"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "dd0b8eb0781fdf3780ccf695ae1b24e4"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "8359364e8d98751aaedbd54abaf43a72"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "35835136290c28fbb484038b9b033b4d"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "b533b9890c3aabf0fc16633ecb910dfc"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "7998145f7635d52b169ca86921200929"
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
