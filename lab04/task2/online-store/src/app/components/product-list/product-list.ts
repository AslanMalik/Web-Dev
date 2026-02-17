import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})


export class ProductList {
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S25 Ultra 5G',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 577842,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p84/p24/20120106.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/p24/20120108.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p27/20120112.png?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/ped/p27/20120116.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s25-ultra-5g-12-gb-1024-gb-chernyi-133435350/?c=750000000'
    },
    {
      id: 2,
      name: 'iPhone 17 Pro',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 899990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd9/pf2/64169612.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p84/pf2/64169615.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbc/pf2/64169613.png?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/p65/p0f/64476280.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/'
    },
    {
      id: 3,
      name: 'Google Pixel 10 Pro',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 629900,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/pc3/62211716.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pf9/p31/59253002.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p32/p32/59253004.jpg?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p32/59253007.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/google-pixel-10-pro-xl-16-gb-256-gb-chernyi-145063760/?c=750000000'
    },
    {
      id: 4,
      name: 'Ластик Maped Technic',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 10,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h56/h80/86018938044446.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd6/h74/86018938077214.jpg?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/h50/ha5/86587902820382.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/lastik-maped-technic-duo-511710-1-sht-103885134/?c=750000000'
    },
    {
      id: 5,
      name: 'Coca-Cola газированный',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 665,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9f/pc6/97763104.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd8/pc6/97763102.jpg?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/p2e/pee/97763093.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-gazirovannyi-napitok-1-5-l-100208093/?c=750000000'
    },
    {
      id: 6,
      name: 'Мышь HyperX PulseFire Haste Wireless',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 39990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h54/h76/86367581011998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h54/h76/86367581011998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hd8/h7e/86367581044766.png?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/hfa/h8b/86367581077534.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/hyperx-pulsefire-haste-wireless-belyi-105199025/?c=750000000'
    },
    {
      id: 7,
      name: 'Принтер Canon LBP122DW',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 89975,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h2d/84642983444510.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hb0/h07/80957997285406.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h11/h86/80957997350942.jpg?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/hf6/ha4/80957997416478.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/printer-canon-i-sensys-lbp722cdw-110582426/?c=750000000'
    },
    {
      id: 8,
      name: 'Adal молоко 3.2% 925 мл',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 750,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p71/p6d/52077494.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p38/p6d/52077496.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/p22/52077501.png?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/p69/p70/52077488.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/adal-moloko-6-925-ml-100223086/?c=750000000'
    },
    {
      id: 9,
      name: 'Набережные челны туалетная бумага 1-слойный 1 шт, полиэстер',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 226,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4f/h75/64532316323870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h75/64532316323870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/pd0/90332050.bin?format=gallery-medium'  ,
        'https://resources.cdn-kaspi.kz/img/m/p/p25/pd0/90332051.bin?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/naberezhnye-chelny-tualetnaja-bumaga-1-sloinyi-48-sht-smeshannaja-tselljuloza-103333886/?c=750000000'
    },
    {
      id: 10,
      name: 'MAGNUM капуста Казахстан',
      description: 'Apple flagship smartphone with powerful performance and great camera.',
      price: 815,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h63/64453168496670.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h63/64453168496670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h63/64453168496670.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hca/h63/64453168496670.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/magnum-kapusta-kazahstan-104298020/?c=750000000'
    },
  ];



}
