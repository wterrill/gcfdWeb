'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "63aaaa5fc1bfefb67446070a68e81d2b",
"/": "63aaaa5fc1bfefb67446070a68e81d2b",
"CNAME": "699c3454088d9e1c40f42abf13f45644",
"main.dart.js": "92dc9fc2f16c09d19bb52b6cd23006a5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7446118402704050fa5925804992cbe",
".git/config": "3e0edab6840444cad340aa5463bf3d19",
".git/objects/61/caf9f40cca18833e5e708dacb89e99f8eb2653": "52d47ecf6894cdc1b6bb6da61eeae366",
".git/objects/0d/d012c1339f35d2ada3c960bae8aedccb83d920": "88e746c8ada6906ac55ddc8026f161c7",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/95/6be897cc4e2cdaac2ec5d039832e52bdb47495": "62143b906d1d10931ccfffbe0e49bec2",
".git/objects/92/3f76d127f517b920e00406e45e3b6509dab777": "c9de69b7edc80d865ce1f3cd88de046e",
".git/objects/92/3cc036800f11fbbd118c7e80bb6b539ff00048": "4880a82d3e9fb600ec14863202c114b4",
".git/objects/0c/b05b74a05b2cadff5be0816dc6d8819a947594": "8d95df3b3a3a73adf6fbbd306700148d",
".git/objects/66/82fb3e57070e039fb8c4cd8240ac832ae33c8c": "83b683c2f8c6958a92e106640c58cda7",
".git/objects/66/a9f4cd9be9232ce184f75051026c73c9dd9511": "9ade47c0c353e5455b254881bd5b674c",
".git/objects/66/fea1245cdba8ca897e1ca8cc0cd377a5dd3a67": "ed2e30487f6d5186478fe8d995f510a4",
".git/objects/68/f72a86eb36c653cc77ddac701be96e22dfd592": "7299a327c966fc4c79dde3a68fb026c5",
".git/objects/68/42361f0cec0449a1b471dc2980cdeb7142c27c": "b13b9235080907548f14b61af68c28d9",
".git/objects/57/cbd2ff55c0ef07a4ebdfb21670b0890d07b397": "cc9404dd778e532a163f011d0868ac85",
".git/objects/6f/bc70e16f67fb2772c2b54fe5333e3595bad2ca": "95bb92f572a1d23656d76faec99bdef9",
".git/objects/03/91156bb4e33cfab898e90f7a35173b0e38c434": "cedec9f580d7ac2c0ca3bf3ddbac83e0",
".git/objects/32/bb7a2f760b2724e428949bdad189e39d3d391c": "0a6090e0cf7ca14776939fd93b5dc1d3",
".git/objects/32/6e4a6d1d1ccf5c519038cb798203268bbb8d03": "3970cb15659af5c770a9744ee3018d20",
".git/objects/32/d11f5a0405aaf046d7ec5540fa18edafb4aaad": "e7597058fb625790ce94afb1185da9ee",
".git/objects/32/a58340459759b11a68336adeaef3546a608d2e": "3750588d7085b8e2fbbd2fa8dc8dfada",
".git/objects/3c/8b7a552dd3de61bd55d81749dec48c982030c4": "66cef451b1c7d12a7ba506e37b593ab2",
".git/objects/3d/45316df4fe16176d42b3811f93b201a61bdc1a": "934fe7a973e66d23350da9f760eeca6e",
".git/objects/3d/3dbb63775cc8148606afcf865a71c66aabd66e": "38c92ad3b0dbdee36f2583508ff7bdf8",
".git/objects/3d/b2da8a6d06a3a7d6156ff4890e974a92712891": "b26fbbbac75e55f35005e4f978aa4c1c",
".git/objects/67/106b8133c93a93ce2371d26532ab69221cc4a3": "0c418c4d1fb691347e81c62dc293b732",
".git/objects/67/bfdfec7ddf128ddf59c919fe560db5d1ddd1ce": "e6845e48e90e13d6abea3d9394ea292e",
".git/objects/0b/2e9c06fa1442a76c0332636c8627eff7fd6fac": "e0a55685ae58d241eb2cc010b638e8f9",
".git/objects/94/08c9abddec2cbcbabe1844294e3e6058e6c8ab": "335e5646f0a6738aad8f98afc90c03a8",
".git/objects/0e/97d925694ac9460d3df1899168c1d3e9afba1f": "a275cc3662c8cdedbf79a84d8c2a2f42",
".git/objects/0e/e022a34dfc6324c693c07ef2307bc7802d9701": "855f6af2569529aab59a3da6e43eb0e4",
".git/objects/34/7ae0baa934832873f671495ef5cc7ee1535c84": "292218cf4346f0c159dd98ba6e0f449e",
".git/objects/34/109f2074f318e285734b3634bb871513fdcd44": "fe06bfa8b46435e90571870ec626d8ea",
".git/objects/5f/e1ef00c5f65c03e49d0191773faa7ec201864e": "30df1e5443d1252766a3a92b6b9fedfc",
".git/objects/5f/269c3124160d872b8c06cfd53041ba1af7fe41": "8f1dc32ae80454894584b5e8b6da8ad1",
".git/objects/5f/7a9478eeab74240cbc6922585005c7c55fb665": "f4a0f6847e3e05b0f0220cedc5134542",
".git/objects/33/624201145788263e87fd6108de6b11e2250dd7": "76ea04d016cedd690c813a479a6ca124",
".git/objects/33/2b346506d6adb02d8461ebaa280471576a9b1f": "92d6b7b5e6859155852e0dee9b9bbc67",
".git/objects/05/d4981e97c7ec14c67b4a2403e4bb3d541aeacf": "ee0f2a63b90c7dbc9b836b00d79aafcb",
".git/objects/02/9fb98a0d06a4ede03b742c9d65e6e02b399ecd": "274bb1b1136eb78d1ba8b238b734c753",
".git/objects/a3/0bb87ade0caedae6b4b6c2ea97273ece9e333a": "dc52d89f9eae8ffcd0ecb1ce3c7837e5",
".git/objects/d9/840cc3f3ed5dc58abe4dbf2040cac13816e86a": "a1996527383defcdfd35c537d5cdee18",
".git/objects/d7/3d0937b833bdb953180d65ffc1add6146f9380": "21640f8fc90a01878abd8225f238fd8e",
".git/objects/d0/53e6583ca074213bf705fa1c3f7d6e1b71eae5": "b32976276fe7bbc763d5b7d785241fd2",
".git/objects/df/4c473441808a82052dab42cb2dba10353ac55e": "913d048e58a7ad01046d7d060770da90",
".git/objects/da/9cfc59128d68c450cab0684259a907d999da54": "9071711a26fbeb78b96a6cf23277a139",
".git/objects/da/522bbe5d06923e8970f06e2dd92808d2ad34ee": "6d90f68ab9daba03fe9b12361c89912f",
".git/objects/a2/0dd5458ec107b9eeee5371a7399b42d34c855d": "9043d852d90859cbca68c7527e1e65ff",
".git/objects/a2/c356dccea85e3ff875e7161ac67b96664c18bb": "632c454f470805f9583971be284851c6",
".git/objects/d1/494b7a90b9b9bfdbb5ab2be307ba6d8cbfb6cb": "d93c1fd37ff1bbdcbc66cb875ad0ba2c",
".git/objects/d6/436cb9075679846b68bf89984e6c0dba04116b": "d31a199480b8976ce179b66d65c6463a",
".git/objects/bc/c8e69f30bae11d0aeff2b4290d781368a43107": "cf0224f4c4e8b0dd97b6466481432db4",
".git/objects/e5/0b84e7b751e28f1d403cce0a46cd97bdff225c": "5d4c19ae24dd3688cc846434a739ffdd",
".git/objects/e2/b33c2056cfd2c91a7dac85a279aaee31c24e92": "d65ddc7c61600743bd4c0fa810809890",
".git/objects/e2/aeb1eac2c7813b5875ac014bef3497cdd515c3": "995dd6f9a058fdbf1c9d8b2671a461d5",
".git/objects/f4/b8192de39aa9de65c874dffd826145eb413aba": "979b725df4d180fb4b76e73ab9817dcf",
".git/objects/f3/682094821952e62687598f5529209c58cee781": "99f2f5242c10eb2190ffb9a9a6d6df76",
".git/objects/c7/7de6593ba35442857a4ed44dd537ec8c629b38": "ae089731ca23983705941736d07324b3",
".git/objects/c7/9530e6c09b3f88ae804a635102d6c41ab464d1": "495a9498d2df73b9b559374eb24e6339",
".git/objects/c7/c4db1b3cd982e9a02a7d44e1e9aaca0d5fb257": "067f215cae13cdc06dcfb57d803d587f",
".git/objects/c7/6aa679ed8d625c8f3a50cd95201da180e53cdc": "e0fdad8c08022dc2350f9ec1cc76af2b",
".git/objects/c0/e1274f8db1167cd970788ac13c9b46112cd229": "16311601acb9a5a6176015ebf7e2cece",
".git/objects/ee/fab62c2a8861e79e18672a5dab0c89341f34cd": "b75bdb0135820e7c58d61f56300fe5fb",
".git/objects/c9/d03c0d05d612a9a212248c49caacb567494feb": "50aa11e598e996852974890d1cfc20ee",
".git/objects/fc/b0facd033f3adfaea8fd1821d9da23d04cf4d7": "051352766f05b44748967e27d18e3975",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/66afd52d6b61b4c9dda9206910dc1fa1d929d9": "4746cc11899ce3d58e54cca38b8860b5",
".git/objects/fc/6be0b4a576158a08fc39435714e44cfedb4be7": "458ab2a2bf85f313c0e446f10c9755a1",
".git/objects/fd/f689f230897980ce0e72885d19245b8dd6ea55": "f456b5efd7cf6b4bc33047cd598f1c9b",
".git/objects/f2/6cceff4fd82be205f80abf624adf7d1941bdf9": "da2bd02d5571e571e88d0577e6c0faf4",
".git/objects/e3/e54da604a17dcd8c155b078115b7f300817476": "147da2da7b47bc5267cf728341011484",
".git/objects/e3/dea532732f8a76204bce37b45eac14275e87bd": "f9ac882fcebcf0a8f22851dabd1aa4f1",
".git/objects/cf/743ef5f16c8a0c18e6306235446a7dd2cd62a7": "f4178ae64386fc0d8cd8047d438e8b48",
".git/objects/ca/505a7f15658c9313ccc19d4294341d586a4595": "5f6e3925e4ad0507c60638fe4d004610",
".git/objects/e4/af7ef4975697e27f9495432171d202d4b8a97f": "7581bb279fa35b72b5b950c2b4fbe89d",
".git/objects/fe/395dc0c3b312b53f656cda4a34671cb9739120": "81c6e688b4e01e7564d1a2ca5f47139f",
".git/objects/fb/1c141d7423d810d2a8e2acf7b275611880e0ae": "9afa5073922c4167017da7fe6e65c7f3",
".git/objects/fb/ca496cdc150074d6b5fd6b9d184d0715f2a94e": "3511d5ae9452ed73ebee9d8669c3614a",
".git/objects/fb/3f93b35d66524d10e144cea657d01f1b23f839": "95d88e291546923c1681f830c72f30cc",
".git/objects/c1/cb7695dec655cb35a2617143c4bf9fe1fd9b81": "91fc4042428d4f79fe4da1f4d97b3a72",
".git/objects/c1/bf6a2d047230f7483204f0d55d7f127ff77120": "b94d62785687224a3c686b4e911ef826",
".git/objects/c6/82e6a981a037f36984e80447f82b0cf88698c0": "28f5dda456d3cd86c53273e48a2a57b3",
".git/objects/c6/6f6e417cd42d6e07037eb6806670ebcb653690": "ba036d26c9465538dddcc66796dbb3fb",
".git/objects/4e/94b0a5d8551239fc23076ede176bd53ccc65a4": "6c73df7507b0563fdb20e217da718290",
".git/objects/20/a3c80146618001a4e3c538ad19871857fc9146": "901675117aaa09356a56240ac1fb6081",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/e1da24cd3599c71af387b204508388a7cdc6c9": "f97b95d5c6ce539a662cee593a109d70",
".git/objects/27/d3e71456dbe4f262110d2a57d4d778cc7db048": "d0fcd03e1cab17c7313ca529a1dc8aad",
".git/objects/11/9f7c38a5c0fd44009c7fb9c8aa45523f19288b": "f6d01d3e005d63be150c799a4692e485",
".git/objects/11/491cf0b19fad701417f3cc31e46f9c7f6b9fa0": "906b5ab925ec7412aca462aa2183c456",
".git/objects/7d/f3a3867bb3a2c150c098d4252995c98237b17f": "84302b06b6d4640b1f945f4cae604c0d",
".git/objects/29/77fcb841c2de4eb8c6f33fd1175569c3b374a0": "fa6ba2dd27edb9ae45cf59d0b8d9b210",
".git/objects/7c/7330f4ef512ce41c4d06973c51c1a8be0e62fb": "bf6e19cad6120f2a4a63f8ea1946a054",
".git/objects/42/78986241e09efda449d3c82d427336d44dfc4a": "53ab873ec2dba6a4af3318e495834cfb",
".git/objects/42/f0209b23805c48be9ea82e449baafd9a282d47": "0856a2f626a1bd564d7c2ca45644e0b3",
".git/objects/45/740f1ceff2879ba5145bdd2ff63bc83111b13c": "e17b983e695b3b03964a7a3d7c94f525",
".git/objects/45/060725caff1ea9719bbcbbcae21a1f6a38d0fd": "2c21e0a68f54477d78fe61687ad082e4",
".git/objects/1f/87a4d01fe739f2e1e75d0eb23113d538f41126": "58f6f96d3fc90e5cd35f255e8faff5fe",
".git/objects/87/072f28fe4ee6bb50dd39897a498d596f553586": "4ae011edd7edf3c9094443409230d0bc",
".git/objects/80/735800cbf2754f2af93a11e55256691e8636c0": "7f63fa5df72438ad1add9ffce7c6fb1e",
".git/objects/80/6b62be66bf74f303641594357bcb3a8c9d96b2": "1c8a158795b211107ec58dc535df0b60",
".git/objects/1a/c8aed88985bb5a4d551db09781bd2bb2b294c2": "597e33a72cdfc97a672b1f9f8b302734",
".git/objects/7b/a832aa367a63086f485977c1bfd98bd2169eab": "df70898c1336bbce2e473b0ad0ada42a",
".git/objects/8f/88f5f39aec759e3f388d13eedee06b3c014537": "31a549a1c7272b2197537369bc0b2d4b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/95880680ba1c9a191273bcf4e86b156a8a0b0b": "4d1c13fb6e1cb1ee423f4542492b8c5b",
".git/objects/21/b3f9928336a99cdc6d0afe9fddd4ee53680d5c": "132d3310eb42868c61d42dbf64ce48d4",
".git/objects/81/5c9a1dba18bc8101ca37b501718b9a63beb792": "7dcbd2cdde32640aa4b78b3e7210af6f",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/b3c1797554d6b86b1a09a5e0b02e9903d0584d": "a94bccf3a62ae4df2e52900d9d05fbe4",
".git/objects/2a/15691909e6345408121fc0049dbcbeed9ff919": "3cb72b4c7e02b4f56e93d0cdf0176cbd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/29b48e0ac8f330eb717064c745fa220e1a6618": "fd5202072972e17adba4ffa107559a24",
".git/objects/6e/dced5959c782bc97e65a9379702e370c924715": "d414d5b010d40122b20773b530e52388",
".git/objects/9a/398a6678ded315f80d13437b806bd1bfc188ee": "a7244e0afc0834627df788ed06d748a3",
".git/objects/9a/d49adbb900afc350aee3fea38442b2b42c6a99": "3e2a6cc36a21d1f4e7a0fd6ea2a44508",
".git/objects/36/3765cfbbb7a9e1794611be1944e953963ac70e": "00ee7f21ec9d7eae1b4a61701d9b71aa",
".git/objects/5c/035c315122a364626728e308d330843f3caf0e": "a17cd98db782129449badc18741425e4",
".git/objects/09/9b2446f952e7b9f60ade0dd32cb6044ec70730": "1c4e532cc07b8c80573883dcd2c98f9a",
".git/objects/5d/b5a3375864f0d876122d9ab4064963e7eef4bd": "de6e11b1ea82a7d454b4be10aa20f0e5",
".git/objects/91/00340f2b2da9afd5dec2b776cf62783b552ea9": "48e2458ebc1f5694a86cb0d602e117ec",
".git/objects/65/2aea8043b8c5e71405657fe1a141ee454b8fc5": "25e45f9b6c5370e3a2f1dea6b9f6a4b2",
".git/objects/65/3d61298f558053425507b22d81ee639dff3a92": "620ce0a4733a3bb384151c3c872ae3ff",
".git/objects/65/e1185f114131bb6ee09997c2f211013fdbfdfe": "41eea1015878b4be5054bf6396b4ff6a",
".git/objects/62/94ae69373a3a99ea934681e875ad9911ee5cda": "90185f6c1bb3761cb43a0811340c648a",
".git/objects/3a/9b9322a1db6335ecca7e55eb96a6c3f4428af7": "826922f4172e0613930dfada2533678d",
".git/objects/3a/734600b336067019eef2d46a0ea8955e853ff7": "4160371302645288a7ddd10bf138cb19",
".git/objects/3a/a73a3a75b0dc3fe156f6e9561bc380e7d5d8bb": "d571b9b44e728f57b60dda49f81553df",
".git/objects/98/9f80fda893c4c40eede0ff8279cfc139663ab4": "e6c7894058ea3d7bea44d93899d567ce",
".git/objects/98/575cc6acff4826ef74fe38d1910df7b7f3ea36": "29067428a7a0d8b58aa43e6f12094624",
".git/objects/53/78cde2f12bf425ebe7e3d7f4bf41d48b224e8d": "2b42c1e5a2f0a8c0e916a2ac9aabd082",
".git/objects/3f/b41f018fd8905f99feb8e13ce169b1c66b5951": "13efd0498e524260d644bf5bc05aebc6",
".git/objects/5e/5760ed57e1d4273bbea1ad5f650b58e345e1fd": "482c502e7444861af1dcef2d48376051",
".git/objects/37/9d8adb1bcdae648cc97545bd4a04d2cce07223": "afb82aa6d0ac844d51ec221a2755d2da",
".git/objects/37/3e575377f3a9e717edd6f787113e441a036a34": "73f8e2576c425e8dfe5f5d4f63a560a9",
".git/objects/37/70656ff3ef2ed987ad20e46b8cfeb3d811011e": "6aac0be3cdeac154245d359682eaec0c",
".git/objects/08/760b990f9f308d94260647bcd90d3252dc30e9": "50045118cafbd94ccd4c42b5167e3db7",
".git/objects/01/997857351c18c2ed27c25093360f67ce4adc7b": "1c80defcea6bdb184f1371655ad2a2c2",
".git/objects/6c/fe3fa04c89406a027ebe2549e64f89fcdd2755": "e738edcc0c92502dda934472387f4e4b",
".git/objects/39/be9e4e16fa53de2887ef58630bc924241b373a": "55c1b0a483aac4f007976d4dd751badb",
".git/objects/39/b0b3000cb08bb2916ad69276784e83ca596f80": "86943d81200187077f7fd69e3dd45de8",
".git/objects/99/14cdec1b6276bbb7c4a5f7e93debb70e435f0d": "fbe7f55a8e16f6f3ae23ef2eb06cf006",
".git/objects/99/d184e8f68011dbea3f67155f47eaca92318d97": "08d116e1c44937251492626b17811695",
".git/objects/52/e45240a536f88358102b6de98bd2e57135b2f7": "ab5a4d4c9c18aac649646879b9169f4e",
".git/objects/52/5afd57caab21be3ec958c36caa915c60a599b0": "5819f73d41098a0705774b27c95fea5c",
".git/objects/52/662b34a6a1ccecf74d39aa734bf863a91f4c19": "f841be20bbdb283e67cae011ae356dbf",
".git/objects/55/b2b33437353cbb5a77cacf1f3da35830c5093c": "6a0a9d3d293604a0dcdf5bf7b5c72225",
".git/objects/55/c578bc9d81781b9a5b68bfa79eebf69a070f56": "41b89402df67732282b089ed89dfb5d8",
".git/objects/55/2e4fcb147594164a98e5a8948b69d03ba6d83e": "a135c8bdfd61a1be2b2dc45419c51e10",
".git/objects/63/6386ba5efd31f63e08535e59b09c169a537745": "796090fd3b8264391047c44518ef3851",
".git/objects/0f/50a79a550a69ce87a48e791b4d1066618cde38": "c4dad305c346a8a684e9e4b5e4e071ed",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0a/c1e652ce097a5f1a94f284353f21d5842701cd": "519ba33b275ae407c9fddc6fd623cc4e",
".git/objects/64/48493cfa49ead595e44448c28ee3d1511a0419": "de67cbd4b9f70bfd1c79cae57caa84f2",
".git/objects/90/d4433fd0cae142548039992f3cb2a1916c57d0": "39a6ac762fb5d8931e405991b634a1ad",
".git/objects/bf/ba7558cfe3f651ecf13ac383e51fec0f0708d7": "63ceb7f7a5d642c07bd2a0526d8793db",
".git/objects/bf/d9637c487d4c6da824625abbc850eb45160491": "4a5342232ed565b28f423e30e9a6d48a",
".git/objects/ba/b66f61437771168157a57799016a00f58b5b85": "19edb933ffead35499e632804a805234",
".git/objects/ba/40c0b0f66f57ecf338d2322a60ffa70de606b5": "e906347909463601614c8fb79348359a",
".git/objects/a0/3aca6f830a3fa32dce63eb9dca3ada45961eba": "cad339eba74f91427f33c02fe0ebbe56",
".git/objects/a7/76687a2aa068b80e9b24f44c38bcdfd6556671": "8c0eb115446a7c100d5a7a789c6ded97",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/dd/447290c66fb140b7c5ff05c7ff7f00480c7adb": "79852fbf94dc7d3d0a86743e9af61219",
".git/objects/a9/38fdc71ea81cf4d4134210433cb0d97791a776": "d1042a810dd0d5657609d2b11de48f83",
".git/objects/a9/9f4c3f5682dfe90b4a15e3e7cab00a34c176b1": "260630a7930cf9ca9382f0f19574ff29",
".git/objects/d5/bdff2c5551999be82bb94fb99e5328fdad2a1c": "df66be86d3286124598736a8e87dead1",
".git/objects/d2/41de38a6a2e19e3b2505198eef0c9b58ccdb8c": "9e272e2411d798705712a66a6f421266",
".git/objects/aa/16d1c9bfa467dc1cde5c6593c0e45f26e19677": "7ea57e2514d18dee0fe90f2a72eb1047",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/66ab5edb6f5bf58ef71ab0e5e0a2ead88b81b1": "09b6d5e1bf989d0162b2874c07773430",
".git/objects/b7/9b17583dbe1f4f2c5fc3b198fe2f905f0d2d44": "f68d70848cbad602b2a7a138403cda0a",
".git/objects/b0/d204428cb56f405f40dc6c15a28f160ab9504c": "9266ba564fc0d84d763c319a420f3075",
".git/objects/a1/79627cdd586e74cd2ded2a1a2019439d24ec93": "c9169fa188b249bc16a691408d4ae7c0",
".git/objects/ef/e0060caa9acd24f3fa6998ee2f6c4fd32773c1": "350d1e9887e78f75438eaeb8088513cd",
".git/objects/c4/0f78bf902b41cf24aa04afaff1b01e54c51da4": "fb26dab9b4fcda0b0277193245412b20",
".git/objects/e1/d8a71c9cfbec2b5fd514a750553f7cfc2f1ad2": "cfe9a36d3720d2c8d9805a19484b3b79",
".git/objects/e1/174a13e53bd2ebb30bfbb538e90af7de88c0eb": "f9f46849a9afdebcb831bc1df42e389d",
".git/objects/cc/6d947532b5acef08bcdbad81cb729db3a8d4c2": "5a3b5e3ac988297be52f59bf67324680",
".git/objects/e6/9e5f72032fa8f931944b953126f44d2541dfe6": "d0f9d3fe0a492cf80f9cb9f3989c4f9a",
".git/objects/e6/452663ce51e2a15e661d4a75c139ad25663e5c": "3c4b8f52c7b7a6dfba4f9369f730d216",
".git/objects/f7/4b4250f703a6f900c719398de7fa2652ae28ea": "0678860ede7aabe00b00603aa999d18a",
".git/objects/f7/4d838ffc942332052c4915b80bb14abfeaa089": "f2031f7d7c8af538a25a294d8868c3ac",
".git/objects/fa/16dfdb4e32221ee50b44582c0ebb9dfe9da2b7": "afcbe697392c375e3cbf5f2078b528ec",
".git/objects/fa/80f5b3941b4c58783ba0f0b1f1fb5a9651fd47": "be6f8acf84a2ac88fde3e93ec82d695c",
".git/objects/e9/730e3157a95651f82a2f4f9c10c6575375730a": "4c9633882c408e59bcbde58c2a5ac8d4",
".git/objects/f1/a9b4f1d984a1709340bb0b91b2e63f34358153": "12d6abd16f575b3373aee8e8c6b499d2",
".git/objects/f1/dd7a831686944f3468e741cc4bac6135fa28d6": "8c3b3db8c33f973a2d3048a924be497d",
".git/objects/e7/e70d6beaca6eb6022fd68a97d5f7b6d0a5fdf0": "723df743a657381e44b4b5952d34aa78",
".git/objects/e7/fb18f7fc2bb0c368005e0fee0fb88cbb3e5c03": "fc3d5d154f42d8ecc733df420939842d",
".git/objects/f8/d5264483ae9abf08dadb539a4f04969c30f291": "e2e49b46663848e2099cfb04cd46441e",
".git/objects/ce/3e8fd2e1a63fce0aad756be5a6c3f3ea619350": "29568b683425e8fc7f4c522fdddb53b6",
".git/objects/e0/db47dd48b1c760e677174655d398d7e651554b": "459c6c73ac9886b19393ea41b8f6a9a9",
".git/objects/46/3a6b19db2744e01b10fb67931791020a4050eb": "ab3bd773424fb5e6ce4d529e0a22d406",
".git/objects/2c/177b0931030a6b77fd481c3eaa90aa4ec040da": "36220b30e2580e5b100fa42c6045f07a",
".git/objects/2c/9c01577e98c4faac269bf11bde750c7f22892f": "518da9c7554bfb976acbbfd81a547dc3",
".git/objects/41/6483429bb3ff887ef2bf049ba64fabc6789314": "b16564face622d2300a23dde4d87e621",
".git/objects/41/c018cd1c04434bca42f62576d2363932b6060c": "d0ab6ba0f4c9e551893d417251060db2",
".git/objects/77/b446c49778859266755653dfd6765fda78a6d1": "8a66f8593c2205f0ee582e1d69a0e73a",
".git/objects/70/dc775bb57b9aeaa806f59c1680ddeb7a566665": "562e20e20bdbbf51b4a5228416c5b648",
".git/objects/1e/b4363fff953d56d43f837d23272bf6dee66823": "775409c89af946d8166ab59b41007fd7",
".git/objects/1e/9790677c5203bb44058fd516940bfcae0309f1": "736ce796cc8ae7911c6731c44d0d88ab",
".git/objects/84/c96b38c8e21e4b38dbaf3ec9b1a376d2a03ebc": "efaaec80c17e72397356de939e461def",
".git/objects/4a/583aa57402648d5f1d001a6c4be96dcf922a17": "ebd088e3a997d2f5241d411a63b6148e",
".git/objects/23/8549f9a40bad574f2e9015a6ad442acc311dec": "6c41c145bfefe7e6b1c3fb2050b4a8ca",
".git/objects/4f/9f0a6d83633283cf7f7e5a838b1ce9598507a0": "fc789d1b6440b2613766042ce7bf4192",
".git/objects/15/1ae05248f29c6fe75a74d3ec7ea7546127bc8a": "ad1ef45b1b9f99bf24a9427a7ae7a986",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/56f39fab824d76ff33fb1b2b46825e73394259": "3b9ca17eff687c3d66b55087c3ff71a5",
".git/objects/1d/3bd22c6be3462bb6e0024ac1b64e8740dc7692": "c30dd4e5b600c6eb82d0f8561f93534c",
".git/objects/71/5725c7ef47a8ef51616e25766e2aeeb3671a13": "e015537671713d366c250b3a7354cd4f",
".git/objects/1c/8f92288000c8846cfa95e5fa1d5f6c101c9812": "031ed4635750609619046c5c1fcb9a91",
".git/objects/82/275139a2ba1300be58a4035c4b0b4cfa9fae95": "f4347fccf5249d66819721a5fcb4ebe2",
".git/objects/49/9dcc65b54c150464558cebdea5be2ffb2a0cb3": "9835e01e13daf4e8e27a9e9734cf76e5",
".git/objects/40/b12f73812c05db6f689c19714c4668c92fe328": "0d63aa1451cb3d76049f22c71a620399",
".git/objects/47/bd7b7b5b19e6de2652027640ba6292a0e15d85": "1968db208f6a8a72d4ca28d711e779c3",
".git/objects/47/6ba1aa5042f5c891876760c24fb4d39dcad616": "c396fb9a1d5cc8d899011a65211f63cb",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/1119d9091c63508de3cac163b81cf15a4775a2": "1f2cb63d544d0a6da0f9c08994a61af8",
".git/objects/7f/faea6116ec44f93e1bd6907e5f21c3cee9b8d7": "90f5f079097a4a6a2df02b0c877d6b14",
".git/objects/14/fdf3b650b7dc63846ae0e2a8571b8f3de762b6": "02bd910cb5bc463dc495b1f337592bd2",
".git/objects/22/ac10600feca5beea12867d0c2d91b237f79ae4": "d98bca364e345653df063be89c19b658",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cef69b5bbf5d13b2c319b5ecc3aea99a",
".git/logs/refs/heads/master": "cef69b5bbf5d13b2c319b5ecc3aea99a",
".git/logs/refs/remotes/origin/HEAD": "6c2f243c2c05dd1cda7d0c5cf5969e0c",
".git/logs/refs/remotes/origin/master": "bb8a495699efddc0190ac7fd10f2f795",
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
".git/refs/heads/master": "14d18e34d5b7b548bf735d8b1b28b2ec",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "14d18e34d5b7b548bf735d8b1b28b2ec",
".git/index": "810b788227292ea0594c173f636a53d3",
".git/packed-refs": "97d06cc6cc3e784a72b8fce38c976c6f",
".git/COMMIT_EDITMSG": "468048617cc953b8493b7f6c0d182e60",
"assets/AssetManifest.json": "e94b2e7beb6a67caf086b406177001bd",
"assets/NOTICES": "0ee66d63964faef5ed87c67a063d7570",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/GCFD_Logo.png": "c6d8aaab6dc03cd052b4de51848bae80",
"assets/assets/images/GCFD_Logo_vertical.png": "4b58e364c5a787f057b7aade43a128be",
"assets/assets/images/vertical-logo.png": "e186bd98b44505a9c9500d77607d07ce",
"assets/assets/images/OLD_GCFD_Logo.png": "668700bd8ff69a747b51c49acaf61f26",
"assets/assets/images/OLD_GCFD_Logo.jpg": "5bb2381c1612dd76e0e77ef1047f8990",
"assets/assets/images/location.jpg": "3616d2888fe269351cb1a621596a3501",
"assets/assets/images/CMRI_sign.png": "e0518cd67be0caf343f8c2250a851687",
"assets/assets/images/OLD_CMRI_top.png": "31d09736af4df23365908f17025f9b6f",
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
  // If the URL is not the the RESOURCE list, skip the cache.
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
