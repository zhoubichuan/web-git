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
    "revision": "3c7e07dc7922c3c7e03abc600f3653b7"
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
    "url": "assets/js/16.ed552690.js",
    "revision": "992c97eb87aef229346c8992cf54dc8f"
  },
  {
    "url": "assets/js/17.b9258611.js",
    "revision": "90bd3e0414d82e850bca24df55d232b3"
  },
  {
    "url": "assets/js/18.9f6e1bde.js",
    "revision": "0a6b068b3caefdc0236e321ca17d6aef"
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
    "url": "assets/js/20.ec2b587d.js",
    "revision": "6a473121e26704bc7a5c8e962ae8da99"
  },
  {
    "url": "assets/js/21.f16e6494.js",
    "revision": "421dfa199c49a2e18f5ac348f74c45f0"
  },
  {
    "url": "assets/js/22.a8bfceb7.js",
    "revision": "44c1d5944c9206397c362f7e6566679d"
  },
  {
    "url": "assets/js/23.ebcf8236.js",
    "revision": "11ab21120e05b5b18372f9553292bd66"
  },
  {
    "url": "assets/js/24.b5949d67.js",
    "revision": "7f9a939e551f2e8223f99234ddb0bf1f"
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
    "url": "assets/js/27.e94b9f23.js",
    "revision": "3a27aa7be5bd72852bd0e17705bb1bbf"
  },
  {
    "url": "assets/js/28.a327cea9.js",
    "revision": "5d85297e6b0c1f52890273170f2f853b"
  },
  {
    "url": "assets/js/29.9959f6a6.js",
    "revision": "984e2fda7a9d130a733d44c42f34c7fa"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.18567d0c.js",
    "revision": "96d29f17017fe97223a4f19e7cfa410b"
  },
  {
    "url": "assets/js/31.79f7c8b3.js",
    "revision": "5e2dc51f6af941ceba9fb0d4ab3192ae"
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
    "url": "assets/js/34.ec8f9a20.js",
    "revision": "0fcbd0b78a309e4e1648a4fb8f5ff2f8"
  },
  {
    "url": "assets/js/35.82cf733f.js",
    "revision": "04de487e4a95b0fd5d1d2d5863652d1d"
  },
  {
    "url": "assets/js/36.ed3189d8.js",
    "revision": "429800b65fc6db55b593dbf6876f984b"
  },
  {
    "url": "assets/js/37.9e8064af.js",
    "revision": "73458812c922ff51f9a84290f0996022"
  },
  {
    "url": "assets/js/38.3c510d35.js",
    "revision": "e2e5391111f1b816512619f6c5445663"
  },
  {
    "url": "assets/js/39.56ecfdee.js",
    "revision": "bdcd9157dd8c4a019d50e4bf7a0fdbc6"
  },
  {
    "url": "assets/js/4.0b2cde7d.js",
    "revision": "b3dea958a6fe2f4361c675184fe538c0"
  },
  {
    "url": "assets/js/40.f797f5ab.js",
    "revision": "aba9c2261add800a1945c40f21af877c"
  },
  {
    "url": "assets/js/41.4169b272.js",
    "revision": "d0ce1545ec0a14595795fe4f48d01293"
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
    "url": "assets/js/45.4eabcf5b.js",
    "revision": "bb5bdf79c4350952cc55c5e694ecf9de"
  },
  {
    "url": "assets/js/46.13a32749.js",
    "revision": "0560e2620dfa2ef48939b957cf9a662b"
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
    "url": "assets/js/8.cffdd758.js",
    "revision": "669a16c23a2b5ec47ea6b5a27fe610c1"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.b61a3edf.js",
    "revision": "166b7dbde9cdb6a34d08c2de14f07d4c"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "a5ee3c8aa69bb6b9bea0aab84476fcb7"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "349ed71783fae28c5dbdc9bc59f669a3"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "f3a2e44babc15901e3698c2b87d5f158"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "bc6e68666f56bc796474426d868d690d"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "06babbe87ef05586a7cc868e03feb1b6"
  },
  {
    "url": "base/git/1.Tools.html",
    "revision": "9d70cefcc69818183c91f395cc1811cd"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "8e80913b1559b005d16042dea678397f"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "099989076d7dbb48ed07e8a03a3f4c5e"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "b1cc6f60bdf92869e8facc08d500fbd0"
  },
  {
    "url": "base/git/prem.html",
    "revision": "eacc596c420fdf51cd50c38f03089cf4"
  },
  {
    "url": "base/git/test.html",
    "revision": "49b781caff57fb8f8edff4b06c21a19e"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "36f85b2d877a8de177bfb6fc8f74e39b"
  },
  {
    "url": "base/svn/1.index.html",
    "revision": "938944e22dee3ffe0582d9c90cd3e734"
  },
  {
    "url": "base/svn/1.常用的cmd命令.html",
    "revision": "b7f66bc436c6a2e395d1c9fcca85baa2"
  },
  {
    "url": "base/svn/10.ui.html",
    "revision": "93b945cf22959ab358079188bd240012"
  },
  {
    "url": "base/svn/11.data.html",
    "revision": "78d4e93b20706c6500f4bb10f6bd6a2a"
  },
  {
    "url": "base/svn/12.skill.html",
    "revision": "4b15fb6391b4e1587fc11601e17a54f8"
  },
  {
    "url": "base/svn/13.com.html",
    "revision": "94c3b052e56f305306c787f1199e58eb"
  },
  {
    "url": "base/svn/14.data.html",
    "revision": "c0863065af54d6feb0683f19525b6814"
  },
  {
    "url": "base/svn/15.api.html",
    "revision": "bea364af469e02c3064f43c975297022"
  },
  {
    "url": "base/svn/2.service.html",
    "revision": "9c45827de396ef9558c8498c6a4ee7c4"
  },
  {
    "url": "base/svn/3.cdn.html",
    "revision": "63c0ef7de3bd27ff6769066c420e3462"
  },
  {
    "url": "base/svn/4.cors.html",
    "revision": "d60d2d23b154b0cb9dee3c20873169da"
  },
  {
    "url": "base/svn/5.cache.html",
    "revision": "6d1d17ad45ae3030b0cb78af93a568ff"
  },
  {
    "url": "base/svn/7.module.html",
    "revision": "9d6ceb8145638f30483e6e8a4e2c3483"
  },
  {
    "url": "base/svn/8.project.html",
    "revision": "211c0ceb9e34976bba356f13210e4d32"
  },
  {
    "url": "base/svn/9.utils.html",
    "revision": "c4b89ebef907061b65635841d4a7a3c0"
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
    "revision": "4c401a20503175b208aec7484e1da5b6"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "143d577a5fa31899ab40b63f646302da"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "4fbedb90b8c699e791727bb4324dd424"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e32c591237f5f7ec9d9af3ce33969248"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "13b00cb15b79bfff444232f866cee4d8"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "deab904389db338990a10d8163a950b0"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "86c90e0dd52471789eaa0df603ee0d9b"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "ccbc961da228be2d9c88de13b8711ead"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "0b11dbac8ed81a6f9d7bbc41906d680a"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "ee3d1adb0c2b5eba0ac22779e636fe18"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "a17a1ef0469006239795517c4a02d61e"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "7bf41e1b7c4f4a856cb7fb8eaa93d990"
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
