
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
    name: 'Apple iPhone 14 128Gb',
    rating: 4,
    description: 'Apple\'s iPhone 14 models are identical in design to the iPhone 13 models, featuring flat edges, an aerospace-grade aluminum enclosure, and a glass back that enables wireless charging',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium',
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/",
    category: "Smartphones",
    likes: 8,
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
    name: 'Samsung Galaxy S23 Ultra',
    rating: 4,
    description: 'he Galaxy S23 Ultra is the first Samsung flagship to feature a 200MP primary camera. It has an f/1.7 aperture, an 85-degrees FOV, and improved other aspects.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/h0e/68538750631966.jpg?format=gallery-medium',
    link: "https://kaspi.kz/shop/p/samsung-galaxy-s23-ultra-5g-12-gb-512-gb-chernyi-podarok-108714430/",
    category: "Smartphones",
    likes: 2,
  },
  {
    id: 7,
    name: 'Samsung Galaxy A53 5G',
    rating: 3,
    description: 'The Samsung Galaxy A53 5G comes with 6.5-inch AMOLED display with 120Hz refresh rate and Exynos 1280 processor. Specs also include 5000mAh battery.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h84/he7/64381375643678.jpg?format=gallery-medium',
    link: "https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-8-gb-256-gb-goluboi-104253075/",
    category: "Smartphones",
    likes: 0,
  },
  {
    id: 8,
    name: 'Apple iPhone SE 2022',
    rating: 4,
    description: "The iPhone SE is Apple's entry-level iPhone. The device offers an affordable entry point to the iPhone lineup, with many important features such as a powerful A-series chip, " +
        "a high-quality camera with 4K video recording, Haptic Touch, wireless charging, water and dust resistance, and more.",
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h46/h2c/49413357633566/apple-iphone-se-2022-64gb-cernyj-104153727-1.jpg',
    link: "https://kaspi.kz/shop/p/apple-iphone-se-2022-64gb-chernyi-104153727/?c=750000000#!/item",
    category: "Smartphones",
    likes: 6,
  },
  {
    id: 9,
    name: 'Samsung UE75 191',
    rating: 4,
    description: 'Crystal UHD TVs with a powerful quantum processor and high image quality. Learn about all the advantages of Samsung Crystal UHD TVs only on the official website.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hdf/he5/34209576779806/samsung-ue75au7100uxce-190-sm-cernyj-101496170-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/samsung-ue75au7100uxce-191-sm-chernyi-101496170/?c=750000000#!/item",
    category: "TV",
    likes: 2,
  },
  {
    id: 10,
    name: 'LG 65QNED916PB 165',
    rating: 5,
    description: 'Features Multi-Platform built-in KVM IPS panel with 1ms MPRT & 144Hz 8-bit color with HDR400 Black Equalizer & Aim Stabilizer Sync GameAssist & OSD Sidekic',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h2f/hb6/47735470719006/lg-65qned916pb-165-sm-cernyj-103162520-1.jpg',
    link: "https://kaspi.kz/shop/p/lg-65qned916pb-165-sm-chernyi-103162520/?c=750000000#!/item",
    category: "TV",
    likes: 4,
  },
  {
    id: 11,
    name: 'Samsung UE65BU8000UXCE',
    rating: 4,
    description: 'Crystal UHD TVs with a powerful quantum processor and high image quality. Learn about all the advantages of Samsung Crystal UHD TVs only on the official website.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hff/ha0/61591514513438/samsung-ue65bu8000uxce-cernyj-105986652-1.jpg',
    link: "https://kaspi.kz/shop/p/samsung-ue65bu8000uxce-165-sm-chernyi-105986652/?c=750000000#!/item",
    category: "TV",
    likes: 5,
  },
  {
    id: 12,
    name: ' DAUSCHER LD65AU7100',
    rating: 3,
    description: 'BAUSCHER Android 4K UHD TV (LD65AU7100). Detailed information about the product/service and the supplier. Price and terms of delivery.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h06/h3a/66316486213662/dauscher-ld65au7100-chernyi-107598357-1.jpg',
    link: "https://kaspi.kz/shop/p/dauscher-ld65au7100-165-sm-chernyi-107598357/?c=750000000#!/item",
    category: "TV",
    likes: 0,
  },
  {
    id: 13,
    name: 'TCL 75P635',
    rating: 5,
    description: 'Resolution : 4K Ultra HD 3840 x 2160 - HDR. Screen size: 75" (190 cm) - 10-bit panel. Smoothness : 50 Hz / 2300 Picture Performance Index. Technologies: HDR10/HLG, IPQ Engine 2.0, UHD AI Upscaling, Movie Mode',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h69/h5d/67282249154590/75p635-4k-smart-108215543-1.jpg',
    link: "https://kaspi.kz/shop/p/tcl-75p635-chernyi-108215543/?c=750000000#!/item",
    category: "TV",
    likes: 3,
  },
  {
    id: 14,
    name: 'Apple iMac 27',
    rating: 5,
    description: 'The 27-inch iMac comes with a base configuration of 3.1GHz 6-core 10th-generation Intel i5, 8GB DDR4 RAM, 256GB SSD, and Radeon Pro 5300 graphics.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h11/hf1/33169933565982/apple-imac-27-5k-2020-mxwt2-serebristyj-100504808-1-Container.jpg',
    link: "https://kaspi.kz/shop/p/apple-imac-27-2020-mxwt2-serebristyi-100504808/?c=750000000#!/item",
    category: "Computers",
    likes: 3,
  },
  {
    id: 15,
    name: 'Apple Mac Mini',
    rating: 4,
    description: 'It\'s a small, portable desktop computer that can turn any screen into a Mac-powered smart computer. A computer that can be used for digital signage. And we love it.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/h2f/31869318397982/apple-mac-mini-mrtt2-seryj-1480478-2-Container.jpg',
    link: "https://kaspi.kz/shop/p/apple-mac-mini-2018-mrtt2-seryi-1480478/?c=750000000#!/item",
    category: "Computers",
    likes: 4,
  },
  {
    id: 16,
    name: 'Apple MacBook Air 13',
    rating: 4,
    description: 'The latest MacBook Air was redesigned away from the tapered body in 2022 to match the latest MacBook Pro models, and upgraded to the M2 processor.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc0/h3d/52679174357022/apple-macbook-air-13-mly33-chernyi-105933768-1.jpg',
    link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mly33-chernyi-105933768/?c=750000000#!/item",
    category: "Computers",
    likes: 3,
  },
  {
    id: 17,
    name: 'Lenovo Legion 5 17',
    rating: 4,
    description: 'The Lenovo Legion 5 features an AMD Ryzen 5 4600H processor so that you can enjoy a powerful gaming performance, every time.',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfd/h27/63819285725214/lenovo-legion-5-17ach6-82k000acrk-temno-sinii-107130212-1.jpg',
    link: "https://kaspi.kz/shop/p/lenovo-legion-5-17ach6-82k000acrk-temno-sinii-107130212/?c=750000000#!/item",
    category: "Computers",
    likes: 3,
  },
  {
    id: 18,
    name: 'Торайгыров С.: Қамар сұлу',
    rating: 5,
    description: 'Book of one of the greatest steep writer',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h3d/h72/46660261249054/kamar-sulu-102642127-1.jpg',
    link: "https://kaspi.kz/shop/p/toraigyrov-s-kamar-sulu-102642127/?c=750000000#!/item",
    category: "Books",
    likes: 5,
  },
  {
    id: 19,
    name: 'Жүсіпбек Аймауытов: Ақбілек',
    rating: 5,
    description: 'Book of one of the greatest steep writer',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0f/hc8/68100088397854/zhusipbek-aimauytov-aqbilek-108535529-1.jpg',
    link: "https://kaspi.kz/shop/p/zh-s-pbek-aimauytov-a-b-lek-108535529/?c=750000000#!/item",
    category: "Books",
    likes: 4,
  },
  {
    id: 20,
    name: 'Айтматов Ш. Т.: Ақ кеме',
    rating: 5,
    description: 'One of the greatest writer of Kyrgyz nation',
    image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h02/h6e/49198537670686/ajtmatov-s-t-ak-keme-104009750-1.jpg ',
    link: "https://kaspi.kz/shop/p/aitmatov-sh-t-a-keme-104009750/?c=750000000#!/item",
    category: "Books",
    likes: 5,
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/