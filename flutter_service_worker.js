'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "63aaaa5fc1bfefb67446070a68e81d2b",
"/": "63aaaa5fc1bfefb67446070a68e81d2b",
"CNAME": "699c3454088d9e1c40f42abf13f45644",
"main.dart.js": "a4e11864d41a073186bb1a39557c6c35",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f7446118402704050fa5925804992cbe",
".git/config": "3e0edab6840444cad340aa5463bf3d19",
".git/objects/61/caf9f40cca18833e5e708dacb89e99f8eb2653": "52d47ecf6894cdc1b6bb6da61eeae366",
".git/objects/0d/d012c1339f35d2ada3c960bae8aedccb83d920": "88e746c8ada6906ac55ddc8026f161c7",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/92/3cc036800f11fbbd118c7e80bb6b539ff00048": "4880a82d3e9fb600ec14863202c114b4",
".git/objects/66/a9f4cd9be9232ce184f75051026c73c9dd9511": "9ade47c0c353e5455b254881bd5b674c",
".git/objects/66/fea1245cdba8ca897e1ca8cc0cd377a5dd3a67": "ed2e30487f6d5186478fe8d995f510a4",
".git/objects/6f/bc70e16f67fb2772c2b54fe5333e3595bad2ca": "95bb92f572a1d23656d76faec99bdef9",
".git/objects/03/91156bb4e33cfab898e90f7a35173b0e38c434": "cedec9f580d7ac2c0ca3bf3ddbac83e0",
".git/objects/32/6e4a6d1d1ccf5c519038cb798203268bbb8d03": "3970cb15659af5c770a9744ee3018d20",
".git/objects/32/d11f5a0405aaf046d7ec5540fa18edafb4aaad": "e7597058fb625790ce94afb1185da9ee",
".git/objects/32/a58340459759b11a68336adeaef3546a608d2e": "3750588d7085b8e2fbbd2fa8dc8dfada",
".git/objects/3c/8b7a552dd3de61bd55d81749dec48c982030c4": "66cef451b1c7d12a7ba506e37b593ab2",
".git/objects/3d/b2da8a6d06a3a7d6156ff4890e974a92712891": "b26fbbbac75e55f35005e4f978aa4c1c",
".git/objects/0e/97d925694ac9460d3df1899168c1d3e9afba1f": "a275cc3662c8cdedbf79a84d8c2a2f42",
".git/objects/34/109f2074f318e285734b3634bb871513fdcd44": "fe06bfa8b46435e90571870ec626d8ea",
".git/objects/5f/269c3124160d872b8c06cfd53041ba1af7fe41": "8f1dc32ae80454894584b5e8b6da8ad1",
".git/objects/5f/7a9478eeab74240cbc6922585005c7c55fb665": "f4a0f6847e3e05b0f0220cedc5134542",
".git/objects/05/d4981e97c7ec14c67b4a2403e4bb3d541aeacf": "ee0f2a63b90c7dbc9b836b00d79aafcb",
".git/objects/d9/840cc3f3ed5dc58abe4dbf2040cac13816e86a": "a1996527383defcdfd35c537d5cdee18",
".git/objects/d7/3d0937b833bdb953180d65ffc1add6146f9380": "21640f8fc90a01878abd8225f238fd8e",
".git/objects/d0/53e6583ca074213bf705fa1c3f7d6e1b71eae5": "b32976276fe7bbc763d5b7d785241fd2",
".git/objects/df/4c473441808a82052dab42cb2dba10353ac55e": "913d048e58a7ad01046d7d060770da90",
".git/objects/da/9cfc59128d68c450cab0684259a907d999da54": "9071711a26fbeb78b96a6cf23277a139",
".git/objects/da/522bbe5d06923e8970f06e2dd92808d2ad34ee": "6d90f68ab9daba03fe9b12361c89912f",
".git/objects/a2/0dd5458ec107b9eeee5371a7399b42d34c855d": "9043d852d90859cbca68c7527e1e65ff",
".git/objects/d1/494b7a90b9b9bfdbb5ab2be307ba6d8cbfb6cb": "d93c1fd37ff1bbdcbc66cb875ad0ba2c",
".git/objects/d6/436cb9075679846b68bf89984e6c0dba04116b": "d31a199480b8976ce179b66d65c6463a",
".git/objects/bc/c8e69f30bae11d0aeff2b4290d781368a43107": "cf0224f4c4e8b0dd97b6466481432db4",
".git/objects/f4/b8192de39aa9de65c874dffd826145eb413aba": "979b725df4d180fb4b76e73ab9817dcf",
".git/objects/f3/682094821952e62687598f5529209c58cee781": "99f2f5242c10eb2190ffb9a9a6d6df76",
".git/objects/c7/7de6593ba35442857a4ed44dd537ec8c629b38": "ae089731ca23983705941736d07324b3",
".git/objects/c7/9530e6c09b3f88ae804a635102d6c41ab464d1": "495a9498d2df73b9b559374eb24e6339",
".git/objects/c0/e1274f8db1167cd970788ac13c9b46112cd229": "16311601acb9a5a6176015ebf7e2cece",
".git/objects/ee/fab62c2a8861e79e18672a5dab0c89341f34cd": "b75bdb0135820e7c58d61f56300fe5fb",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/objects/fc/66afd52d6b61b4c9dda9206910dc1fa1d929d9": "4746cc11899ce3d58e54cca38b8860b5",
".git/objects/fc/6be0b4a576158a08fc39435714e44cfedb4be7": "458ab2a2bf85f313c0e446f10c9755a1",
".git/objects/fd/f689f230897980ce0e72885d19245b8dd6ea55": "f456b5efd7cf6b4bc33047cd598f1c9b",
".git/objects/e3/e54da604a17dcd8c155b078115b7f300817476": "147da2da7b47bc5267cf728341011484",
".git/objects/e3/dea532732f8a76204bce37b45eac14275e87bd": "f9ac882fcebcf0a8f22851dabd1aa4f1",
".git/objects/cf/743ef5f16c8a0c18e6306235446a7dd2cd62a7": "f4178ae64386fc0d8cd8047d438e8b48",
".git/objects/ca/505a7f15658c9313ccc19d4294341d586a4595": "5f6e3925e4ad0507c60638fe4d004610",
".git/objects/e4/af7ef4975697e27f9495432171d202d4b8a97f": "7581bb279fa35b72b5b950c2b4fbe89d",
".git/objects/fb/1c141d7423d810d2a8e2acf7b275611880e0ae": "9afa5073922c4167017da7fe6e65c7f3",
".git/objects/fb/ca496cdc150074d6b5fd6b9d184d0715f2a94e": "3511d5ae9452ed73ebee9d8669c3614a",
".git/objects/fb/3f93b35d66524d10e144cea657d01f1b23f839": "95d88e291546923c1681f830c72f30cc",
".git/objects/c1/bf6a2d047230f7483204f0d55d7f127ff77120": "b94d62785687224a3c686b4e911ef826",
".git/objects/c6/82e6a981a037f36984e80447f82b0cf88698c0": "28f5dda456d3cd86c53273e48a2a57b3",
".git/objects/20/a3c80146618001a4e3c538ad19871857fc9146": "901675117aaa09356a56240ac1fb6081",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/e1da24cd3599c71af387b204508388a7cdc6c9": "f97b95d5c6ce539a662cee593a109d70",
".git/objects/27/d3e71456dbe4f262110d2a57d4d778cc7db048": "d0fcd03e1cab17c7313ca529a1dc8aad",
".git/objects/11/9f7c38a5c0fd44009c7fb9c8aa45523f19288b": "f6d01d3e005d63be150c799a4692e485",
".git/objects/7d/f3a3867bb3a2c150c098d4252995c98237b17f": "84302b06b6d4640b1f945f4cae604c0d",
".git/objects/29/77fcb841c2de4eb8c6f33fd1175569c3b374a0": "fa6ba2dd27edb9ae45cf59d0b8d9b210",
".git/objects/45/060725caff1ea9719bbcbbcae21a1f6a38d0fd": "2c21e0a68f54477d78fe61687ad082e4",
".git/objects/1f/87a4d01fe739f2e1e75d0eb23113d538f41126": "58f6f96d3fc90e5cd35f255e8faff5fe",
".git/objects/87/072f28fe4ee6bb50dd39897a498d596f553586": "4ae011edd7edf3c9094443409230d0bc",
".git/objects/80/6b62be66bf74f303641594357bcb3a8c9d96b2": "1c8a158795b211107ec58dc535df0b60",
".git/objects/1a/c8aed88985bb5a4d551db09781bd2bb2b294c2": "597e33a72cdfc97a672b1f9f8b302734",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/21/b3f9928336a99cdc6d0afe9fddd4ee53680d5c": "132d3310eb42868c61d42dbf64ce48d4",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/2a/15691909e6345408121fc0049dbcbeed9ff919": "3cb72b4c7e02b4f56e93d0cdf0176cbd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/29b48e0ac8f330eb717064c745fa220e1a6618": "fd5202072972e17adba4ffa107559a24",
".git/objects/6e/dced5959c782bc97e65a9379702e370c924715": "d414d5b010d40122b20773b530e52388",
".git/objects/9a/398a6678ded315f80d13437b806bd1bfc188ee": "a7244e0afc0834627df788ed06d748a3",
".git/objects/09/9b2446f952e7b9f60ade0dd32cb6044ec70730": "1c4e532cc07b8c80573883dcd2c98f9a",
".git/objects/5d/b5a3375864f0d876122d9ab4064963e7eef4bd": "de6e11b1ea82a7d454b4be10aa20f0e5",
".git/objects/91/00340f2b2da9afd5dec2b776cf62783b552ea9": "48e2458ebc1f5694a86cb0d602e117ec",
".git/objects/65/2aea8043b8c5e71405657fe1a141ee454b8fc5": "25e45f9b6c5370e3a2f1dea6b9f6a4b2",
".git/objects/65/e1185f114131bb6ee09997c2f211013fdbfdfe": "41eea1015878b4be5054bf6396b4ff6a",
".git/objects/3a/734600b336067019eef2d46a0ea8955e853ff7": "4160371302645288a7ddd10bf138cb19",
".git/objects/3a/a73a3a75b0dc3fe156f6e9561bc380e7d5d8bb": "d571b9b44e728f57b60dda49f81553df",
".git/objects/98/575cc6acff4826ef74fe38d1910df7b7f3ea36": "29067428a7a0d8b58aa43e6f12094624",
".git/objects/5e/5760ed57e1d4273bbea1ad5f650b58e345e1fd": "482c502e7444861af1dcef2d48376051",
".git/objects/37/3e575377f3a9e717edd6f787113e441a036a34": "73f8e2576c425e8dfe5f5d4f63a560a9",
".git/objects/37/70656ff3ef2ed987ad20e46b8cfeb3d811011e": "6aac0be3cdeac154245d359682eaec0c",
".git/objects/08/760b990f9f308d94260647bcd90d3252dc30e9": "50045118cafbd94ccd4c42b5167e3db7",
".git/objects/01/997857351c18c2ed27c25093360f67ce4adc7b": "1c80defcea6bdb184f1371655ad2a2c2",
".git/objects/6c/fe3fa04c89406a027ebe2549e64f89fcdd2755": "e738edcc0c92502dda934472387f4e4b",
".git/objects/99/14cdec1b6276bbb7c4a5f7e93debb70e435f0d": "fbe7f55a8e16f6f3ae23ef2eb06cf006",
".git/objects/55/b2b33437353cbb5a77cacf1f3da35830c5093c": "6a0a9d3d293604a0dcdf5bf7b5c72225",
".git/objects/55/c578bc9d81781b9a5b68bfa79eebf69a070f56": "41b89402df67732282b089ed89dfb5d8",
".git/objects/55/2e4fcb147594164a98e5a8948b69d03ba6d83e": "a135c8bdfd61a1be2b2dc45419c51e10",
".git/objects/63/6386ba5efd31f63e08535e59b09c169a537745": "796090fd3b8264391047c44518ef3851",
".git/objects/0f/50a79a550a69ce87a48e791b4d1066618cde38": "c4dad305c346a8a684e9e4b5e4e071ed",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/64/48493cfa49ead595e44448c28ee3d1511a0419": "de67cbd4b9f70bfd1c79cae57caa84f2",
".git/objects/90/d4433fd0cae142548039992f3cb2a1916c57d0": "39a6ac762fb5d8931e405991b634a1ad",
".git/objects/bf/d9637c487d4c6da824625abbc850eb45160491": "4a5342232ed565b28f423e30e9a6d48a",
".git/objects/ba/b66f61437771168157a57799016a00f58b5b85": "19edb933ffead35499e632804a805234",
".git/objects/a0/3aca6f830a3fa32dce63eb9dca3ada45961eba": "cad339eba74f91427f33c02fe0ebbe56",
".git/objects/a7/76687a2aa068b80e9b24f44c38bcdfd6556671": "8c0eb115446a7c100d5a7a789c6ded97",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/d2/41de38a6a2e19e3b2505198eef0c9b58ccdb8c": "9e272e2411d798705712a66a6f421266",
".git/objects/aa/16d1c9bfa467dc1cde5c6593c0e45f26e19677": "7ea57e2514d18dee0fe90f2a72eb1047",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/66ab5edb6f5bf58ef71ab0e5e0a2ead88b81b1": "09b6d5e1bf989d0162b2874c07773430",
".git/objects/b0/d204428cb56f405f40dc6c15a28f160ab9504c": "9266ba564fc0d84d763c319a420f3075",
".git/objects/c4/0f78bf902b41cf24aa04afaff1b01e54c51da4": "fb26dab9b4fcda0b0277193245412b20",
".git/objects/e1/d8a71c9cfbec2b5fd514a750553f7cfc2f1ad2": "cfe9a36d3720d2c8d9805a19484b3b79",
".git/objects/cc/6d947532b5acef08bcdbad81cb729db3a8d4c2": "5a3b5e3ac988297be52f59bf67324680",
".git/objects/e6/9e5f72032fa8f931944b953126f44d2541dfe6": "d0f9d3fe0a492cf80f9cb9f3989c4f9a",
".git/objects/e6/452663ce51e2a15e661d4a75c139ad25663e5c": "3c4b8f52c7b7a6dfba4f9369f730d216",
".git/objects/f7/4b4250f703a6f900c719398de7fa2652ae28ea": "0678860ede7aabe00b00603aa999d18a",
".git/objects/f7/4d838ffc942332052c4915b80bb14abfeaa089": "f2031f7d7c8af538a25a294d8868c3ac",
".git/objects/e9/730e3157a95651f82a2f4f9c10c6575375730a": "4c9633882c408e59bcbde58c2a5ac8d4",
".git/objects/f1/a9b4f1d984a1709340bb0b91b2e63f34358153": "12d6abd16f575b3373aee8e8c6b499d2",
".git/objects/f1/dd7a831686944f3468e741cc4bac6135fa28d6": "8c3b3db8c33f973a2d3048a924be497d",
".git/objects/e7/e70d6beaca6eb6022fd68a97d5f7b6d0a5fdf0": "723df743a657381e44b4b5952d34aa78",
".git/objects/e7/fb18f7fc2bb0c368005e0fee0fb88cbb3e5c03": "fc3d5d154f42d8ecc733df420939842d",
".git/objects/f8/d5264483ae9abf08dadb539a4f04969c30f291": "e2e49b46663848e2099cfb04cd46441e",
".git/objects/2c/177b0931030a6b77fd481c3eaa90aa4ec040da": "36220b30e2580e5b100fa42c6045f07a",
".git/objects/2c/9c01577e98c4faac269bf11bde750c7f22892f": "518da9c7554bfb976acbbfd81a547dc3",
".git/objects/41/6483429bb3ff887ef2bf049ba64fabc6789314": "b16564face622d2300a23dde4d87e621",
".git/objects/41/c018cd1c04434bca42f62576d2363932b6060c": "d0ab6ba0f4c9e551893d417251060db2",
".git/objects/70/dc775bb57b9aeaa806f59c1680ddeb7a566665": "562e20e20bdbbf51b4a5228416c5b648",
".git/objects/4a/583aa57402648d5f1d001a6c4be96dcf922a17": "ebd088e3a997d2f5241d411a63b6148e",
".git/objects/23/8549f9a40bad574f2e9015a6ad442acc311dec": "6c41c145bfefe7e6b1c3fb2050b4a8ca",
".git/objects/4f/9f0a6d83633283cf7f7e5a838b1ce9598507a0": "fc789d1b6440b2613766042ce7bf4192",
".git/objects/15/1ae05248f29c6fe75a74d3ec7ea7546127bc8a": "ad1ef45b1b9f99bf24a9427a7ae7a986",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/56f39fab824d76ff33fb1b2b46825e73394259": "3b9ca17eff687c3d66b55087c3ff71a5",
".git/objects/82/275139a2ba1300be58a4035c4b0b4cfa9fae95": "f4347fccf5249d66819721a5fcb4ebe2",
".git/objects/49/9dcc65b54c150464558cebdea5be2ffb2a0cb3": "9835e01e13daf4e8e27a9e9734cf76e5",
".git/objects/40/b12f73812c05db6f689c19714c4668c92fe328": "0d63aa1451cb3d76049f22c71a620399",
".git/objects/47/bd7b7b5b19e6de2652027640ba6292a0e15d85": "1968db208f6a8a72d4ca28d711e779c3",
".git/objects/47/6ba1aa5042f5c891876760c24fb4d39dcad616": "c396fb9a1d5cc8d899011a65211f63cb",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/7f/1119d9091c63508de3cac163b81cf15a4775a2": "1f2cb63d544d0a6da0f9c08994a61af8",
".git/objects/7f/faea6116ec44f93e1bd6907e5f21c3cee9b8d7": "90f5f079097a4a6a2df02b0c877d6b14",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3de1dcde9247fb84904a400d86bec07b",
".git/logs/refs/heads/master": "3de1dcde9247fb84904a400d86bec07b",
".git/logs/refs/remotes/origin/HEAD": "6c2f243c2c05dd1cda7d0c5cf5969e0c",
".git/logs/refs/remotes/origin/master": "2d11e9ecf27bea3e78061bb1a90fd76d",
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
".git/refs/heads/master": "a4db8b69e1cade887379de16031c5076",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "a4db8b69e1cade887379de16031c5076",
".git/index": "85fffac0ce41599464718f262a8d3da2",
".git/packed-refs": "97d06cc6cc3e784a72b8fce38c976c6f",
".git/COMMIT_EDITMSG": "0dfd893193bc678aae0b0b403f594bf7",
"assets/AssetManifest.json": "e94b2e7beb6a67caf086b406177001bd",
"assets/NOTICES": "d531ee40139baa6d142e4db77b043d46",
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
