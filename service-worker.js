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
    "revision": "f010b7907ff56ef8c71023ba0cb3912a"
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
    "url": "assets/js/19.ad4d6e9c.js",
    "revision": "a2eb63748aaf6e1e3536edd445d80a42"
  },
  {
    "url": "assets/js/2.3b3dad13.js",
    "revision": "058da46cdf8f19678b3d8d257e401c64"
  },
  {
    "url": "assets/js/20.d9ada03d.js",
    "revision": "fd76f590264bbbd6b9e388eae1549050"
  },
  {
    "url": "assets/js/21.34b63868.js",
    "revision": "cde4d00c4b6c1d4cebaeb63e4597e112"
  },
  {
    "url": "assets/js/22.20ddc0b8.js",
    "revision": "7c44c09818aeb6f423d3e77104ce81e7"
  },
  {
    "url": "assets/js/23.d3162014.js",
    "revision": "788508fa9a204f158813564c84e769aa"
  },
  {
    "url": "assets/js/24.542c929d.js",
    "revision": "0ad6aab26cbd7b3c81cc74ae6f0bfeef"
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
    "url": "assets/js/27.3dcb0f96.js",
    "revision": "642cde9fcc55c243cae49fc61ddf901a"
  },
  {
    "url": "assets/js/28.a3530293.js",
    "revision": "324686234a8e2a0656280fcd268ae6d7"
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
    "url": "assets/js/30.48c424a9.js",
    "revision": "96d29f17017fe97223a4f19e7cfa410b"
  },
  {
    "url": "assets/js/31.6a6dd3a4.js",
    "revision": "5e2dc51f6af941ceba9fb0d4ab3192ae"
  },
  {
    "url": "assets/js/32.22857558.js",
    "revision": "dae9a8ac6b8844ed8acf8a264ed360e4"
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
    "url": "assets/js/35.22ce3192.js",
    "revision": "a3464c4a258f27cdcde8eb00a1e9097d"
  },
  {
    "url": "assets/js/36.5480da51.js",
    "revision": "869917202de56dcfe22e1a1077b5f07f"
  },
  {
    "url": "assets/js/37.0427a255.js",
    "revision": "b759deedf1d2f87732ae487e24ec0425"
  },
  {
    "url": "assets/js/38.500a5ccf.js",
    "revision": "cb73ef24921afc2a9c6f619e0ed546f9"
  },
  {
    "url": "assets/js/39.63b3f85c.js",
    "revision": "54f8049729b743d86a6ed3595b393756"
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
    "url": "assets/js/44.a772ea3e.js",
    "revision": "47d8b29ce21d62e6e6c79141a7a36700"
  },
  {
    "url": "assets/js/45.83f59a87.js",
    "revision": "f3ba928815b172d4b7dfcd4697216424"
  },
  {
    "url": "assets/js/46.accda5f0.js",
    "revision": "8eceeed18747a063e1cccca45f682cb4"
  },
  {
    "url": "assets/js/47.04d03eb9.js",
    "revision": "01b4dbd9b3ffd61870988f5e1f03477e"
  },
  {
    "url": "assets/js/48.b49d7667.js",
    "revision": "781530dadeb96a25bc0b502f19f8419c"
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
    "url": "assets/js/51.fcc10bbf.js",
    "revision": "376b031f392d1ea8a733673a9a0c262b"
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
    "url": "assets/js/app.24f0296e.js",
    "revision": "9074fb0756f4cf69da69bb8c843ffde9"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "cecff6f6c077ee756663ea9a74c261c0"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "0bee5a30a4a3f8b4f3ebcbd4ad0bc7d1"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "50c2ef39f9c8fb4378a59307336d1665"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "7765452bb06f021b125d7fb7aeb926ed"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "54b361fb320281f068e92d9e637b63f9"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "ac2b6e1c6e2d89183c79d1d3dabed52b"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "578648522763aee5b366785f9b661430"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "4f9a31a40fdd7c2007832388659fbdd7"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "813e64a687e24aa8ab4f86b24bf5bd33"
  },
  {
    "url": "base/git/prem.html",
    "revision": "422d7d852af8d463b055ca9dd319cdb2"
  },
  {
    "url": "base/git/test.html",
    "revision": "d82e939826ef992872958940c4557a0b"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "14ef7e6ec1c495f5d87e362c9bb1e80d"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "d32fe2649e69f7d898a6cfb097e99c50"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "76003c84002e7ee7f7904f98e22d9d2c"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "9789ddbddcbf48ec6436b17b7c6f1599"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "0d63eebd65957462eb0bae4bee3de24c"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "5b1fb0d952a4b7ebc88e2b244ba2ab55"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "6ad71eb3da74a0175a039e59b193ab0c"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "35abb730c0069ed4e5c8d3dfbfc2a506"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "249d67bdbdd56e4d0ff23b2d4430ba8e"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "3e9d10082f4f59dd4e4e62c4a7a130c5"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "923e4dba7a166de28e291e8b62f682ac"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "446144aef972a67cfd5e9ecb51c56fa3"
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
    "revision": "44fa87e53acb6855e34698053220666f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "8098cb50c1c516dbd69cd1a3111f9e1b"
  },
  {
    "url": "senior/svn/1.常用的cmd命令.html",
    "revision": "4ecdbb4e942074b578c7b565830e1992"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "f0f7ad6b683367c631841ab708f1dc76"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "adad1320c12b0b4ac553e6bdfc6ca54b"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "f8a6d8b119695ae5e44d1557a90bf9f5"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "2341e6a8ebf99c4bdac68101ae5511a3"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "b7524850bc488aefdf9f7cef7b02cbd2"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "4415d4a22212b167daceb71faabc14e8"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "0d07352bebed05e7d31fb6389909ce9d"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "90b4e767b9ff1c72b186a88f0525ed10"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "1e0d8794da101a234a800877a160df67"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "5e91bdb4e2b0530a36978005696ca431"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "aa7be11208cb315c1aab6813932acd35"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "032a12c3b500819d0387c78dc8844fdc"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "a37a1a11a4e745cea47eab8abdd25457"
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
