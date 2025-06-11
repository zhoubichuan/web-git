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
    "revision": "2c871fc8523abe6a5fb205710eab79d7"
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
    "url": "assets/img/image-2.c082171d.png",
    "revision": "c082171dc3b17acc86eaff9866534ca4"
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
    "url": "assets/img/image-5.34e21d19.png",
    "revision": "34e21d19c5b9a75410fdf3484a3a3f59"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.686fabee.js",
    "revision": "da35c419db2c40e2a70387e5fac09f93"
  },
  {
    "url": "assets/js/11.44617c18.js",
    "revision": "4295e89a62ef26fd701930a3f060ffa8"
  },
  {
    "url": "assets/js/12.a5421fb3.js",
    "revision": "a8d021eed24a8f30205d0d98e95a7f71"
  },
  {
    "url": "assets/js/13.e1f91f08.js",
    "revision": "f6cce020dc40d102fe7ef5cc2fc09b24"
  },
  {
    "url": "assets/js/14.3dd22287.js",
    "revision": "3608e2b22ef4c694fd31039e5b6a7c95"
  },
  {
    "url": "assets/js/15.4f257af5.js",
    "revision": "a681494eda0fbc4f86be44996afe5417"
  },
  {
    "url": "assets/js/16.48d89f34.js",
    "revision": "0c86cd22ef5e5a3e5a2fcead9396d991"
  },
  {
    "url": "assets/js/17.9f875991.js",
    "revision": "31c1fb81ecde18011baf75ac6850c2eb"
  },
  {
    "url": "assets/js/18.7902cad9.js",
    "revision": "c3a9d6af9a75b578df629e35876eda2c"
  },
  {
    "url": "assets/js/19.d8f49270.js",
    "revision": "127e896a58d66a27f6c0666cda4d1d38"
  },
  {
    "url": "assets/js/2.13cf3e54.js",
    "revision": "f25cc83657fb2ab71677a7e7e12095e5"
  },
  {
    "url": "assets/js/20.3d137d18.js",
    "revision": "943fd4ab2464f59e9b3bbe595640260a"
  },
  {
    "url": "assets/js/21.bef59113.js",
    "revision": "a604e5b02fceefb92f71b8fd504a1665"
  },
  {
    "url": "assets/js/22.3bd2be0f.js",
    "revision": "4076c319afc7fb914d6df5b05c3432ab"
  },
  {
    "url": "assets/js/23.ff9fc1a7.js",
    "revision": "6635bdb478a68f36eb8a6a8f26cc14a4"
  },
  {
    "url": "assets/js/24.52353d78.js",
    "revision": "bbf8dfe92673e8aff6528f996c471cb0"
  },
  {
    "url": "assets/js/25.e6091f83.js",
    "revision": "ee7ff81a0e62c89c9da7699c1c0298b5"
  },
  {
    "url": "assets/js/26.0a6479d1.js",
    "revision": "a4c47243e67d37a4ff3652ead986e8c0"
  },
  {
    "url": "assets/js/27.8d1dd602.js",
    "revision": "751b164f495e82af897a3b4654de9ba8"
  },
  {
    "url": "assets/js/28.196e4091.js",
    "revision": "4902a6e48fd7cc3a59469de390f0c25f"
  },
  {
    "url": "assets/js/29.564c39b7.js",
    "revision": "67bc61a2afc4180678a43d2a0b05a554"
  },
  {
    "url": "assets/js/3.af1ea08d.js",
    "revision": "87ffc6bba2ae79c25fdf72cf585254e3"
  },
  {
    "url": "assets/js/30.0b6c9912.js",
    "revision": "ae0744500ae0c8f9897ef6b06d16417e"
  },
  {
    "url": "assets/js/31.015a8f56.js",
    "revision": "67585265c0175086a2d19697b3f84942"
  },
  {
    "url": "assets/js/32.7ca20cbd.js",
    "revision": "9d539e7207412438e7598e9eb6e48179"
  },
  {
    "url": "assets/js/33.13d88e13.js",
    "revision": "4bc83fd46d700fe2791ee96aa11d3796"
  },
  {
    "url": "assets/js/34.cdf2c9d5.js",
    "revision": "b0785c9ac9a320294eac6670c97be007"
  },
  {
    "url": "assets/js/35.e43cc4d2.js",
    "revision": "a81e59faf05777c920e62d34c967bb4e"
  },
  {
    "url": "assets/js/36.48ae2ec8.js",
    "revision": "e73b4e6df8451e1e518d5562e98e49c7"
  },
  {
    "url": "assets/js/37.2c98863f.js",
    "revision": "f9e5d1599e1320a92a9a33b222db96b0"
  },
  {
    "url": "assets/js/38.32718a39.js",
    "revision": "c119bf7d91ae7efc2a00c6259e246b29"
  },
  {
    "url": "assets/js/39.d4e3b75a.js",
    "revision": "99c747f5c084a2a3091fa80e9246e930"
  },
  {
    "url": "assets/js/4.39eb80e9.js",
    "revision": "6fb73a409edaca43fff252ab56473a80"
  },
  {
    "url": "assets/js/40.c583164e.js",
    "revision": "3fe8c87a8225044751a63bcb0503d33d"
  },
  {
    "url": "assets/js/41.328f02c8.js",
    "revision": "a6903bb9ac9211463c8dfcb0e8b97e1d"
  },
  {
    "url": "assets/js/42.9348ef6d.js",
    "revision": "613382b4710232cf1a93c6fc78bb1385"
  },
  {
    "url": "assets/js/43.e3146009.js",
    "revision": "2125f5b0055d9bf63f61dce6f0f8baf4"
  },
  {
    "url": "assets/js/44.5ae46c31.js",
    "revision": "12457cb7956015b0afdffbad791e6757"
  },
  {
    "url": "assets/js/45.55519eff.js",
    "revision": "6d61a931b89da60b6af709730a2bb77b"
  },
  {
    "url": "assets/js/46.15dadd77.js",
    "revision": "a4c9f5e551227028f6cec08b62cfa7fb"
  },
  {
    "url": "assets/js/47.0b9817f4.js",
    "revision": "7bff169182d218a40100a9a061ae2eb7"
  },
  {
    "url": "assets/js/48.f0321b89.js",
    "revision": "dac11ed2a79f8d77df27acef1041e475"
  },
  {
    "url": "assets/js/49.a21da94b.js",
    "revision": "daf26f107fd406c5e1c238990ca7707a"
  },
  {
    "url": "assets/js/5.07a0ff4b.js",
    "revision": "73700ee1adbab55a79950fc658acfdf6"
  },
  {
    "url": "assets/js/50.894a587e.js",
    "revision": "be6630150bfa769f3340aa5d71911d70"
  },
  {
    "url": "assets/js/51.b0a9dbe3.js",
    "revision": "afbd02bc7e45f79902a9bde1f6e3f062"
  },
  {
    "url": "assets/js/52.bb7ee8e8.js",
    "revision": "93a7f5193d7b8fc1e93c2efba0ac4f8c"
  },
  {
    "url": "assets/js/6.1a91c5bc.js",
    "revision": "94243b994d0c905377fc29e4dd433858"
  },
  {
    "url": "assets/js/7.99c352c5.js",
    "revision": "c1aa1c9054ac0322773a10c71d758e5f"
  },
  {
    "url": "assets/js/8.23f8911d.js",
    "revision": "c33f5ae4de6bd8446c7be3ad3ce78f28"
  },
  {
    "url": "assets/js/9.d5ed0e25.js",
    "revision": "ae41062c602cd746878ae8edc72d2dbf"
  },
  {
    "url": "assets/js/app.d9166680.js",
    "revision": "e075a6f3229c1aa3821cc80588bdc39c"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "ebcb539375337730dda7158da765306d"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "cfe58c55e7c176f2151ded2518cbb80b"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "d702509b1d8560f61eab0503a06742c3"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "26dca84e09c8372b5bce481cb38a698f"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "95e3581aa76cb1eee0767a400e6e0f13"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "fead204beef8ae516c731b014761b5e3"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "b67f4469ea7053c4a919e0653961dfbd"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "34b19ef4035bda42c5274bf3a52e51da"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "da3c8185869ea4fb2349bd86c350c704"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "2b5628c931fb0f28cb8e1965336ae76b"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "3bfe1f0ef67858526803fd7a9205aa90"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "a9783aa8c14ec6a0f68ebf1311243241"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "901c2d8fafa34db5075824fe49a28ea4"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "69f856f8f73fafe9adc0c800b1fb0b71"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "cb9c2040a079faab5e4e9d3914eb8817"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "185c5eda603dd59a1cb314a01fe109f7"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "314aef225e167e0819a51f0fe39f7ace"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "09bddb7564183747292f2af633e7c72f"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "dd0db49c39a64be4539300c640ff2404"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "4f2ab3e3cf16b6a784b27d71efa64a56"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "32fd492bb676f3144174c09926348b69"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "51892501c53e11719952512446f81829"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "8c7546e1ea736925ecad517fb720aa7f"
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
    "revision": "328d35e164a5c0e2d674dcdb6424bacc"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "1f3d60ea4e5435b4613d6853fea3e0ea"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "582e457add67edc1d1bb1301b1b4303c"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "81802de3d8fdbaae972d2e1f9e75df0d"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "9c556da162c66f548738ceeba56bc147"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "95eb1460b431c7eafbd40122890d41a8"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "6968438703d5499a760acc9f643818cb"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "5b144ff45a8f003a2629d5a4547335cf"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "0dc8a70bfabc1d0b7a579a8bb3b9ee96"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "9a29debe583a7b5949580ee3ccf9cc4b"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "30b6c620cb6986f805a372cb8f056af1"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "807e4f8fa7826424c873030b38121b49"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "48c4c49bbb79e6bea375e28f4d114942"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "192b7828dc2fd3ce6d52bb6287004db0"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "8cc3069406f06a28f2370bc6988e3da5"
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
