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
    "revision": "e0a1502c53192b69c3e8582a25207469"
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
    "url": "assets/js/20.88c0ec00.js",
    "revision": "7ab3bc3ef20a50d1a5b8f62110dbfd86"
  },
  {
    "url": "assets/js/21.896f2bb6.js",
    "revision": "8526a4eda02e9e4f2eb94d9ccc167cd3"
  },
  {
    "url": "assets/js/22.4ee09b4d.js",
    "revision": "0ed55d1868570b0b798b7085bc6a756f"
  },
  {
    "url": "assets/js/23.781c2c7a.js",
    "revision": "1494e21f6d6942b0d65924e75a665255"
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
    "url": "assets/js/27.2ad09a7a.js",
    "revision": "1c7ce0aecd0cfff071f4e4c74a4d2792"
  },
  {
    "url": "assets/js/28.1829cd49.js",
    "revision": "114e39fb7c6cd9d9b6f7549ca19ff8dc"
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
    "url": "assets/js/34.acd075f7.js",
    "revision": "0d603693b654ac3fed6d6e22828f5fec"
  },
  {
    "url": "assets/js/35.82cf733f.js",
    "revision": "04de487e4a95b0fd5d1d2d5863652d1d"
  },
  {
    "url": "assets/js/36.40e9536e.js",
    "revision": "f4d3d57ba4b5285a72bc025c6a02c041"
  },
  {
    "url": "assets/js/37.9e8064af.js",
    "revision": "73458812c922ff51f9a84290f0996022"
  },
  {
    "url": "assets/js/38.33cb8444.js",
    "revision": "87a96904d9fbc221f04d3149de9a2337"
  },
  {
    "url": "assets/js/39.5994be90.js",
    "revision": "f680fe648a8367e967f62cfa63745e4f"
  },
  {
    "url": "assets/js/4.0b2cde7d.js",
    "revision": "b3dea958a6fe2f4361c675184fe538c0"
  },
  {
    "url": "assets/js/40.b69abfef.js",
    "revision": "4e61bbde0b59304191d6dffa40287d7c"
  },
  {
    "url": "assets/js/41.44551dc8.js",
    "revision": "fd223c2d8aa871fa9e3ec3416c6f2598"
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
    "url": "assets/js/44.75bd8bea.js",
    "revision": "253afd255a1bb0412e907ddb153673ef"
  },
  {
    "url": "assets/js/45.fc74819c.js",
    "revision": "f3ba928815b172d4b7dfcd4697216424"
  },
  {
    "url": "assets/js/46.9c659ccc.js",
    "revision": "377a2262899c5e41e0aadfa053f903e3"
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
    "url": "assets/js/8.b446d394.js",
    "revision": "cdc153784a062137dbfd329c2be17818"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.383a628a.js",
    "revision": "2d9b00c0ba77cba7cb0eb7b83858bce5"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "25bb8f22ea8aba940635a5404311103e"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "9cb771f3befa3007a961cc500993f19a"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "e2720640ca7e10b3a089f3adbcdbcb1c"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "e8cd9e2f45ecd6f92dbbc3270665464d"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "dd44c5c1f999f62a7729a1bdc8460ab6"
  },
  {
    "url": "base/git/1.Tools.html",
    "revision": "4648f35671f3af8f0f83f6b4c33439b0"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "ff1d09241ea60ce9420a9cea0ae3e602"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "19a132be733673f0204a8a7e1b26069b"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "18ff5b75bf95b27fa4a54617a4f7b378"
  },
  {
    "url": "base/git/prem.html",
    "revision": "a3a95f4a71a080198e09a0ef2b073ce3"
  },
  {
    "url": "base/git/test.html",
    "revision": "d9fdfbdc9c8058ace2d5a7d3590e055e"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "27caf8591874d47fe1fad5db46b53e74"
  },
  {
    "url": "base/svn/1.index.html",
    "revision": "c0e62cf7cb29d77dd9fa771be0eada68"
  },
  {
    "url": "base/svn/1.常用的cmd命令.html",
    "revision": "982ef0ef2697d84e01a2af1ba386baae"
  },
  {
    "url": "base/svn/10.ui.html",
    "revision": "efa87e04e58366dcb559ad73f5a0db10"
  },
  {
    "url": "base/svn/11.data.html",
    "revision": "ec9ac9c03818d641d10826d87ddd0db1"
  },
  {
    "url": "base/svn/12.skill.html",
    "revision": "b874e196634b2c1aeabc9eef79018bc4"
  },
  {
    "url": "base/svn/13.com.html",
    "revision": "27dcfad9ea584f97ea2c2d28036e2cd7"
  },
  {
    "url": "base/svn/14.data.html",
    "revision": "db84a5c59e0ef6dd5f400f7bffdc3cb4"
  },
  {
    "url": "base/svn/15.api.html",
    "revision": "b1757f3d38f996c7b95af1293e164945"
  },
  {
    "url": "base/svn/2.service.html",
    "revision": "d28a48f025f5e47dad147533352c5e58"
  },
  {
    "url": "base/svn/3.cdn.html",
    "revision": "00a9a89ad229296ab1b0e8bc499f83b8"
  },
  {
    "url": "base/svn/4.cors.html",
    "revision": "c8a7a14a7246da299db41fedefcf2ab9"
  },
  {
    "url": "base/svn/5.cache.html",
    "revision": "d8cc74e3c0f06da9c672f79de00ea1de"
  },
  {
    "url": "base/svn/7.module.html",
    "revision": "6f002e9427efda36c5f6392b2534a9d2"
  },
  {
    "url": "base/svn/8.project.html",
    "revision": "6f751e355fac3019cb84a115637dac8c"
  },
  {
    "url": "base/svn/9.utils.html",
    "revision": "f5db58ebe22c2ec2d52297087d444854"
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
    "revision": "88bcd5caadbaaba713798ea5f3b06c41"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "b12af9465afdae08dd8ba8a565302e8b"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "a934ccc6356456349f1b73782e2d2363"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "a23da3ef14eced2acf3bad82ff274d0f"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "3e38925185c806c2dd07f31333a88f70"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "4e33c7559aac814d2e088a3410ca319a"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "1d3fb6df4e618822776de1d6fd4b48be"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "102eaf3412100025dd558bfd99d16944"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "1335edf8ad381b0843bb666182dce74f"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "dd8915ef6136d3a2424149a5bb248fe4"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "406e97c4d4d6f1e658aae4ced8f71d8a"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "d8b18573e31717840fc355f33646322d"
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
