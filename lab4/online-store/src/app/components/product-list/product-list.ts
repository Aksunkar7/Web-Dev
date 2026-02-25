import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // To have built in loops conditions worked
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList {
// Метод для смены картинки у конкретного товара
  changeImage(product: Product, newImage: string) {
    product.image = newImage;
  }

  shareOnWhatsapp(link: string) {
    const url = `https://wa.me/?text=${encodeURIComponent('Посмотри, какой крутой товар я нашел: ' + link)}`;
    window.open(url, '_blank');
  }
  
  shareOnTelegram(link: string) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(link)}&text=${encodeURIComponent('Посмотри на это!')}`;
    window.open(url, '_blank');
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Стильный смартфон с мощным процессором A15 Bionic и отличной двойной камерой.',
      price: 295000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h8f/84378448232478.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Iphone с активным шумоподавлением и защитой от влаги и пота.',
      price: 105000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Тонкий и легкий smartphone с впечатляющей автономностью и производительностью чипа M1.',
      price: 380000,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: 'Универсальный phone с ярким Liquid Retina дисплеем и поддержкой Apple Pencil.',
      price: 275000,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/pb3/p40/64168003.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p43/p40/64168007.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p7b/p40/64168005.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000'
    },
    {
      id: 5,
      name: 'Смарт-часы Apple Watch Series 11 M/L 46 мм черный',
      description: 'Ваш идеальный помощник для здоровья и фитнеса с еще более ярким дисплеем.',
      price: 195000,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium',
      images: ['https://resources.cdn-kaspi.kz/img/m/p/p89/pba/64468961.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p6d/pba/64468962.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/p50/pba/64468963.png?format=gallery-medium'],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-11-m-l-46-mm-chernyi-145555823/?c=750000000'
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
      link: 'https://kaspi.kz/shop/p/dyson-supersonic-hd08-fen-sinii-mednyi-108433915/?srsltid=AfmBOooLSW09AHWN6BXKESEwXyhwqQH72LIMaWy16viyffWUoCXpJYr8'
    },
    {
      id: 7,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с сверхскоростным SSD и поддержкой 4K.',
      price: 245000,
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=preview-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB'
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
      link: 'https://kaspi.kz/shop/p/portativnaja-kolonka-marshall-emberton-ll-chernyi-107916885/?srsltid=AfmBOopqbBGUQ7Auj9lUUokkLKd-Ir5QirUMZkbZlMAHYmJQsuD4YXxO&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB'
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
      link: 'https://kaspi.kz/shop/p/jandeks-stantsija-midi-chernyi-114709674/?srsltid=AfmBOop1YgZtrvyO62qfXha_6f_rk0Tt-DeDImORVaRNXITun_kr6LNr&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB'
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
      link: 'https://kaspi.kz/shop/p/elektrochainik-xiaomi-mi-smart-thermostatic-kettle-2-pro-mjjysh01ym-belyi-110006850/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_tv_audio_entertainment_desktop&gbraid=0AAAAAC7-v7hsH__xZpo2FmqZgQWyziePG&gclid=Cj0KCQiA7-rMBhCFARIsAKnLKtCeo1CZFk566l4IO27M5-EVlAg2e26EP-1WKCOeTu4cDUmqi4zjKSEaAkAsEALw_wcB'
    }
  ]
}
