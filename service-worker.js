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
    "revision": "5cfd07cf79213102cbe175ff1131f820"
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
    "url": "assets/js/10.e1621658.js",
    "revision": "5affc833978b76736f21a697c3f2e29a"
  },
  {
    "url": "assets/js/11.76a6f2f6.js",
    "revision": "bd9d44a73893f93c2d153b334153bbbd"
  },
  {
    "url": "assets/js/12.a23ba3ac.js",
    "revision": "f9584bacc59bfd40dc15a6b872e8ba2a"
  },
  {
    "url": "assets/js/13.c47da8ca.js",
    "revision": "3065aec57e3cd1fe1f870aa4eb8f379e"
  },
  {
    "url": "assets/js/14.67554bae.js",
    "revision": "163ebffaf7913f71f9d6151972a61da0"
  },
  {
    "url": "assets/js/15.d534fe52.js",
    "revision": "53d4c4adb192f3bde26d7e520a356525"
  },
  {
    "url": "assets/js/16.c8974ca4.js",
    "revision": "c6582d8e33b19b831489cd2aee246a80"
  },
  {
    "url": "assets/js/17.d4a27d0b.js",
    "revision": "6bdfd07b50d4d2ea4e863b7de6e7bdae"
  },
  {
    "url": "assets/js/18.4537180b.js",
    "revision": "79abe6df953039e854783b99058e2b8f"
  },
  {
    "url": "assets/js/19.75d4c117.js",
    "revision": "6e20d5dbc0900ebd52c5ee7337bae111"
  },
  {
    "url": "assets/js/2.5ab90b5d.js",
    "revision": "edb18046ebe2286fda6b50f021df00c7"
  },
  {
    "url": "assets/js/20.f3241a13.js",
    "revision": "09595a154ae48136b1edc06fdb320862"
  },
  {
    "url": "assets/js/21.a22dc792.js",
    "revision": "3afd862ce93e90d74ceac8c10dfca2be"
  },
  {
    "url": "assets/js/22.5e2ac874.js",
    "revision": "fd33be157b36e55f0b91067ea46e1ace"
  },
  {
    "url": "assets/js/23.66714fe5.js",
    "revision": "75e5b624e059e47f975306941566f3a3"
  },
  {
    "url": "assets/js/24.c39dee67.js",
    "revision": "f0e01c4de5100fe0234cb824c139731a"
  },
  {
    "url": "assets/js/25.404330e8.js",
    "revision": "c686b3bf55ff8c89abdd7f81f7282e50"
  },
  {
    "url": "assets/js/26.5f19db04.js",
    "revision": "7dcc1569ee4c6e4ca8ffa10526205af7"
  },
  {
    "url": "assets/js/27.43a17475.js",
    "revision": "08b498880eb198a074e471d3d08b5277"
  },
  {
    "url": "assets/js/28.02d872d8.js",
    "revision": "eb5921f3b4b8e1d2805e7b66a23a0fec"
  },
  {
    "url": "assets/js/29.85ad7a17.js",
    "revision": "416874eb05cdfdc15fd6b98be8aa65fa"
  },
  {
    "url": "assets/js/3.dc604785.js",
    "revision": "447ec7b97d2c799f265a99be6bc98815"
  },
  {
    "url": "assets/js/30.282862ed.js",
    "revision": "9112d39696df6f17c095d7e660ab6dac"
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
    "url": "assets/js/33.4de62999.js",
    "revision": "966abea235e92c81cee23e773f7eae58"
  },
  {
    "url": "assets/js/34.5c702ee9.js",
    "revision": "58bfa9a0c6c7d193df751c013416a507"
  },
  {
    "url": "assets/js/35.396040db.js",
    "revision": "d7ffdf03a448349783eba0546366b4de"
  },
  {
    "url": "assets/js/36.060f737a.js",
    "revision": "6dd99e5d512a358b8ed94581e8002877"
  },
  {
    "url": "assets/js/37.605f7edb.js",
    "revision": "4bae340da578df79b46711e8d9d5e71b"
  },
  {
    "url": "assets/js/38.658dea61.js",
    "revision": "9fd744613082ff5873a140afba44aa83"
  },
  {
    "url": "assets/js/39.732ffd5c.js",
    "revision": "97a9f6852c86852b9afe3cfee2ffa50b"
  },
  {
    "url": "assets/js/4.af14d398.js",
    "revision": "7d96d5b224c78c98661d0eca018eddd3"
  },
  {
    "url": "assets/js/40.81ce07b7.js",
    "revision": "0942b5d302f44379c5acfb46f87396b1"
  },
  {
    "url": "assets/js/41.ea1ad1f1.js",
    "revision": "2fb9ab47f71f636aca42b5c94cfaea64"
  },
  {
    "url": "assets/js/42.5fd901d9.js",
    "revision": "ce4bf27758b9e825fd03383b22da6d11"
  },
  {
    "url": "assets/js/43.2d058594.js",
    "revision": "696934fb304a5c5e0749dc5182877a4c"
  },
  {
    "url": "assets/js/44.44ec7482.js",
    "revision": "bca903e502796d173588816d766a9640"
  },
  {
    "url": "assets/js/45.050a69b8.js",
    "revision": "d1b7b80664fa4a4a577b086d098784b7"
  },
  {
    "url": "assets/js/46.17cf9339.js",
    "revision": "05a7d76a40a91c471109d0cb3ca16ee1"
  },
  {
    "url": "assets/js/47.78f27a21.js",
    "revision": "82b890b0abac6987980e87d0968cb826"
  },
  {
    "url": "assets/js/48.ebae4a64.js",
    "revision": "03de7690aef7d9876bc2ae19ae2dce56"
  },
  {
    "url": "assets/js/49.25427b30.js",
    "revision": "e1ea3963ec92cfe2d7e6eed0cc61e5c6"
  },
  {
    "url": "assets/js/5.3311c24b.js",
    "revision": "60edc6509038036be8de3e89dad24cf0"
  },
  {
    "url": "assets/js/50.ee4c009f.js",
    "revision": "1c49bc92ba9c3aeb6c0ba1e220970970"
  },
  {
    "url": "assets/js/51.d7ab7dfc.js",
    "revision": "e889186396c7b52f8465f24c7b11d4d1"
  },
  {
    "url": "assets/js/52.30b118e9.js",
    "revision": "78b53680de3be5d0fca0f5c02fdd16fc"
  },
  {
    "url": "assets/js/6.d0dcf50d.js",
    "revision": "8de1df0475f0f7cbf1500f620041cf6b"
  },
  {
    "url": "assets/js/7.6163ce85.js",
    "revision": "3a8491f7a980b3987df76f9746586e73"
  },
  {
    "url": "assets/js/8.2346a74b.js",
    "revision": "1bb945145df8245b7cd10be82bd43a53"
  },
  {
    "url": "assets/js/9.44f89740.js",
    "revision": "1fda90b5b86280d4399c7f28b933e42b"
  },
  {
    "url": "assets/js/app.d997194a.js",
    "revision": "20f4c9c23dc38de9abb5b34be82d09d9"
  },
  {
    "url": "base/git/1.index.html",
    "revision": "c63bfc69013f09a04b0928dbb810183b"
  },
  {
    "url": "base/git/2.github.html",
    "revision": "5e953b7bda4ade49daa10e4182031160"
  },
  {
    "url": "base/git/3.version.html",
    "revision": "903cac69cd2ee04bcdab6b0260c59b45"
  },
  {
    "url": "base/git/4.gitlens.html",
    "revision": "f238798642c9a332dee8041781fa6cb1"
  },
  {
    "url": "base/git/5.code.html",
    "revision": "b3f885d024cbfcb92beed68b070a86ac"
  },
  {
    "url": "base/git/6.branch.html",
    "revision": "0354e995331c5ebe505d224c496ba7fc"
  },
  {
    "url": "base/git/7.commit.html",
    "revision": "85ff34c557138c63a09588b9991d7e40"
  },
  {
    "url": "base/plugins/1.index.html",
    "revision": "0dde4ea8d7622621a9bb93f664d77ecd"
  },
  {
    "url": "base/plugins/2.gitLens.html",
    "revision": "f4f2d82e7f89ae113ad22b7cbe76d88a"
  },
  {
    "url": "base/plugins/3.history.html",
    "revision": "6f78977e7b69b13759a68c937f4b63d3"
  },
  {
    "url": "base/plugins/4.graph.html",
    "revision": "24ed778f213263b249ecd88247c369e5"
  },
  {
    "url": "base/plugins/5.chrome.html",
    "revision": "4a71db60395f1c8b99a87a3523929d20"
  },
  {
    "url": "base/warehouse/1.index.html",
    "revision": "3fe1fd7f8717e805faad41a2c1d6b189"
  },
  {
    "url": "base/warehouse/10.table.html",
    "revision": "fddedd6ef864481511917a00d3c077ce"
  },
  {
    "url": "base/warehouse/11.tree.html",
    "revision": "57123dec2a0746d25c0ac9cb9911d131"
  },
  {
    "url": "base/warehouse/2.gitlab.html",
    "revision": "4ca8161a8629bf2e702eb8cbce08cf61"
  },
  {
    "url": "base/warehouse/3.github.html",
    "revision": "d9948734523a81978f4b1f4a3981d16b"
  },
  {
    "url": "base/warehouse/4.gitee.html",
    "revision": "eda92826692135fccea7e9f2b0d2f8a9"
  },
  {
    "url": "base/warehouse/5.api.html",
    "revision": "add08ae6c717a1a0c9c734486cfaae9d"
  },
  {
    "url": "base/warehouse/6.form.html",
    "revision": "699b8026a770171844a0f74433314cde"
  },
  {
    "url": "base/warehouse/7.checkBox.html",
    "revision": "cf1febf53b0a88dc1f65c1fbb31eaf19"
  },
  {
    "url": "base/warehouse/8.active.html",
    "revision": "555e1ef6929dc5f53ffabf1ceeb32f3f"
  },
  {
    "url": "base/warehouse/9.alert.html",
    "revision": "afc940b8084ccdb6603e7d491d90d636"
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
    "revision": "d1aff8273d3f39d7c3bda89ad91c0f2f"
  },
  {
    "url": "mock/http.js",
    "revision": "c8abf8aba8039ff5bc6fa0517b076832"
  },
  {
    "url": "senior/svn/1.index.html",
    "revision": "1affcd016a0d6b99917116e687231f46"
  },
  {
    "url": "senior/svn/10.ui.html",
    "revision": "38e1e7715cba326b6eb7674c2ad8bbe7"
  },
  {
    "url": "senior/svn/11.data.html",
    "revision": "cdea21d9bec52ac1c4febde66466fbe6"
  },
  {
    "url": "senior/svn/12.skill.html",
    "revision": "f63d705ac7f18b93a9b38d2887a717b7"
  },
  {
    "url": "senior/svn/13.com.html",
    "revision": "a9c15bd3268d5b58c512f120747b7708"
  },
  {
    "url": "senior/svn/14.data.html",
    "revision": "2a346aaae68c1703b59a2d8138dd295b"
  },
  {
    "url": "senior/svn/15.api.html",
    "revision": "ed606e2f1f2819406bc2dfec92934ab5"
  },
  {
    "url": "senior/svn/2.service.html",
    "revision": "6c616faa270304786b60efb28ace55e4"
  },
  {
    "url": "senior/svn/3.cdn.html",
    "revision": "7153046157486b139719413500fc0367"
  },
  {
    "url": "senior/svn/4.cors.html",
    "revision": "fb2eb0e8197e363aad570b8368b74765"
  },
  {
    "url": "senior/svn/5.cache.html",
    "revision": "320341ea05ebc241ec98624395caf07f"
  },
  {
    "url": "senior/svn/7.module.html",
    "revision": "f8b94e4eebd8fe5e1d127ea46f170f5e"
  },
  {
    "url": "senior/svn/8.project.html",
    "revision": "c8a9c4c851edf4ef816fa249cf7efbd4"
  },
  {
    "url": "senior/svn/9.utils.html",
    "revision": "3dd5f5c8c9ec99539d64481f294697ed"
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
