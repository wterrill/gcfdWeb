'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "63aaaa5fc1bfefb67446070a68e81d2b",
"/": "63aaaa5fc1bfefb67446070a68e81d2b",
"CNAME": "699c3454088d9e1c40f42abf13f45644",
"main.dart.js": "36e28e98292f20646c5d21806153245e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7446118402704050fa5925804992cbe",
".git/config": "3d15db1f8229b5f4e285b23316aaa347",
".git/objects/0d/52c7e80d77f8a8f640469c364f1771e7ab934f": "a94cc04a9acea5a08cbacb1088984237",
".git/objects/95/7d2f3ad60dfe354e58a988f0fe37502a0334aa": "6bf23cc5b228adefeb111b0f2077f268",
".git/objects/92/6e0775514ebb1f0d27ef7f5f2267f274f09572": "864cf5bc275b058d57f2f7c1e47139e0",
".git/objects/50/58696b95065dbacb66f37df8cdcf3488bc7144": "84869ba378fb65d2d082955f69884fa8",
".git/objects/68/8ff0bb977dcb4fd06282e1e4bbbc0f8036bcd9": "2bdc5cf9e02cfb7853000972681b019c",
".git/objects/57/110850301b91e11d94e011ebc6b50b61ae587b": "e617ecbb0da155382b03a2d7353a60fc",
".git/objects/3b/1f587ac237caa4802db42c39e7aea6074ed8f6": "f63153f49399564dd4cbe32ea81d11a6",
".git/objects/3b/736945f2fc12041c2f2c66a361bc51ca48e1bb": "5168749700e8fccfc494b553b21bb5a2",
".git/objects/6f/217d1be70e70856fb0ee5e1e0649ecd32264b7": "73bc96273c314e58ab4932d2c4cd764c",
".git/objects/6f/999ea9c91e4b5ed58982e626512056deeb558b": "a8a673b9a0b9bf025717f00fa6b2ca13",
".git/objects/9b/325a2913a78b29d12dce921d29a8348346c79c": "5651ea99aff5e3f136d01d2c471c9937",
".git/objects/9e/759e73f4a80efddea75ffe54fa5d79987708e7": "b408352be62ee79f806bec674118f515",
".git/objects/04/bac24ccb9c093bf88340c19009465c8dd034aa": "942fa79f6ec73dbb9cd076c401b076c5",
".git/objects/69/582b5d7d116a2c81ede78fd31666e68487000f": "e9c0b8b86b62afca3b392fd4d894413f",
".git/objects/51/9610cab517f16db4d510e4b1c6c771b200e7a7": "aa25ec1076663d7b66e3ef9238c94974",
".git/objects/58/2830364b6aad7ada1e85974ed7942135e5c688": "10166105005d369c1d63eab7fe31558b",
".git/objects/67/b7145dbf3231adcc8cf3630e874a50c07ea5bc": "94cc2f8684324870d8927b065e6bf423",
".git/objects/0b/ac94a90fcdb48560a9fd486c55b6bc75ae97a8": "d3332399ef5b8e5f7df805584ad57433",
".git/objects/93/cb5f3b2e790271bc96e2ecabe0fcae4f032089": "6ea853d98f8f8b62ae2aeee064a5f2f0",
".git/objects/93/2c8b4795d914b4d96d6525b8c3833940d45a74": "739ec9f43e46c9478680cf43075ee7d5",
".git/objects/94/0949c4b4eedd97471c8e53d2bf96bcc71f51b9": "87dab69e884e78041b10f326879fe537",
".git/objects/0e/127dee7f6b432d689c6b5a4abb406d3bcfb314": "5924523b2014a2b546e0e779d8ada46f",
".git/objects/5a/17bcace1e03032da203237e5a1c1ec8082cb60": "dd3f739bf874cb17b18505776b4eb8cd",
".git/objects/5f/0f88ab226fa6dfc0755470fbc5029e16f79cf7": "3fb827490a1fb20b1911580196397604",
".git/objects/33/436aa6eb26ee79b933ddc91248f95a3f8d98f4": "83fd176a4697e5d8c53c60c6d5001f11",
".git/objects/05/40173f1281dbb98b7c45906316e5ad8564f646": "ab6ceb1e4aed17b22ae44234f7287a5b",
".git/objects/9c/a292fc0a4c3d67a8a621ebce083e91d964bd41": "1c03bd484c79fc7e2269bf7cdfee3474",
".git/objects/02/a4b18f812a85f51483184b8a14d1eb9413ebee": "7ac687b1939688a9744871362d82e1d1",
".git/objects/a4/60de9476c43fb9106052562a1c4c7e6c80fa29": "ea1b1fdbf3097b116838898399c343ac",
".git/objects/a4/65f88905e19d100ca6c831a8ff436983507368": "551aaafa86c3bc773a655723be1c96ef",
".git/objects/a3/179043f9a5dce5d459f329755929cb93360348": "972ec62e22e448e36b9d1541ab85675c",
".git/objects/b2/9d1690ef646d3e737d5db684a8be27c4de5469": "e306147b2df2c780a09e637b2c544ce5",
".git/objects/b2/92930123932e54e58ce0a1767fc7fe00c44cc1": "8d21d5cb8257942f3fac39e3180694ae",
".git/objects/b2/f5fdf5c88802f1d4d80dfba9a5eee8ca230b96": "1f727129ec1ea19b7dacc5a3eff05cba",
".git/objects/d9/ba61672d60c84a341a1a19f4f6d15420af59a3": "ae3584e0edff0e434e03600986080dde",
".git/objects/ac/31e5176dd2c27556ec76a91ce5f9abbec5497b": "37d650ff58bbaa5f2dcec76ecbeecb4b",
".git/objects/d7/ea73d69c6e5cba6d5d72b234fe83b6258369b6": "947be5804c23bcdb248016e57ee5a887",
".git/objects/d0/45b4483cdf88dfb870a396b27ff4189dd064ce": "ffc4b08e404e5ce4792b00071776a493",
".git/objects/be/5f5d13854af4be8047aea457e210aad6f894ac": "031f76bc91a8b7a12eb0f2fbdafbc14f",
".git/objects/da/b99ec2f8639ff0822817e0c5802d0262d441b7": "d075e2fda33b7c9e01b59cfd0078a96a",
".git/objects/b4/e3312c3ccd358ffaa5947c98393173361d496c": "2df57e070f64e2f32fd84d1490d35d1b",
".git/objects/a2/0ff6feed70fcbfdeaf3a84aab66284c4a778bd": "de17eddec5fb85cfb8f5971ae0eb367e",
".git/objects/a5/772ec60fa306afee3e0b9e5ee145b8b21c701a": "14c7974356006df35689f03b69d06857",
".git/objects/a5/a95e4744f27fadc56083bed86e550e55afc36e": "82bd2789be8fd70b13930fd61ecacfd5",
".git/objects/a5/98762b2ff112ca563bc3d9ca17dfc87599a2b2": "47f236340e0ea9139da907f8a4a6e586",
".git/objects/d1/7f65212639ea7836e77f0693cf59774c0be48d": "97787d3beb6a7f6c18820935e85b1545",
".git/objects/bc/11c36ec74e2a236324ad3e5c0a0867996fce07": "2460ac4b2dfcd73da6d415d156e78a86",
".git/objects/d8/03e674009cc3d4901fe6e6536d23297d02df81": "c308e224cc2ac3e7c6f132b1ec71a2a3",
".git/objects/ab/1a59888d64b7338153c091dd4c0fb59a0e7af4": "f6ef15073606dcc5cd44a7cd55827d27",
".git/objects/ab/d531b2fd84365b562d502c30f84870bc13facd": "c783f173af367ce9b0e7d4602bb83877",
".git/objects/eb/b3dc783dc113f18b25a0329ee12e7941bd1fff": "630e47e0772e9c3076482c52a58707c3",
".git/objects/c7/cf40f1cccf1deba130b4d5969295bbece0fe97": "f40db2ab6a505bce27ece281b9c64bbd",
".git/objects/c0/08abbe7f334025caeb50226dd949643c5a5538": "57aad23528be7340339e51e7e54f4d09",
".git/objects/c0/138d1b8e99a0eec2275da6c4cac68536ee3a7d": "6ee87294454deb52221d147734ee5b3a",
".git/objects/fc/af2ee836bdce79d93b2f397f49e05d3fadf5ce": "b46e89d6a8c2571d5928e9bf2441ca38",
".git/objects/fc/9b5e4d404e89882ff4db0aff660290f3665965": "122cddb735334bb0f119b73dc40b94a2",
".git/objects/f2/253ff3004733165875552ce1394654f87a4eb2": "60cd8c7d5d508fd2b53225cabb1c979e",
".git/objects/e3/6b6b90abbab0a5969408c816379fa130216fcd": "ca5e35c998ece83640e52f0908a5b0e8",
".git/objects/cf/a1081d02341bfd78cea330e0afe406b05aab81": "ecf4e41ef32b89f5dd4b7f9386782763",
".git/objects/ca/b5d651f9dc9923eac0d733d447340d5c4836da": "3099f6153cace23009352b85b3d8ef40",
".git/objects/fe/fcff3d1e44ce802d4bf090250bea1cd36a11a7": "c833ac26941ba78f31efcb2e31fa090c",
".git/objects/ed/e62fd85428e74b294eb05b55ebf3d75bebd701": "3a6151979d9171ab453ed36bf4f7d5d5",
".git/objects/c1/c743b2717376341ac84d62b3f972ea943fa48b": "4a1581981e2f28ea86e490fb8a83e02c",
".git/objects/c1/4787bbf69ca0830078d5cb3fa1cd7fa93581b4": "7abe595e0e3ee5c1125e9220ddf4e7b8",
".git/objects/c6/fe56ed4802572d8ee3848fc936a5a26e888994": "7e01fe7fefd59a10ad0d76a2045ef775",
".git/objects/c6/b4e197d384c429f555ca75e17f3b13a426d173": "9933989aa4a5e6c91df8732fb3e6ccc9",
".git/objects/ec/c940f36b25c95bca0c12498c9d9bede9103d01": "0a1edd0349c7d4d9275b367659bf19bd",
".git/objects/ec/7dd26f0377c863a1a09f4688fa941720651eb8": "3d74f016fd262698a9f181b11fdb347c",
".git/objects/ec/0a5ced459ca295fb804fdcb3c2c53e9a93c9d0": "db95be63f1bcd6b60065e4e1de3ef56a",
".git/objects/18/f006513d90868645777a10c6c7b3d3d638f9a5": "c9a9224468ba64e71bae7af19a1018f0",
".git/objects/18/680321898813acd02b04ba564dda0132022003": "964cbfcd7aee179588e25d8290e4dc05",
".git/objects/pack/pack-4536f354ddd33e04992c003aadfddd462352d54e.pack": "0082381dd4cb51608833bbbf16e950e9",
".git/objects/pack/pack-4536f354ddd33e04992c003aadfddd462352d54e.idx": "4e0be5b326ac5b237dba787175de719d",
".git/objects/42/28ac3e5b2685c15d74b2820c9afcfa4e35f8fe": "42c935a95515aee399e5822ce4d6edeb",
".git/objects/89/60aa5b039906db0d3d77a120220a99a49dc653": "b00c70755f802fe5012ea504e4cd2e7f",
".git/objects/45/d40b73d2f6c0acdddc31608280c88570ec5f97": "ee5225177dabb2fe0068b79c73403c34",
".git/objects/45/43c2c85fcce91c352fc2a5e688845bded36193": "5c87a1f58cc3c4410faa37bd5607b77e",
".git/objects/45/e01e6e96179df46b64bcb305e7cce286d14a91": "fbd4a2b5ddc5d48fdc4ebf2d0d4298cc",
".git/objects/45/e8748989a5a7e660b08b5b7c4361393bd86d2d": "797d4f9ffddfd1b319177a8d09557fd2",
".git/objects/1f/794d9080cf73b4bf707fd930e7fdaed16692b5": "468becd5d63fdcc4471329dc96ec8878",
".git/objects/1f/2453cd9a836c26d528ea81edabb9d00a2f56d1": "63ee5fe7310c64e913d764ab9604649c",
".git/objects/73/950a8a9d4e2cc884ba53474bec3ee76e175165": "625b301d2263c31598ca109d2547f13b",
".git/objects/80/48834d10bb9fd1b3b57115bc2bb4b62bc8c8b7": "e729d254cdab04a91c2e9383d359cf93",
".git/objects/80/3ea7deca0ae7bdba5425e8b731d97236588b8e": "329edfb1ff2cba7fe23459e31eebb561",
".git/objects/74/bf1d19629d6c7a303489891f34f17114809ab8": "2fd3599ed09b67a4fdeed267f7f89423",
".git/objects/74/f3e23e606f6562846a49e32e992b03e432ed01": "7d8a8e50022d44b16370339091c369ac",
".git/objects/28/e31c7f55337ab53592449aa2e91adf2be025fe": "b59e6c7e8fc51cdb002124f98f190623",
".git/objects/28/a85ca1b4ea2919687a2a44a439a2b7d349b1d1": "1e6ec1cf799b362a522e538cb1b4e8d7",
".git/objects/28/dd32836f583ca95bf0f34a01c7f8543374af3d": "b91d5c19d9ca3f19e40b143d8f9da942",
".git/objects/28/73fe88b4fdd2e6a6adf7f6b2711376d73076bc": "d30d3ad4c1d9cdc236cd8f02b6389b26",
".git/objects/7b/c76ae04dbf4639e2056161ebebefc8070d1b7c": "0dafcc7151b7a8fdf481ab5e10656415",
".git/objects/8a/a4fa29d3b7dee95077388c412fde1fc768323b": "9a139fc6e21840fe5063dbdc886fdddb",
".git/objects/7e/85a52dd60f453caf388a17c9bd27c525e9dc46": "b1c3a0bb159bd539c586f29aba42384c",
".git/objects/10/d4fe612e45865a9cd83a4a42d3a8dacf945f48": "e4e8583eacef9dfd67a1180b9a223c02",
".git/objects/4d/bafca437bf1e656e3ae65a84d816b32d301afc": "91b5b722df87ae30c0ab666b86910ed7",
".git/objects/4d/dc209fe5e3175478a26541dececf93674a91c9": "9745cca77699acb0a148c620c4a3e9ad",
".git/objects/4d/bbd6355a2e96aaa9b0bbbc8066db9aab1cb318": "bfb6ff7b6f0550ff1c13c35927119bd9",
".git/objects/4d/362eb42a91d4b9f3327b97ce1b3de97374cb84": "7f6d558025aa3c5db64784bd14d22d1e",
".git/objects/75/9006710b59cc4d76ff06bd13e80f3f9bb3885f": "90d56a25b273210989d49fe73c69039b",
".git/objects/81/26e9e3625c99d85bba0aec10c6602ceb1946c0": "d794c3313e61874479575d9b83ca3c2d",
".git/objects/86/3d0780026024373ed84cd9afcb1cdbe9ff8593": "3bbf0ae7d1196952ceba04d8942b1404",
".git/objects/72/a28fc979f97db423b581b87399ff00ddfef726": "e8193629b72984f6c9cf2e1519a2ee84",
".git/objects/44/1085b60db735dc204fbd9cfe2fa29416fb3e38": "33d113c4fc1876273b0857dd463ab2f2",
".git/objects/2a/58f14d3ee1f1643595aa278f1b9c5473167410": "e31450f5279c25e87bb5503913808cdc",
".git/objects/2a/a0e402e2ea6be3deab4eed0c246ba5b37f4da2": "66c5ab74496249e211ab0a6559c05a03",
".git/objects/2f/ac4bf6c7a12a73aa815596ac9d076a86a033ad": "714ce42842662219954a7e31f910e899",
".git/objects/9f/4324a0ffd10ba66bfb17377121ad5753673468": "464796c9bdd86b98e928430650844c7b",
".git/objects/9f/54d0ceb4af44d04fd3ca0aa34d0c0ec12f2f6a": "0c1e21d1a06e092ae25e45f9939f20fc",
".git/objects/9f/aea21f929681d2af86bca760b6ac3db048e1df": "6e95b68adb45cb8b29b02d83365e7b79",
".git/objects/6b/ea890451d9ce0fd41f9c7a0930779eb958dd0f": "fb4dae32018e56b99fc0a3bd1e42fc89",
".git/objects/07/6d7f292a5908e7184ef739ba5615ceb193ff0d": "2beb6e4aa25565cce4c5cceb7f269a25",
".git/objects/00/ff5eab27618627045b0ce8f6c5862619a92972": "720ca2b3d5aa8750e88c5c6875dacf94",
".git/objects/6e/596c2d9caf0ca26c784177d21bf13980156da0": "e2b464a3d84a21e9a5e95d3c7304d698",
".git/objects/5d/7cd525ff1c9cb1970824a11433b40a24643aba": "44e83cfbaa6181361686f01e07b672f1",
".git/objects/5d/675af7cad89de4d9639cc807f1c46bc105d055": "e322c95190cd5d224da9464132164c67",
".git/objects/62/27738dfa826080eae36ee105aa4c2e8bc99161": "b833a2f05a4d76eaeccd23f5180da4b6",
".git/objects/96/95befc43e00ec314560131376773877169e692": "af411c2af73117a697cf8f41a4508f49",
".git/objects/54/144bf53e3fd10a6d08047ca4df50cc215900ca": "e27e54a4fd739f94637f5154a5b2a33d",
".git/objects/53/e359a4516c0629ce8f8c4960f8900b25b25616": "1ded113cf0fda708a8dc77697732b028",
".git/objects/53/4c59da2681b36789709bd392c1ca07ff7ee479": "5c1cc879f876daa5a8f382ac1f69fb10",
".git/objects/3f/414e6135118f0716df57e30d1a5cf395ffaf4d": "40906dc49a481eee70b2746113ccc5f7",
".git/objects/3f/2714f16895fd717199c8cea33b3116d03c1542": "3d825be435924e24bb8cc179063c76d2",
".git/objects/30/295ff9a6fbe9607387fb87faf6ef0bc4ea4e63": "5d26253d1cd1f52c300a347f10c40b14",
".git/objects/30/f7f494a4b4bc82124a22cf7760576dd5b2e2f2": "d7381dd2a7676de7ae573eed30c148a7",
".git/objects/37/cba5ea05e07dac920efc1162735e4d93ebed85": "f7cb378a5f27c3c417bc74aef2aac6b6",
".git/objects/6d/944167d64b30861306534201cd13262e46dc4a": "f264878818a961d1ad506c990b84bd06",
".git/objects/6d/1377dc577914be8679f908a743a40f381e0823": "a3955d0e7bca306c96ed2f1720198e64",
".git/objects/01/5b29abaab79ed6ae3e0523788b4402222e1a2c": "9cc4d8ebdd08bbe5c828ba4647479df4",
".git/objects/6c/ecd6bcdee82ba3927d1a959b7634c7e20f6d06": "58ab8aa219e96d01c21f6cf9565ce522",
".git/objects/39/949c53ce609f6056115ca7e52184eb832348c9": "8f6dd0ed807b3ece0aeb7ed09629a2d7",
".git/objects/39/7e37600480173f1d36bb194863a32ed2859adc": "ff171683b0638977a1b2373654b505bd",
".git/objects/99/7ba94f8afe42dedbffc729a7948d2ed55628f9": "1d971fc6374c9653afee707af9c714b8",
".git/objects/52/164781e83719b7adace1d6565e5f25c193fa42": "5c29fc5b8b445486b602028423de7538",
".git/objects/63/3089dcf3045ece9228a23e7c07052ed3c5270e": "487208cfd3824b389e4d8f2860ebd4ae",
".git/objects/d3/11dab708e4348cd2221dbf128b31048c736d8f": "27c9bbc916ae552e38ec4c5f58dd62a3",
".git/objects/d4/6fe43ef374499257e592b175a29622d1af8040": "d51e91883c2c272925bab2d5d621c6bf",
".git/objects/a0/be8faef01b7db004e65cf10dca22e782162e2e": "f84cb57051e9c88868cdaa01e9aa5650",
".git/objects/b8/21d4f9c291b765b714936d14afeca98c24bb40": "d609a6dedc2b6fd62ff157f9a4ae567d",
".git/objects/b1/cbe10f712ac26fd83dac49c8a4ac12f74043a7": "0b4c702ad37127a2d48ca5f2a963d011",
".git/objects/b6/f952174d18a38d1060ebf648ab33923d7113fe": "d74e5ee0775e0f21adf8b3061a991d74",
".git/objects/a9/274c3f1ac8e92cc5fec2ce0fb95d54db7599f4": "af181b2a337ce4f4bb55cc0ca2bf7de4",
".git/objects/a9/7efd4061dab5b32559610311b2b08fd2401c61": "dda79c9f83221769c9f21544cf438ac7",
".git/objects/d5/554704fb20c7df5f0ff0cd27f907333cb304e2": "2f5fb471cfe1d1a092b023a1ca583ad6",
".git/objects/d5/d9fccaf993b95b013b94be4d55050d2084184e": "18604b23ea6b240915a2e2fd39e06e4a",
".git/objects/d2/5a46a55af7f0819eebf74d61f1b55ffed6e7ca": "234f20ed6ef63d6afbc461303a1cc481",
".git/objects/aa/634114978a7049f2e19fe0e7aca516945559aa": "7879fe21c64869a2100918b10ff4f3ec",
".git/objects/aa/5bf19ef1619a9cd9d3ee813c933bc81d0010ae": "1d0d1e4a5caedfc45eda0e983d0ff26e",
".git/objects/c3/6d117dc2837b37090e8571488b4b9498e363ff": "8adddc7e73ec1a4bd5b179eabe54b728",
".git/objects/c3/f2406d5892dc90edb6eccd47d029b38a541b2d": "435bf29ad46b8f98267282e6963217f3",
".git/objects/c4/486d96dfa21a71c26da6e1e039f7eacdacf729": "05dbeb199c2d3ec45a8733a8cf2e8354",
".git/objects/ea/8e5c3feb4600fbd66b8e3b49d6672398b86ac9": "675c004391f38d86f0a3b1e415ec435c",
".git/objects/cd/2eab7eb9a66df4f20da89c893504f186713456": "b7db6ce290ead908819d3a3552f15ffb",
".git/objects/cd/1a92f5e7b731212d7233769db17c6533d4081c": "a6316b87d95b1426f877e9e74a866be7",
".git/objects/cc/01c378e5d74718866164e6189f70d53aebe09a": "6ed32d6e3bf7159b13143920b3cb7b4a",
".git/objects/f0/f3095f6bc284b36eb0379dc78b830ae01877aa": "8c54d9eeb4ee52c4a2c0ffe15219c860",
".git/objects/f0/ec71eb67849e750c36c763b005490f2c7a8f00": "49c318f4b4abd1fbd737f7609e12145e",
".git/objects/fa/e0909d6a8570ce312b64e9bd8b64f722f37b56": "cfae29eaaa7db24e8e8eb2427bb09023",
".git/objects/c5/095cdf0304bae225ad4d21f6d32c7f5842b93f": "2c467ebb2e193e8176a3bfd37d98b470",
".git/objects/c5/7bbb7d6b87e3620fe7f53a3c1507c46a90b956": "a47365d4290a1333b148808f3f583d32",
".git/objects/c2/bd0e2a4fe33b3e3c7876a9542dddd359e7dc2f": "cdc8a67db515b7c8c31e5ec1765c8acf",
".git/objects/c2/00e57c4eb0fa1722f8bf6f729fdb45432dbfba": "f3422c654e929489cd9cb9a9f30b380c",
".git/objects/c2/23ae38df69ad9454904d41d70dfbdb0aacd8d4": "7336495f32396136eea9f5bbda7e82ca",
".git/objects/46/a8b87763e18cc6a64c32bc1c42bdf8d951392d": "0f2d98462680b1a8a4686d8ebcd664f0",
".git/objects/79/69613676a6234c27b45dc65b318e58752e4a73": "a3619481611cf2165e42547162cb159e",
".git/objects/2d/e0e523dda749b7b5cbf7e07ce2e7a895b131c4": "f32409110a5916aa2e7798b48f4b79ca",
".git/objects/41/00d7701b48c6e2c778ad3a6c4488f4f2d61e18": "2f3530864443df2a8e2b868e09bc22a8",
".git/objects/77/021c8c234f70e58afd917fbf31a01ae2ccfff4": "d0871bc9a433188e0d6529f4487e35c3",
".git/objects/1e/b09e0b2c9d103600ba01481d153d280d1a8cc2": "4cdd36235f058c79aa99c242f20e8ad2",
".git/objects/84/197d14e8a6fc4ee1cd38d36aa923ed7f15d99a": "a2aa8e28d8a125c818261ac81ac7328f",
".git/objects/84/347a0a6024ef6d2701b067a594723e38a1f7a6": "7e9cdceccd2fb2ebdee4e60133ae6d62",
".git/objects/4a/77aa6c2d53e78bb3ef4d4335273ea24fe41f15": "fdc2f21422dbdf99f15b863895ebcf2c",
".git/objects/23/b266ccb0c7f6e826d74fe53b52ef6d9f0f4fa5": "98da550e55c3ac715159f1ff818a5de8",
".git/objects/4f/0e09dfef3f7f73ff2faf3db62b3c8670d6efbf": "3e1777f206252aca801945809b1e67ca",
".git/objects/4f/90ebc99ab6426a8afae5b001d063e43cca585d": "fab21bfaf0dbf58b082ecb0907981b1b",
".git/objects/8d/84ef43b6fa97fcca205381f8cdaa0451d93b1d": "ea6a61902fa31b90ff976326d35d1ff6",
".git/objects/12/5c6690e1c7a88e66672395637e5ee61d9290e1": "5cd322c73e6953f1d82c6f9211127a24",
".git/objects/71/2e0e79d02c67b51b1dfd14a7c198be28a84047": "760b41f73c24084cc30ff46d56874943",
".git/objects/40/41aba6d63793813299753597ce37c38119e3f0": "8e78e5385010488d027c484e4993c6fa",
".git/objects/40/5448e24b02b8ca8993fa2e34dcf7459240f2a2": "9d997e2f0cab89fbbcce499054f0f04c",
".git/objects/2e/6d148e9120076e0f86aea1d5d76bc73620e1d9": "e6df66d22e346e1f592734518e5c216f",
".git/objects/13/cf7b076ab66f2a35d2dcd58285520d1c49ec05": "2d9fc2083e2693c6452b25e5ccef623e",
".git/objects/13/855199133a7adef984ea2ebf39e9d63551090f": "c9b35716d275a7a116848f72b45ee89c",
".git/objects/7f/3e9d9fa74658ff81b8414d258d5780405a8daf": "b57f69d360345aa2f7685fddfe443156",
".git/objects/7a/6bd7a44ef5f17bd420322e7a7946ee4f8bb036": "b63a18dfa8a0c8ec3d5f8dee6da25c49",
".git/objects/8e/fcf07cf1fc5f498fd2581bdb483d4d355e43b5": "7780c1c504c2d4cb13cfe512cece82ed",
".git/objects/8e/cf4d71073c80fb167137c73639ab4d856b2782": "10959fd7175c16b04db9072154b3b40f",
".git/objects/8e/a1a896f418a58832dedc1e9427e9d975bb7d8f": "e38ce2af7a2f90f1d37fad20bc26dbdf",
".git/objects/22/d914c7099fe574757409aafd4b55a8e0221a71": "dd793c2ed6f0a221e66fcadf37cb3ec4",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f015a7e1cc62597a19c28daeab1792f2",
".git/logs/refs/heads/master": "f015a7e1cc62597a19c28daeab1792f2",
".git/logs/refs/remotes/origin/HEAD": "e53380711dbf22f9e46b38f9d68fb03f",
".git/logs/refs/remotes/origin/master": "4e8e6cbf8eef89c85d1d8c249aa96f40",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "a928c29c94ee735c698942285d3e2705",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a928c29c94ee735c698942285d3e2705",
".git/index": "be5c1f501e1b9a887263e1060f28a5d6",
".git/packed-refs": "5935d10f1590bd6b9ea1353e346ce0c4",
".git/COMMIT_EDITMSG": "7de093f9e7e181fd44a2e4ddadacdc01",
"assets/AssetManifest.json": "d125124b51370bc565fa9b55d36a77a3",
"assets/NOTICES": "bfc15388803d1fa51420127c016b026e",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/GCFD_Logo.png": "c6d8aaab6dc03cd052b4de51848bae80",
"assets/assets/images/gcfdIcon.png": "34264cc903e1e50d051e3bf1f2c92292",
"assets/assets/images/beer.png": "34264cc903e1e50d051e3bf1f2c92292",
"assets/assets/images/GCFD_Logo_vertical.png": "4b58e364c5a787f057b7aade43a128be",
"assets/assets/images/vertical-logo.png": "e186bd98b44505a9c9500d77607d07ce",
"assets/assets/images/gcfdIcon2.png": "3b9ad480c71e5e97d450070444eb8730",
"assets/assets/images/OLD_GCFD_Logo.png": "668700bd8ff69a747b51c49acaf61f26",
"assets/assets/images/OLD_GCFD_Logo.jpg": "5bb2381c1612dd76e0e77ef1047f8990",
"assets/assets/images/location.jpg": "3616d2888fe269351cb1a621596a3501",
"assets/assets/images/CMRI_sign.png": "e0518cd67be0caf343f8c2250a851687",
"assets/assets/images/OLD_CMRI_top.png": "31d09736af4df23365908f17025f9b6f",
"assets/assets/images/footer-logo.png": "a54482a62d0a07dc114fd057d12034f2",
"assets/assets/images/CMRI_top.png": "3289223de011a20f25440e2addb39d65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
