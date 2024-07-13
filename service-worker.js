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
    "revision": "617b563a9a020b3729433f8b31c89580"
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
    "url": "assets/js/20.68550292.js",
    "revision": "63a8d83a7a68d6bd4e58c4c6ad21f8b2"
  },
  {
    "url": "assets/js/21.f16e6494.js",
    "revision": "421dfa199c49a2e18f5ac348f74c45f0"
  },
  {
    "url": "assets/js/22.20ddc0b8.js",
    "revision": "7c44c09818aeb6f423d3e77104ce81e7"
  },
  {
    "url": "assets/js/23.b305af1b.js",
    "revision": "20d8ae92e8a100b2058b1b172fdbf77b"
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
    "url": "assets/js/33.47712706.js",
    "revision": "9f0bda68dfede7961b7344249739c656"
  },
  {
    "url": "assets/js/34.ba814a66.js",
    "revision": "1c307295dba1542d4d8cb20727543dd1"
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
    "url": "assets/js/37.e55fe987.js",
    "revision": "7c6ffc8e47c6b5d7b43898952cfbdd09"
  },
  {
    "url": "assets/js/38.c77bfb23.js",
    "revision": "d5a02f53bb347ec299b787265a2ea916"
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
    "url": "assets/js/51.62015c5e.js",
    "revision": "68f1f84fbf7e48f27f2e93b6a90a6cbc"
  },
  {
    "url": "assets/js/52.98bfbcbf.js",
    "revision": "2c5cbdad77069934efac0948aa9bfe30"
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
    "url": "assets/js/app.4c7669de.js",
    "revision": "8cae8e817db9a363022d8ca5bbfbfbe8"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "59bc7c01f8b4ffcf2398b6e9e8a3e84d"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "f45f937415a225d7fcc350d204473c78"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "d6f29b020139c902d851d7301c73e9be"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "dc59db62e6dab360c94e5ed8c10dcbe1"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "b8ce5dcdf7c52691732ecff0c5d27d83"
  },
  {
    "url": "base/git/1.Tools.html",
    "revision": "70be8bf0124e3253c80b4e11b3dbc46c"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "a70e77deeb46fadd1107a4313f6727ba"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "7ae0e925e9cdf14df6af8d887295b818"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "872fa6805e724b2682017c7d2f9d2694"
  },
  {
    "url": "base/git/prem.html",
    "revision": "2b3b825e87981032141ab1e5afe1a25a"
  },
  {
    "url": "base/git/test.html",
    "revision": "0e4f8d8c385827e694072870b34c331f"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "644f0090b58615b0bc574f9e54e9ea99"
  },
  {
    "url": "base/svn/1.index.html",
    "revision": "0346c8ab0289047482a8b3073e736345"
  },
  {
    "url": "base/svn/1.常用的cmd命令.html",
    "revision": "9a69f583531d9925a7d95039d362c79f"
  },
  {
    "url": "base/svn/10.ui.html",
    "revision": "f8d0d01ef5b9224c3fd09a00b4d6727c"
  },
  {
    "url": "base/svn/11.data.html",
    "revision": "a77cb109f3d85388c8edc985bbd20083"
  },
  {
    "url": "base/svn/12.skill.html",
    "revision": "f95f69d0835e3e98ff557b96e9196d7a"
  },
  {
    "url": "base/svn/13.com.html",
    "revision": "7e95bab932cc2db7f5d2a033217926b1"
  },
  {
    "url": "base/svn/14.data.html",
    "revision": "78ffaa014ad347925f3031cb5908a7bb"
  },
  {
    "url": "base/svn/15.api.html",
    "revision": "75b54da192d87d723231530e46472f4c"
  },
  {
    "url": "base/svn/2.service.html",
    "revision": "1f182d97f06241ad65ec81fda650465e"
  },
  {
    "url": "base/svn/3.cdn.html",
    "revision": "e5e0e38d975cc84cf2b66ac6fa46a761"
  },
  {
    "url": "base/svn/4.cors.html",
    "revision": "b0d4ce8b6636ffe250c88597b3ed5ac7"
  },
  {
    "url": "base/svn/5.cache.html",
    "revision": "4a7829de785a02b1c1effe7411b1ed69"
  },
  {
    "url": "base/svn/7.module.html",
    "revision": "aba91b83278b567573cd28056ad51b02"
  },
  {
    "url": "base/svn/8.project.html",
    "revision": "799901d4dcfad9db220b46bc79b2450f"
  },
  {
    "url": "base/svn/9.utils.html",
    "revision": "e87c69c277d6169fae3927f12a498ced"
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
    "revision": "66c0687a86a07e59b6fa88c40a61f41b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/use/1.recursionAndDynamics.html",
    "revision": "fbf672ea46d70b00580f41805c447220"
  },
  {
    "url": "senior/use/10.table.html",
    "revision": "fa97ce94cc8861b6115f46609b740483"
  },
  {
    "url": "senior/use/11.tree.html",
    "revision": "e0e8bc1b6a0eaedc94185a94cee0a401"
  },
  {
    "url": "senior/use/2.extend.html",
    "revision": "178cdf2ded4ba0f27a958a04e9765fe0"
  },
  {
    "url": "senior/use/3.componentCommunication.html",
    "revision": "a056bb591fae98dfb229d436af5c3069"
  },
  {
    "url": "senior/use/4.render.html",
    "revision": "858a5922a22f6101e9d17b39c95fe26e"
  },
  {
    "url": "senior/use/5.api.html",
    "revision": "4a1e5d0c333b13370c72d9062ca521bf"
  },
  {
    "url": "senior/use/6.form.html",
    "revision": "c033a7e84d87040f6e9af55f0ec1d9e2"
  },
  {
    "url": "senior/use/7.checkBox.html",
    "revision": "8f5675cffeda6062dc87755c3ef96315"
  },
  {
    "url": "senior/use/8.active.html",
    "revision": "e6b370ab89e735593cd36b0fbd92c0db"
  },
  {
    "url": "senior/use/9.alert.html",
    "revision": "7007647ebf95663f68e539e4e08d69b8"
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
