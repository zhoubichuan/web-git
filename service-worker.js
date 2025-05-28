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
    "revision": "ae6080ee9d4a688376b65e5348c9c4fd"
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
    "url": "assets/js/21.896f2bb6.js",
    "revision": "8526a4eda02e9e4f2eb94d9ccc167cd3"
  },
  {
    "url": "assets/js/22.173ab40f.js",
    "revision": "bb880de6805d116b5a62c525a6f5dee2"
  },
  {
    "url": "assets/js/23.781c2c7a.js",
    "revision": "1494e21f6d6942b0d65924e75a665255"
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
    "url": "assets/js/26.3e6a9589.js",
    "revision": "f30497c441d5d68339d23b6957fc2b27"
  },
  {
    "url": "assets/js/27.3a2cf598.js",
    "revision": "00de354108abd4bc6c12c1b02c195e7a"
  },
  {
    "url": "assets/js/28.72df6ce9.js",
    "revision": "61f462b319017cf793a4acb226b8f471"
  },
  {
    "url": "assets/js/29.74182ecc.js",
    "revision": "a768f6b517a12a3e880e3caee8b30f30"
  },
  {
    "url": "assets/js/3.adf57c9b.js",
    "revision": "4cb052864ae70f12a11dee14dc6dcedd"
  },
  {
    "url": "assets/js/30.71510090.js",
    "revision": "3c14b43842dccb76450abb41c0061799"
  },
  {
    "url": "assets/js/31.d2bb81b0.js",
    "revision": "c18b0af99bcf47a9538e5f3b586250f3"
  },
  {
    "url": "assets/js/32.32065be2.js",
    "revision": "3ad032d619288ba5ebaa63d32f9a45a8"
  },
  {
    "url": "assets/js/33.b933a79c.js",
    "revision": "25126fa6ff36d0fa1adcfa440a26e774"
  },
  {
    "url": "assets/js/34.738fd80b.js",
    "revision": "5cf363d4ad60a49dc5efcd798c16e15e"
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
    "url": "assets/js/38.6f63223e.js",
    "revision": "f6c1811752fbcf8a8dd4d5c341b9ffad"
  },
  {
    "url": "assets/js/39.c24e6225.js",
    "revision": "bdcd9157dd8c4a019d50e4bf7a0fdbc6"
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
    "url": "assets/js/42.95245062.js",
    "revision": "d96cb47a19cfb2cde707b5256a8ef300"
  },
  {
    "url": "assets/js/43.581bc9c6.js",
    "revision": "e4437504e1999ed1693f31fd476ccd85"
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
    "url": "assets/js/46.6a0ed497.js",
    "revision": "1e81fb5cf3b078534ab458f9d9a740fa"
  },
  {
    "url": "assets/js/47.abd4301a.js",
    "revision": "c8bb73074ad7a84e2057529ffc5614cf"
  },
  {
    "url": "assets/js/48.9dac0ce1.js",
    "revision": "cc39b5623031de199ad0e1d3da3566c4"
  },
  {
    "url": "assets/js/49.193e3668.js",
    "revision": "a20ff64573606d7a0167b6aa40a874ff"
  },
  {
    "url": "assets/js/5.fb713732.js",
    "revision": "2a9d14c42947f7f15180d59e1b80e32b"
  },
  {
    "url": "assets/js/50.938a1087.js",
    "revision": "3f6a95ce91efac94a8faa5355e8d0fd8"
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
    "url": "assets/js/8.194bceca.js",
    "revision": "669a16c23a2b5ec47ea6b5a27fe610c1"
  },
  {
    "url": "assets/js/9.e573b912.js",
    "revision": "5fd20ab0bf022a95896e159766371df8"
  },
  {
    "url": "assets/js/app.52b194bd.js",
    "revision": "3f7041a12b35ccc9755c3219e7896e77"
  },
  {
    "url": "base/4.utils/1.index.html",
    "revision": "1fdc2133a21edab8a0d73cf8c1ce5972"
  },
  {
    "url": "base/4.utils/1.Visual Studio Code.html",
    "revision": "d04cf56217580c002843a95884aaba82"
  },
  {
    "url": "base/4.utils/3.test.html",
    "revision": "6975483788a0e694e75b6f3dbfbc089c"
  },
  {
    "url": "base/4.utils/4.抓包.html",
    "revision": "8ca5dea78933a6ee020031ea47125939"
  },
  {
    "url": "base/4.utils/5.chrome.html",
    "revision": "f0a3f907aacc6a49aa4b8cb23a478f75"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "9d2bbb195259a43d71b57ebcd0d7e7aa"
  },
  {
    "url": "base/git/2.Jenkins.html",
    "revision": "e94ff2625f6cd2f514424bd4786c1431"
  },
  {
    "url": "base/git/3.gitlab.html",
    "revision": "c2de3be6bef1935d6d46ee948a5571c9"
  },
  {
    "url": "base/git/i18n.html",
    "revision": "c0f6837d6b4abd62ebf5942a21486cc9"
  },
  {
    "url": "base/git/prem.html",
    "revision": "4a7ffe949724e298dfe3cc89898721ac"
  },
  {
    "url": "base/git/test.html",
    "revision": "3e12a02a841de33a27fb8723c1c1113f"
  },
  {
    "url": "base/git/vscode.html",
    "revision": "df691643afda3f0108e36fef1ecdb76d"
  },
  {
    "url": "base/gitlab/1.index.html",
    "revision": "a7f150fe2be47f14139488cde14a0f91"
  },
  {
    "url": "base/gitlab/10.table.html",
    "revision": "32db167832a8c103fbf8a2cc0c89b9fb"
  },
  {
    "url": "base/gitlab/11.tree.html",
    "revision": "1d39bed55156e94a298efae4d5bdb68b"
  },
  {
    "url": "base/gitlab/2.extend.html",
    "revision": "9089e8570158492b67e5673c0302839d"
  },
  {
    "url": "base/gitlab/3.componentCommunication.html",
    "revision": "22b21c00b1700ca9a85868373d23d5b0"
  },
  {
    "url": "base/gitlab/4.render.html",
    "revision": "b59c542c45539bfe17bef7585d11669c"
  },
  {
    "url": "base/gitlab/5.api.html",
    "revision": "816e19d632c79ae9b452d7b40354b2a9"
  },
  {
    "url": "base/gitlab/6.form.html",
    "revision": "3b77c8693edd0012ed9f8bab3970c458"
  },
  {
    "url": "base/gitlab/7.checkBox.html",
    "revision": "e01906fe21164810ecfac26e4e03aaf2"
  },
  {
    "url": "base/gitlab/8.active.html",
    "revision": "d06588d50513fe599872d92aa6b897c3"
  },
  {
    "url": "base/gitlab/9.alert.html",
    "revision": "08e3b327b7743a9e1d6e4c77673bf3f3"
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
    "revision": "f657553869b53dff947e93e2c8dfb78b"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "2bb3d9a6411e1e458a701204dda2b67e"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "e8c23b160faa300eb27ccbe906e955ba"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "422fda1d4a0fc0ea30d26772763f093a"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "e03a18141eab8ae30bf73ca28dc5dd97"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "154d01d735f2ff9a1626c6b0ca22129e"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "a9b930d0b1a6c91f9135eb7f6978087c"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "e8db2e9d7d93df5c8199bbbbcd0c4cf7"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "c39ce241c737651f809705e3c98a7b4c"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "714e5c985775ba14d65b9cbbe009de16"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "599283358b7b58d66b45ff0420a1a527"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "da6938131b2898c5d923136cf498351d"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "28610f78d8e1aed495cb7ebe67747cb7"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "f27cf6d9d24b4b7b00dd34593f75f87b"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "463dacff77cfea0f92bc636ee7f3de30"
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
