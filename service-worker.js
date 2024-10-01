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
    "revision": "995bc2be55bc478458c8b4ff3cd4f18c"
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
    "url": "assets/js/16.5bfb4956.js",
    "revision": "08671bcbf5cf734cf70656018386f191"
  },
  {
    "url": "assets/js/17.46e8a616.js",
    "revision": "e8dc196d2115a0cff6d7fd56bd2a8f50"
  },
  {
    "url": "assets/js/18.3867391a.js",
    "revision": "c83d07c63ed77468ad60d92c065f3915"
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
    "url": "assets/js/20.4e3228e3.js",
    "revision": "2292ea22df44fd90f7f41417f9868c21"
  },
  {
    "url": "assets/js/21.f054a0d9.js",
    "revision": "c1f25cdc34814d65c4b33ac4c53dd4bd"
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
    "url": "assets/js/24.bc3de061.js",
    "revision": "3dfc248914b0166ddbff85bbf1df4939"
  },
  {
    "url": "assets/js/25.2aa02fe6.js",
    "revision": "d57eae7cdd817e71d806b9f83477e938"
  },
  {
    "url": "assets/js/26.8b7fa7df.js",
    "revision": "bbc5e8a3088300831996b8b6e9f39e13"
  },
  {
    "url": "assets/js/27.3dcb0f96.js",
    "revision": "642cde9fcc55c243cae49fc61ddf901a"
  },
  {
    "url": "assets/js/28.e0d8fd87.js",
    "revision": "8cf08e61999ed719cc5bdd309f727844"
  },
  {
    "url": "assets/js/29.900193dd.js",
    "revision": "d5d91e908a386d2a871a29db0c5c6ba1"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.c2ee0bf0.js",
    "revision": "c7ba60f31f10d054bbd83b0f185b65f8"
  },
  {
    "url": "assets/js/31.6a6dd3a4.js",
    "revision": "5e2dc51f6af941ceba9fb0d4ab3192ae"
  },
  {
    "url": "assets/js/32.185ebf52.js",
    "revision": "2192f165ef41e31fc6d6ddf32d47f294"
  },
  {
    "url": "assets/js/33.54689499.js",
    "revision": "891669aa9be297b28408b790f641c49a"
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
    "url": "assets/js/38.6f63223e.js",
    "revision": "f6c1811752fbcf8a8dd4d5c341b9ffad"
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
    "url": "assets/js/40.8e280469.js",
    "revision": "4e61bbde0b59304191d6dffa40287d7c"
  },
  {
    "url": "assets/js/41.6cf1cd00.js",
    "revision": "d0ce1545ec0a14595795fe4f48d01293"
  },
  {
    "url": "assets/js/42.78d99a19.js",
    "revision": "0508820558f7b64d391325b01c4d2feb"
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
    "url": "assets/js/46.b7ee05c7.js",
    "revision": "599ceab141e46cc68c59d117e0b6dbf6"
  },
  {
    "url": "assets/js/47.5e56778e.js",
    "revision": "f052e6874aa3ac22974af27c08e8f19b"
  },
  {
    "url": "assets/js/48.71dd558a.js",
    "revision": "199048abc67b813c87d877898a014d7b"
  },
  {
    "url": "assets/js/49.8cfe8949.js",
    "revision": "995002b4166f0e7170fc29c32847704e"
  },
  {
    "url": "assets/js/5.fb713732.js",
    "revision": "2a9d14c42947f7f15180d59e1b80e32b"
  },
  {
    "url": "assets/js/50.b54fda08.js",
    "revision": "fa18e03a7eb2ba6f1257850c0e331e3f"
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
    "url": "assets/js/8.194bceca.js",
    "revision": "669a16c23a2b5ec47ea6b5a27fe610c1"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.a5e13aca.js",
    "revision": "7a42d7ca53da88de429bf737bbc9c569"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "261fc98d9b5fd65aac0cef2aa98e953c"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "46b0fd49822832c441b9406ae0f66cb4"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "68ab02f08358aa5987846fcb5715d678"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "30150bb76d4eaf8dee0c51aac20e9157"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "4f89dfe286f467988a566338bc286843"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "eca285dca7da64a25c69d7ef0d034708"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "590cc7d7529b60cebf5692757e24f482"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "adc3224c50468b6bbdff23b3475a960e"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "141e7ba8952f0d070df35bf49fdc67a0"
  },
  {
    "url": "base/git/prem.html",
    "revision": "24ddff63fb95f72cee59c917ce0c0fd5"
  },
  {
    "url": "base/git/test.html",
    "revision": "186c5ef042d4e161815d8899c5e8089d"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "146c2cac4d8a169a24c24db4acd36167"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "feef179cdc8e5da3fd171fee9a9075fd"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "8428e43515452b94afaddfdf7fd0b729"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "37c11e5171a54bb521dc30ac4a672142"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "906e39e0e525fc294171c6c5fbcb650d"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "b94225272d0976f4a3356dfb9f01f585"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "fb73963a874563b73e68a9200d163d3b"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "a9ceb6d0d61d5da5c9228546f036145d"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "d2d73acf70c3df50dfa3574bc6e6eef8"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "7bdd2701e2a3ea404c93af4782a9fdf0"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "6c7d14463212537d98db7004fe20c5b6"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "4280d9cd96ea1502282cd8eddd0a1974"
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
    "revision": "e252c33303c48de9aa4816cd3b7d93ec"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "6a087a68e773d2f10ec8c62f7cb0185e"
  },
  {
    "url": "senior/svn/1.常用的cmd命令.html",
    "revision": "c7f29797446fb1a88c562ce7460567a2"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "606ad1c9821016ee943666e0fc063e12"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "97b2316f14efa0d3e0f8c802444d9e2e"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "5a4140fa43a4b27c86bd4f74bf3425a8"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "b7205f3d44711286247b30d1f213ea4b"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "002301df466746a29f0c4c495ad27816"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "15d39c84878482e1afd740ed2f82f5ca"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "2fb9957d3bfa8949ba23256981e99c76"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "b0fa338b580e084e2f2819aa52e04b01"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "18916080fb2cdc24ab796c0ff03ef71e"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "5e04ba3482271f96c4d4385e944cd83c"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "73eb6fd5f7f0a21a511c62bcf1d00f14"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "68cc42ed827ef38c6f5bd5b66a27b0e9"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "ea574cde597fb0492ad5b2acac71e1a6"
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
