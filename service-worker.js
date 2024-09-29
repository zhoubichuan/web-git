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
    "revision": "b75c5e4f404d3d414e2e329ab237dead"
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
    "url": "assets/js/15.f761ce5e.js",
    "revision": "464535740bb725499e4f9a33163e8eb8"
  },
  {
    "url": "assets/js/16.0a9c44d3.js",
    "revision": "c150bfb0b2712d84c8693e16db8c68c1"
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
    "url": "assets/js/19.d8fe4894.js",
    "revision": "a8fe5ded65145449c3a85c8fdeaa7499"
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
    "url": "assets/js/21.f16e6494.js",
    "revision": "421dfa199c49a2e18f5ac348f74c45f0"
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
    "url": "assets/js/26.fb1ca03d.js",
    "revision": "ecfbb37a902c27082fd8ed228275f6c9"
  },
  {
    "url": "assets/js/27.70be8810.js",
    "revision": "9c3616ebe3cde6cb4038c7b8e1612e23"
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
    "url": "assets/js/33.fd31bc7d.js",
    "revision": "9f0bda68dfede7961b7344249739c656"
  },
  {
    "url": "assets/js/34.896cb816.js",
    "revision": "1c307295dba1542d4d8cb20727543dd1"
  },
  {
    "url": "assets/js/35.a6e7211b.js",
    "revision": "1059d19cb6dbc2a61396fcc6de27f167"
  },
  {
    "url": "assets/js/36.ca6cbd4a.js",
    "revision": "a408ecbe7550d752fba47215a46f6dde"
  },
  {
    "url": "assets/js/37.dae6f4a3.js",
    "revision": "6999f5c9f332ab38e66a8cfc363c2642"
  },
  {
    "url": "assets/js/38.500a5ccf.js",
    "revision": "cb73ef24921afc2a9c6f619e0ed546f9"
  },
  {
    "url": "assets/js/39.f6164018.js",
    "revision": "f85394ed0d9702419f2638afcd14b2d5"
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
    "url": "assets/js/44.05c18a85.js",
    "revision": "ada7a68c342bb6b3c348dc8d5e4bbfc9"
  },
  {
    "url": "assets/js/45.0fd86b04.js",
    "revision": "c663124566409ce6aea8276691e55423"
  },
  {
    "url": "assets/js/46.accda5f0.js",
    "revision": "8eceeed18747a063e1cccca45f682cb4"
  },
  {
    "url": "assets/js/47.5e56778e.js",
    "revision": "f052e6874aa3ac22974af27c08e8f19b"
  },
  {
    "url": "assets/js/48.ea7d0a29.js",
    "revision": "22a6babb8f1eea1071a2ac06657731f1"
  },
  {
    "url": "assets/js/49.a25116cb.js",
    "revision": "9aa325b0e299d1fb689a24ef7e7ff568"
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
    "url": "assets/js/app.7735f047.js",
    "revision": "c7ae4eb6a4f741ef1c14ab2610c1914c"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "31a02699d395d956b16567c0c9816dcf"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "e4eb8908b184f057b06d3f6f69fc13ca"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "8c06a700209adb314d73fe4371aeef17"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "2d98a8c6a981331eabf522486e645c0a"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "8a30d26106e432719616b88083bc3d89"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "53f841dc9390a9a0abac950e778990e3"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "9e7d620d7093d0130465e51b9233b30b"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "ec5d104b3d4609a89f8f5ed8562d1bd6"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "dadeb727310ad45046270d14851672f1"
  },
  {
    "url": "base/git/prem.html",
    "revision": "ea8b777d478563d9bb2a8382e3e25bec"
  },
  {
    "url": "base/git/test.html",
    "revision": "fde50da956cda90783a67e22b8acaf25"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "8d72e0620f90ae15217cecc700eec351"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "b5584272e5b6aecb75bc4dd4439ceb33"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "49a3829c4c2a8485acec88945d0ffef4"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "fa982ec0b8ceb4a67c6bb1b9a44cdc24"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "2759a2c404ad8c30e9154e4251bbf97f"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "69c3a8e9e3d6896cf51662329866f4c1"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "bcacf34d7cde5885a8406ffcad541520"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "f607417d59b92122439141fe0796794b"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "c41310f02b74a055e393d8aa8aa8831d"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "3d45694b6a940bcbf8475ec5926f0062"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "018917580b6356d2092e09577b132b44"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "c17a912646cccb972d500bd728a1a4dc"
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
    "revision": "1d94e2a74ad31aa4c7df28e8f567d513"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "b2444052796f724faeabb735efb1368a"
  },
  {
    "url": "senior/svn/1.常用的cmd命令.html",
    "revision": "67c0afe6b7076ca5223b849bc4e5cf2d"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "b2e76292e6d0e5617d818f7990f29c80"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "464325e8d4404918ab2ed6135c854485"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "c2cc5ef13777453cd0452c146ebb8075"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "579cdcda2f31a4ccaaa48f02a4be4a4e"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "c6674513ef1f1216dda56cfaa8025cda"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "eba482a26e529a539a6fcafa13e132ce"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "e6f6c3111c069ed094fcda0c6a65f156"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "cd885b10d368b06140df11d98058dc81"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "dd30457ed4d0026c7b4094a7d5dda3f8"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "2f5e258c8aed9cada75e41bc0ee6e715"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "0869a3dd6cdb2484650a95ccaa5994f1"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "393cfd4938bd59739d9762473e83e8dc"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "b83055fe1fe831fc9b8d87abbb31df23"
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
