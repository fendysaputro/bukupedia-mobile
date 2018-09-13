Bukupedia Mobile Apps IOS dan Android.

### Banner
url  : https://service.bukupedia.com/id/banner
type : GET
feedback :
```
{
    "s": true,
    "m": "Get Banner Success",
    "d": [
        {
            "type": "banner",
            "id": "414",
            "attributes": {
                "picture": "https://www.bukupedia.com//content/image/65b8760af47375_mobile.jpg",
                "url": "http://sekolahhebat.lifebuoy.co.id"
            }
        },
        {
            "type": "banner",
            "id": "411",
            "attributes": {
                "picture": "https://www.bukupedia.com//content/image/65b7f7de91f8f5_mobile.jpg",
                "url": "https://blog.bukupedia.com/bantuan/ketentuan-promo-gratis-ongkir/"
            }
        },
        {
            "type": "banner",
            "id": "364",
            "attributes": {
                "picture": "https://www.bukupedia.com//content/image/35b02271e834d4_mobile.jpg",
                "url": "https://www.bukupedia.com/id/book/id-131000/be-the-new-you.html"
            }
        },
        {
            "type": "banner",
            "id": "221",
            "attributes": {
                "picture": "https://www.bukupedia.com//content/image/4598027c802df0_mobile.jpg",
                "url": "http://www.bukupedia.com/id/how-to-shop.html"
            }
        }
    ]
}
```

### Banner Small
url : https://service.bukupedia.com/id/banner-small
type : GET
feedback :
```
{
    "s": false,
    "m": "Get Banner Small Field"
}
```

### Banner Footer
url : https://service.bukupedia.com/id/banner-footer
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Banner Footer Success",
    "d": [
        {
            "type": "banner-footer",
            "id": "34",
            "attributes": {
                "picture": "https://www.bukupedia.com//content/image/bc_85b890787ea05f.png",
                "url": "sekolahhebat.lifebuoy.co.id"
            }
        }
    ]
}
```

### Payment Method
url : https://service.bukupedia.com/id/payment-method
type : Get
feedback :
```
{
    "s": true,
    "m": "Get PaymentMethod Success",
    "d": [
        {
            "id": "1",
            "code": "00,BCA",
            "type": "manual transfer",
            "bank_name": "BCA",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-bca.png"
        },
        {
            "id": "2",
            "code": "00,Mandiri",
            "type": "manual transfer",
            "bank_name": "Mandiri",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-mandiri.png"
        },
        {
            "id": "1",
            "code": "02,CENA",
            "type": "virutal account",
            "bank_name": "BCA",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-bca.png"
        },
        {
            "id": "2",
            "code": "02,BMRI",
            "type": "virutal account",
            "bank_name": "Mandiri",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-mandiri.png"
        },
        {
            "id": "3",
            "code": "02,BNIN",
            "type": "virutal account",
            "bank_name": "BNI",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-bni.png"
        },
        {
            "id": "4",
            "code": "02,BRIN",
            "type": "virutal account",
            "bank_name": "BRI",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-bri.png"
        },
        {
            "id": "5",
            "code": "02,BNIA",
            "type": "virutal account",
            "bank_name": "CIMB NIAGA",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-cimb.png"
        },
        {
            "id": "6",
            "code": "02,BBBA",
            "type": "virutal account",
            "bank_name": "Permata Bank",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-permata.png"
        },
        {
            "id": "7",
            "code": "02,BDIN",
            "type": "virutal account",
            "bank_name": "Dananmon",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-danamon.png"
        },
        {
            "id": "8",
            "code": "02,HNBN",
            "type": "virutal account",
            "bank_name": "Hana Bank",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-hanabank.png"
        },
        {
            "id": "9",
            "code": "02,IBBK",
            "type": "virutal account",
            "bank_name": "Maybank",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-maybank.png"
        },
        {
            "id": "10",
            "code": "00,",
            "type": "manual transfer",
            "bank_name": "ATM BERSAMA",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-atmbersama.png"
        },
        {
            "id": "11",
            "code": "00,",
            "type": "manual transfer",
            "bank_name": "PRIMA",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/bank-prima.png"
        },
        {
            "id": "12",
            "code": "03,ALMA,",
            "type": "partner shop",
            "bank_name": "Alfa Mart",
            "picture": "https://service.bukupedia.com/templates/bukupedia/full_site/images/store-alfamart.png"
        }
    ]
}
```

### Shipment Method
url : https://service.bukupedia.com/id/shipment-method
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Shipment Method Success",
    "d": [
        {
            "id": "1",
            "code": "jne",
            "name": "JNE",
            "image": "https://service.bukupedia.com/content/image/courier_55b8cd50be935a.png"
        }
    ]
}
```

### New Product 
url  : https://service.bukupedia.com/id/new-product
type : GET
feedback :
```
{
    "s": true,
    "m": "Get New Product Success",
    "d": [
        {
            "id": "123372",
            "title": "Dongeng Domba Dan Sahabat Rimba",
            "authors": "Kak Thifa",
            "stock": 1,
            "price-old": 48000,
            "price": 48000,
            "image": "https://service.bukupedia.com/images/products/dongeng-domba-dan-sahabat-rimba.jpg",
            "link": "https://service.bukupedia.com/id/product/id-123372/dongeng-domba-dan-sahabat-rimba.html"
        },
        {
            "id": "129238",
            "title": "THE WORLD’S BEST BOYFRIEND",
            "authors": "Durjoy Datta",
            "stock": 1,
            "price-old": 85000,
            "price": 85000,
            "image": "https://service.bukupedia.com/images/products/129238the-world-s-best-boyfriend.jpg",
            "link": "https://service.bukupedia.com/id/product/id-129238/the-world-s-best-boyfriend.html"
        },
        {
            "id": "129270",
            "title": "Fungsi Bank Indonesia Sebagai The Lender Of The Last Resort Dalam Kerangka Uu No 9 Tahun 2016",
            "authors": "Dr Theresia Anita Christiani, Sh, M Hum",
            "stock": 1,
            "price-old": 75000,
            "price": 75000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-129270/fungsi-bank-indonesia-sebagai-the-lender-of-the-last-resort-dalam-kerangka-uu-no-9-tahun-2016.html"
        },
        {
            "id": "131490",
            "title": "Ekonomi Mikro Islami – Adiwarman Karim",
            "authors": " Adiwarman Karim",
            "stock": 1,
            "price-old": 99000,
            "price": 99000,
            "image": "https://service.bukupedia.com/images/products/131490ekonomi-mikro-islami-adiwarman-karim.png",
            "link": "https://service.bukupedia.com/id/product/id-131490/ekonomi-mikro-islami-adiwarman-karim.html"
        },
        {
            "id": "131504",
            "title": "STATISTIK KESEHATAN",
            "authors": "Luknis Sabri",
            "stock": 1,
            "price-old": 54000,
            "price": 54000,
            "image": "https://service.bukupedia.com/images/products/131504statistik-kesehatan.png",
            "link": "https://service.bukupedia.com/id/product/id-131504/statistik-kesehatan.html"
        },
        {
            "id": "132590",
            "title": "My Hero Academia 07",
            "authors": "Kohei Horikoshi",
            "stock": 1,
            "price-old": 40000,
            "price": 40000,
            "image": "https://service.bukupedia.com/images/products/my-hero-academia-07.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132590/my-hero-academia-07.html"
        },
        {
            "id": "132591",
            "title": "My Hero Academia 07",
            "authors": "Kohei Horikoshi",
            "stock": 1,
            "price-old": 40000,
            "price": 40000,
            "image": "https://service.bukupedia.com/images/products/my-hero-academia-07_1.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132591/my-hero-academia-07.html"
        },
        {
            "id": "132592",
            "title": "Juliet of The Boarding School 01",
            "authors": "Yousuke Kaneda",
            "stock": 1,
            "price-old": 25000,
            "price": 25000,
            "image": "https://service.bukupedia.com/images/products/juliet-of-the-boarding-school-01.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132592/juliet-of-the-boarding-school-01.html"
        },
        {
            "id": "132593",
            "title": "I've been in Love After School 01",
            "authors": "Haruka Mitsui",
            "stock": 1,
            "price-old": 25000,
            "price": 25000,
            "image": "https://service.bukupedia.com/images/products/i-ve-been-in-love-after-school-01.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132593/i-ve-been-in-love-after-school-01.html"
        },
        {
            "id": "132594",
            "title": "Gal Sensation",
            "authors": "Akira Wao",
            "stock": 1,
            "price-old": 25000,
            "price": 25000,
            "image": "https://service.bukupedia.com/images/products/gal-sensation.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132594/gal-sensation.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 180,
        "next_page_url": "https://service.bukupedia.com/id/new-product/?_sort=&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/new-product/?_sort=",
        "total": 1800
    }
}
```

### Main Category
url : https://service.bukupedia.com/id/category
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Main Category Success",
    "d": [
        {
            "id": "2",
            "name": "Arsitektur & Desain Interior",
            "sub_category": [
                {
                    "id": "34",
                    "name": "Arsitektur",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-34/arsitektur.html"
                },
                {
                    "id": "35",
                    "name": "Arsitektur & Desain Interior",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-35/arsitektur-desain-interior.html"
                },
                {
                    "id": "700",
                    "name": "Desain Rumah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-700/desain-rumah.html"
                },
                {
                    "id": "604",
                    "name": "Desain Teknik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-604/desain-teknik.html"
                },
                {
                    "id": "1360",
                    "name": "Devosional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1360/devosional.html"
                },
                {
                    "id": "770",
                    "name": "Griya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-770/griya.html"
                },
                {
                    "id": "598",
                    "name": "Home & Garden",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-598/home-garden.html"
                },
                {
                    "id": "263",
                    "name": "Interior",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-263/interior.html"
                },
                {
                    "id": "1342",
                    "name": "Literary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1342/literary.html"
                },
                {
                    "id": "652",
                    "name": "Properti",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-652/properti.html"
                },
                {
                    "id": "1389",
                    "name": "Rumah & Taman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1389/rumah-taman.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-2/Arsitektur-%26-Desain-Interior.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-2/Arsitektur-%26-Desain-Interior.html"
        },
        {
            "id": "3",
            "name": "Bahasa",
            "sub_category": [
                {
                    "id": "39",
                    "name": "Bahasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-39/bahasa.html"
                },
                {
                    "id": "596",
                    "name": "Bahasa & Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-596/bahasa-sastra.html"
                },
                {
                    "id": "238",
                    "name": "Bahasa Arab",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-238/bahasa-arab.html"
                },
                {
                    "id": "150",
                    "name": "Bahasa Asing",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-150/bahasa-asing.html"
                },
                {
                    "id": "1250",
                    "name": "Bahasa Dan Tata Bahasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1250/bahasa-dan-tata-bahasa.html"
                },
                {
                    "id": "1432",
                    "name": "Bahasa Filologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1432/bahasa-filologi.html"
                },
                {
                    "id": "191",
                    "name": "Bahasa Indonesia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-191/bahasa-indonesia.html"
                },
                {
                    "id": "781",
                    "name": "Bahasa Inggris",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-781/bahasa-inggris.html"
                },
                {
                    "id": "374",
                    "name": "Bahasa Jepang",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-374/bahasa-jepang.html"
                },
                {
                    "id": "1118",
                    "name": "Bahasa Mandarin",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1118/bahasa-mandarin.html"
                },
                {
                    "id": "209",
                    "name": "Basa Sunda Jawa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-209/basa-sunda-jawa.html"
                },
                {
                    "id": "205",
                    "name": "English",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-205/english.html"
                },
                {
                    "id": "243",
                    "name": "Kamus",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-243/kamus.html"
                },
                {
                    "id": "40",
                    "name": "Kamus & Referensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-40/kamus-referensi.html"
                },
                {
                    "id": "294",
                    "name": "Max And Mei",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-294/max-and-mei.html"
                },
                {
                    "id": "169",
                    "name": "Pelajaran Bahasa Asing",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-169/pelajaran-bahasa-asing.html"
                },
                {
                    "id": "153",
                    "name": "Seni Bahasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-153/seni-bahasa.html"
                },
                {
                    "id": "1526",
                    "name": "Short Story, Poetry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1526/short-story-poetry.html"
                },
                {
                    "id": "1505",
                    "name": "Terjemah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1505/terjemah.html"
                },
                {
                    "id": "1473",
                    "name": "]",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1473/.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-3/Bahasa.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-3/Bahasa.html"
        },
        {
            "id": "4",
            "name": "Biografi & Memoar",
            "sub_category": [
                {
                    "id": "725",
                    "name": "Biografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-725/biografi.html"
                },
                {
                    "id": "36",
                    "name": "Biografi & Memoar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-36/biografi-memoar.html"
                },
                {
                    "id": "1404",
                    "name": "Biografi & Otobiografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1404/biografi-otobiografi.html"
                },
                {
                    "id": "1216",
                    "name": "Biografi Dan Memoar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1216/biografi-dan-memoar.html"
                },
                {
                    "id": "146",
                    "name": "Biografi dan Otobiografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-146/biografi-dan-otobiografi.html"
                },
                {
                    "id": "1420",
                    "name": "Biografi& Otobiografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1420/biografi-otobiografi.html"
                },
                {
                    "id": "900",
                    "name": "Biography",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-900/biography.html"
                },
                {
                    "id": "1428",
                    "name": "Biogrrafi & Otobiografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1428/biogrrafi-otobiografi.html"
                },
                {
                    "id": "1267",
                    "name": "Kalam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1267/kalam.html"
                },
                {
                    "id": "744",
                    "name": "Memoar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-744/memoar.html"
                },
                {
                    "id": "1525",
                    "name": "Non Fiction, Biography, Comic",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1525/non-fiction-biography-comic.html"
                },
                {
                    "id": "1418",
                    "name": "Otobiografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1418/otobiografi.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-4/Biografi-%26-Memoar.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-4/Biografi-%26-Memoar.html"
        },
        {
            "id": "5",
            "name": "Buku Anak-Anak",
            "sub_category": [
                {
                    "id": "1336",
                    "name": " Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1336/anak.html"
                },
                {
                    "id": "1431",
                    "name": " Anak Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1431/anak-anak.html"
                },
                {
                    "id": "667",
                    "name": " Disney",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-667/disney.html"
                },
                {
                    "id": "1075",
                    "name": "<span Class=\"bread_home\"></span>",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1075/span-class-bread_home-span.html"
                },
                {
                    "id": "1462",
                    "name": "Activity Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1462/activity-books.html"
                },
                {
                    "id": "308",
                    "name": "Aktivitas Anak Cerdas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-308/aktivitas-anak-cerdas.html"
                },
                {
                    "id": "1313",
                    "name": "Aktivitas Pendamping Tk",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1313/aktivitas-pendamping-tk.html"
                },
                {
                    "id": "1229",
                    "name": "Aktivitasku",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1229/aktivitasku.html"
                },
                {
                    "id": "186",
                    "name": "Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-186/anak.html"
                },
                {
                    "id": "1190",
                    "name": "Anak Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1190/anak-anak.html"
                },
                {
                    "id": "145",
                    "name": "Anak dan Remaja",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-145/anak-dan-remaja.html"
                },
                {
                    "id": "1317",
                    "name": "Anak Usia 4 5 Thn",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1317/anak-usia-4-5-thn.html"
                },
                {
                    "id": "1318",
                    "name": "Anak Usia 5 6 Thn",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1318/anak-usia-5-6-thn.html"
                },
                {
                    "id": "1191",
                    "name": "Board Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1191/board-books.html"
                },
                {
                    "id": "33",
                    "name": "Buku Anak-Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-33/buku-anak-anak.html"
                },
                {
                    "id": "1129",
                    "name": "Card",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1129/card.html"
                },
                {
                    "id": "1324",
                    "name": "Cerita",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1324/cerita.html"
                },
                {
                    "id": "1452",
                    "name": "Cerita Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1452/cerita-anak.html"
                },
                {
                    "id": "1397",
                    "name": "Cerita Pendek",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1397/cerita-pendek.html"
                },
                {
                    "id": "1444",
                    "name": "Cerita Rakyat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1444/cerita-rakyat.html"
                },
                {
                    "id": "1301",
                    "name": "Cerita Rakyat Nusantara",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1301/cerita-rakyat-nusantara.html"
                },
                {
                    "id": "1050",
                    "name": "Child",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1050/child.html"
                },
                {
                    "id": "1052",
                    "name": "Childhood",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1052/childhood.html"
                },
                {
                    "id": "1051",
                    "name": "Children",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1051/children.html"
                },
                {
                    "id": "1531",
                    "name": "Children: Activity Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1531/children-activity-books.html"
                },
                {
                    "id": "1530",
                    "name": "Children: Picture Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1530/children-picture-books.html"
                },
                {
                    "id": "1315",
                    "name": "Dora The Explorer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1315/dora-the-explorer.html"
                },
                {
                    "id": "75",
                    "name": "Edukasi Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-75/edukasi-anak.html"
                },
                {
                    "id": "202",
                    "name": "Erlangga For Kids",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-202/erlangga-for-kids.html"
                },
                {
                    "id": "1060",
                    "name": "Game",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1060/game.html"
                },
                {
                    "id": "1053",
                    "name": "Kids",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1053/kids.html"
                },
                {
                    "id": "1083",
                    "name": "Kompasiana",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1083/kompasiana.html"
                },
                {
                    "id": "52",
                    "name": "Kreasi & Mewarnai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-52/kreasi-mewarnai.html"
                },
                {
                    "id": "1262",
                    "name": "Mainan Edukatif",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1262/mainan-edukatif.html"
                },
                {
                    "id": "1081",
                    "name": "Merchandise",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1081/merchandise.html"
                },
                {
                    "id": "1291",
                    "name": "Mewarnai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1291/mewarnai.html"
                },
                {
                    "id": "1230",
                    "name": "Novel Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1230/novel-anak.html"
                },
                {
                    "id": "1329",
                    "name": "Paket Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1329/paket-anak.html"
                },
                {
                    "id": "1293",
                    "name": "Paket Komik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1293/paket-komik.html"
                },
                {
                    "id": "1362",
                    "name": "Permainan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1362/permainan.html"
                },
                {
                    "id": "1339",
                    "name": "Picture Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1339/picture-books.html"
                },
                {
                    "id": "85",
                    "name": "Playgroup",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-85/playgroup.html"
                },
                {
                    "id": "86",
                    "name": "TK",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-86/tk.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-5/Buku-Anak-Anak.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-5/Buku-Anak-Anak.html"
        },
        {
            "id": "6",
            "name": "Buku Masakan",
            "sub_category": [
                {
                    "id": "674",
                    "name": " Masak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-674/masak.html"
                },
                {
                    "id": "685",
                    "name": "Aneka Hidangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-685/aneka-hidangan.html"
                },
                {
                    "id": "372",
                    "name": "Buku Masak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-372/buku-masak.html"
                },
                {
                    "id": "149",
                    "name": "Buku Masakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-149/buku-masakan.html"
                },
                {
                    "id": "692",
                    "name": "Cake, Pastry Dan Bakery",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-692/cake-pastry-dan-bakery.html"
                },
                {
                    "id": "710",
                    "name": "Cita Rasa Tertentu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-710/cita-rasa-tertentu.html"
                },
                {
                    "id": "1337",
                    "name": "Culinary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1337/culinary.html"
                },
                {
                    "id": "696",
                    "name": "Dari Bahan Khas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-696/dari-bahan-khas.html"
                },
                {
                    "id": "378",
                    "name": "Hidangan Berbagai Keperluan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-378/hidangan-berbagai-keperluan.html"
                },
                {
                    "id": "1319",
                    "name": "Jasa Boga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1319/jasa-boga.html"
                },
                {
                    "id": "684",
                    "name": "Jenis Jenis Hidangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-684/jenis-jenis-hidangan.html"
                },
                {
                    "id": "380",
                    "name": "Jenis-Jenis Hidangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-380/jenis-jenis-hidangan.html"
                },
                {
                    "id": "689",
                    "name": "Kue Kue",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-689/kue-kue.html"
                },
                {
                    "id": "355",
                    "name": "Kue-kue",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-355/kue-kue.html"
                },
                {
                    "id": "72",
                    "name": "Kuliner",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-72/kuliner.html"
                },
                {
                    "id": "1044",
                    "name": "Masakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1044/masakan.html"
                },
                {
                    "id": "1327",
                    "name": "Masakan Dan Minuman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1327/masakan-dan-minuman.html"
                },
                {
                    "id": "687",
                    "name": "Menu Gizi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-687/menu-gizi.html"
                },
                {
                    "id": "341",
                    "name": "Menu Kesehatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-341/menu-kesehatan.html"
                },
                {
                    "id": "675",
                    "name": "Menu Sehari Hari",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-675/menu-sehari-hari.html"
                },
                {
                    "id": "379",
                    "name": "Menu Sehari-hari",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-379/menu-sehari-hari.html"
                },
                {
                    "id": "1020",
                    "name": "Resep",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1020/resep.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-6/Buku-Masakan.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-6/Buku-Masakan.html"
        },
        {
            "id": "26",
            "name": "Busana & Kecantikan",
            "sub_category": [
                {
                    "id": "1265",
                    "name": "Apparel Muslim",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1265/apparel-muslim.html"
                },
                {
                    "id": "528",
                    "name": "Beauty",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-528/beauty.html"
                },
                {
                    "id": "1346",
                    "name": "Beauty And Fashion",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1346/beauty-and-fashion.html"
                },
                {
                    "id": "794",
                    "name": "Berhijab",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-794/berhijab.html"
                },
                {
                    "id": "130",
                    "name": "Bridal",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-130/bridal.html"
                },
                {
                    "id": "61",
                    "name": "Busana & Kecantikan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-61/busana-kecantikan.html"
                },
                {
                    "id": "1266",
                    "name": "Busana Muslim",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1266/busana-muslim.html"
                },
                {
                    "id": "354",
                    "name": "Fashion",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-354/fashion.html"
                },
                {
                    "id": "1307",
                    "name": "Girly",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1307/girly.html"
                },
                {
                    "id": "1277",
                    "name": "Kecantikan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1277/kecantikan.html"
                },
                {
                    "id": "747",
                    "name": "Lifestyle",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-747/lifestyle.html"
                },
                {
                    "id": "624",
                    "name": "Wanita",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-624/wanita.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-26/Busana-%26-Kecantikan.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-26/Busana-%26-Kecantikan.html"
        },
        {
            "id": "8",
            "name": "Desain Grafis",
            "sub_category": [
                {
                    "id": "584",
                    "name": "Desain",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-584/desain.html"
                },
                {
                    "id": "76",
                    "name": "Desain Grafis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-76/desain-grafis.html"
                },
                {
                    "id": "1483",
                    "name": "Desain Komunikasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1483/desain-komunikasi.html"
                },
                {
                    "id": "239",
                    "name": "Menggambar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-239/menggambar.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-8/Desain-Grafis.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-8/Desain-Grafis.html"
        },
        {
            "id": "30",
            "name": "E-book",
            "sub_category": [
                {
                    "id": "131",
                    "name": "E-book",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-131/e-book.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-30/E-book.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-30/E-book.html"
        },
        {
            "id": "9",
            "name": "Ekonomi & Keuangan",
            "sub_category": [
                {
                    "id": "1500",
                    "name": " Saku",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1500/saku.html"
                },
                {
                    "id": "223",
                    "name": "Akuntansi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-223/akuntansi.html"
                },
                {
                    "id": "1376",
                    "name": "Aplikasi Keuangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1376/aplikasi-keuangan.html"
                },
                {
                    "id": "188",
                    "name": "Ekonomi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-188/ekonomi.html"
                },
                {
                    "id": "62",
                    "name": "Ekonomi & Keuangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-62/ekonomi-keuangan.html"
                },
                {
                    "id": "1448",
                    "name": "Ekonomi & Manajemen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1448/ekonomi-manajemen.html"
                },
                {
                    "id": "988",
                    "name": "Ekonomi Syariah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-988/ekonomi-syariah.html"
                },
                {
                    "id": "1478",
                    "name": "Eksternal",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1478/eksternal.html"
                },
                {
                    "id": "1453",
                    "name": "Globalisasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1453/globalisasi.html"
                },
                {
                    "id": "1407",
                    "name": "Kapasitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1407/kapasitas.html"
                },
                {
                    "id": "1311",
                    "name": "Karakter",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1311/karakter.html"
                },
                {
                    "id": "1472",
                    "name": "Karyawan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1472/karyawan.html"
                },
                {
                    "id": "622",
                    "name": "Keuangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-622/keuangan.html"
                },
                {
                    "id": "1257",
                    "name": "Pemasaran Dan Penjualan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1257/pemasaran-dan-penjualan.html"
                },
                {
                    "id": "1181",
                    "name": "Umum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1181/umum.html"
                },
                {
                    "id": "1377",
                    "name": "Utilities",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1377/utilities.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-9/Ekonomi-%26-Keuangan.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-9/Ekonomi-%26-Keuangan.html"
        },
        {
            "id": "10",
            "name": "Hobi & Keterampilan",
            "sub_category": [
                {
                    "id": "1486",
                    "name": "",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1486/.html"
                },
                {
                    "id": "1345",
                    "name": "Agriculture",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1345/agriculture.html"
                },
                {
                    "id": "1380",
                    "name": "Agrihobi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1380/agrihobi.html"
                },
                {
                    "id": "114",
                    "name": "Agrobisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-114/agrobisnis.html"
                },
                {
                    "id": "1186",
                    "name": "Aktivitas & Kreativitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1186/aktivitas-kreativitas.html"
                },
                {
                    "id": "162",
                    "name": "Alam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-162/alam.html"
                },
                {
                    "id": "1328",
                    "name": "Aneka Resep",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1328/aneka-resep.html"
                },
                {
                    "id": "359",
                    "name": "Ayam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-359/ayam.html"
                },
                {
                    "id": "1213",
                    "name": "Bergambar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1213/bergambar.html"
                },
                {
                    "id": "1292",
                    "name": "Brother Complex",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1292/brother-complex.html"
                },
                {
                    "id": "1242",
                    "name": "Bundling",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1242/bundling.html"
                },
                {
                    "id": "1169",
                    "name": "Colorful",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1169/colorful.html"
                },
                {
                    "id": "1344",
                    "name": "Craft",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1344/craft.html"
                },
                {
                    "id": "1166",
                    "name": "DOG",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1166/dog.html"
                },
                {
                    "id": "230",
                    "name": "Ecocraft",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-230/ecocraft.html"
                },
                {
                    "id": "762",
                    "name": "Etika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-762/etika.html"
                },
                {
                    "id": "1459",
                    "name": "Etnografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1459/etnografi.html"
                },
                {
                    "id": "1252",
                    "name": "Fantasteens",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1252/fantasteens.html"
                },
                {
                    "id": "107",
                    "name": "Fotografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-107/fotografi.html"
                },
                {
                    "id": "1237",
                    "name": "Gamers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1237/gamers.html"
                },
                {
                    "id": "768",
                    "name": "Garden",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-768/garden.html"
                },
                {
                    "id": "1341",
                    "name": "Harlequin",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1341/harlequin.html"
                },
                {
                    "id": "112",
                    "name": "Hewan & Ternak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-112/hewan-ternak.html"
                },
                {
                    "id": "592",
                    "name": "Hobi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-592/hobi.html"
                },
                {
                    "id": "46",
                    "name": "Hobi & Keterampilan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-46/hobi-keterampilan.html"
                },
                {
                    "id": "148",
                    "name": "Hobi dan Hastakarya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-148/hobi-dan-hastakarya.html"
                },
                {
                    "id": "351",
                    "name": "Hobi dan Keterampilan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-351/hobi-dan-keterampilan.html"
                },
                {
                    "id": "117",
                    "name": "Jurnalistik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-117/jurnalistik.html"
                },
                {
                    "id": "1192",
                    "name": "Kecil   Kecil Punya Karya ( Kkpk )",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1192/kecil-kecil-punya-karya-kkpk.html"
                },
                {
                    "id": "375",
                    "name": "Kerajinan Tangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-375/kerajinan-tangan.html"
                },
                {
                    "id": "1209",
                    "name": "Kerajinan, Hobi, Dan Rumah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1209/kerajinan-hobi-dan-rumah.html"
                },
                {
                    "id": "651",
                    "name": "Kesekretariatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-651/kesekretariatan.html"
                },
                {
                    "id": "647",
                    "name": "Keterampilan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-647/keterampilan.html"
                },
                {
                    "id": "1210",
                    "name": "Keterampilan Dan Desain",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1210/keterampilan-dan-desain.html"
                },
                {
                    "id": "1305",
                    "name": "Kreasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1305/kreasi.html"
                },
                {
                    "id": "1306",
                    "name": "Kreasi Dengan Kertas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1306/kreasi-dengan-kertas.html"
                },
                {
                    "id": "269",
                    "name": "Kreasi Seni",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-269/kreasi-seni.html"
                },
                {
                    "id": "678",
                    "name": "Kreativitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-678/kreativitas.html"
                },
                {
                    "id": "1249",
                    "name": "Magical",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1249/magical.html"
                },
                {
                    "id": "1038",
                    "name": "Music",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1038/music.html"
                },
                {
                    "id": "1288",
                    "name": "Musical",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1288/musical.html"
                },
                {
                    "id": "1524",
                    "name": "Musical Notation",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1524/musical-notation.html"
                },
                {
                    "id": "115",
                    "name": "Musik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-115/musik.html"
                },
                {
                    "id": "1519",
                    "name": "Non  Fiction,essay,photograph",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1519/non-fiction-essay-photograph.html"
                },
                {
                    "id": "92",
                    "name": "Otomotif",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-92/otomotif.html"
                },
                {
                    "id": "106",
                    "name": "Otomotif & Mekanik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-106/otomotif-mekanik.html"
                },
                {
                    "id": "1243",
                    "name": "Paket",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1243/paket.html"
                },
                {
                    "id": "979",
                    "name": "Penyakit Tanaman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-979/penyakit-tanaman.html"
                },
                {
                    "id": "600",
                    "name": "Perikanan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-600/perikanan.html"
                },
                {
                    "id": "1468",
                    "name": "Perikanan Dan Ilmu Kelautan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1468/perikanan-dan-ilmu-kelautan.html"
                },
                {
                    "id": "1080",
                    "name": "Pertanian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1080/pertanian.html"
                },
                {
                    "id": "695",
                    "name": "Peternakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-695/peternakan.html"
                },
                {
                    "id": "1251",
                    "name": "Remaja",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1251/remaja.html"
                },
                {
                    "id": "1195",
                    "name": "Seni Dan Fotografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1195/seni-dan-fotografi.html"
                },
                {
                    "id": "1236",
                    "name": "Shouju",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1236/shouju.html"
                },
                {
                    "id": "1134",
                    "name": "Swag",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1134/swag.html"
                },
                {
                    "id": "111",
                    "name": "Tanaman & Kebun",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-111/tanaman-kebun.html"
                },
                {
                    "id": "1375",
                    "name": "Teks",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1375/teks.html"
                },
                {
                    "id": "587",
                    "name": "Teks Non Ekonomi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-587/teks-non-ekonomi.html"
                },
                {
                    "id": "1232",
                    "name": "Travelogue",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1232/travelogue.html"
                },
                {
                    "id": "1285",
                    "name": "Volley",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1285/volley.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-10/Hobi-%26-Keterampilan.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-10/Hobi-%26-Keterampilan.html"
        },
        {
            "id": "20",
            "name": "Hukum, Politik, & Sosial",
            "sub_category": [
                {
                    "id": "1451",
                    "name": "Anthropoliy Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1451/anthropoliy-politik.html"
                },
                {
                    "id": "1427",
                    "name": "Budaya & Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1427/budaya-politik.html"
                },
                {
                    "id": "166",
                    "name": "dan Hukum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-166/dan-hukum.html"
                },
                {
                    "id": "171",
                    "name": "dan Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-171/dan-politik.html"
                },
                {
                    "id": "1457",
                    "name": "Ekonomi Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1457/ekonomi-politik.html"
                },
                {
                    "id": "1426",
                    "name": "Gender Dan Hukum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1426/gender-dan-hukum.html"
                },
                {
                    "id": "1458",
                    "name": "Hubungan Internasional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1458/hubungan-internasional.html"
                },
                {
                    "id": "1184",
                    "name": "Hukum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1184/hukum.html"
                },
                {
                    "id": "126",
                    "name": "Hukum & Pajak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-126/hukum-pajak.html"
                },
                {
                    "id": "1474",
                    "name": "Hukum Dan Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1474/hukum-dan-politik.html"
                },
                {
                    "id": "320",
                    "name": "Hukum Sosial Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-320/hukum-sosial-politik.html"
                },
                {
                    "id": "1047",
                    "name": "Hukum, Sosial, Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1047/hukum-sosial-politik.html"
                },
                {
                    "id": "1361",
                    "name": "Isu Kontemporer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1361/isu-kontemporer.html"
                },
                {
                    "id": "1430",
                    "name": "Jurnalisme & Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1430/jurnalisme-politik.html"
                },
                {
                    "id": "1399",
                    "name": "Kemanusiaan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1399/kemanusiaan.html"
                },
                {
                    "id": "1412",
                    "name": "Komunikasi & Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1412/komunikasi-sosial.html"
                },
                {
                    "id": "1465",
                    "name": "LAW",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1465/law.html"
                },
                {
                    "id": "1413",
                    "name": "Media",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1413/media.html"
                },
                {
                    "id": "1446",
                    "name": "Media & Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1446/media-politik.html"
                },
                {
                    "id": "1463",
                    "name": "Media And Communication",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1463/media-and-communication.html"
                },
                {
                    "id": "1347",
                    "name": "Metropop",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1347/metropop.html"
                },
                {
                    "id": "1441",
                    "name": "Nasionalisme",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1441/nasionalisme.html"
                },
                {
                    "id": "1522",
                    "name": "No Fiction, Social",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1522/no-fiction-social.html"
                },
                {
                    "id": "128",
                    "name": "Pajak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-128/pajak.html"
                },
                {
                    "id": "1275",
                    "name": "Percobaan, Instrumen, Dan Pengukuran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1275/percobaan-instrumen-dan-pengukuran.html"
                },
                {
                    "id": "603",
                    "name": "Perpajakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-603/perpajakan.html"
                },
                {
                    "id": "1350",
                    "name": "Politics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1350/politics.html"
                },
                {
                    "id": "142",
                    "name": "Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-142/politik.html"
                },
                {
                    "id": "1434",
                    "name": "Politik & Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1434/politik-budaya.html"
                },
                {
                    "id": "1417",
                    "name": "Politik & Hukum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1417/politik-hukum.html"
                },
                {
                    "id": "1435",
                    "name": "Politik & Lingkungan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1435/politik-lingkungan.html"
                },
                {
                    "id": "1202",
                    "name": "Politik & Pemerintahan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1202/politik-pemerintahan.html"
                },
                {
                    "id": "1447",
                    "name": "Politik & Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1447/politik-sejarah.html"
                },
                {
                    "id": "45",
                    "name": "Politik & Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-45/politik-sosial.html"
                },
                {
                    "id": "1419",
                    "name": "Politik & Sosial Media",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1419/politik-sosial-media.html"
                },
                {
                    "id": "1436",
                    "name": "Politik Dan Hukum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1436/politik-dan-hukum.html"
                },
                {
                    "id": "1200",
                    "name": "Politik Dan Ilmu Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1200/politik-dan-ilmu-sosial.html"
                },
                {
                    "id": "1455",
                    "name": "Politik, Hubungan Internasional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1455/politik-hubungan-internasional.html"
                },
                {
                    "id": "1450",
                    "name": "Sejarah & Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1450/sejarah-politik.html"
                },
                {
                    "id": "1280",
                    "name": "Seni Pertunjukan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1280/seni-pertunjukan.html"
                },
                {
                    "id": "1460",
                    "name": "Seni, Sosial Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1460/seni-sosial-budaya.html"
                },
                {
                    "id": "1141",
                    "name": "Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1141/sosial.html"
                },
                {
                    "id": "1437",
                    "name": "Sosial & Ekonomi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1437/sosial-ekonomi.html"
                },
                {
                    "id": "1414",
                    "name": "Sosial & Politcs",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1414/sosial-politcs.html"
                },
                {
                    "id": "1442",
                    "name": "Sosial & Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1442/sosial-politik.html"
                },
                {
                    "id": "1231",
                    "name": "Sosial Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1231/sosial-budaya.html"
                },
                {
                    "id": "1240",
                    "name": "Sosial Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1240/sosial-politik.html"
                },
                {
                    "id": "1499",
                    "name": "Sospol",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1499/sospol.html"
                },
                {
                    "id": "1358",
                    "name": "Teologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1358/teologi.html"
                },
                {
                    "id": "649",
                    "name": "Undang Undang",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-649/undang-undang.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-20/Hukum,-Politik,-%26-Sosial.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-20/Hukum,-Politik,-%26-Sosial.html"
        },
        {
            "id": "11",
            "name": "Humor",
            "sub_category": [
                {
                    "id": "51",
                    "name": "Humor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-51/humor.html"
                },
                {
                    "id": "1211",
                    "name": "Humor Dan Hiburan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1211/humor-dan-hiburan.html"
                },
                {
                    "id": "717",
                    "name": "Komedi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-717/komedi.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-11/Humor.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-11/Humor.html"
        },
        {
            "id": "12",
            "name": "Kesehatan & Gaya Hidup",
            "sub_category": [
                {
                    "id": "1325",
                    "name": "Anak Sehat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1325/anak-sehat.html"
                },
                {
                    "id": "920",
                    "name": "Diet",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-920/diet.html"
                },
                {
                    "id": "1390",
                    "name": "Diet & Health",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1390/diet-health.html"
                },
                {
                    "id": "1348",
                    "name": "Diet And Health",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1348/diet-and-health.html"
                },
                {
                    "id": "1133",
                    "name": "Dram",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1133/dram.html"
                },
                {
                    "id": "1299",
                    "name": "Efk Lainnya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1299/efk-lainnya.html"
                },
                {
                    "id": "1363",
                    "name": "Entertainment",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1363/entertainment.html"
                },
                {
                    "id": "1235",
                    "name": "Gizi Dan Nutrisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1235/gizi-dan-nutrisi.html"
                },
                {
                    "id": "1170",
                    "name": "Gore",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1170/gore.html"
                },
                {
                    "id": "963",
                    "name": "Health",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-963/health.html"
                },
                {
                    "id": "1138",
                    "name": "Hospital",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1138/hospital.html"
                },
                {
                    "id": "1411",
                    "name": "Humaniora",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1411/humaniora.html"
                },
                {
                    "id": "985",
                    "name": "Kanker ,Penyakit",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-985/kanker-penyakit.html"
                },
                {
                    "id": "286",
                    "name": "Kebugaran & Kecantikan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-286/kebugaran-kecantikan.html"
                },
                {
                    "id": "63",
                    "name": "Kedokteran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-63/kedokteran.html"
                },
                {
                    "id": "773",
                    "name": "Keperawatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-773/keperawatan.html"
                },
                {
                    "id": "1043",
                    "name": "Kesehatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1043/kesehatan.html"
                },
                {
                    "id": "47",
                    "name": "Kesehatan & Gaya Hidup",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-47/kesehatan-gaya-hidup.html"
                },
                {
                    "id": "1197",
                    "name": "Kesehatan Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1197/kesehatan-anak.html"
                },
                {
                    "id": "224",
                    "name": "Kesehatan dan Gaya Hidup",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-224/kesehatan-dan-gaya-hidup.html"
                },
                {
                    "id": "168",
                    "name": "Kesehatan dan Kebugaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-168/kesehatan-dan-kebugaran.html"
                },
                {
                    "id": "1475",
                    "name": "Kesehatan Masyarakat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1475/kesehatan-masyarakat.html"
                },
                {
                    "id": "1263",
                    "name": "Kesehatan Pria",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1263/kesehatan-pria.html"
                },
                {
                    "id": "1278",
                    "name": "Kesehatan Wanita",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1278/kesehatan-wanita.html"
                },
                {
                    "id": "1196",
                    "name": "Kesehatan, Kebugaran, Dan Kedokteran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1196/kesehatan-kebugaran-dan-kedokteran.html"
                },
                {
                    "id": "1271",
                    "name": "Latihan Dan Kebugaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1271/latihan-dan-kebugaran.html"
                },
                {
                    "id": "986",
                    "name": "Leukimia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-986/leukimia.html"
                },
                {
                    "id": "1387",
                    "name": "Medical",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1387/medical.html"
                },
                {
                    "id": "1402",
                    "name": "Medis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1402/medis.html"
                },
                {
                    "id": "1449",
                    "name": "Medis Referensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1449/medis-referensi.html"
                },
                {
                    "id": "791",
                    "name": "Obat Tradisional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-791/obat-tradisional.html"
                },
                {
                    "id": "1290",
                    "name": "Olah Raga Dan Outdoor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1290/olah-raga-dan-outdoor.html"
                },
                {
                    "id": "80",
                    "name": "Olahraga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-80/olahraga.html"
                },
                {
                    "id": "1218",
                    "name": "Pengobatan Alternatif",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1218/pengobatan-alternatif.html"
                },
                {
                    "id": "1264",
                    "name": "Penulisan, Penelitian, Dan Penerbitan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1264/penulisan-penelitian-dan-penerbitan.html"
                },
                {
                    "id": "48",
                    "name": "Sex Education",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-48/sex-education.html"
                },
                {
                    "id": "1386",
                    "name": "Sport & Adventure",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1386/sport-adventure.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-12/Kesehatan-%26-Gaya-Hidup.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-12/Kesehatan-%26-Gaya-Hidup.html"
        },
        {
            "id": "13",
            "name": "Komik Indonesia",
            "sub_category": [
                {
                    "id": "665",
                    "name": "Komik Indonesia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-665/komik-indonesia.html"
                },
                {
                    "id": "1310",
                    "name": "Paketkomik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1310/paketkomik.html"
                },
                {
                    "id": "1078",
                    "name": "Religion",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1078/religion.html"
                },
                {
                    "id": "1286",
                    "name": "Webtoon",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1286/webtoon.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-13/Komik-Indonesia.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-13/Komik-Indonesia.html"
        },
        {
            "id": "14",
            "name": "Komik Jepang & Asing",
            "sub_category": [
                {
                    "id": "1135",
                    "name": "Aadventure",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1135/aadventure.html"
                },
                {
                    "id": "456",
                    "name": "Action",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-456/action.html"
                },
                {
                    "id": "1167",
                    "name": "Acton",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1167/acton.html"
                },
                {
                    "id": "1308",
                    "name": "Adult",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1308/adult.html"
                },
                {
                    "id": "1062",
                    "name": "Adventure",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1062/adventure.html"
                },
                {
                    "id": "1114",
                    "name": "Animals",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1114/animals.html"
                },
                {
                    "id": "1094",
                    "name": "Baby",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1094/baby.html"
                },
                {
                    "id": "1037",
                    "name": "Band",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1037/band.html"
                },
                {
                    "id": "1309",
                    "name": "Basket Ball",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1309/basket-ball.html"
                },
                {
                    "id": "1122",
                    "name": "Basketball",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1122/basketball.html"
                },
                {
                    "id": "1028",
                    "name": "Battle",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1028/battle.html"
                },
                {
                    "id": "1103",
                    "name": "Brotherhood",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1103/brotherhood.html"
                },
                {
                    "id": "1109",
                    "name": "Bullying",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1109/bullying.html"
                },
                {
                    "id": "1127",
                    "name": "Cafe",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1127/cafe.html"
                },
                {
                    "id": "1033",
                    "name": "Chef",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1033/chef.html"
                },
                {
                    "id": "1128",
                    "name": "Chibi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1128/chibi.html"
                },
                {
                    "id": "1111",
                    "name": "Children Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1111/children-books.html"
                },
                {
                    "id": "472",
                    "name": "Comedy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-472/comedy.html"
                },
                {
                    "id": "1054",
                    "name": "Comics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1054/comics.html"
                },
                {
                    "id": "1102",
                    "name": "Cook",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1102/cook.html"
                },
                {
                    "id": "1039",
                    "name": "Cooking",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1039/cooking.html"
                },
                {
                    "id": "1096",
                    "name": "Curry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1096/curry.html"
                },
                {
                    "id": "1045",
                    "name": "Dara",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1045/dara.html"
                },
                {
                    "id": "1089",
                    "name": "Dark",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1089/dark.html"
                },
                {
                    "id": "1121",
                    "name": "Detective",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1121/detective.html"
                },
                {
                    "id": "707",
                    "name": "Drama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-707/drama.html"
                },
                {
                    "id": "1030",
                    "name": "Emperor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1030/emperor.html"
                },
                {
                    "id": "1048",
                    "name": "Family",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1048/family.html"
                },
                {
                    "id": "1032",
                    "name": "Fantasy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1032/fantasy.html"
                },
                {
                    "id": "1087",
                    "name": "Fantsay",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1087/fantsay.html"
                },
                {
                    "id": "1124",
                    "name": "Fight",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1124/fight.html"
                },
                {
                    "id": "1063",
                    "name": "Food",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1063/food.html"
                },
                {
                    "id": "1070",
                    "name": "Friendship",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1070/friendship.html"
                },
                {
                    "id": "1119",
                    "name": "Games",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1119/games.html"
                },
                {
                    "id": "1120",
                    "name": "Girls",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1120/girls.html"
                },
                {
                    "id": "1069",
                    "name": "Historical",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1069/historical.html"
                },
                {
                    "id": "93",
                    "name": "Horor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-93/horor.html"
                },
                {
                    "id": "1035",
                    "name": "Horror",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1035/horror.html"
                },
                {
                    "id": "1095",
                    "name": "Horror.slice Of Life",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1095/horror-slice-of-life.html"
                },
                {
                    "id": "1059",
                    "name": "Idol",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1059/idol.html"
                },
                {
                    "id": "1247",
                    "name": "Ijime",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1247/ijime.html"
                },
                {
                    "id": "1090",
                    "name": "Intrigue",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1090/intrigue.html"
                },
                {
                    "id": "1106",
                    "name": "Investigation",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1106/investigation.html"
                },
                {
                    "id": "448",
                    "name": "Jepang",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-448/jepang.html"
                },
                {
                    "id": "1031",
                    "name": "Josei",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1031/josei.html"
                },
                {
                    "id": "1091",
                    "name": "Kendo",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1091/kendo.html"
                },
                {
                    "id": "1086",
                    "name": "Kingdom",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1086/kingdom.html"
                },
                {
                    "id": "54",
                    "name": "Komik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-54/komik.html"
                },
                {
                    "id": "152",
                    "name": "Komik dan Novel Grafis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-152/komik-dan-novel-grafis.html"
                },
                {
                    "id": "489",
                    "name": "Korea",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-489/korea.html"
                },
                {
                    "id": "1041",
                    "name": "Magic",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1041/magic.html"
                },
                {
                    "id": "156",
                    "name": "Manga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-156/manga.html"
                },
                {
                    "id": "1084",
                    "name": "Mangaka",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1084/mangaka.html"
                },
                {
                    "id": "490",
                    "name": "Manhwa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-490/manhwa.html"
                },
                {
                    "id": "879",
                    "name": "Mother's Love",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-879/mother-s-love.html"
                },
                {
                    "id": "1040",
                    "name": "Mystery",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1040/mystery.html"
                },
                {
                    "id": "1126",
                    "name": "Office",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1126/office.html"
                },
                {
                    "id": "1093",
                    "name": "PET",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1093/pet.html"
                },
                {
                    "id": "1098",
                    "name": "Pets",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1098/pets.html"
                },
                {
                    "id": "1023",
                    "name": "Psychic",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1023/psychic.html"
                },
                {
                    "id": "1125",
                    "name": "Psychological",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1125/psychological.html"
                },
                {
                    "id": "1112",
                    "name": "Rama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1112/rama.html"
                },
                {
                    "id": "1088",
                    "name": "Revenge",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1088/revenge.html"
                },
                {
                    "id": "449",
                    "name": "Romance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-449/romance.html"
                },
                {
                    "id": "1101",
                    "name": "Samurai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1101/samurai.html"
                },
                {
                    "id": "477",
                    "name": "School Life",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-477/school-life.html"
                },
                {
                    "id": "1099",
                    "name": "Sci Fi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1099/sci-fi.html"
                },
                {
                    "id": "1113",
                    "name": "Science",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1113/science.html"
                },
                {
                    "id": "1077",
                    "name": "Science Fiction",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1077/science-fiction.html"
                },
                {
                    "id": "1076",
                    "name": "Seinen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1076/seinen.html"
                },
                {
                    "id": "1085",
                    "name": "Seiyuu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1085/seiyuu.html"
                },
                {
                    "id": "450",
                    "name": "Shoujo",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-450/shoujo.html"
                },
                {
                    "id": "452",
                    "name": "Shoujou",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-452/shoujou.html"
                },
                {
                    "id": "457",
                    "name": "Shounen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-457/shounen.html"
                },
                {
                    "id": "1024",
                    "name": "Slice Of Life",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1024/slice-of-life.html"
                },
                {
                    "id": "1117",
                    "name": "Space",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1117/space.html"
                },
                {
                    "id": "1049",
                    "name": "Special Edition",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1049/special-edition.html"
                },
                {
                    "id": "1025",
                    "name": "Sport",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1025/sport.html"
                },
                {
                    "id": "1034",
                    "name": "Sports",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1034/sports.html"
                },
                {
                    "id": "1105",
                    "name": "Supernatural",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1105/supernatural.html"
                },
                {
                    "id": "1061",
                    "name": "Supranatural",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1061/supranatural.html"
                },
                {
                    "id": "1100",
                    "name": "Teenage",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1100/teenage.html"
                },
                {
                    "id": "1055",
                    "name": "Teenagers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1055/teenagers.html"
                },
                {
                    "id": "1029",
                    "name": "Tennis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1029/tennis.html"
                },
                {
                    "id": "1042",
                    "name": "Tragedy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1042/tragedy.html"
                },
                {
                    "id": "1130",
                    "name": "Vampire",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1130/vampire.html"
                },
                {
                    "id": "1036",
                    "name": "WAR",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1036/war.html"
                },
                {
                    "id": "1092",
                    "name": "Yokai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1092/yokai.html"
                },
                {
                    "id": "1110",
                    "name": "Zombie",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1110/zombie.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-14/Komik-Jepang-%26-Asing.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-14/Komik-Jepang-%26-Asing.html"
        },
        {
            "id": "15",
            "name": "Komputer & Teknologi",
            "sub_category": [
                {
                    "id": "1352",
                    "name": "Aplikasi Dan Software",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1352/aplikasi-dan-software.html"
                },
                {
                    "id": "1298",
                    "name": "Aplikasi office",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1298/aplikasi-office.html"
                },
                {
                    "id": "896",
                    "name": "Bahasa Pemrograman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-896/bahasa-pemrograman.html"
                },
                {
                    "id": "125",
                    "name": "CD",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-125/cd.html"
                },
                {
                    "id": "1082",
                    "name": "Cd/vcd Pembelajaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1082/cd-vcd-pembelajaran.html"
                },
                {
                    "id": "1392",
                    "name": "Computer & Internet",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1392/computer-internet.html"
                },
                {
                    "id": "1391",
                    "name": "Computer Science",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1391/computer-science.html"
                },
                {
                    "id": "87",
                    "name": "Database",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-87/database.html"
                },
                {
                    "id": "77",
                    "name": "Desain Web",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-77/desain-web.html"
                },
                {
                    "id": "1378",
                    "name": "Embedded System",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1378/embedded-system.html"
                },
                {
                    "id": "1373",
                    "name": "Gadget",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1373/gadget.html"
                },
                {
                    "id": "1011",
                    "name": "Game Pendidikan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1011/game-pendidikan.html"
                },
                {
                    "id": "1017",
                    "name": "Hacker",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1017/hacker.html"
                },
                {
                    "id": "750",
                    "name": "Handphone",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-750/handphone.html"
                },
                {
                    "id": "583",
                    "name": "Hardware",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-583/hardware.html"
                },
                {
                    "id": "597",
                    "name": "Ilmu Komputer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-597/ilmu-komputer.html"
                },
                {
                    "id": "1421",
                    "name": "Ilmu Pengetahuan Dan Teknologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1421/ilmu-pengetahuan-dan-teknologi.html"
                },
                {
                    "id": "81",
                    "name": "Internet",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-81/internet.html"
                },
                {
                    "id": "646",
                    "name": "IT",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-646/it.html"
                },
                {
                    "id": "70",
                    "name": "Jaringan ",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-70/jaringan.html"
                },
                {
                    "id": "956",
                    "name": "Keamanan Komputer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-956/keamanan-komputer.html"
                },
                {
                    "id": "1046",
                    "name": "Komputer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1046/komputer.html"
                },
                {
                    "id": "59",
                    "name": "Komputer & Teknologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-59/komputer-teknologi.html"
                },
                {
                    "id": "1351",
                    "name": "Komputer Dan Internet",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1351/komputer-dan-internet.html"
                },
                {
                    "id": "324",
                    "name": "Komputer Statistika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-324/komputer-statistika.html"
                },
                {
                    "id": "589",
                    "name": "Literatur Komputer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-589/literatur-komputer.html"
                },
                {
                    "id": "108",
                    "name": "Multimedia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-108/multimedia.html"
                },
                {
                    "id": "73",
                    "name": "Pemrograman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-73/pemrograman.html"
                },
                {
                    "id": "595",
                    "name": "Penel. & Statistik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-595/penel-statistik.html"
                },
                {
                    "id": "1509",
                    "name": "Proceeding",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1509/proceeding.html"
                },
                {
                    "id": "694",
                    "name": "Robotika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-694/robotika.html"
                },
                {
                    "id": "105",
                    "name": "Sistem Informasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-105/sistem-informasi.html"
                },
                {
                    "id": "74",
                    "name": "Software",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-74/software.html"
                },
                {
                    "id": "58",
                    "name": "Teknik Informatika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-58/teknik-informatika.html"
                },
                {
                    "id": "1228",
                    "name": "Teknologi & Rekayasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1228/teknologi-rekayasa.html"
                },
                {
                    "id": "151",
                    "name": "Teknologi dan Rekayasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-151/teknologi-dan-rekayasa.html"
                },
                {
                    "id": "1493",
                    "name": "Teknologi Hasil Pertanian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1493/teknologi-hasil-pertanian.html"
                },
                {
                    "id": "1379",
                    "name": "Teknologi Pertanian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1379/teknologi-pertanian.html"
                },
                {
                    "id": "1239",
                    "name": "TIK",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1239/tik.html"
                },
                {
                    "id": "1529",
                    "name": "Website",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1529/website.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-15/Komputer-%26-Teknologi.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-15/Komputer-%26-Teknologi.html"
        },
        {
            "id": "27",
            "name": "Majalah",
            "sub_category": [
                {
                    "id": "1244",
                    "name": "Dogs",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1244/dogs.html"
                },
                {
                    "id": "1140",
                    "name": "Faantasy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1140/faantasy.html"
                },
                {
                    "id": "1320",
                    "name": "Katalog Esis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1320/katalog-esis.html"
                },
                {
                    "id": "485",
                    "name": "Magazine",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-485/magazine.html"
                },
                {
                    "id": "129",
                    "name": "Majalah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-129/majalah.html"
                },
                {
                    "id": "265",
                    "name": "Majalah Bina Prestasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-265/majalah-bina-prestasi.html"
                },
                {
                    "id": "278",
                    "name": "Majalah Bravo!",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-278/majalah-bravo.html"
                },
                {
                    "id": "1369",
                    "name": "Mystery And Thriller",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1369/mystery-and-thriller.html"
                },
                {
                    "id": "1248",
                    "name": "Package",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1248/package.html"
                },
                {
                    "id": "1253",
                    "name": "Pcpk",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1253/pcpk.html"
                },
                {
                    "id": "1476",
                    "name": "Perpustakaan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1476/perpustakaan.html"
                },
                {
                    "id": "1490",
                    "name": "Pertanian/ Peternakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1490/pertanian-peternakan.html"
                },
                {
                    "id": "1189",
                    "name": "Perti Lainnya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1189/perti-lainnya.html"
                },
                {
                    "id": "1268",
                    "name": "Pink Berry Club ( Pbc)",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1268/pink-berry-club-pbc.html"
                },
                {
                    "id": "1394",
                    "name": "Teenlit",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1394/teenlit.html"
                },
                {
                    "id": "1494",
                    "name": "Terlaris",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1494/terlaris.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-27/Majalah.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-27/Majalah.html"
        },
        {
            "id": "16",
            "name": "Manajemen & Bisnis",
            "sub_category": [
                {
                    "id": "990",
                    "name": "Administrasi Negara",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-990/administrasi-negara.html"
                },
                {
                    "id": "1371",
                    "name": "Agribisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1371/agribisnis.html"
                },
                {
                    "id": "591",
                    "name": "Bisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-591/bisnis.html"
                },
                {
                    "id": "1423",
                    "name": "Bisnis & Ekonomi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1423/bisnis-ekonomi.html"
                },
                {
                    "id": "590",
                    "name": "Bisnis & Investasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-590/bisnis-investasi.html"
                },
                {
                    "id": "919",
                    "name": "Bisnis, Manajemen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-919/bisnis-manajemen.html"
                },
                {
                    "id": "113",
                    "name": "Bursa Berjangka",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-113/bursa-berjangka.html"
                },
                {
                    "id": "1385",
                    "name": "Business & Economics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1385/business-economics.html"
                },
                {
                    "id": "1340",
                    "name": "Business And Economics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1340/business-and-economics.html"
                },
                {
                    "id": "143",
                    "name": "Ekonomi dan Bisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-143/ekonomi-dan-bisnis.html"
                },
                {
                    "id": "704",
                    "name": "Ekonomis Dan Bisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-704/ekonomis-dan-bisnis.html"
                },
                {
                    "id": "1003",
                    "name": "Ilmu Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1003/ilmu-sosial.html"
                },
                {
                    "id": "1303",
                    "name": "Impor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1303/impor.html"
                },
                {
                    "id": "133",
                    "name": "investasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-133/investasi.html"
                },
                {
                    "id": "944",
                    "name": "Keguruan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-944/keguruan.html"
                },
                {
                    "id": "1272",
                    "name": "Management, Bisnis, Dan Keuangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1272/management-bisnis-dan-keuangan.html"
                },
                {
                    "id": "241",
                    "name": "Manajemen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-241/manajemen.html"
                },
                {
                    "id": "41",
                    "name": "Manajemen & Bisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-41/manajemen-bisnis.html"
                },
                {
                    "id": "1273",
                    "name": "Manajemen Dan Kepemimpinan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1273/manajemen-dan-kepemimpinan.html"
                },
                {
                    "id": "935",
                    "name": "Manajemen Produksi/Operasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-935/manajemen-produksi-operasi.html"
                },
                {
                    "id": "360",
                    "name": "Manajemen, Bisnis, dan Investasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-360/manajemen-bisnis-dan-investasi.html"
                },
                {
                    "id": "50",
                    "name": "Marketing",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-50/marketing.html"
                },
                {
                    "id": "712",
                    "name": "Marketing Dan Sales",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-712/marketing-dan-sales.html"
                },
                {
                    "id": "640",
                    "name": "Peluang Usaha",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-640/peluang-usaha.html"
                },
                {
                    "id": "777",
                    "name": "Pemasaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-777/pemasaran.html"
                },
                {
                    "id": "893",
                    "name": "Pembangunan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-893/pembangunan.html"
                },
                {
                    "id": "110",
                    "name": "Periklanan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-110/periklanan.html"
                },
                {
                    "id": "1289",
                    "name": "Statistik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1289/statistik.html"
                },
                {
                    "id": "170",
                    "name": "Wirausaha",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-170/wirausaha.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-16/Manajemen-%26-Bisnis.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-16/Manajemen-%26-Bisnis.html"
        },
        {
            "id": "17",
            "name": "Motivasi & Pengembangan Diri",
            "sub_category": [
                {
                    "id": "681",
                    "name": "Chicken Soup For The Soul",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-681/chicken-soup-for-the-soul.html"
                },
                {
                    "id": "1131",
                    "name": "Dream Come True",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1131/dream-come-true.html"
                },
                {
                    "id": "1212",
                    "name": "Film",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1212/film.html"
                },
                {
                    "id": "134",
                    "name": "Filsafat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-134/filsafat.html"
                },
                {
                    "id": "1405",
                    "name": "Ilmu Pengetahuan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1405/ilmu-pengetahuan.html"
                },
                {
                    "id": "1503",
                    "name": "Inspirasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1503/inspirasi.html"
                },
                {
                    "id": "607",
                    "name": "Inspirasional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-607/inspirasional.html"
                },
                {
                    "id": "775",
                    "name": "Inspiratif",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-775/inspiratif.html"
                },
                {
                    "id": "104",
                    "name": "Karir",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-104/karir.html"
                },
                {
                    "id": "109",
                    "name": "Kepemimpinan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-109/kepemimpinan.html"
                },
                {
                    "id": "345",
                    "name": "Kiat Sukses",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-345/kiat-sukses.html"
                },
                {
                    "id": "42",
                    "name": "Komunikasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-42/komunikasi.html"
                },
                {
                    "id": "257",
                    "name": "Konseling",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-257/konseling.html"
                },
                {
                    "id": "1323",
                    "name": "Look Ahead",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1323/look-ahead.html"
                },
                {
                    "id": "1246",
                    "name": "Mature",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1246/mature.html"
                },
                {
                    "id": "342",
                    "name": "Motivasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-342/motivasi.html"
                },
                {
                    "id": "1326",
                    "name": "Motivasi & Inspirasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1326/motivasi-inspirasi.html"
                },
                {
                    "id": "1496",
                    "name": "Motivasi Islami",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1496/motivasi-islami.html"
                },
                {
                    "id": "323",
                    "name": "Motivasi&Inspirasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-323/motivasi-inspirasi.html"
                },
                {
                    "id": "264",
                    "name": "Pengembangan Diri",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-264/pengembangan-diri.html"
                },
                {
                    "id": "38",
                    "name": "Pengembangan Diri & Motivasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-38/pengembangan-diri-motivasi.html"
                },
                {
                    "id": "358",
                    "name": "Pengembangan Diri dan Inspirasional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-358/pengembangan-diri-dan-inspirasional.html"
                },
                {
                    "id": "1214",
                    "name": "Perjalanan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1214/perjalanan.html"
                },
                {
                    "id": "1372",
                    "name": "Self Development",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1372/self-development.html"
                },
                {
                    "id": "1071",
                    "name": "Self Help",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1071/self-help.html"
                },
                {
                    "id": "1338",
                    "name": "Self Improvement",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1338/self-improvement.html"
                },
                {
                    "id": "147",
                    "name": "Self-Help",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-147/self-help.html"
                },
                {
                    "id": "1497",
                    "name": "Teenligi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1497/teenligi.html"
                },
                {
                    "id": "1477",
                    "name": "Tips Dan Trik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1477/tips-dan-trik.html"
                },
                {
                    "id": "1182",
                    "name": "Umum Lainnya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1182/umum-lainnya.html"
                },
                {
                    "id": "1276",
                    "name": "Usaha Kecil & Kewirausahaan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1276/usaha-kecil-kewirausahaan.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-17/Motivasi-%26-Pengembangan-Diri.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-17/Motivasi-%26-Pengembangan-Diri.html"
        },
        {
            "id": "18",
            "name": "Novel",
            "sub_category": [
                {
                    "id": "1506",
                    "name": " Umum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1506/umum.html"
                },
                {
                    "id": "53",
                    "name": "Bacaan Remaja",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-53/bacaan-remaja.html"
                },
                {
                    "id": "1287",
                    "name": "Bromance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1287/bromance.html"
                },
                {
                    "id": "1466",
                    "name": "Classics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1466/classics.html"
                },
                {
                    "id": "1168",
                    "name": "Drama.horror",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1168/drama-horror.html"
                },
                {
                    "id": "121",
                    "name": "Fantasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-121/fantasi.html"
                },
                {
                    "id": "1374",
                    "name": "Fiction & Literature",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1374/fiction-literature.html"
                },
                {
                    "id": "1516",
                    "name": "Fiction, Drama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1516/fiction-drama.html"
                },
                {
                    "id": "1511",
                    "name": "Fiction, Novel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1511/fiction-novel.html"
                },
                {
                    "id": "1513",
                    "name": "Fiction, Short Story",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1513/fiction-short-story.html"
                },
                {
                    "id": "1518",
                    "name": "Fiction, Story, Poetry,photograph,essay",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1518/fiction-story-poetry-photograph-essay.html"
                },
                {
                    "id": "1514",
                    "name": "Fiction,poetry,photographs,essay",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1514/fiction-poetry-photographs-essay.html"
                },
                {
                    "id": "1517",
                    "name": "Fiction,story,potry,photograph,essay",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1517/fiction-story-potry-photograph-essay.html"
                },
                {
                    "id": "1535",
                    "name": "Fiction: Fantasy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1535/fiction-fantasy.html"
                },
                {
                    "id": "1533",
                    "name": "Fiction: Mystery And Thriller",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1533/fiction-mystery-and-thriller.html"
                },
                {
                    "id": "140",
                    "name": "Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-140/fiksi.html"
                },
                {
                    "id": "366",
                    "name": "Fiksi dan Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-366/fiksi-dan-sastra.html"
                },
                {
                    "id": "1116",
                    "name": "Gaya hidup, literatur",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1116/gaya-hidup-literatur.html"
                },
                {
                    "id": "84",
                    "name": "Kisah Nyata",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-84/kisah-nyata.html"
                },
                {
                    "id": "1165",
                    "name": "Love",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1165/love.html"
                },
                {
                    "id": "83",
                    "name": "Love & Relationship",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-83/love-relationship.html"
                },
                {
                    "id": "1364",
                    "name": "Middle Grade Readers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1364/middle-grade-readers.html"
                },
                {
                    "id": "118",
                    "name": "Misteri & Horor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-118/misteri-horor.html"
                },
                {
                    "id": "1520",
                    "name": "N0n Fiction,essay,photograph",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1520/n0n-fiction-essay-photograph.html"
                },
                {
                    "id": "1521",
                    "name": "Non  Fiction",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1521/non-fiction.html"
                },
                {
                    "id": "1515",
                    "name": "Non Fiction, Essay, Photograph",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1515/non-fiction-essay-photograph.html"
                },
                {
                    "id": "1504",
                    "name": "Non Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1504/non-fiksi.html"
                },
                {
                    "id": "174",
                    "name": "Novel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-174/novel.html"
                },
                {
                    "id": "1295",
                    "name": "Novel & Kumpulan Cerita",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1295/novel-kumpulan-cerita.html"
                },
                {
                    "id": "1193",
                    "name": "Novel Dewasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1193/novel-dewasa.html"
                },
                {
                    "id": "1201",
                    "name": "Novel Fantasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1201/novel-fantasi.html"
                },
                {
                    "id": "32",
                    "name": "Novel Fiksi & Cerpen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-32/novel-fiksi-cerpen.html"
                },
                {
                    "id": "1205",
                    "name": "Novel Islami",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1205/novel-islami.html"
                },
                {
                    "id": "1225",
                    "name": "Novel Misteri",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1225/novel-misteri.html"
                },
                {
                    "id": "79",
                    "name": "Novel Non-Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-79/novel-non-fiksi.html"
                },
                {
                    "id": "1234",
                    "name": "Novel Populer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1234/novel-populer.html"
                },
                {
                    "id": "1233",
                    "name": "Novel Remaja",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1233/novel-remaja.html"
                },
                {
                    "id": "1241",
                    "name": "One Shot",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1241/one-shot.html"
                },
                {
                    "id": "1132",
                    "name": "Palace",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1132/palace.html"
                },
                {
                    "id": "1215",
                    "name": "Petualangan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1215/petualangan.html"
                },
                {
                    "id": "1370",
                    "name": "Poetry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1370/poetry.html"
                },
                {
                    "id": "1398",
                    "name": "Pop Novel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1398/pop-novel.html"
                },
                {
                    "id": "1410",
                    "name": "Remaja Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1410/remaja-fiksi.html"
                },
                {
                    "id": "78",
                    "name": "Roman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-78/roman.html"
                },
                {
                    "id": "1022",
                    "name": "Rpmance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1022/rpmance.html"
                },
                {
                    "id": "1180",
                    "name": "See Inside",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1180/see-inside.html"
                },
                {
                    "id": "1366",
                    "name": "Short Stories",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1366/short-stories.html"
                },
                {
                    "id": "1245",
                    "name": "Shoujo School Life",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1245/shoujo-school-life.html"
                },
                {
                    "id": "1312",
                    "name": "Strawberry Shortcake",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1312/strawberry-shortcake.html"
                },
                {
                    "id": "1532",
                    "name": "Teen Young Adult",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1532/teen-young-adult.html"
                },
                {
                    "id": "94",
                    "name": "Thriller",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-94/thriller.html"
                },
                {
                    "id": "1408",
                    "name": "Tulisan Tulisan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1408/tulisan-tulisan.html"
                },
                {
                    "id": "1296",
                    "name": "Ulysses Moore",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1296/ulysses-moore.html"
                },
                {
                    "id": "1479",
                    "name": "Vokasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1479/vokasi.html"
                },
                {
                    "id": "1367",
                    "name": "Young Adult",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1367/young-adult.html"
                },
                {
                    "id": "1171",
                    "name": "Zombie Apocalypse",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1171/zombie-apocalypse.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-18/Novel.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-18/Novel.html"
        },
        {
            "id": "19",
            "name": "Orang Tua & Keluarga",
            "sub_category": [
                {
                    "id": "1187",
                    "name": "Aktivitas Lainnya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1187/aktivitas-lainnya.html"
                },
                {
                    "id": "368",
                    "name": "Anak dan Keluarga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-368/anak-dan-keluarga.html"
                },
                {
                    "id": "578",
                    "name": "Anak-anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-578/anak-anak.html"
                },
                {
                    "id": "103",
                    "name": "Bayi dan Balita",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-103/bayi-dan-balita.html"
                },
                {
                    "id": "616",
                    "name": "Cinta Pernikahan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-616/cinta-pernikahan.html"
                },
                {
                    "id": "1178",
                    "name": "Gender Bender",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1178/gender-bender.html"
                },
                {
                    "id": "772",
                    "name": "Ibu Hamil",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-772/ibu-hamil.html"
                },
                {
                    "id": "255",
                    "name": "Kasih Sayang Keluarga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-255/kasih-sayang-keluarga.html"
                },
                {
                    "id": "352",
                    "name": "Kehamilan dan Perawatan Bayi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-352/kehamilan-dan-perawatan-bayi.html"
                },
                {
                    "id": "175",
                    "name": "Keluarga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-175/keluarga.html"
                },
                {
                    "id": "754",
                    "name": "Keluarga dan Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-754/keluarga-dan-anak.html"
                },
                {
                    "id": "154",
                    "name": "Keluarga dan Kekerabatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-154/keluarga-dan-kekerabatan.html"
                },
                {
                    "id": "95",
                    "name": "Parenting",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-95/parenting.html"
                },
                {
                    "id": "1393",
                    "name": "Parenting & Family",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1393/parenting-family.html"
                },
                {
                    "id": "1464",
                    "name": "Parenting And Family",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1464/parenting-and-family.html"
                },
                {
                    "id": "1206",
                    "name": "Parenting Dan Keluarga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1206/parenting-dan-keluarga.html"
                },
                {
                    "id": "49",
                    "name": "Pendidikan Keluarga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-49/pendidikan-keluarga.html"
                },
                {
                    "id": "621",
                    "name": "Pintar Mengasuh Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-621/pintar-mengasuh-anak.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-19/Orang-Tua-%26-Keluarga.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-19/Orang-Tua-%26-Keluarga.html"
        },
        {
            "id": "28",
            "name": "Pariwisata & Perhotelan",
            "sub_category": [
                {
                    "id": "64",
                    "name": "Pariwisata & Perhotelan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-64/pariwisata-perhotelan.html"
                },
                {
                    "id": "1274",
                    "name": "Rekreasi Dan Wisata",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1274/rekreasi-dan-wisata.html"
                },
                {
                    "id": "377",
                    "name": "Traveling",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-377/traveling.html"
                },
                {
                    "id": "155",
                    "name": "Wisata",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-155/wisata.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-28/Pariwisata-%26-Perhotelan.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-28/Pariwisata-%26-Perhotelan.html"
        },
        {
            "id": "7",
            "name": "Pendidikan & Buku Pelajaran",
            "sub_category": [
                {
                    "id": "1508",
                    "name": " Ajar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1508/ajar.html"
                },
                {
                    "id": "1507",
                    "name": " Referensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1507/referensi.html"
                },
                {
                    "id": "585",
                    "name": " Sekolah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-585/sekolah.html"
                },
                {
                    "id": "1501",
                    "name": " Smu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1501/smu.html"
                },
                {
                    "id": "237",
                    "name": "Alat Peraga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-237/alat-peraga.html"
                },
                {
                    "id": "1316",
                    "name": "Anak Smart",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1316/anak-smart.html"
                },
                {
                    "id": "1333",
                    "name": "Astronomi Dan Ruang Angkasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1333/astronomi-dan-ruang-angkasa.html"
                },
                {
                    "id": "1330",
                    "name": "Atlas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1330/atlas.html"
                },
                {
                    "id": "258",
                    "name": "Atlas dan Geografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-258/atlas-dan-geografi.html"
                },
                {
                    "id": "1199",
                    "name": "Atlas Dan Map",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1199/atlas-dan-map.html"
                },
                {
                    "id": "1331",
                    "name": "Atlas Geografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1331/atlas-geografi.html"
                },
                {
                    "id": "586",
                    "name": "Bantu Belajar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-586/bantu-belajar.html"
                },
                {
                    "id": "244",
                    "name": "Basis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-244/basis.html"
                },
                {
                    "id": "279",
                    "name": "Bilingual SD",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-279/bilingual-sd.html"
                },
                {
                    "id": "287",
                    "name": "Bilingual SMA",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-287/bilingual-sma.html"
                },
                {
                    "id": "280",
                    "name": "Bilingual SMP",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-280/bilingual-smp.html"
                },
                {
                    "id": "194",
                    "name": "Biologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-194/biologi.html"
                },
                {
                    "id": "1297",
                    "name": "Buku sekolah SMP",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1297/buku-sekolah-smp.html"
                },
                {
                    "id": "1314",
                    "name": "Calistung",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1314/calistung.html"
                },
                {
                    "id": "715",
                    "name": "Clearance Sale  Perguruan Tinggi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-715/clearance-sale-perguruan-tinggi.html"
                },
                {
                    "id": "722",
                    "name": "Clearance Sale  Umum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-722/clearance-sale-umum.html"
                },
                {
                    "id": "1322",
                    "name": "English Edition",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1322/english-edition.html"
                },
                {
                    "id": "132",
                    "name": "Ensiklopedia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-132/ensiklopedia.html"
                },
                {
                    "id": "1484",
                    "name": "Fak Ilmu Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1484/fak-ilmu-budaya.html"
                },
                {
                    "id": "1491",
                    "name": "Fak. Kedokteran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1491/fak-kedokteran.html"
                },
                {
                    "id": "1471",
                    "name": "Fakultas Ekonomi Dan Bisnis",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1471/fakultas-ekonomi-dan-bisnis.html"
                },
                {
                    "id": "1470",
                    "name": "Fakultas Kedokteran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1470/fakultas-kedokteran.html"
                },
                {
                    "id": "1487",
                    "name": "FIB",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1487/fib.html"
                },
                {
                    "id": "189",
                    "name": "Fisika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-189/fisika.html"
                },
                {
                    "id": "1485",
                    "name": "Fisip",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1485/fisip.html"
                },
                {
                    "id": "300",
                    "name": "Flying Start",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-300/flying-start.html"
                },
                {
                    "id": "275",
                    "name": "Fokus",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-275/fokus.html"
                },
                {
                    "id": "1489",
                    "name": "FTP",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1489/ftp.html"
                },
                {
                    "id": "226",
                    "name": "Geografi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-226/geografi.html"
                },
                {
                    "id": "1406",
                    "name": "Glosarium",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1406/glosarium.html"
                },
                {
                    "id": "1221",
                    "name": "Grow With English",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1221/grow-with-english.html"
                },
                {
                    "id": "884",
                    "name": "Guru",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-884/guru.html"
                },
                {
                    "id": "1139",
                    "name": "High School",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1139/high-school.html"
                },
                {
                    "id": "1467",
                    "name": "Ilmu Administrasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1467/ilmu-administrasi.html"
                },
                {
                    "id": "1492",
                    "name": "Ilmu Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1492/ilmu-budaya.html"
                },
                {
                    "id": "1469",
                    "name": "Ilmu Sosial Dan Ilmu Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1469/ilmu-sosial-dan-ilmu-politik.html"
                },
                {
                    "id": "1482",
                    "name": "Ilmu Sosial Dan Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1482/ilmu-sosial-dan-politik.html"
                },
                {
                    "id": "1481",
                    "name": "Ilmu Sosial Ilmu Politik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1481/ilmu-sosial-ilmu-politik.html"
                },
                {
                    "id": "200",
                    "name": "IPA",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-200/ipa.html"
                },
                {
                    "id": "1302",
                    "name": "Ipa Biologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1302/ipa-biologi.html"
                },
                {
                    "id": "233",
                    "name": "IPS",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-233/ips.html"
                },
                {
                    "id": "199",
                    "name": "IPS Terpadu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-199/ips-terpadu.html"
                },
                {
                    "id": "1183",
                    "name": "Katalog Erlangga",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1183/katalog-erlangga.html"
                },
                {
                    "id": "729",
                    "name": "Kategori ",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-729/kategori.html"
                },
                {
                    "id": "1480",
                    "name": "Kedokteran Hewan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1480/kedokteran-hewan.html"
                },
                {
                    "id": "185",
                    "name": "Kewarganegaraan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-185/kewarganegaraan.html"
                },
                {
                    "id": "204",
                    "name": "Kimia",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-204/kimia.html"
                },
                {
                    "id": "1355",
                    "name": "Kisah Inspirasional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1355/kisah-inspirasional.html"
                },
                {
                    "id": "1057",
                    "name": "Koleksi Soal Un",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1057/koleksi-soal-un.html"
                },
                {
                    "id": "1222",
                    "name": "Kurikulum 2013",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1222/kurikulum-2013.html"
                },
                {
                    "id": "1282",
                    "name": "Lpr Sma",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1282/lpr-sma.html"
                },
                {
                    "id": "1283",
                    "name": "Lpr Smp",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1283/lpr-smp.html"
                },
                {
                    "id": "293",
                    "name": "Mandiri Fikih MI",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-293/mandiri-fikih-mi.html"
                },
                {
                    "id": "1488",
                    "name": "Mata Kuliah Umum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1488/mata-kuliah-umum.html"
                },
                {
                    "id": "206",
                    "name": "Matematika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-206/matematika.html"
                },
                {
                    "id": "1321",
                    "name": "Matematika Aktif",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1321/matematika-aktif.html"
                },
                {
                    "id": "315",
                    "name": "Matematika dan Sains",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-315/matematika-dan-sains.html"
                },
                {
                    "id": "602",
                    "name": "MIPA",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-602/mipa.html"
                },
                {
                    "id": "218",
                    "name": "Modul SMK",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-218/modul-smk.html"
                },
                {
                    "id": "1439",
                    "name": "Panduan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1439/panduan.html"
                },
                {
                    "id": "183",
                    "name": "Pelajaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-183/pelajaran.html"
                },
                {
                    "id": "1220",
                    "name": "Pelajaran Sekolah Sd",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1220/pelajaran-sekolah-sd.html"
                },
                {
                    "id": "1270",
                    "name": "Pelajaran Sekolah Sma",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1270/pelajaran-sekolah-sma.html"
                },
                {
                    "id": "1207",
                    "name": "Pelajaran Sekolah Smp",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1207/pelajaran-sekolah-smp.html"
                },
                {
                    "id": "625",
                    "name": "Pemuridan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-625/pemuridan.html"
                },
                {
                    "id": "632",
                    "name": "Pend Agm Kristen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-632/pend-agm-kristen.html"
                },
                {
                    "id": "196",
                    "name": "Pendalaman Materi (SMK)",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-196/pendalaman-materi-smk.html"
                },
                {
                    "id": "144",
                    "name": "Pendidikan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-144/pendidikan.html"
                },
                {
                    "id": "1188",
                    "name": "Pendidikan Agama Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1188/pendidikan-agama-islam.html"
                },
                {
                    "id": "167",
                    "name": "Pendidikan Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-167/pendidikan-anak.html"
                },
                {
                    "id": "1198",
                    "name": "Pendidikan Dan Referensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1198/pendidikan-dan-referensi.html"
                },
                {
                    "id": "1335",
                    "name": "Penelitian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1335/penelitian.html"
                },
                {
                    "id": "1527",
                    "name": "Pengetahuan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1527/pengetahuan.html"
                },
                {
                    "id": "644",
                    "name": "Penunjang Pelajaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-644/penunjang-pelajaran.html"
                },
                {
                    "id": "1502",
                    "name": "Penunjang Pelajaran Sma",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1502/penunjang-pelajaran-sma.html"
                },
                {
                    "id": "193",
                    "name": "Perguruan Tinggi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-193/perguruan-tinggi.html"
                },
                {
                    "id": "1204",
                    "name": "Persiapan Tes",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1204/persiapan-tes.html"
                },
                {
                    "id": "1185",
                    "name": "Plbj",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1185/plbj.html"
                },
                {
                    "id": "1104",
                    "name": "Poster",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1104/poster.html"
                },
                {
                    "id": "1357",
                    "name": "Pustaka Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1357/pustaka-anak.html"
                },
                {
                    "id": "1356",
                    "name": "Pustaka Muda",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1356/pustaka-muda.html"
                },
                {
                    "id": "1382",
                    "name": "Reference & Dicitionary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1382/reference-dicitionary.html"
                },
                {
                    "id": "1349",
                    "name": "Reference And Dictionary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1349/reference-and-dictionary.html"
                },
                {
                    "id": "1027",
                    "name": "Referensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1027/referensi.html"
                },
                {
                    "id": "60",
                    "name": "Sains",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-60/sains.html"
                },
                {
                    "id": "160",
                    "name": "Sains dan Matematika",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-160/sains-dan-matematika.html"
                },
                {
                    "id": "1261",
                    "name": "Sains Untuk Anak Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1261/sains-untuk-anak-anak.html"
                },
                {
                    "id": "1403",
                    "name": "Sanitasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1403/sanitasi.html"
                },
                {
                    "id": "1058",
                    "name": "Sbmptn",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1058/sbmptn.html"
                },
                {
                    "id": "1388",
                    "name": "School Book Indonesia Curriculum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1388/school-book-indonesia-curriculum.html"
                },
                {
                    "id": "88",
                    "name": "SD",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-88/sd.html"
                },
                {
                    "id": "1223",
                    "name": "Sd Kurikulum 2013",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1223/sd-kurikulum-2013.html"
                },
                {
                    "id": "1269",
                    "name": "Sekolah Dan Pengajaran",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1269/sekolah-dan-pengajaran.html"
                },
                {
                    "id": "89",
                    "name": "SLTP",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-89/sltp.html"
                },
                {
                    "id": "187",
                    "name": "SMA",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-187/sma.html"
                },
                {
                    "id": "1238",
                    "name": "Sma Kurikulum 2013",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1238/sma-kurikulum-2013.html"
                },
                {
                    "id": "222",
                    "name": "SMK",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-222/smk.html"
                },
                {
                    "id": "1281",
                    "name": "Smk Kurikulum 2013",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1281/smk-kurikulum-2013.html"
                },
                {
                    "id": "184",
                    "name": "SMP",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-184/smp.html"
                },
                {
                    "id": "1224",
                    "name": "Smp Kurikulum 2013",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1224/smp-kurikulum-2013.html"
                },
                {
                    "id": "90",
                    "name": "SMU",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-90/smu.html"
                },
                {
                    "id": "195",
                    "name": "Soal",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-195/soal.html"
                },
                {
                    "id": "1294",
                    "name": "Soal Sd Lainnya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1294/soal-sd-lainnya.html"
                },
                {
                    "id": "1259",
                    "name": "Studi Keagamaan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1259/studi-keagamaan.html"
                },
                {
                    "id": "66",
                    "name": "Text Book",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-66/text-book.html"
                },
                {
                    "id": "1179",
                    "name": "Tk & Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1179/tk-anak.html"
                },
                {
                    "id": "91",
                    "name": "Universitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-91/universitas.html"
                },
                {
                    "id": "1528",
                    "name": "Wacana Filsafat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1528/wacana-filsafat.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-7/Pendidikan-%26-Buku-Pelajaran.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-7/Pendidikan-%26-Buku-Pelajaran.html"
        },
        {
            "id": "25",
            "name": "Print on Demand",
            "sub_category": [
                {
                    "id": "123",
                    "name": "Print on Demand",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-123/print-on-demand.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-25/Print-on-Demand.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-25/Print-on-Demand.html"
        },
        {
            "id": "21",
            "name": "Psikologi Populer",
            "sub_category": [
                {
                    "id": "1123",
                    "name": "Anak Bukan Kertas Kosong",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1123/anak-bukan-kertas-kosong.html"
                },
                {
                    "id": "1097",
                    "name": "New Age",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1097/new-age.html"
                },
                {
                    "id": "43",
                    "name": "Psikologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-43/psikologi.html"
                },
                {
                    "id": "643",
                    "name": "Psikologi Populer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-643/psikologi-populer.html"
                },
                {
                    "id": "1461",
                    "name": "Psikology",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1461/psikology.html"
                },
                {
                    "id": "1304",
                    "name": "Psychology And Gender",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1304/psychology-and-gender.html"
                },
                {
                    "id": "1495",
                    "name": "Rekomendasi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1495/rekomendasi.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-21/Psikologi-Populer.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-21/Psikologi-Populer.html"
        },
        {
            "id": "22",
            "name": "Puisi & Sastra",
            "sub_category": [
                {
                    "id": "698",
                    "name": "Bacaan Sastra Dan Puisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-698/bacaan-sastra-dan-puisi.html"
                },
                {
                    "id": "1512",
                    "name": "Fiction, Poetry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1512/fiction-poetry.html"
                },
                {
                    "id": "1443",
                    "name": "Fiksi Puisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1443/fiksi-puisi.html"
                },
                {
                    "id": "1401",
                    "name": "Fiksi Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1401/fiksi-sastra.html"
                },
                {
                    "id": "1425",
                    "name": "Kritik Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1425/kritik-sastra.html"
                },
                {
                    "id": "1498",
                    "name": "Kumpulan_cerpen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1498/kumpulan_cerpen.html"
                },
                {
                    "id": "1438",
                    "name": "Literatur Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1438/literatur-fiksi.html"
                },
                {
                    "id": "1396",
                    "name": "Naskah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1396/naskah.html"
                },
                {
                    "id": "1219",
                    "name": "Portofolio Seni",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1219/portofolio-seni.html"
                },
                {
                    "id": "742",
                    "name": "Puisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-742/puisi.html"
                },
                {
                    "id": "787",
                    "name": "Puisi Esai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-787/puisi-esai.html"
                },
                {
                    "id": "639",
                    "name": "Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-639/sastra.html"
                },
                {
                    "id": "1429",
                    "name": "Sastra & Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1429/sastra-budaya.html"
                },
                {
                    "id": "31",
                    "name": "Sastra & Puisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-31/sastra-puisi.html"
                },
                {
                    "id": "1416",
                    "name": "Sastra Lisan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1416/sastra-lisan.html"
                },
                {
                    "id": "1381",
                    "name": "Teks   Perti",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1381/teks-perti.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-22/Puisi-%26-Sastra.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-22/Puisi-%26-Sastra.html"
        },
        {
            "id": "23",
            "name": "Religi & Spiritual",
            "sub_category": [
                {
                    "id": "159",
                    "name": "Agama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-159/agama.html"
                },
                {
                    "id": "582",
                    "name": "Agama  Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-582/agama-islam.html"
                },
                {
                    "id": "100",
                    "name": "Agama Budha",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-100/agama-budha.html"
                },
                {
                    "id": "1258",
                    "name": "Agama Dan Spiritualitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1258/agama-dan-spiritualitas.html"
                },
                {
                    "id": "97",
                    "name": "Agama Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-97/agama-islam.html"
                },
                {
                    "id": "101",
                    "name": "Agama Katolik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-101/agama-katolik.html"
                },
                {
                    "id": "99",
                    "name": "Agama Kristen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-99/agama-kristen.html"
                },
                {
                    "id": "1194",
                    "name": "Akhlaq",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1194/akhlaq.html"
                },
                {
                    "id": "1226",
                    "name": "Al Quran Dan Hadits",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1226/al-quran-dan-hadits.html"
                },
                {
                    "id": "1279",
                    "name": "Dialog Agama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1279/dialog-agama.html"
                },
                {
                    "id": "1255",
                    "name": "Fiqih Dan Muamalat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1255/fiqih-dan-muamalat.html"
                },
                {
                    "id": "1353",
                    "name": "Gereja Pelayanan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1353/gereja-pelayanan.html"
                },
                {
                    "id": "1256",
                    "name": "Hikmah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1256/hikmah.html"
                },
                {
                    "id": "164",
                    "name": "Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-164/islam.html"
                },
                {
                    "id": "650",
                    "name": "Islam Populer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-650/islam-populer.html"
                },
                {
                    "id": "631",
                    "name": "Kedewasaan Rohani",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-631/kedewasaan-rohani.html"
                },
                {
                    "id": "1354",
                    "name": "Kehidupan Kristen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1354/kehidupan-kristen.html"
                },
                {
                    "id": "163",
                    "name": "Kristen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-163/kristen.html"
                },
                {
                    "id": "1359",
                    "name": "Peperangan Rohani",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1359/peperangan-rohani.html"
                },
                {
                    "id": "606",
                    "name": "Ptumb. Rohani",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-606/ptumb-rohani.html"
                },
                {
                    "id": "743",
                    "name": "Religi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-743/religi.html"
                },
                {
                    "id": "1343",
                    "name": "Religion And Spirituality",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1343/religion-and-spirituality.html"
                },
                {
                    "id": "1217",
                    "name": "Sejarah Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1217/sejarah-islam.html"
                },
                {
                    "id": "610",
                    "name": "Sekolah Minggu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-610/sekolah-minggu.html"
                },
                {
                    "id": "1208",
                    "name": "Spiritualitas",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1208/spiritualitas.html"
                },
                {
                    "id": "1227",
                    "name": "Tasawuf",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1227/tasawuf.html"
                },
                {
                    "id": "1254",
                    "name": "Tokoh Muslim",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1254/tokoh-muslim.html"
                },
                {
                    "id": "1203",
                    "name": "Wacana Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1203/wacana-islam.html"
                },
                {
                    "id": "1284",
                    "name": "Zikir Dan Doa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1284/zikir-dan-doa.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-23/Religi-%26-Spiritual.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-23/Religi-%26-Spiritual.html"
        },
        {
            "id": "29",
            "name": "Sains & Teknik",
            "sub_category": [
                {
                    "id": "1334",
                    "name": "Elektro",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1334/elektro.html"
                },
                {
                    "id": "1383",
                    "name": "Engineering",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1383/engineering.html"
                },
                {
                    "id": "1384",
                    "name": "Robotika & Embedded System",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1384/robotika-embedded-system.html"
                },
                {
                    "id": "1260",
                    "name": "Sains Dan Teknologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1260/sains-dan-teknologi.html"
                },
                {
                    "id": "65",
                    "name": "Teknik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-65/teknik.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-29/Sains-%26-Teknik.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-29/Sains-%26-Teknik.html"
        },
        {
            "id": "24",
            "name": "Sejarah & Budaya",
            "sub_category": [
                {
                    "id": "232",
                    "name": "Antropologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-232/antropologi.html"
                },
                {
                    "id": "1422",
                    "name": "Arkeologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1422/arkeologi.html"
                },
                {
                    "id": "653",
                    "name": "Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-653/budaya.html"
                },
                {
                    "id": "1365",
                    "name": "Culture",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1365/culture.html"
                },
                {
                    "id": "1534",
                    "name": "Fiction: Poetry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1534/fiction-poetry.html"
                },
                {
                    "id": "1454",
                    "name": "Fiksi Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1454/fiksi-sejarah.html"
                },
                {
                    "id": "1409",
                    "name": "Filology",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1409/filology.html"
                },
                {
                    "id": "1510",
                    "name": "Historical Romance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1510/historical-romance.html"
                },
                {
                    "id": "1136",
                    "name": "History",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1136/history.html"
                },
                {
                    "id": "344",
                    "name": "Klasik/Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-344/klasik-sejarah.html"
                },
                {
                    "id": "1395",
                    "name": "Lingkungan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1395/lingkungan.html"
                },
                {
                    "id": "1440",
                    "name": "Sastra & Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1440/sastra-sejarah.html"
                },
                {
                    "id": "158",
                    "name": "Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-158/sejarah.html"
                },
                {
                    "id": "1445",
                    "name": "Sejarah & Arkeologi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1445/sejarah-arkeologi.html"
                },
                {
                    "id": "37",
                    "name": "Sejarah & Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-37/sejarah-budaya.html"
                },
                {
                    "id": "1456",
                    "name": "Sejarah Dan Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1456/sejarah-dan-budaya.html"
                },
                {
                    "id": "1424",
                    "name": "Sosial & Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1424/sosial-budaya.html"
                },
                {
                    "id": "1433",
                    "name": "Sosial & Budaya'",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1433/sosial-budaya.html"
                },
                {
                    "id": "1415",
                    "name": "Sosial & Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1415/sosial-sejarah.html"
                },
                {
                    "id": "1177",
                    "name": "Taaruf",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1177/taaruf.html"
                },
                {
                    "id": "1400",
                    "name": "Tradisi Lisan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1400/tradisi-lisan.html"
                },
                {
                    "id": "1523",
                    "name": "Wayang",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1523/wayang.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-24/Sejarah-%26-Budaya.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-24/Sejarah-%26-Budaya.html"
        },
        {
            "id": 0,
            "name": "Lainnya",
            "sub_category": [
                {
                    "id": "1609",
                    "name": " Anak & Remaja",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1609/anak-remaja.html"
                },
                {
                    "id": "1611",
                    "name": "Agama &filsafat",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1611/agama-filsafat.html"
                },
                {
                    "id": "1545",
                    "name": "Ajar",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1545/ajar.html"
                },
                {
                    "id": "1642",
                    "name": "Art Design",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1642/art-design.html"
                },
                {
                    "id": "1615",
                    "name": "Business Popular",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1615/business-popular.html"
                },
                {
                    "id": "1563",
                    "name": "Catatan Harian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1563/catatan-harian.html"
                },
                {
                    "id": "1564",
                    "name": "Celoteh",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1564/celoteh.html"
                },
                {
                    "id": "1568",
                    "name": "Cerpen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1568/cerpen.html"
                },
                {
                    "id": "1569",
                    "name": "Children's Story Book",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1569/children-s-story-book.html"
                },
                {
                    "id": "1619",
                    "name": "Children: Beginning Readers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1619/children-beginning-readers.html"
                },
                {
                    "id": "1645",
                    "name": "Children: Comics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1645/children-comics.html"
                },
                {
                    "id": "1560",
                    "name": "Children: Middle Grade Readers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1560/children-middle-grade-readers.html"
                },
                {
                    "id": "1590",
                    "name": "Childrens Books",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1590/childrens-books.html"
                },
                {
                    "id": "1631",
                    "name": "Comic",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1631/comic.html"
                },
                {
                    "id": "1613",
                    "name": "Computer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1613/computer.html"
                },
                {
                    "id": "1581",
                    "name": "Craft, Culinary, And Fashion: Beauty And Fashion",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1581/craft-culinary-and-fashion-beauty-and-fashion.html"
                },
                {
                    "id": "1540",
                    "name": "Craft, Culinary, And Fashion: Craft",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1540/craft-culinary-and-fashion-craft.html"
                },
                {
                    "id": "1549",
                    "name": "Craft, Culinary, And Fashion: Culinary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1549/craft-culinary-and-fashion-culinary.html"
                },
                {
                    "id": "1620",
                    "name": "Economics & Accounting",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1620/economics-accounting.html"
                },
                {
                    "id": "1591",
                    "name": "Ensiklopedi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1591/ensiklopedi.html"
                },
                {
                    "id": "1565",
                    "name": "Esai",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1565/esai.html"
                },
                {
                    "id": "1592",
                    "name": "Fiction: Amore",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1592/fiction-amore.html"
                },
                {
                    "id": "1639",
                    "name": "Fiction: Chicklit",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1639/fiction-chicklit.html"
                },
                {
                    "id": "1607",
                    "name": "Fiction: Classics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1607/fiction-classics.html"
                },
                {
                    "id": "1555",
                    "name": "Fiction: Family Life",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1555/fiction-family-life.html"
                },
                {
                    "id": "1586",
                    "name": "Fiction: Graphic Novel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1586/fiction-graphic-novel.html"
                },
                {
                    "id": "1585",
                    "name": "Fiction: Harlequin",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1585/fiction-harlequin.html"
                },
                {
                    "id": "1597",
                    "name": "Fiction: Historical Romance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1597/fiction-historical-romance.html"
                },
                {
                    "id": "1583",
                    "name": "Fiction: Illustrated Book",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1583/fiction-illustrated-book.html"
                },
                {
                    "id": "1539",
                    "name": "Fiction: Literary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1539/fiction-literary.html"
                },
                {
                    "id": "1604",
                    "name": "Fiction: Metropop",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1604/fiction-metropop.html"
                },
                {
                    "id": "1572",
                    "name": "Fiction: Movie Tie In",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1572/fiction-movie-tie-in.html"
                },
                {
                    "id": "1547",
                    "name": "Fiction: Romance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1547/fiction-romance.html"
                },
                {
                    "id": "1634",
                    "name": "Fiction: Short Stories",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1634/fiction-short-stories.html"
                },
                {
                    "id": "1626",
                    "name": "Fiksi Islami",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1626/fiksi-islami.html"
                },
                {
                    "id": "1554",
                    "name": "Hamil Dan Melahirkan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1554/hamil-dan-melahirkan.html"
                },
                {
                    "id": "1625",
                    "name": "Hewan Peliharaan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1625/hewan-peliharaan.html"
                },
                {
                    "id": "1628",
                    "name": "Hewan Ternak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1628/hewan-ternak.html"
                },
                {
                    "id": "1610",
                    "name": "Ilmu Pasti",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1610/ilmu-pasti.html"
                },
                {
                    "id": "1624",
                    "name": "Isnpirasi Islam",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1624/isnpirasi-islam.html"
                },
                {
                    "id": "1608",
                    "name": "Kamus & Bahasa",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1608/kamus-bahasa.html"
                },
                {
                    "id": "1579",
                    "name": "Kedokteran Kesehatan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1579/kedokteran-kesehatan.html"
                },
                {
                    "id": "1649",
                    "name": "Kesaksian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1649/kesaksian.html"
                },
                {
                    "id": "1648",
                    "name": "Komik Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1648/komik-anak.html"
                },
                {
                    "id": "1566",
                    "name": "Kumpulan Cerpen",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1566/kumpulan-cerpen.html"
                },
                {
                    "id": "1562",
                    "name": "Kumpulan Puisi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1562/kumpulan-puisi.html"
                },
                {
                    "id": "1612",
                    "name": "Kurikulum",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1612/kurikulum.html"
                },
                {
                    "id": "1627",
                    "name": "Life Style",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1627/life-style.html"
                },
                {
                    "id": "1636",
                    "name": "Literature: Novel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1636/literature-novel.html"
                },
                {
                    "id": "1553",
                    "name": "Literature: Poetry",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1553/literature-poetry.html"
                },
                {
                    "id": "1646",
                    "name": "Literature: Short Stories & Anthologies",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1646/literature-short-stories-anthologies.html"
                },
                {
                    "id": "1584",
                    "name": "Musik Pujian",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1584/musik-pujian.html"
                },
                {
                    "id": "1638",
                    "name": "Mysteryes And Thrillers",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1638/mysteryes-and-thrillers.html"
                },
                {
                    "id": "1567",
                    "name": "Naskah Lakon",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1567/naskah-lakon.html"
                },
                {
                    "id": "1629",
                    "name": "Non Fiction: Accounting",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1629/non-fiction-accounting.html"
                },
                {
                    "id": "1542",
                    "name": "Non Fiction: Agriculture",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1542/non-fiction-agriculture.html"
                },
                {
                    "id": "1573",
                    "name": "Non Fiction: Art, Architecture, And Photography",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1573/non-fiction-art-architecture-and-photography.html"
                },
                {
                    "id": "1543",
                    "name": "Non Fiction: Biography",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1543/non-fiction-biography.html"
                },
                {
                    "id": "1536",
                    "name": "Non Fiction: Business Management & Leadership",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1536/non-fiction-business-management-leadership.html"
                },
                {
                    "id": "1556",
                    "name": "Non Fiction: Business Management And Leadership",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1556/non-fiction-business-management-and-leadership.html"
                },
                {
                    "id": "1593",
                    "name": "Non Fiction: Culture",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1593/non-fiction-culture.html"
                },
                {
                    "id": "1574",
                    "name": "Non Fiction: Diet And Health",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1574/non-fiction-diet-and-health.html"
                },
                {
                    "id": "1630",
                    "name": "Non Fiction: Economics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1630/non-fiction-economics.html"
                },
                {
                    "id": "1541",
                    "name": "Non Fiction: Education And Teaching",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1541/non-fiction-education-and-teaching.html"
                },
                {
                    "id": "1644",
                    "name": "Non Fiction: Entertainment",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1644/non-fiction-entertainment.html"
                },
                {
                    "id": "1544",
                    "name": "Non Fiction: History",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1544/non-fiction-history.html"
                },
                {
                    "id": "1557",
                    "name": "Non Fiction: Investment And Banking",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1557/non-fiction-investment-and-banking.html"
                },
                {
                    "id": "1551",
                    "name": "Non Fiction: Law",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1551/non-fiction-law.html"
                },
                {
                    "id": "1596",
                    "name": "Non Fiction: Media And Communication",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1596/non-fiction-media-and-communication.html"
                },
                {
                    "id": "1582",
                    "name": "Non Fiction: Parenting And Family",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1582/non-fiction-parenting-and-family.html"
                },
                {
                    "id": "1606",
                    "name": "Non Fiction: Philosophy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1606/non-fiction-philosophy.html"
                },
                {
                    "id": "1617",
                    "name": "Non Fiction: Politics",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1617/non-fiction-politics.html"
                },
                {
                    "id": "1618",
                    "name": "Non Fiction: Psychology",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1618/non-fiction-psychology.html"
                },
                {
                    "id": "1552",
                    "name": "Non Fiction: Reference And Dictionary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1552/non-fiction-reference-and-dictionary.html"
                },
                {
                    "id": "1559",
                    "name": "Non Fiction: Religion And Spirituality",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1559/non-fiction-religion-and-spirituality.html"
                },
                {
                    "id": "1538",
                    "name": "Non Fiction: Science And Nature",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1538/non-fiction-science-and-nature.html"
                },
                {
                    "id": "1537",
                    "name": "Non Fiction: Self Improvement",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1537/non-fiction-self-improvement.html"
                },
                {
                    "id": "1558",
                    "name": "Non Fiction: Travel",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1558/non-fiction-travel.html"
                },
                {
                    "id": "1561",
                    "name": "Novel Religi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1561/novel-religi.html"
                },
                {
                    "id": "1570",
                    "name": "Novel Sastra",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1570/novel-sastra.html"
                },
                {
                    "id": "1621",
                    "name": "Novel, Fiksi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1621/novel-fiksi.html"
                },
                {
                    "id": "1587",
                    "name": "Novels",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1587/novels.html"
                },
                {
                    "id": "1603",
                    "name": "Otobiografi Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1603/otobiografi-sejarah.html"
                },
                {
                    "id": "1600",
                    "name": "Otobiografi, Sejarah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1600/otobiografi-sejarah.html"
                },
                {
                    "id": "1641",
                    "name": "Outdoor",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1641/outdoor.html"
                },
                {
                    "id": "1616",
                    "name": "Parenting & Kelu",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1616/parenting-kelu.html"
                },
                {
                    "id": "1635",
                    "name": "Pariwisata",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1635/pariwisata.html"
                },
                {
                    "id": "1605",
                    "name": "Pengembangan_diri",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1605/pengembangan_diri.html"
                },
                {
                    "id": "1595",
                    "name": "Penunjang Pelajaran Sd",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1595/penunjang-pelajaran-sd.html"
                },
                {
                    "id": "1589",
                    "name": "Penunjang Pelajaran Smp",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1589/penunjang-pelajaran-smp.html"
                },
                {
                    "id": "1575",
                    "name": "Penunjang Pelajaran Tk",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1575/penunjang-pelajaran-tk.html"
                },
                {
                    "id": "1577",
                    "name": "Pertania Peternakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1577/pertania-peternakan.html"
                },
                {
                    "id": "1578",
                    "name": "Pertanian Peternakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1578/pertanian-peternakan.html"
                },
                {
                    "id": "1571",
                    "name": "Politik Agama",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1571/politik-agama.html"
                },
                {
                    "id": "1622",
                    "name": "Psikotes",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1622/psikotes.html"
                },
                {
                    "id": "1633",
                    "name": "Reference",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1633/reference.html"
                },
                {
                    "id": "1623",
                    "name": "Refrensi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1623/refrensi.html"
                },
                {
                    "id": "1594",
                    "name": "Religion & Spirituality",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1594/religion-spirituality.html"
                },
                {
                    "id": "1602",
                    "name": "Resep Masakan",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1602/resep-masakan.html"
                },
                {
                    "id": "1632",
                    "name": "Schoolbooks",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1632/schoolbooks.html"
                },
                {
                    "id": "1643",
                    "name": "Science Fiction & Fantasy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1643/science-fiction-fantasy.html"
                },
                {
                    "id": "1601",
                    "name": "Sejarah Musik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1601/sejarah-musik.html"
                },
                {
                    "id": "1599",
                    "name": "Sejarah Sosial",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1599/sejarah-sosial.html"
                },
                {
                    "id": "1598",
                    "name": "Sejarah, Budaya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1598/sejarah-budaya.html"
                },
                {
                    "id": "1647",
                    "name": "Smk/mak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1647/smk-mak.html"
                },
                {
                    "id": "1588",
                    "name": "Social Sciences",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1588/social-sciences.html"
                },
                {
                    "id": "1576",
                    "name": "Sosial & Populer",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1576/sosial-populer.html"
                },
                {
                    "id": "1637",
                    "name": "Teen Fantasy",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1637/teen-fantasy.html"
                },
                {
                    "id": "1550",
                    "name": "Teen Mystery And Thriller",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1550/teen-mystery-and-thriller.html"
                },
                {
                    "id": "1640",
                    "name": "Teen Religion & Spirituality",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1640/teen-religion-spirituality.html"
                },
                {
                    "id": "1548",
                    "name": "Teen Romance",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1548/teen-romance.html"
                },
                {
                    "id": "1546",
                    "name": "Teen Teenlit",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1546/teen-teenlit.html"
                },
                {
                    "id": "1580",
                    "name": "Tehnik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1580/tehnik.html"
                },
                {
                    "id": "1614",
                    "name": "Teks Ekonomi",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1614/teks-ekonomi.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category?nid=1",
            "product_link": "https://service.bukupedia.com/id/product-main-category?nid=1"
        }
    ]
}
```

### Sub Category
url : https://service.bukupedia.com/id/category/id-2/Arsitektur-%26-Desain-Interior.html
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Main Category Success",
    "d": [
        {
            "id": "2",
            "name": "Arsitektur & Desain Interior",
            "sub_category": [
                {
                    "id": "34",
                    "name": "Arsitektur",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-34/arsitektur.html"
                },
                {
                    "id": "35",
                    "name": "Arsitektur & Desain Interior",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-35/arsitektur-desain-interior.html"
                },
                {
                    "id": "700",
                    "name": "Desain Rumah",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-700/desain-rumah.html"
                },
                {
                    "id": "604",
                    "name": "Desain Teknik",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-604/desain-teknik.html"
                },
                {
                    "id": "1360",
                    "name": "Devosional",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1360/devosional.html"
                },
                {
                    "id": "770",
                    "name": "Griya",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-770/griya.html"
                },
                {
                    "id": "598",
                    "name": "Home & Garden",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-598/home-garden.html"
                },
                {
                    "id": "263",
                    "name": "Interior",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-263/interior.html"
                },
                {
                    "id": "1342",
                    "name": "Literary",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1342/literary.html"
                },
                {
                    "id": "652",
                    "name": "Properti",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-652/properti.html"
                },
                {
                    "id": "1389",
                    "name": "Rumah & Taman",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-1389/rumah-taman.html"
                }
            ],
            "link": "https://service.bukupedia.com/id/category/id-2/Arsitektur-%26-Desain-Interior.html",
            "product_link": "https://service.bukupedia.com/id/product-main-category/id-2/Arsitektur-%26-Desain-Interior.html"
        }
    ]
}
```

### Product by Main Category
url : https://service.bukupedia.com/id/product-main-category/id-2/Arsitektur-%26-Desain-Interior.html
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Product by Main Category Success",
    "d": [
        {
            "id": "132401",
            "title": "BUKU LENGKAP SHIO & FENG SHUI",
            "authors": "TJAHYADI BUDI SANTOSA",
            "stock": 1,
            "price-old": 42000,
            "price": 42000,
            "image": "https://service.bukupedia.com/images/products/132401buku-lengkap-shio-feng-shui.jpg",
            "link": "https://service.bukupedia.com/id/product/id-132401/buku-lengkap-shio-feng-shui.html"
        },
        {
            "id": "110709",
            "title": "28 Desain Rumah Tumbuh Minimalis",
            "authors": "Arya Satya, dkk",
            "stock": 1,
            "price-old": 78000,
            "price": 78000,
            "image": "https://service.bukupedia.com/images/products/11070928-desain-rumah-tumbuh-minimalis.jpg",
            "link": "https://service.bukupedia.com/id/product/id-110709/28-desain-rumah-tumbuh-minimalis.html"
        },
        {
            "id": "121714",
            "title": "Perencanaan Kawasan Permukiman",
            "authors": "Ir. Agus Surja Sadana Widjaja",
            "stock": 1,
            "price-old": 49800,
            "price": 49800,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-121714/perencanaan-kawasan-permukiman.html"
        },
        {
            "id": "121715",
            "title": "Beton Non-Pasir",
            "authors": "Diarto Trisnoyuwono, S.T., M.T.",
            "stock": 1,
            "price-old": 49800,
            "price": 49800,
            "image": "https://service.bukupedia.com/images/products/121715beton-non-pasir.jpg",
            "link": "https://service.bukupedia.com/id/product/id-121715/beton-non-pasir.html"
        },
        {
            "id": "110378",
            "title": "Manajemen Bandar Udara: Landasan Pacu, Taxiway & Apron",
            "authors": "Djoko Warsito   ",
            "stock": 1,
            "price-old": 60000,
            "price": 60000,
            "image": "https://service.bukupedia.com/images/products/m-bandar-udara-landasan-pacu-taxiway-apron.jpg",
            "link": "https://service.bukupedia.com/id/product/id-110378/manajemen-bandar-udara-landasan-pacu-taxiway-apron.html"
        },
        {
            "id": "110379",
            "title": "Manajemen Bandar Udara: Alat Bantu Visual U/ Navigasi Penerbangan",
            "authors": "Djoko Warsito   ",
            "stock": 1,
            "price-old": 65000,
            "price": 65000,
            "image": "https://service.bukupedia.com/images/products/m-bandar-udara-alat-bantu-visual-u-navigasi-penerbangan.jpg",
            "link": "https://service.bukupedia.com/id/product/id-110379/manajemen-bandar-udara-alat-bantu-visual-u-navigasi-penerbangan.html"
        },
        {
            "id": "112981",
            "title": "Sang Godfather (The Godfather)",
            "authors": "Mario Puzo",
            "stock": 1,
            "price-old": 148000,
            "price": 148000,
            "image": "https://service.bukupedia.com/images/products/sang-godfather-the-godfather_2.jpg",
            "link": "https://service.bukupedia.com/id/product/id-112981/sang-godfather-the-godfather.html"
        },
        {
            "id": "112982",
            "title": "Serigala di Musim Dingin (The Wolf in Winter)",
            "authors": "John Connolly",
            "stock": 1,
            "price-old": 138000,
            "price": 138000,
            "image": "https://service.bukupedia.com/images/products/serigala-di-musim-dingin-the-wolf-in-winter.jpg",
            "link": "https://service.bukupedia.com/id/product/id-112982/serigala-di-musim-dingin-the-wolf-in-winter.html"
        },
        {
            "id": "112987",
            "title": "Tarian Bumi",
            "authors": "Oka Rusmini",
            "stock": 1,
            "price-old": 55000,
            "price": 55000,
            "image": "https://service.bukupedia.com/images/products/tarian-bumi_3.jpg",
            "link": "https://service.bukupedia.com/id/product/id-112987/tarian-bumi.html"
        },
        {
            "id": "113003",
            "title": "Pegunungan Tinggi Portugal (The High Mountains of Portugal)",
            "authors": "Yann Martel",
            "stock": 1,
            "price-old": 88000,
            "price": 88000,
            "image": "https://service.bukupedia.com/images/products/pegunungan-tinggi-portugal-the-high-mountains-of-portugal.jpg",
            "link": "https://service.bukupedia.com/id/product/id-113003/pegunungan-tinggi-portugal-the-high-mountains-of-portugal.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 62,
        "next_page_url": "https://service.bukupedia.com/id/product-main-category/?_sort=&id=2&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/product-main-category/?_sort=&id=2",
        "total": 611
    }
}
```








### Product by Sub Category
url : https://service.bukupedia.com/id/product-sub-category/id-34/arsitektur.html
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Product by Sub Category Success",
    "d": [
        {
            "id": "132401",
            "title": "BUKU LENGKAP SHIO & FENG SHUI",
            "authors": "TJAHYADI BUDI SANTOSA",
            "stock": 1,
            "price-old": 42000,
            "price": 42000,
            "image": "https://service.bukupedia.com/images/products/132401buku-lengkap-shio-feng-shui.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-132401/arsitektur/buku-lengkap-shio-feng-shui.html"
        },
        {
            "id": "110709",
            "title": "28 Desain Rumah Tumbuh Minimalis",
            "authors": "Arya Satya, dkk",
            "stock": 1,
            "price-old": 78000,
            "price": 78000,
            "image": "https://service.bukupedia.com/images/products/11070928-desain-rumah-tumbuh-minimalis.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-110709/arsitektur/28-desain-rumah-tumbuh-minimalis.html"
        },
        {
            "id": "121714",
            "title": "Perencanaan Kawasan Permukiman",
            "authors": "Ir. Agus Surja Sadana Widjaja",
            "stock": 1,
            "price-old": 49800,
            "price": 49800,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-34-121714/arsitektur/perencanaan-kawasan-permukiman.html"
        },
        {
            "id": "121715",
            "title": "Beton Non-Pasir",
            "authors": "Diarto Trisnoyuwono, S.T., M.T.",
            "stock": 1,
            "price-old": 49800,
            "price": 49800,
            "image": "https://service.bukupedia.com/images/products/121715beton-non-pasir.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-121715/arsitektur/beton-non-pasir.html"
        },
        {
            "id": "110378",
            "title": "Manajemen Bandar Udara: Landasan Pacu, Taxiway & Apron",
            "authors": "Djoko Warsito   ",
            "stock": 1,
            "price-old": 60000,
            "price": 60000,
            "image": "https://service.bukupedia.com/images/products/m-bandar-udara-landasan-pacu-taxiway-apron.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-110378/arsitektur/manajemen-bandar-udara-landasan-pacu-taxiway-apron.html"
        },
        {
            "id": "110379",
            "title": "Manajemen Bandar Udara: Alat Bantu Visual U/ Navigasi Penerbangan",
            "authors": "Djoko Warsito   ",
            "stock": 1,
            "price-old": 65000,
            "price": 65000,
            "image": "https://service.bukupedia.com/images/products/m-bandar-udara-alat-bantu-visual-u-navigasi-penerbangan.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-110379/arsitektur/manajemen-bandar-udara-alat-bantu-visual-u-navigasi-penerbangan.html"
        },
        {
            "id": "110312",
            "title": "Pengetahuan Dasar Penilaian Properti",
            "authors": "Izzuddin, Ak.,MM.,CA.",
            "stock": 0,
            "price-old": 72000,
            "price": 72000,
            "image": "https://service.bukupedia.com/images/products/110312pengetahuan-dasar-penilaian-properti.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-110312/arsitektur/pengetahuan-dasar-penilaian-properti.html"
        },
        {
            "id": "115293",
            "title": "Arsitektur Dan Kenyamanan Termal",
            "authors": "Noor Cholis Idham",
            "stock": 1,
            "price-old": 75000,
            "price": 75000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-34-115293/arsitektur/arsitektur-dan-kenyamanan-termal.html"
        },
        {
            "id": "108801",
            "title": "Teknologi Bahan",
            "authors": "Ir. Syamsul Hadi, M.T., Ph.D",
            "stock": 1,
            "price-old": 90000,
            "price": 90000,
            "image": "https://service.bukupedia.com/images/products/108801teknologi-bahan.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-108801/arsitektur/teknologi-bahan.html"
        },
        {
            "id": "108791",
            "title": "Busana Kantor Muslimah, Cantik, Rapi Dan Ramping",
            "authors": "Eri Rohayati",
            "stock": 1,
            "price-old": 69000,
            "price": 69000,
            "image": "https://service.bukupedia.com/images/products/108791busana-kantor-muslimah-cantik-rapi-dan-ramping.jpg",
            "link": "https://service.bukupedia.com/id/product/id-34-108791/arsitektur/busana-kantor-muslimah-cantik-rapi-dan-ramping.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 60,
        "next_page_url": "https://service.bukupedia.com/id/product-sub-category/?_sort=&id=34&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/product-sub-category/?_sort=&id=34",
        "total": 598
    }
}
```

### Product by Author 
url : https://service.bukupedia.com/id/search?author=Arleen%20Amidjaja
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Search Products Success",
    "d": [
        {
            "id": "125570",
            "title": "Toilet Sedang Diperbaiki",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 40000,
            "price": 40000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-125570/toilet-sedang-diperbaiki.html"
        },
        {
            "id": "125568",
            "title": "Temi Ke Negri Kincir Angin",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 35000,
            "price": 35000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-125568/temi-ke-negri-kincir-angin.html"
        },
        {
            "id": "125562",
            "title": "Pentas Seni Di Sekolah",
            "authors": "Arleen A & Stella Ernes",
            "stock": 1,
            "price_old": 39000,
            "price": 39000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-125562/pentas-seni-di-sekolah.html"
        },
        {
            "id": "125561",
            "title": "Bin & Tim Musikalnya",
            "authors": "Arleen A & Stella Ernes",
            "stock": 1,
            "price_old": 39000,
            "price": 39000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-125561/bin-tim-musikalnya.html"
        },
        {
            "id": "112724",
            "title": "Pengembangan Diri: Pabrik Pak Haulg",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 50000,
            "price": 50000,
            "image": "https://service.bukupedia.com/images/products/pengembangan-diri-pabrik-pak-haulg.jpg",
            "link": "https://service.bukupedia.com/id/product/id-112724/pengembangan-diri-pabrik-pak-haulg.html"
        },
        {
            "id": "22189",
            "title": "Seri Ronald's Days: Sahabatku, Bobby",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 15000,
            "price": 15000,
            "image": "https://service.bukupedia.com/images/products/sahabatkubobby.jpg",
            "link": "https://service.bukupedia.com/id/product/id-22189/seri-ronald-s-days-sahabatku-bobby.html"
        },
        {
            "id": "22188",
            "title": "Seri Ronald's Days: Kue Tertinggi (The Tallest Cake)",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 15000,
            "price": 15000,
            "image": "https://service.bukupedia.com/images/products/kuetertinggi.jpg",
            "link": "https://service.bukupedia.com/id/product/id-22188/seri-ronald-s-days-kue-tertinggi-the-tallest-cake.html"
        },
        {
            "id": "21689",
            "title": "Seri Ronald's Days: Super Ronald",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 15000,
            "price": 15000,
            "image": "https://service.bukupedia.com/images/products/superronald.jpg",
            "link": "https://service.bukupedia.com/id/product/id-21689/seri-ronald-s-days-super-ronald.html"
        },
        {
            "id": "10974",
            "title": "Don't Think, Just Love! - Cinta Tidak Bisa Dianalisis",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 30000,
            "price": 30000,
            "image": "https://service.bukupedia.com/images/products/9703f85759bc73496fdfac28365abeed.jpg",
            "link": "https://service.bukupedia.com/id/product/id-10974/don-t-think-just-love-cinta-tidak-bisa-dianalisis.html"
        },
        {
            "id": "10944",
            "title": "Tricky Love",
            "authors": "Arleen Amidjaja",
            "stock": 1,
            "price_old": 25900,
            "price": 25900,
            "image": "https://service.bukupedia.com/images/products/84964045e749daecb5779e0fcc877532.jpg",
            "link": "https://service.bukupedia.com/id/product/id-10944/tricky-love.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 16,
        "next_page_url": "https://service.bukupedia.com/id/search/?author=Arleen A&_sort=&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/search/?author=Arleen A&_sort=",
        "total": 158
    }
}
```


### Product by Pubisher
url : 
type : Get
feedback :
```

```

### Search Product
url : https://service.bukupedia.com/id/product/the-secret
type : Post
json : {"keywords":"algoritma"}
feedback :
```
{
    "s": true,
    "m": "Get Search Products Success",
    "d": [
        {
            "id": "36245",
            "title": "Algoritma dan Struktur Data Non Linear dengan Java",
            "authors": "Siswanto",
            "stock": 1,
            "price_old": 196800,
            "price": 196800,
            "image": "https://service.bukupedia.com/images/products/229-11-36245.jpg",
            "link": "https://service.bukupedia.com/id/product/id-36245/algoritma-dan-struktur-data-non-linear-dengan-java.html"
        },
        {
            "id": "80354",
            "title": "Algoritma & Pemrograman dengan C++ Edisi 3",
            "authors": "Andri Kristanto",
            "stock": 1,
            "price_old": 119800,
            "price": 119800,
            "image": "https://service.bukupedia.com/images/products/80354algoritma-pemrograman-dengan-c-edisi-3.jpg",
            "link": "https://service.bukupedia.com/id/product/id-80354/algoritma-pemrograman-dengan-c-edisi-3.html"
        },
        {
            "id": "83241",
            "title": "Algoritma Genetika, Metode Komputasi Evolusioner untuk Menyelesaikan Masalah Optimasi",
            "authors": "Zainudin Zukhri",
            "stock": 1,
            "price_old": 69500,
            "price": 69500,
            "image": "https://service.bukupedia.com/images/products/algoritma-genetika-metode-komputasi-evolusioner-untuk-menyelesaikan-masalah-optimasi.jpg",
            "link": "https://service.bukupedia.com/id/product/id-83241/algoritma-genetika-metode-komputasi-evolusioner-untuk-menyelesaikan-masalah-optimasi.html"
        },
        {
            "id": "83337",
            "title": "Java Teori, Algoritma Dan Aplikasi",
            "authors": "R.H. Sianipar",
            "stock": 1,
            "price_old": 129000,
            "price": 129000,
            "image": "https://service.bukupedia.com/images/products/java-teori-algoritma-dan-aplikasi.jpg",
            "link": "https://service.bukupedia.com/id/product/id-83337/java-teori-algoritma-dan-aplikasi.html"
        },
        {
            "id": "89568",
            "title": " Algoritma Genetika; Teori dan Aplikasi Edisi 2",
            "authors": "Dr. Eng. Admi Syarif",
            "stock": 1,
            "price_old": 69800,
            "price": 69800,
            "image": "https://service.bukupedia.com/images/products/89568-algoritma-genetika-teori-dan-aplikasi-edisi-2.jpg",
            "link": "https://service.bukupedia.com/id/product/id-89568/algoritma-genetika-teori-dan-aplikasi-edisi-2.html"
        },
        {
            "id": "118161",
            "title": "Algoritma Dan Struktur Data Bahasa C",
            "authors": "Thomson Susabda Ngoen",
            "stock": 1,
            "price_old": 120000,
            "price": 120000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-118161/algoritma-dan-struktur-data-bahasa-c.html"
        },
        {
            "id": "118185",
            "title": "Algoritma dan Struktur Data Pengurutan dan Pencarian",
            "authors": "Thompson Susabda Ngoen",
            "stock": 1,
            "price_old": 120000,
            "price": 120000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-118185/algoritma-dan-struktur-data-pengurutan-dan-pencarian.html"
        },
        {
            "id": "118202",
            "title": "Struktur Data ( Algoritma & Struktur Data 2 ) Ed.5",
            "authors": "Moh. Sjukani",
            "stock": 1,
            "price_old": 120000,
            "price": 120000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-118202/struktur-data-algoritma-struktur-data-2-ed-5.html"
        },
        {
            "id": "118251",
            "title": "Logika & Algoritma Dasar Menggunakan Bahasa C++ Ed. Rev",
            "authors": "Indarwoko Kurniadi",
            "stock": 1,
            "price_old": 65000,
            "price": 65000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-118251/logika-algoritma-dasar-menggunakan-bahasa-c-ed-rev.html"
        },
        {
            "id": "118255",
            "title": "Algoritma(Algoritma&Struktur Data1) dengan C,C++ Ed.8",
            "authors": "Moh. Sjukani",
            "stock": 1,
            "price_old": 130000,
            "price": 130000,
            "image": "https://service.bukupedia.com/images/products/",
            "link": "https://service.bukupedia.com/id/product/id-118255/algoritma-algoritma-struktur-data1-dengan-c-c-ed-8.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 5,
        "next_page_url": "https://service.bukupedia.com/id/search/?keywords=algoritma&_sort=&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/search/?keywords=algoritma&_sort=",
        "total": 48
    }
}
```

### Product Advance Product
url : https://service.bukupedia.com/id/search?advance=1
type : Post
json : {"title":"buku","author":"","publisher":"erlangga","category_id":"","isbn":"","release":""}
feedback :
```
{
    "s": true,
    "m": "Get Search Products Success",
    "d": [
        {
            "id": "121983",
            "title": "Buku Penilaian Bupena 5b Kurikulum 2013 Revisi 2016 Erlangga",
            "authors": "Irene Mja",
            "stock": 1,
            "price_old": 52000,
            "price": 52000,
            "image": "https://service.bukupedia.com/images/products/buku-penilaian-bupena-5b-kurikulum-2013-revisi-2016-erlangga.jpg",
            "link": "https://service.bukupedia.com/id/product/id-121983/buku-penilaian-bupena-5b-kurikulum-2013-revisi-2016-erlangga.html"
        },
        {
            "id": "112285",
            "title": "Buku Pintar Islam",
            "authors": "Zulfika Satria   ",
            "stock": 1,
            "price_old": 95000,
            "price": 95000,
            "image": "https://service.bukupedia.com/images/products/buku-pintar-islam.jpg",
            "link": "https://service.bukupedia.com/id/product/id-112285/buku-pintar-islam.html"
        },
        {
            "id": "110377",
            "title": "Buku Latihan Pengantar Akuntansi 1",
            "authors": "Yuliansyah-reskino-biana Inapti   ",
            "stock": 1,
            "price_old": 70000,
            "price": 70000,
            "image": "https://service.bukupedia.com/images/products/buku-latihan-pengantar-akuntansi-1.jpg",
            "link": "https://service.bukupedia.com/id/product/id-110377/buku-latihan-pengantar-akuntansi-1.html"
        },
        {
            "id": "101070",
            "title": "Sd/Mi Kl 3 Buku Teks Tematik Terpadu 3G Tema Energi & Perubahannya",
            "authors": "Dwi Tyas U",
            "stock": 1,
            "price_old": 58000,
            "price": 58000,
            "image": "https://service.bukupedia.com/images/products/sd-mi-kl-3-buku-teks-tematik-terpadu-3g-tema-energi-perubahannya.jpg",
            "link": "https://service.bukupedia.com/id/product/id-101070/sd-mi-kl-3-buku-teks-tematik-terpadu-3g-tema-energi-perubahannya.html"
        },
        {
            "id": "101013",
            "title": "Sd/Mi Kl 6 Buku Teks Tematik Terpadu 6G Tema  Kepemimpinan",
            "authors": "Fransiska",
            "stock": 1,
            "price_old": 65000,
            "price": 65000,
            "image": "https://service.bukupedia.com/images/products/sd-mi-kl-6-buku-teks-tematik-terpadu-6g-tema-kepemimpinan.jpg",
            "link": "https://service.bukupedia.com/id/product/id-101013/sd-mi-kl-6-buku-teks-tematik-terpadu-6g-tema-kepemimpinan.html"
        },
        {
            "id": "101004",
            "title": "Sd/Mi Kl 3 Buku Teks Tematik Terpadu 3H Tema Bumi & Alam Semesta",
            "authors": "Dwi Tyas U",
            "stock": 1,
            "price_old": 58000,
            "price": 58000,
            "image": "https://service.bukupedia.com/images/products/sd-mi-kl-3-buku-teks-tematik-terpadu-3h-tema-bumi-alam-semesta.jpg",
            "link": "https://service.bukupedia.com/id/product/id-101004/sd-mi-kl-3-buku-teks-tematik-terpadu-3h-tema-bumi-alam-semesta.html"
        },
        {
            "id": "60151",
            "title": "Aku dan Ibuku ",
            "authors": "Alison Ritchie",
            "stock": 1,
            "price_old": 28000,
            "price": 28000,
            "image": "https://service.bukupedia.com/images/products/aku-dan-ibuku.jpg",
            "link": "https://service.bukupedia.com/id/product/id-60151/aku-dan-ibuku.html"
        },
        {
            "id": "59910",
            "title": "Buku Stiker Muka Lucu ",
            "authors": "Reverend W.Andry",
            "stock": 1,
            "price_old": 35000,
            "price": 35000,
            "image": "https://service.bukupedia.com/images/products/buku-stiker-muka-lucu.jpg",
            "link": "https://service.bukupedia.com/id/product/id-59910/buku-stiker-muka-lucu.html"
        },
        {
            "id": "59906",
            "title": "Buku Aktivitasku Usia 4-5 Tahun Smt 1 ",
            "authors": "Anies Listyowati",
            "stock": 1,
            "price_old": 21000,
            "price": 21000,
            "image": "https://service.bukupedia.com/images/products/buku-aktivitasku-usia-4-5-tahun-smt-1.jpg",
            "link": "https://service.bukupedia.com/id/product/id-59906/buku-aktivitasku-usia-4-5-tahun-smt-1.html"
        },
        {
            "id": "59904",
            "title": "Buku Aktivitasku Usia 5-6 Tahun Smt 1",
            "authors": "Anies Listyowati",
            "stock": 1,
            "price_old": 21000,
            "price": 21000,
            "image": "https://service.bukupedia.com/images/products/buku-aktivitasku-usia-5-6-tahun-smt-1.jpg",
            "link": "https://service.bukupedia.com/id/product/id-59904/buku-aktivitasku-usia-5-6-tahun-smt-1.html"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 18,
        "next_page_url": "https://service.bukupedia.com/id/search/?advance=1&title=buku&publisher=erlangga&_sort=&_page=2",
        "prevous_page_url": "https://service.bukupedia.com/id/search/?advance=1&title=buku&publisher=erlangga&_sort=",
        "total": 171
    }
}
```
`

### Product Detail
url : https://service.bukupedia.com/id/product/id-123372/dongeng-domba-dan-sahabat-rimba.html
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Product Success",
    "d": [
        {
            "id": "123372",
            "title": "Dongeng Domba Dan Sahabat Rimba",
            "authors": "Kak Thifa",
            "stock": 1,
            "price-old": 49000,
            "price": 48000,
            "image": "https://service.bukupedia.com/images/products/dongeng-domba-dan-sahabat-rimba.jpg",
            "link": "https://service.bukupedia.com/id/product/id-131513/seri-dear-kind-beruang-bilang-maaf-boardbook.html",
            "categories": [
                {
                    "name": "Anak",
                    "product_link": "https://service.bukupedia.com/id/product-sub-category/id-186/anak.html"
                }
            ],
            "estimated_shipment": "5 - 10 hari",
            "price_old": 48000,
            "publisher": {
                "name": "AgroMedia Pustaka",
                "link": "https://service.bukupedia.com/id/cari-buku?publisher=AgroMedia Pustaka"
            },
            "isbn": "9.786.024.072.681",
            "lang": "Indonesia",
            "pages": 76,
            "release": "2018",
            "weight": 0.3,
            "size": "20 x 27 x 0",
            "desc": "&ldquo;Burung Kakaktua hinggap di jendela. Domba sudah tua. Giginya ting&hellip;&rdquo; Si Kakaktua bernyanyi dengan gembira, sedangkan Domba tampak kesal. &ldquo;Kamu yang tua. Namamu, kan, Kakaktua,&rdquo; kata Domba.Meski sering bercanda, keduanya bersahabat akrab, lho. Kakaktua membantu Domba mencari tahu siapakah yang membuat berantakan rumput Domba di kandang.Di dalam buku ini, masih banyak lagi cerita tentang hewan, seperti Maleo, Kuskus, Sidat, Belut, Berang-berang, dan kawan-kawan. Setiap cerita ditulis dengan sederhana sehingga anak-anak mudah memahami pesan setiap cerita. Tak lupa, setiap cerita dilengkapi ilustrasi yang menarik dan penuh warna, lho. Selamat membaca, ya!",
            "review": "https://service.bukupedia.com/id/resensi/id-123372/dongeng-domba-dan-sahabat-rimba.html",
            "related_book": [
                {
                    "id": "132195",
                    "title": "Seri Anak Hebat: Saat Aku Malu",
                    "authors": "S. Shinta, Gambar: Dhea Citra",
                    "stock": 1,
                    "price-old": 54000,
                    "price": 54000,
                    "image": "https://service.bukupedia.com/images/products/132195seri-anak-hebat-saat-aku-malu.jpg",
                    "link": "https://service.bukupedia.com/id/product/id-132195/seri-anak-hebat-saat-aku-malu.html"
                },
                {
                    "id": "131578",
                    "title": "Cloud Bread: Kisah-Kisah Seru Cloud Bread 1",
                    "authors": "Gimc, Dps",
                    "stock": 0,
                    "price-old": 74000,
                    "price": 74000,
                    "image": "https://service.bukupedia.com/images/products/cloud-bread-kisah-kisah-seru-cloud-bread-1.jpg",
                    "link": "https://service.bukupedia.com/id/product/id-131578/cloud-bread-kisah-kisah-seru-cloud-bread-1.html"
                },
                {
                    "id": "131513",
                    "title": "SERI DEAR KIND: BERUANG BILANG MAAF (BOARDBOOK)",
                    "authors": "Benny Rhamdani",
                    "stock": 1,
                    "price-old": 49000,
                    "price": 49000,
                    "image": "https://service.bukupedia.com/images/products/131513seri-dear-kind-beruang-bilang-maaf-boardbook.jpg",
                    "link": "https://service.bukupedia.com/id/product/id-131513/seri-dear-kind-beruang-bilang-maaf-boardbook.html"
                }
            ]
        }
    ]
}
```

### Form Register
url : https://service.bukupedia.com/id/register
type : Post
json : {"name":"angga", "email":"angga@mail.com", "password":"password","verify_password":"password"}
feedback :
```
{
    "s": true,
    "m": "Login Success",
    "d": {
        "user_id": "102122",
        "name": "angga"
    },
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiIxMDIxMjIiLCJpYXQiOjE1MzY4Mjg5MTgsImV4cCI6MTUzNzA4ODExOH0.kwC4uN5jRlbnpieDkYm4SXZ2JWLULvBWZ_EkofhIJDQ"
}
```

### Form Login
url : https://service.bukupedia.com/id/login
type : Post
json : {"email": "irfan@bisnis2030.com",  "password": "45b99e822acfd4"}
feedback :
```
{
    "s": true,
    "m": "Login Success",
    "d": {
        "user_id": "71415",
        "name": "irfan"
    },
    "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI3MTQxNSIsImlhdCI6MTUzNjgxMzE0NSwiZXhwIjoxNTM3MDcyMzQ1fQ.afEPk5D5YMpKhUSsfCoODrTeJm-KOLCLvL0etwVsY9A"
}
```

### List Order (page my account)
url : https://service.bukupedia.com/id/order
type : Get
param : token JWT
feedback :
```
{
    "s": true,
    "m": "Get Order Success",
    "d": [
        {
            "id": "55124",
            "invoice_no": "INV/BUKUPEDIA/55124",
            "order_date": "2017-03-30 12:50:41",
            "status": "pending",
            "grand_total": 74520,
            "link_detail": "https://service.bukupedia.com/id/order?id=55124"
        },
        {
            "id": "55121",
            "invoice_no": "INV/BUKUPEDIA/55121",
            "order_date": "2017-03-30 12:33:41",
            "status": "pending",
            "grand_total": 74520,
            "link_detail": "https://service.bukupedia.com/id/order?id=55121"
        },
        {
            "id": "55120",
            "invoice_no": "INV/BUKUPEDIA/55120",
            "order_date": "2017-03-30 12:29:08",
            "status": "pending",
            "grand_total": 74520,
            "link_detail": "https://service.bukupedia.com/id/order?id=55120"
        },
        {
            "id": "55119",
            "invoice_no": "INV/BUKUPEDIA/55119",
            "order_date": "2017-03-30 12:28:42",
            "status": "pending",
            "grand_total": 74520,
            "link_detail": "https://service.bukupedia.com/id/order?id=55119"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 1,
        "next_page_url": "https://service.bukupedia.com/id/order/",
        "prevous_page_url": "https://service.bukupedia.com/id/order/",
        "total": 4
    }
}
```

### Order Detail (page my account)
url : https://service.bukupedia.com/id/order?id=55121
type : Get
param : token JWT and order id
feedback :
```
{
    "s": true,
    "m": "Get Order Detail Success",
    "d": {
        "id": "55121",
        "invoice_no": "INV/BUKUPEDIA/55121",
        "order_date": "2017-03-30 12:33:41",
        "name": "irfan",
        "email": "irfan@bisnis2030.com",
        "phone": "0812345134",
        "payment_method": "lang_",
        "courier_name": "JNE Reg",
        "address": "Jl. Hadiah Utama",
        "subdistrict": "Grogol",
        "regency": "Kota Administrasi Jakarta Barat",
        "province": "DKI JAKARTA",
        "postcode": "11640",
        "order_status": [
            {
                "date": "2017-03-30 12:33:41",
                "status": 0,
                "message": "Menunggu pembayaran"
            }
        ],
        "sub_total": 72800,
        "discount_invoice": 0,
        "shipping_cost": 9000,
        "noxify_unique_code": 0,
        "admin_fee": 0,
        "grand_total": 74520,
        "order_detail": [
            {
                "id": "98799",
                "title": "Karyawan Juga Bisa Kaya - 7 Resep Makmur yang Telah Dibuktikan oleh Ribuan Karyawan & Pensiunan",
                "authors": "Ippho D. Santosa",
                "price": 72800,
                "quantity": 1,
                "image": "https://service.bukupedia.com/images/products/karyawan-juga-bisa-kaya-7-resep-makmur-yang-telah-dibuktikan-oleh-ribuan-karyawan-pensiunan.jpg",
                "link": "https://service.bukupedia.com/id/product/id-109878/karyawan-juga-bisa-kaya-7-resep-makmur-yang-telah-dibuktikan-oleh-ribuan-karyawan-pensiunan.html"
            }
        ]
    }
}
```

### List Address (page my account)
url : https://service.bukupedia.com/id/address
type : Get
param : token JWT
feedback :
```
{
    "s": true,
    "m": "Get Address Success",
    "d": [
        {
            "id": "42437",
            "name": "irfan",
            "company": "",
            "division_company": "",
            "phone": "0812345134",
            "address": "Jl. Hadiah Utama",
            "subdistrict": "Grogol",
            "regency": "Kota Administrasi Jakarta Barat",
            "province": "DKI JAKARTA",
            "postcode": "11640"
        }
    ],
    "p": {
        "per_page": "10",
        "last_page": 1,
        "next_page_url": "https://service.bukupedia.com/id/address/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI3MTQxNSIsImlhdCI6MTUzNjgxMzE0NSwiZXhwIjoxNTM3MDcyMzQ1fQ.afEPk5D5YMpKhUSsfCoODrTeJm-KOLCLvL0etwVsY9A",
        "prevous_page_url": "https://service.bukupedia.com/id/address/?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyaWQiOiI3MTQxNSIsImlhdCI6MTUzNjgxMzE0NSwiZXhwIjoxNTM3MDcyMzQ1fQ.afEPk5D5YMpKhUSsfCoODrTeJm-KOLCLvL0etwVsY9A",
        "total": 1
    }
}
```


### Content FAQ
url : https://service.bukupedia.com/id/faq
type : Get
feedback :
```
{
    "s": true,
    "m": "Get Faq Success",
    "d": {
        "id": "22",
        "content": "#@#faq@#@ Bagaimana cara belanja di [store_name]? &nbsp; Login atau daftar Buzz account Anda di sini Pilih buku yang Anda inginkan lalu klik tombol checkout Isi alamat pengiriman dengan lengkap, pilih jasa pengiriman, dan klik tombol bayar sekarang Informasi pembayaran menampilkan 2 Rekening Bank yang dapat Anda pilih salah satunya dan lakukan transfer senilai jumlah yang tertera pada halaman pembayaran. Jika Anda membutuhkan informasi lebih detail silahkan lihat pada link Cara Beli Buku Online ini. &nbsp; Bagaimana proses pembelian buku impor? Pembelian buku impor di [store_name] tidak jauh berbeda dengan melakukan pembelian buku lokal, yaitu: Login atau daftar Buzz account Anda di sini Pilih buku impor yang Anda inginkan lalu klik tombol checkout Isi alamat pengiriman dengan lengkap, pilih jasa pengiriman, dan klik tombol bayar sekarang Informasi pembayaran menampilkan 2 Rekening Bank yang dapat Anda pilih salah satunya dan lakukan transfer senilai jumlah yang tertera pada halaman pembayaran. Perbedaannya adalah proses pengiriman pesanan Anda akan sepenuhnya dilakukan oleh Amazon dan jasa pengiriman yang dipilih. Untuk informasi selengkapnya, Anda dapat melihat pada link seputar Pembelian Buku Impor kami. &nbsp; Metode pembayaran apa saja yang tersedia? Anda dapat menggunakan berbagai macam metode pembayaran di [store_name] seperti: Transfer bank menggunakan ATM Transfer bank menggunakan Internet banking Transfer bank menggunakan Mobile banking Setor tunai Anda dapat melakukan transfer dari bank BCA, Mandiri, serta bank apapun di Indonesia yang tergabung pada jaringan ATM Bersama, Alto, dan Prima. Untuk transfer pembayaran selain dari bank BCA dan bank Mandiri akan ada biaya kenyamanan sesuai dengan kebijakan Akun Bank yang Anda miliki. &nbsp; Berapa lama waktu pengiriman? Lama pengiriman order bervariasi tergantung dari kota tujuan pengiriman dan jadwal dari jasa pengiriman. Waktu proses order dan pengiriman [store_name] untuk buku lokal adalah sebagai berikut: Jakarta : 3 &ndash; 7 hari kerja Bodetabek : 4 &ndash; 8 hari kerja Wilayah Indonesia bagian barat : 5 &ndash; 14 hari kerja Wilayah Indonesia bagian timur : 7 &ndash; 15 hari kerja Jika Anda membutuhkan informasi lebih detail silahkan lihat di link Waktu &amp; Biaya Pengiriman kami. &nbsp; Berapa besar biaya pengiriman? Untuk pengiriman paket buku lokal, [store_name] bekerjasama dengan jasa pengiriman JNE dan REX. Perhitungan biaya pengiriman akan mengikuti biaya yang dikenakan oleh masing-masing jasa pengiriman. Member dapat mengetahui total biaya pengiriman yang dikenakan pada halaman detail pesanan ataupun mengecek langsung pada website masing-masing jasa pengiriman. Bagaimana cara cek status pesanan? Status pesanan dapat dilihat pada menu My Account. Member dapat melihat nomor resi pengiriman setelah status pesanan menjadi shipped melalui detail invoice transaksi pada halaman My Account atau melaui email yang dikirimkan oleh [store_name]. Bagaimana jika buku yang dipesan stoknya habis? Jika pesanan Anda tidak tersedia di penerbit, pesanan untuk item yang bersangkutan akan dibatalkan dan pembayaran yang telah dilakukan akan dikembalikan ke Akun Bank Anda. Email pemberitahuan mengenai pengembalian pembayaran juga akan dikirimkan kepada Anda. Bagaimana jika buku tidak sampai atau sampai namun rusak? Member dapat mengirimkan permintaan penukaran barang maksimal 7 (tujuh) hari sejak barang diterima ke helpdesk@[store_name]. Jika kerusakan barang terjadi akibat kesalahan dari pihak jasa pengiriman, maka [store_name] tidak bertanggung jawab atas kerusakan tersebut. Namun kami akan membantu member untuk proses klaim kepada jasa pengiriman atas kejadian kerusakan tersebut. Ongkos kirim ataupun biaya tambahan lainnya yang mungkin muncul saat mengirimkan barang kembali ke [store_name] ditanggung sepenuhnya oleh member. Untuk informasi selengkapnya, Anda dapat melihat pada link Penukaran &amp; Pengembalian kami."
    }
}
```

### Content How To Shop
url : https://service.bukupedia.com/id/how-to-shop
type : Get
feedback :
```
{
    "s": true,
    "m": "Get How To Shop Success",
    "d": {
        "id": "18",
        "content": "#@#how_to_shop@#@ Pendaftaran &nbsp; Klik tombol login/daftar yang ada di bagian atas halaman [store_name] Isi nama, alamat email, serta password yang Anda inginkan atau klik tombol sign up with facebook Pastikan Anda telah membaca syarat &amp; ketentuan penggunaan website [store_name]. Jika sudah klik tombol Daftar. &nbsp; Pembelian Buku &nbsp; Klik tombol beli untuk memasukkan buku yang Anda inginkan ke keranjang belanja Klik tombol checkout lalu lakukan login jika Anda belum login atau daftar jika Anda belum memiliki Buzz Account Masukkan alamat pengiriman atau pilih dari daftar alamat yang Anda miliki dan klik tombol continue untuk memilih layanan pengiriman Cek kembali pesanan Anda lalu pilih metode pembayaran dan lanjutkan dengan klik tombol bayar sekarang untuk melanjutkan ke halaman pembayaran &nbsp; Halaman Pembayaran &nbsp; Setelah Anda melakukan klik tombol&nbsp;bayar sekarang&nbsp;maka akan tampil halaman informasi pembayaran untuk transaksi yang baru saja Anda lakukan. Transfer pembayaran sesuai dengan yang tertera pada informasi pembayaran, jumlah dan rekening tujuan yang muncul. Informasi serupa juga dikirimkan ke alamat email Anda. Jangan lupa untuk menyertakan kode unik. &nbsp; &nbsp;"
    }
}
```

``

### Profile
url : https://service.bukupedia.com/id/profile
type : Get
param : token JWT
feedback :
```
{
    "s": true,
    "m": "Get Profile Success",
    "d": {
        "id": "71415",
        "name": "irfan",
        "email": "irfan@bisnis2030.com",
        "gender": 1,
        "birth_date": null,
        "phone": null,
        "address": null
    }
}
```


### List Shopping Cart
url : https://service.bukupedia.com/id/cart
type : Get
param : token JWT
feedback :
```
{
    "s": true,
    "m": "Get Cart Success",
    "d": [
        {
            "id": "221600",
            "title": "The Mind & The Brain Dahsyatnya Otak Dan Pikiran Manusia",
            "image": "https://service.bukupedia.com/images/products/the-mind-the-brain-dahsyatnya-otak-dan-pikiran-manusia.jpeg",
            "price_old": 55000,
            "price": 55000,
            "weight": 500,
            "quantity": "1"
        },
        {
            "id": "221601",
            "title": "CATATAN AYAH ASI DITAMBAH-TAMBAHIN",
            "image": "https://service.bukupedia.com/images/products/132340catatan-ayah-asi-ditambah-tambahin.jpg",
            "price_old": 75000,
            "price": 75000,
            "weight": 300,
            "quantity": "1"
        }
    ]
}
```

### Create Shopping Cart 
url : https://service.bukupedia.com/id/cart
type : Post
json : {"user_id":"71415", "product_id":"132340", "quantity":"1"}
param : Token JWT
feedback :
```
{
    "s": true,
    "m": "Post Input/Update Cart Success",
    "d": {
        "id": "221601",
        "title": "CATATAN AYAH ASI DITAMBAH-TAMBAHIN",
        "image": "https://service.bukupedia.com/images/products/132340catatan-ayah-asi-ditambah-tambahin.jpg",
        "price_old": 75000,
        "price": 75000,
        "quantity": "1"
    }
}
```

### Update Shopping Cart
url : https://service.bukupedia.com/id/cart?id=xx
type : post
json : {"quantity":"2"}
param : Token JWT and Cart Id
feedback :
```
{
    "s": true,
    "m": "Post Input/Update Cart Success",
    "q": {
        "quantity": "2"
    },
    "d": {
        "id": "221601",
        "title": "CATATAN AYAH ASI DITAMBAH-TAMBAHIN",
        "image": "https://service.bukupedia.com/images/products/132340catatan-ayah-asi-ditambah-tambahin.jpg",
        "price_old": 75000,
        "price": 75000,
        "quantity": "2"
    }
}
```

### Delete Shopping Cart
url : https://service.bukupedia.com/id/delete-cart?id=xx
type : Get
param : Token JWT and cart id
feedback :
```
{
    "r": true,
    "m": "Post Delete Cart Success"
}
```

### List Province 
url : https://service.bukupedia.com/id/province
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Provincies Success",
    "d": [
        {
            "id": "1",
            "name": "Bali"
        },
        {
            "id": "10",
            "name": "Jawa Tengah"
        },
        {
            "id": "11",
            "name": "Jawa Timur"
        },
        {
            "id": "12",
            "name": "Kalimantan Barat"
        },
        {
            "id": "13",
            "name": "Kalimantan Selatan"
        },
        {
            "id": "14",
            "name": "Kalimantan Tengah"
        },
        {
            "id": "15",
            "name": "Kalimantan Timur"
        },
        {
            "id": "16",
            "name": "Kalimantan Utara"
        },
        {
            "id": "17",
            "name": "Kepulauan Riau"
        },
        {
            "id": "18",
            "name": "Lampung"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 4,
        "next_page_url": "https://https://service.bukupedia.com/id/province?page=2",
        "prevous_page_url": null,
        "total": 34
    }
}
```

### Province By Name
url : https://service.bukupedia.com/id/province?name=jawa%20barat
type : Get
param : name province
feedback :
```
{
    "r": true,
    "m": "Get Province Success",
    "d": {
        "id": "9",
        "name": "Jawa Barat"
    }
}
```

### List Regency 
url : https://service.bukupedia.com/id/regency
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Regencies Success",
    "d": [
        {
            "id": "1",
            "name": "Kabupaten Aceh Barat",
            "province_id": "21"
        },
        {
            "id": "10",
            "name": "Kabupaten Aceh Timur",
            "province_id": "21"
        },
        {
            "id": "100",
            "name": "Kabupaten Buru Selatan",
            "province_id": "19"
        },
        {
            "id": "101",
            "name": "Kabupaten Buton",
            "province_id": "30"
        },
        {
            "id": "102",
            "name": "Kabupaten Buton Utara",
            "province_id": "30"
        },
        {
            "id": "103",
            "name": "Kabupaten Ciamis",
            "province_id": "9"
        },
        {
            "id": "104",
            "name": "Kabupaten Cianjur",
            "province_id": "9"
        },
        {
            "id": "105",
            "name": "Kabupaten Cilacap",
            "province_id": "10"
        },
        {
            "id": "106",
            "name": "Kota Cilegon",
            "province_id": "3"
        },
        {
            "id": "107",
            "name": "Kota Cimahi",
            "province_id": "9"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 51,
        "next_page_url": "https://https://service.bukupedia.com/id/regency?page=2",
        "prevous_page_url": null,
        "total": 501
    }
}
```

### Regency By Name
url : https://service.bukupedia.com/id/regency?name=kota%20bandung
type : Get
param : name regency
feedback :
```
{
    "r": true,
    "m": "Get Regency Success",
    "d": {
        "id": "23",
        "name": "Kota Bandung",
        "province_id": "9"
    }
}
```

### Regency By Province Id
url : https://service.bukupedia.com/id/regency?province-id=20
type : Get
param : province id
feedback :
```
{
    "r": true,
    "m": "Get Regencies Success",
    "d": [
        {
            "id": "138",
            "name": "Kabupaten Halmahera Barat",
            "province_id": "20"
        },
        {
            "id": "139",
            "name": "Kabupaten Halmahera Selatan",
            "province_id": "20"
        }
    ],
    "p": {
        "per_page": 2,
        "last_page": 5,
        "next_page_url": "https://https://service.bukupedia.com/id/regency?province-id=20&page=2",
        "prevous_page_url": null,
        "total": 9
    }
}
```

### List Subdistrict
url : https://service.bukupedia.com/id/subdistrict
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Subdistricts Success",
    "d": [
        {
            "id": "1",
            "name": "Arongan Lambalek",
            "regency_id": "1"
        },
        {
            "id": "10",
            "name": "Woyla",
            "regency_id": "1"
        },
        {
            "id": "100",
            "name": "Jagong Jeget",
            "regency_id": "8"
        },
        {
            "id": "1000",
            "name": "Blora kota",
            "regency_id": "76"
        },
        {
            "id": "1001",
            "name": "Bogorejo",
            "regency_id": "76"
        },
        {
            "id": "1002",
            "name": "Cepu",
            "regency_id": "76"
        },
        {
            "id": "1003",
            "name": "Japah",
            "regency_id": "76"
        },
        {
            "id": "1004",
            "name": "Jati",
            "regency_id": "76"
        },
        {
            "id": "1005",
            "name": "Jepon",
            "regency_id": "76"
        },
        {
            "id": "1006",
            "name": "Jiken",
            "regency_id": "76"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 700,
        "next_page_url": "https://https://service.bukupedia.com/id/subdistrict?page=2",
        "prevous_page_url": null,
        "total": 6994
    }
}
```

### Subdistrict By Name
url : https://service.bukupedia.com/id/subdistrict?name=jamanis
type : Get
param : name subdistrict
feedback :
```
{
    "r": true,
    "m": "Get Subdistrict Success",
    "d": {
        "id": "6449",
        "name": "Jamanis",
        "regency_id": "468"
    }
}
```

### Subdistrict By Regency Id
url : https://service.bukupedia.com/id/subdistrict?regency-id=1
type : Get
param : regency id
feedback :
```
{
    "r": true,
    "m": "Get Subdistricts Success",
    "d": [
        {
            "id": "1",
            "name": "Arongan Lambalek",
            "regency_id": "1"
        },
        {
            "id": "10",
            "name": "Woyla",
            "regency_id": "1"
        }
    ],
    "p": {
        "per_page": 2,
        "last_page": 6,
        "next_page_url": "https://https://service.bukupedia.com/id/subdistrict?regency-id=1&page=2",
        "prevous_page_url": null,
        "total": 12
    }
}
```



### Shipping Cost
url : https://service.bukupedia.com/id/shipping-cost
type : Post
json : {"subdistrict_id":"1062","weight":"500"}
feedback :
```
{
    "s": true,
    "m": "Post Courier Success",
    "q": {
        "subdistrict_id": "1062",
        "weight": "500"
    },
    "d": [
        {
            "name": "JNE (REG)",
            "description": "Layanan Reguler",
            "cost": 9000,
            "etd": "1-2"
        }
    ]
}
```

### Order Payment
url : https://service.bukupedia.com/id/order-payment
type : Post
json : {"payment_method":"02,BRIN", "courier_name" : "JNE (REG)" , "courier_cost" : "9000" , "cust_name" : "irfan via api" , "cust_company" : "bisnis2030" , "cust_division" : "marketing" , "cust_phone" : "081809663000" , "cust_email" : "irfan@bisnis2030.com" , "cust_address" : "Ruka Swadaya City Square, Blok 1, No 2, Jl. Swadaya, Jelambar" , "subdistrict" : "Grogol Petamburan" , "regency" : "Kota Jakarta Barat" , "province" : "DKI Jakarta" , "postcode" : "11640" , "order" : [ {"cart_id" : "221600"} , {"cart_id" : "221601"}]}
param : Token JWT 
feedback :
```
{
    "s": true,
    "m": "Post Order Payment Success",
    "d": {
        "id": "67608",
        "invoice_no": "INV/BUKUPEDIA/67608",
        "order_date": "2018-09-13 16:14:42",
        "name": "irfan via api",
        "email": "irfan@bisnis2030.com",
        "phone": "081809663000",
        "payment_method": {
            "type": "02",
            "va": "BRIN",
            "fee": "2000",
            "payment_method": "lang_BRIN",
            "virtural_account": "BRIN",
            "expired": "20180920 235959"
        },
        "courier_name": "JNE (REG)",
        "address": "Ruka Swadaya City Square, Blok 1, No 2, Jl. Swadaya, Jelambar",
        "subdistrict": "Grogol Petamburan",
        "regency": "Kota Jakarta Barat",
        "province": "DKI Jakarta",
        "postcode": "11640",
        "order_status": [
            {
                "date": "2018-09-13 16:14:42",
                "status": 0,
                "message": "Menunggu pembayaran"
            }
        ],
        "sub_total": 205000,
        "discount_invoice": 0,
        "shipping_cost": 0,
        "noxify_unique_code": 0,
        "admin_fee": "2000",
        "grand_total": 205000,
        "order_detail": [
            {
                "id": "117704",
                "title": "The Mind & The Brain Dahsyatnya Otak Dan Pikiran Manusia",
                "authors": "Alfred Binet",
                "price": 55000,
                "quantity": 1,
                "image": "https://service.bukupedia.com/images/products/the-mind-the-brain-dahsyatnya-otak-dan-pikiran-manusia.jpeg",
                "link": "https://service.bukupedia.com/id/product/id-110686/the-mind-the-brain-dahsyatnya-otak-dan-pikiran-manusia.html"
            },
            {
                "id": "117705",
                "title": "CATATAN AYAH ASI DITAMBAH-TAMBAHIN",
                "authors": "Aditya Sudarto, A. Rahmat Hidayat, Dipa Andika Nurprasetyo, Ernest Prakasa, Pandu Gunawan, Shafiq Po",
                "price": 75000,
                "quantity": 2,
                "image": "https://service.bukupedia.com/images/products/132340catatan-ayah-asi-ditambah-tambahin.jpg",
                "link": "https://service.bukupedia.com/id/product/id-132340/catatan-ayah-asi-ditambah-tambahin.html"
            }
        ]
    }
}
```
