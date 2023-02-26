
export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  rating: number;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple MacBook Pro 14',
    rating: 2,
    description: 'The 14-inch MacBook Pro offers plenty of power for pros in a compact form factor. ' +
        'It has the powerful M2 Pro chipset configurations.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?sr=3&qid&c=750000000#!/item",
    category: "Computers",
    likes: 3,
  },
  {
    id: 2,
    name: 'Apple Iphone 14 Pro',
    rating: 4,
    description: 'The iPhone 14 Pro comes with a 6.1-inch ProMotion OLED display with 1-120Hz adaptive refresh rates, Dolby Vision, and ' +
        'a Face ID Dynamic Island.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha9/hdb/63073437614110/apple-iphone-14-pro-128gb-cernyj-106363245-1.jpg',
    link: "https://kaspi.kz/shop/p/apple-iphone-14-pro-128gb-chernyi-106363245/?c=750000000#!/item",
    category: "Smartphones",
    likes: 2,
  },
  {
    id: 3,
    name: 'Apple AirPods Max',
    rating: 5,
    description: 'AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha6/h0c/33518056079390/apple-airpods-max-cernyj-100950846-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/apple-airpods-max-chernyi-100950846/?c=750000000#!/item",
    category: "Unknown",
    likes: 4,
  },
  {
    id: 4,
    name: 'Mūhtar Äuezova: Abai joly 4 tomdyq',
    rating: 5,
    description: 'Roman about the greatest writer of steep.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h29/hfc/47009381941278/-uezov-m-abaj-zoly-4-tomdar-26012682-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/-uezov-m-abai-zholy-4-tomdar-26012682/?c=750000000#!/item",
    category: "Books",
    likes: 5,
  },
  {
    id: 5,
    name: 'Abai Qūnanbaiūly.: Qara sözder',
    rating: 5,
    description: 'The 45 wise words of Abay',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hb9/51835347271710/abaj-k-k-ara-s-zder-105474777-1.jpg',
    link: "https://kaspi.kz/shop/p/abai-ara-s-zder-105474777/?c=750000000#!/item",
    category: "Books",
    likes: 6,
  },
  {
    id: 6,
    name: 'Sony PlayStation 5 + God of War Ragnarök',
    rating: 5,
    description: 'The PlayStation 5\'s main hardware features include a solid-state drive customized for high-speed data streaming ' +
        'to enable significant improvements in storage performance, an AMD GPU capable of 4K resolution display at up to 120 frames per second',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h45/hf2/66015013568542/sony-playstation-5-god-of-war-ragnarok-107674130-1.jpg',
    link: "https://kaspi.kz/shop/p/sony-playstation-5-god-of-war-ragnar-k-107674130/?c=750000000#!/item",
    category: "Unknown",
    likes: 2,
  },
  {
    id: 7,
    name: 'Apple Watch Series 8 45 мм Aluminum',
    rating: 3,
    description: 'Apple Watch Series 8 has an innovative new sensor that tracks your temperature while you sleep, so you can see changes over time.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h77/hbb/63158968418334/apple-watch-series-8-41-mm-cernyj-106362847-2.jpg',
    link: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
    category: "Unknown",
    likes: 0,
  },
  {
    id: 8,
    name: 'Yandex Station Max',
    rating: 3,
    description: 'The new and most powerful smart speaker with Alice. With LED display, three-way audio and 4K video. Get the most out of music, movies and communication with Alice. ' +
        'Low, medium and high frequencies are played from five different speakers so that you can hear each instrument.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/had/hb8/49342294261790/yandeks-stantsiya-maks-s-alisoi-chernyi-101165283-1.jpg',
    link: "https://kaspi.kz/shop/p/jandeks-stantsija-maks-chernyi-101165283/?c=750000000#!/item",
    category: "Unknown",
    likes: 6,
  },
  {
    id: 9,
    name: 'DJI Mini 2 Combo',
    rating: 4,
    description: 'The new DJI Mini 2 has kept all the core competitive features of Mavic Mini, including portability, travel-friendliness, and ease of use, while at the same time significantly improving features. ' +
        'DJI Mini 2’s image transmission system is particularly impressive as it has been upgraded to OcuSync 2.0 from enhanced Wi-Fi. Its max flight speed andwind resistance have also been also improved, providing more options for shooting locations and conditions.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc9/h11/33002543284254/dji-mini-2-fly-more-combo-seryj-100789420-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/dji-mini-2-fly-more-combo-seryi-100789420/?c=750000000#!/item",
    category: "Unknown",
    likes: 5,
  },
  {
    id: 10,
    name: 'Monitor GIGABYTE M34WQ ',
    rating: 5,
    description: 'Features Multi-Platform built-in KVM IPS panel with 1ms MPRT & 144Hz 8-bit color with HDR400 Black Equalizer & Aim Stabilizer Sync GameAssist & OSD Sidekic',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdd/hd1/62395657355294/gigabyte-m34wq-ek-cernyj-106411102-1.jpg',
    link: "https://kaspi.kz/shop/p/gigabyte-m34wq-chernyi-106411102/?c=750000000#!/item",
    category: "Unknown",
    likes: 4,
  },
  {
    id: 11,
    name: 'Apple MacBook Pro 14',
    rating: 2,
    description: 'The 14-inch MacBook Pro offers plenty of power for pros in a compact form factor. ' +
        'It has the powerful M2 Pro chipset configurations.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h8a/47153374199838/apple-macbook-pro-14-mkgp3-seryj-102866247-1.jpg',
    link: "https://kaspi.kz/shop/p/apple-macbook-pro-14-mkgp3-seryi-102866247/?sr=3&qid&c=750000000#!/item",
    category: "Computers",
    likes: 5,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/