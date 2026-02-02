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
    "revision": "7de3f1a9c143ffa4eda28d1e1942fe09"
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
    "url": "assets/img/1.5c268226.jpeg",
    "revision": "5c26822628abc27372cae3d3a4d918c8"
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
    "url": "assets/js/10.e9e2e3f8.js",
    "revision": "3d752f0f9d5072a98f8d280d7a49e8f7"
  },
  {
    "url": "assets/js/11.aedb8181.js",
    "revision": "31bd0e03ef1b63c94f206179d21fb479"
  },
  {
    "url": "assets/js/12.c8f1f005.js",
    "revision": "34e110e1bf2baaf515ab5e675659d8ce"
  },
  {
    "url": "assets/js/13.ee849e4c.js",
    "revision": "f4938f5fc86635b2eab51b98c472662f"
  },
  {
    "url": "assets/js/14.1872a089.js",
    "revision": "8adc4df2499fb3b6e92ac5796480d2a6"
  },
  {
    "url": "assets/js/15.09e9b587.js",
    "revision": "0f380e0858245cb20ff84af7360ff844"
  },
  {
    "url": "assets/js/16.1c794749.js",
    "revision": "9982ee21485d319b3bfa3659052ce68c"
  },
  {
    "url": "assets/js/17.deab0640.js",
    "revision": "3a4004ca5eedfb5c05a9534d39a280a2"
  },
  {
    "url": "assets/js/18.c9fba980.js",
    "revision": "22044e777b083d72181290a0ea4d7810"
  },
  {
    "url": "assets/js/19.a6ae6119.js",
    "revision": "fe77b675f1fc5a1c03a9934c5d726be6"
  },
  {
    "url": "assets/js/2.fcaee3be.js",
    "revision": "0172760ff35e9f8ad2777ef941c0ee2b"
  },
  {
    "url": "assets/js/20.1d13c28a.js",
    "revision": "08779355544b4ff3e894a7376e728177"
  },
  {
    "url": "assets/js/21.0bf4f7f1.js",
    "revision": "288adf8c0b94a2957043448a5896360f"
  },
  {
    "url": "assets/js/22.b129f040.js",
    "revision": "dc21366c7661afc7628a4379e00a70c6"
  },
  {
    "url": "assets/js/23.2a13c7db.js",
    "revision": "1a6c11c421bf939e7d99b5291ea51608"
  },
  {
    "url": "assets/js/24.b4a4473b.js",
    "revision": "8069f4723310765f96c4556ed04aabc3"
  },
  {
    "url": "assets/js/25.c420921a.js",
    "revision": "52962bf5fac490cd51fa9ae2a6f6c5e1"
  },
  {
    "url": "assets/js/26.2e671cd8.js",
    "revision": "fda1d8cf897295114079319cf2c6e827"
  },
  {
    "url": "assets/js/27.06446423.js",
    "revision": "c49009c90933844b9697b4576b6dc21f"
  },
  {
    "url": "assets/js/28.8a50aa73.js",
    "revision": "5a6080fdba8b61feaaf1f3fd2d7a687b"
  },
  {
    "url": "assets/js/29.2c584ed1.js",
    "revision": "1bc03e1a12e2b31a35f1aaadd2f1b1fd"
  },
  {
    "url": "assets/js/3.a2efd4e7.js",
    "revision": "288434828f51a4cd1e3ce36bcc72cf6d"
  },
  {
    "url": "assets/js/30.d1d50e33.js",
    "revision": "4da46922837703e3018933256b02b3b0"
  },
  {
    "url": "assets/js/31.983a12ca.js",
    "revision": "52714ad76bbda83836508ad8319df479"
  },
  {
    "url": "assets/js/32.d68c3322.js",
    "revision": "a7095a9dac5fe8a1c51ce21ba21645da"
  },
  {
    "url": "assets/js/33.4de62999.js",
    "revision": "966abea235e92c81cee23e773f7eae58"
  },
  {
    "url": "assets/js/34.470247b4.js",
    "revision": "cc0793165b8a648c28a293f02e92fe01"
  },
  {
    "url": "assets/js/35.d7327a90.js",
    "revision": "a33c672563efd2ea10fb75d469c9e3af"
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
    "url": "assets/js/38.4e1a027f.js",
    "revision": "a9264886be3d92ab1082397bdade9e1e"
  },
  {
    "url": "assets/js/39.10e54e14.js",
    "revision": "f5fd0cd0b564616b4bbd2ec04d9171f3"
  },
  {
    "url": "assets/js/4.e66b75ac.js",
    "revision": "3ffbfda2aaafcfd649cae90ca6d5a4be"
  },
  {
    "url": "assets/js/40.602b9858.js",
    "revision": "849d2f7b6930f8794c414c12d69965d4"
  },
  {
    "url": "assets/js/41.fdb60d5f.js",
    "revision": "995ea82c68264d0bcbd23f63ed15e042"
  },
  {
    "url": "assets/js/42.554ab221.js",
    "revision": "4d8c55cf598432b82c3f5ee1ceee7ddc"
  },
  {
    "url": "assets/js/43.b6219375.js",
    "revision": "72049cf46cf71f9be4b0dc23e0f7d3a2"
  },
  {
    "url": "assets/js/44.5b1ef267.js",
    "revision": "702ac4e1907ecb9a2045f8fee445e597"
  },
  {
    "url": "assets/js/45.dd39d77f.js",
    "revision": "3fa68a2bc864d6053f23bf3215711bea"
  },
  {
    "url": "assets/js/46.85db5aba.js",
    "revision": "09943a568da52ff36032402601192ccb"
  },
  {
    "url": "assets/js/47.09ea0bc6.js",
    "revision": "5a5a49e2b02e6a031c1d222ea0c1e376"
  },
  {
    "url": "assets/js/48.848dca30.js",
    "revision": "c6dce08d1ac4d397a97f3ee793e23816"
  },
  {
    "url": "assets/js/49.619ec514.js",
    "revision": "0065bea8a71d32d430153561aa6f70c0"
  },
  {
    "url": "assets/js/5.56d6ca5d.js",
    "revision": "8f2adb10b163732b3cff13ee8012f03e"
  },
  {
    "url": "assets/js/50.0142fe51.js",
    "revision": "935f1f59a027c9b40dfb63c2aa3628e6"
  },
  {
    "url": "assets/js/51.7f0303ff.js",
    "revision": "64366bc8c5458d0877a0cef56484b93b"
  },
  {
    "url": "assets/js/52.3ddde86a.js",
    "revision": "1510268b06a00781ceda57145b111512"
  },
  {
    "url": "assets/js/6.e3a53b50.js",
    "revision": "b84ba15d537e1a01db2bfde66d76485f"
  },
  {
    "url": "assets/js/7.751df91d.js",
    "revision": "38ca6c858d544b9c2918bce6697c9427"
  },
  {
    "url": "assets/js/8.b9565e5d.js",
    "revision": "833b61e3a61d6bcbaf5d7c00331d5981"
  },
  {
    "url": "assets/js/9.232ea52d.js",
    "revision": "40ff4bd8ff56be49460dd70a413c0b12"
  },
  {
    "url": "assets/js/app.3d029340.js",
    "revision": "66e8c1bf8a56a296ea256ca7e4b7ab26"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "4e10074f6931a52faf2f8f779cf8c4c7"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "820bf847d2a15eaf2d3138bcd9441d74"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "d1febbb95f254c2e89a6b443cc0d3b59"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "4cb55d9db7a3e283964dc20d3d50c517"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "ddacc72953055f860a893b342ee8a7dd"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "ee91c04d38c8509f1c8bc2f6c25b4c05"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "0972421929ebcf69086bdcf04a07c927"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "de3ada0c875dfc85fc0df7dedc033180"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "2aaa90437eb278c545648a1a91cd454b"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "b9676a7dada3e730def6ca91689d87c2"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "a108a1e6a05550792645d1fd8188c90d"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "77278dafa65acdc7c84bc08c9faf180b"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "629fd84ea11ba81a374a8a4e02e1a698"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "a68a5063bf818a5f37381967839827de"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "fe500eb8c0aaf131b912e69e439b826f"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "65ac7c2ebc5a596e94dab2e97fe082d1"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "e47da4a7e054b59137fd50c8f6112212"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "10421669b64315ef6a8063f822253c96"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "bde96ce67faa7072337a04e8fe1b510e"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "badc5e792882998249ffa4c5d9a9858c"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "ca90f6a5fb11f0f27a14e9d518f69c7d"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "6783c935129dd861bc292fa8197451a6"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "4b8886c4b15a1e331ba66f09e6febef3"
  },
  {
    "url": "dll/vendor.dll.js",
    "revision": "aefc723fb23a2eafef9213b2dd5a33f5"
  },
  {
    "url": "home.png",
    "revision": "b5e4f276392d3eece3f67ea966c9e7d6"
  },
  {
    "url": "index.html",
    "revision": "a6cabcd27ca2326fea9708f2e0888d6c"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "8e0f073a70839ec9e1b2c36363f4408d"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "6ca291d25bc88d59a3ed53ef69425ee4"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "ed3312ce50360177c7e9f8ea7acd068f"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "9d23c85cddb19be7efe015eb35a65177"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "c2be1b052cc84828dcb232c2212dddbb"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "e9a0cbd13d6918192bb506360537a092"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "7e7848eaeeb2d1ad8981f09af555e36a"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "2378ae0cd255c9feeb9966d6d2d35620"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "39c862e6bda403b866bff789c20f62d5"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "5f9457629068466a715c0588f7174155"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "aa71f692e93e6a06ff04107a6046e066"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "40dc90e8f06121b17a26614e11769988"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "6e90db07fed4ef7351c021d471084db0"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "2d10bcd0fe0d438119114a0290293876"
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
