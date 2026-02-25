import { Category } from "../models/category.model";
import { Product } from "../models/product.model";

export const CATEGORIES: Category[]= [
    {
      id: 1, 
      name: 'Smartphones'
    },
    {
      id: 2, 
      name: 'sound techniques'
    },
    {
      id: 3, 
      name: 'household appliances'
    },
    {
      id: 4, 
      name: 'Tablets'
    }
  ]
  export const PRODUCTS: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Стильный смартфон с мощным процессором A15 Bionic и отличной двойной камерой.',
      price: 295000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/',
      likes: 5,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Iphone с активным шумоподавлением и защитой от влаги и пота.',
      price: 105000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
      likes: 5,
      categoryId: 1
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Тонкий и легкий smartphone с впечатляющей автономностью и производительностью чипа M1.',
      price: 380000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      likes: 5,
      categoryId: 1
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: 'Универсальный phone с ярким Liquid Retina дисплеем и поддержкой Apple Pencil.',
      price: 275000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p43/p40/64168007.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000',
      likes: 5,
      categoryId: 1 
    },
    {
      id: 5,
      name: 'Наушники Apple AirPods Pro белый',
      description: 'AirPods Pro — уникальные наушники с технологией активного шумоподавления, которые непрерывно оптимизируют звучание с учётом формы вашего уха и положения вкладышей. ',
      price: 111956,
      rating: 3.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h34/ha2/63785534455838.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he9/h26/63785535209502.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/hdc/63785536716830.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-belyi-4804718/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 6,
      name: 'Dyson HD08 Supersonic Синий',
      description: 'Профессиональный фен с интеллектуальным контролем температуры для блеска волос.',
      price: 190000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6e/h3e/69573848956958.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h6e/h3e/69573848956958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hee/h1c/69573849481246.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha0/heb/69573849743390.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd08-fen-sinii-mednyi-108433915/?srsltid=AfmBOooLSW09AHWN6BXKESEwXyhwqQH72LIMaWy16viyffWUoCXpJYr8',
      likes: 4,
      categoryId: 3
    },
    {
      id: 7,
      name: 'ALSA AS-8300 фен черный',
      description: 'Классный фен шаш кептіруге күшті',
      price: 245000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p0f/pca/52430070.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0f/pca/52430070.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd6/pc9/52430072.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pba/pc9/52430073.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/alsa-as-8300-fen-chernyi-128581159/?c=750000000',
      likes: 5,
      categoryId: 3
    },
    {
      id: 8,
      name: 'Marshall Emberton II',
      description: 'Компактная портативная колонка с мощным и чистым звуком Marshall.',
      price: 75000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h6b/66563687579678.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h6b/66563687579678.jpg?format=gallery-medium',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgx89xbqcCyJGJ5q_7-kx0J2i2czEmsBVyog&s',
        'https://marshall-rus.ru/images/thumbnails/200/200/detailed/337/669ea6c1ce224ea0ee66c93c03cca02b.webp'
      ],
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-marshall-emberton-ll-chernyi-107916885/?srsltid=AfmBOopqbBGUQ7Auj9lUUokkLKd-Ir5QirUMZkbZlMAHYmJQsuD4YXxO&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB',
      likes: 5,
      categoryId: 2
    },
    {
      id: 9,
      name: 'Яндекс Станция Миди',
      description: 'Умная колонка с Алисой и поддержкой протокола Zigbee для умного дома.',
      price: 69000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbd/h09/84530104467486.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h75/h9b/84530104598558.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6f/h82/84530104533022.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?srsltid=AfmBOop1YgZtrvyO62qfXha_6f_rk0Tt-DeDImORVaRNXITun_kr6LNr&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB',
      likes: 5,
      categoryId: 3
    },
    {
      id: 10,
      name: 'Xiaomi Mi Smart Kettle Pro',
      description: 'Электрический чайник с OLED-дисплеем и точной настройкой температуры.',
      price: 19000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p70/p8d/62842750.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p70/p8d/62842750.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h51/hec/85071476523038.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h28/h16/85071476457502.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/elektrochainik-xiaomi-mi-smart-thermostatic-kettle-2-pro-mjjysh01ym-belyi-110006850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB',
      likes: 5,
      categoryId: 3
    },
    {
      id: 11,
      name: 'Планшет Apple iPad Air 11 2025',
      description: 'Новый планшет Apple iPad Air 11 (2025) - это продукт, который приносит вам самые передовые технологии и дизайн от одного из мировых лидеров в области электроники - компании Apple.',
      price: 392432,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p23/pc7/37134129.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbd/p8c/36122455.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p53/p89/36122456.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-air-11-2025-wi-fi-11-djuim-8-gb-128-gb-seryi-137965083/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 12,
      name: 'Планшет Huawei MatePad SE',
      description: 'Планшет обалденный! Айпад по сравнению с ним отдыхает, со своей в 3 раза закрученной ценой.',
      price: 72432,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h26/hdf/86746842660894.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4a/h0a/86746843185182.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 13,
      name: 'Планшет AMIYO A15 Pro 8 дюйм',
      description: 'Планшет AMIYO A15 Pro — идеальный выбор для детей, сочетающий компактный размер, удобный интерфейс и весёлый дизайн.',
      price: 19431,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8b/p2c/39036267.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8b/p2c/39036267.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb7/p25/39036269.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/amiyo-a15-pro-8-djuim-4-gb-64-gb-rozovyi-138769971/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 14,
      name: 'Планшет Xiaomi Redmi Pad SE',
      description: 'Этот планшет с 11-дюймовым экраном и впечатляющей производительностью обеспечит вам комфортное использование в любых условиях',
      price: 108999,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h20/hd4/84163009151006.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h8f/h47/84163009216542.jpg?format=gallery-medium',
        'https://pi.mdev.kz/7ab8c852-92b4-421f-bfcd-92002d5c8f4d?type=webp&w=80&h=80'
      ],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-11-djuim-8-gb-256-gb-seryi-113758800/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 15,
      name: 'Планшет Samsung Galaxy Tab A9+',
      description: 'Планшет Samsung Galaxy Tab A9+ 5G — мощное устройство для работы и развлечений, предлагающее высокую производительность и широкие возможности подключения..',
      price: 179997,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0b/hc4/84390016516126.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h80/hc4/84434711642142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha1/h2d/84434711969822.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-a9-5g-11-djuim-8-gb-128-gb-serebristyi-114175605/?c=750000000',
      likes: 0,
      categoryId: 4
    },
    {
      id: 16,
      name: 'Samsung Galaxy S25 Ultra 5G 12 ГБ/256 ГБ',
      description: 'Samsung Galaxy S25 Ultra 5G — смартфон, который объединяет высокую производительность, передовые технологии и стильный дизайн. ',
      price: 570673,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd1/p27/20120115.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-256-gb-chernyi-133435348/?c=750000000',
      likes: 0,
      categoryId: 1
    },
    {
      id: 17,
      name: 'Наушники JBL Tune 510BT черный',
      description: 'Наушники JBL Tune 510BT позволяют наслаждаться мощными басами благодаря технологии JBL Pure Bass без проводов.',
      price: 14897,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h36/ha0/64030236114974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h87/h63/64030305714206.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-jbl-tune-510bt-chernyi-101420081/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 18,
      name: 'Наушники Xiaomi Redmi Buds 3 Lite черный',
      description: 'Redmi Buds 3 Lite соединяются со смартфоном по протоколу Bluetooth 5.2 и стабильно работают без неприятных подвисаний.',
      price: 7500,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h22/h86/64061767352350.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h86/64061767352350.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/he5/h87/64061770137630.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h17/h79/64061777018910.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-xiaomi-redmi-buds-3-lite-chernyi-103306269/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 19,
      name: 'Наушники Sony WH-1000XM4 черный',
      description: 'WH-1000XM4 совмещают в себе нашу лучшую технологию шумоподавления, исключительное качество звука и целый ряд интеллектуальных функций.',
      price: 492432,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p64/pde/11569142.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd5/pde/11569146.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/pdf/11569149.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm4-chernyi-100471997/?c=750000000',
      likes: 0,
      categoryId: 2
    },
    {
      id: 20,
      name: 'Наушники Bose Noise Cancelling Headphones 700 черный',
      description: 'Четкий наушник, стильный',
      price: 116500,
      rating: 2.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd6/h0f/63819863719966.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h0f/63819863719966.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h44/h68/63819902582814.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/hfb/63819905663006.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-bose-noise-cancelling-headphones-700-chernyi-100043268/?c=750000000',
      likes: 0,
      categoryId: 2
    },
  ]