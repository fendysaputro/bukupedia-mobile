Bukupedia Mobile Apps IOS dan Android.

# Install API Bukupeida
setting Host supaya bisa terkoneksi sama API 
```
202.78.195.235 bmcdev-api.bukupedia.com
```
### Banner
url  : bmcdev-api.bukupedia.com/api/v1/banner
type : GET
feedback :
```
{
    "r": true,
    "m": "Get Banner Success",
    "d": [
        {
            "type": "banner",
            "id": "2",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/Ilk55Zrk_main.banner4.png",
                "url": "http://bukupedia.com"
            }
        },
        {
            "type": "banner",
            "id": "6",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/VwftBNHV_main.banner5.png",
                "url": null
            }
        },
        {
            "type": "banner",
            "id": "11",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/ZGG1Ur7L_main.banner6.png",
                "url": null
            }
        },
        {
            "type": "banner",
            "id": "12",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/3uWShUbb_main.banner3.png",
                "url": null
            }
        },
        {
            "type": "banner",
            "id": "13",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/7Xy6skuL_main.banner4.png",
                "url": null
            }
        }
    ]
}
```

# Banner Small
url : bmcdev-api.bukupedia.com/api/v1/banner-small
type : GET
feedback :
```
{
    "r": true,
    "m": "Get Banner Success",
    "d": [
        {
            "type": "banner-small",
            "id": "14",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/UKpaDj5k_top.iconcs.png",
                "url": null
            }
        },
        {
            "type": "banner-small",
            "id": "15",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/mtMA3kDy_top.icongratisongkir.png",
                "url": null
            }
        },
        {
            "type": "banner-small",
            "id": "8",
            "attributes": {
                "picture": "http://bmc.id/storage/store-1/banners/p5xFM4qY_top.iconcarabelanja.png",
                "url": "3434"
            }
        }
    ]
}
```
### Banner Footer
url : bmcdev-api.bukupedia.com/api/v1/banner-footer
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Banner Success",
    "d": {
        "type": "banner-footer",
        "id": "10",
        "attributes": {
            "sort_index": null,
            "picture": "http://bmc.id/storage/store-1/banners/XxDySHTb_bottom.footer-banner.png",
            "url": null
        }
    }
}
```
### New Product 
url  : bmcdev-api.bukupedia.com/api/v1/new-product
type : GET
feedback :
```
{
    "r": true,
    "m": "Get New Product Success",
    "d": [
        {
            "id": "32",
            "title": "Asami Sensei",
            "authors": [
                "Chika"
            ],
            "stock": 100,
            "price-old": null,
            "price": 22500,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/0PG4PNjb3X85_small",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/asami-sensei"
        },
        {
            "id": "22",
            "title": "she is crazy",
            "authors": [
                "Cindy Viranty",
                "NN"
            ],
            "stock": 300,
            "price-old": null,
            "price": 200000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/9JVvHTcHxlggjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/she-is-crazy"
        },
        {
            "id": "12",
            "title": "Berjalan Jauh Test",
            "authors": [
                "Fauzan Mukrim"
            ],
            "stock": 100,
            "price-old": null,
            "price": 250000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/hgJg5FIua9RyJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/berjalan-jauh-test"
        },
        {
            "id": "11",
            "title": "langkah amudah",
            "authors": [
                "Demas Garin"
            ],
            "stock": 822,
            "price-old": null,
            "price": 625,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/tohcnbQdz8qsjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/langkah-amudah"
        },
        {
            "id": "10",
            "title": "Fiesta",
            "authors": [
                "Ernest Hemingway"
            ],
            "stock": 100,
            "price-old": null,
            "price": 64000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/kECB6TBjWz30jpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/fiesta"
        },
        {
            "id": "9",
            "title": "Kirana & Happy Little World",
            "authors": [
                "Retno Hening"
            ],
            "stock": 100,
            "price-old": null,
            "price": 77000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9SmioVlgCTujpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/kirana-happy-little-world"
        },
        {
            "id": "8",
            "title": "MY DEVIL BUTLER",
            "authors": [
                "Queen Nakey"
            ],
            "stock": 624,
            "price-old": null,
            "price": 99500,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9PQDAz3bfCxjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/my-devil-butler"
        },
        {
            "id": "7",
            "title": "Berjalan Jauh",
            "authors": [
                "Fauzan Mukrim"
            ],
            "stock": 100,
            "price-old": null,
            "price": 62000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/zBUkcwKueyXYJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/berjalan-jauh"
        },
        {
            "id": "6",
            "title": "Tidak Pernah Ada Kita",
            "authors": [
                "Dwitasari"
            ],
            "stock": 100,
            "price-old": null,
            "price": 69000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/HZ1cxjfeZ2RFJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/tidak-pernah-ada-kita"
        },
        {
            "id": "5",
            "title": "Ubur-Ubur Lembur",
            "authors": [
                "Raditya Dika"
            ],
            "stock": 100,
            "price-old": null,
            "price": 66000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/JhaOir0s8kMNjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/ubur-ubur-lembur"
        }
    ]
}
```
### Payment Method
url : bmcdev-api.bukupedia.com/api/v1/payment-method
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Payment Method Success",
    "d": [
        {
            "type": "payment-method",
            "id": "3",
            "attribute": {
                "bank_name": "BCA",
                "picture": "http://bmc.id/storage/admin/WE3hTtTq_bank.gif",
                "account_name": "Nomor Kantor",
                "account_no": "1234349",
                "branch": "jelambar"
            }
        },
        {
            "type": "payment-method",
            "id": "4",
            "attribute": {
                "bank_name": "BRI",
                "picture": "http://bmc.id/storage/admin/G6ZZjKnAbank.gif",
                "account_name": "Rekening Pribadi",
                "account_no": "12343234",
                "branch": "jelambar"
            }
        }
    ]
}
```
### Shipment Method
url : bmcdev-api.bukupedia.com/api/v1/shipment-method
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Shipment Method Success",
    "d": [
        {
            "type": "shipment-method",
            "id": "10",
            "attribute": {
                "origin": "Batang",
                "post_code": "200",
                "couriers": [
                    {
                        "name": "Kurir Jne",
                        "picture": "http://bmc.id/storage/admin/2S9xBVBh_courier.jpeg",
                        "additonal_cost": null
                    },
                    {
                        "name": "ESL",
                        "picture": "http://bmc.id/storage/admin/2TRDNycf_courier.jpeg",
                        "additonal_cost": null
                    }
                ]
            }
        }
    ]
}  
```

### List Product
url : bmcdev-api.bukupedia.com/api/v1/products
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Products Success",
    "d": [
        {
            "id": "1",
            "title": "All in one (English)",
            "authors": [
                "nabilah  dayanti"
            ],
            "stock": 20,
            "price-old": null,
            "price": 89000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/HzSFjshx0iEUjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/all-in-one-english"
        },
        {
            "id": "2",
            "title": "Full Metal Alchemist 3",
            "authors": [
                "Hiromi Arakawa"
            ],
            "stock": 100,
            "price-old": null,
            "price": 70000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/wxeYBtFVBJfijpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/full-metal-alchemist-3"
        },
        {
            "id": "3",
            "title": "aku jago menggambar superhero",
            "authors": [
                "NN"
            ],
            "stock": 200,
            "price-old": null,
            "price": 25000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/9BczlI7MPDc0jpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/aku-jago-menggambar-superhero"
        },
        {
            "id": "4",
            "title": "The Secret",
            "authors": [
                "Demas Garin"
            ],
            "stock": 100,
            "price-old": null,
            "price": 75000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/v7F2SPHaBdDQJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/the-secret"
        },
        {
            "id": "5",
            "title": "Ubur-Ubur Lembur",
            "authors": [
                "Raditya Dika"
            ],
            "stock": 100,
            "price-old": null,
            "price": 66000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/JhaOir0s8kMNjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/ubur-ubur-lembur"
        },
        {
            "id": "6",
            "title": "Tidak Pernah Ada Kita",
            "authors": [
                "Dwitasari"
            ],
            "stock": 100,
            "price-old": null,
            "price": 69000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/HZ1cxjfeZ2RFJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/tidak-pernah-ada-kita"
        },
        {
            "id": "7",
            "title": "Berjalan Jauh",
            "authors": [
                "Fauzan Mukrim"
            ],
            "stock": 100,
            "price-old": null,
            "price": 62000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/zBUkcwKueyXYJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/berjalan-jauh"
        },
        {
            "id": "8",
            "title": "MY DEVIL BUTLER",
            "authors": [
                "Queen Nakey"
            ],
            "stock": 624,
            "price-old": null,
            "price": 99500,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9PQDAz3bfCxjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/my-devil-butler"
        },
        {
            "id": "9",
            "title": "Kirana & Happy Little World",
            "authors": [
                "Retno Hening"
            ],
            "stock": 100,
            "price-old": null,
            "price": 77000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9SmioVlgCTujpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/kirana-happy-little-world"
        },
        {
            "id": "10",
            "title": "Fiesta",
            "authors": [
                "Ernest Hemingway"
            ],
            "stock": 100,
            "price-old": null,
            "price": 64000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/kECB6TBjWz30jpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/fiesta"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 2,
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/products?page=2",
        "prevous_page_url": null,
        "total": 14
    }
}
```

### Main Category
url : bmcdev-api.bukupedia.com/api/v1/category
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Main Category Success",
    "d": [
        {
            "id": "1",
            "name": "Agro & Fauna",
            "sort_index": null,
            "sub_category": [],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/agro-fauna",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/agro-fauna"
        },
        {
            "id": "4",
            "name": "Fiksi Populer",
            "sort_index": null,
            "sub_category": [
                {
                    "id": 20,
                    "name": "Novel Horor",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-horor",
                    "sort_index": null
                },
                {
                    "id": 21,
                    "name": "Novel Humor",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-humor",
                    "sort_index": null
                },
                {
                    "id": 24,
                    "name": "Novel Remaja",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-remaja",
                    "sort_index": null
                },
                {
                    "id": 25,
                    "name": "Fiksi Lainnya",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/fiksi-lainnya",
                    "sort_index": null
                }
            ],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/fiksi-populer",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/fiksi-populer"
        },
        {
            "id": "5",
            "name": "Kesehatan & Kedokteran",
            "sort_index": null,
            "sub_category": [],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/kesehatan-kedokteran",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/kesehatan-kedokteran"
        },
        {
            "id": "6",
            "name": "Komik",
            "sort_index": null,
            "sub_category": [
                {
                    "id": 17,
                    "name": "Komik Jepang",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/komik-jepang",
                    "sort_index": null
                }
            ],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/komik",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/komik"
        },
        {
            "id": "7",
            "name": "Masakan & Makanan",
            "sort_index": null,
            "sub_category": [],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/masakan-makanan",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/masakan-makanan"
        },
        {
            "id": "8",
            "name": "Motivasi & Pengembangan Diri",
            "sort_index": null,
            "sub_category": [],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/motivasi-pengembangan-diri",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/motivasi-pengembangan-diri"
        },
        {
            "id": "10",
            "name": "Orang Tua & Keluarga",
            "sort_index": null,
            "sub_category": [],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/orang-tua-keluarga",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/orang-tua-keluarga"
        }
    ]
}
```

### Sub Category
url : bmcdev-api.bukupedia.com/api/v1/category/fiksi-populer
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Category Success",
    "d": [
        {
            "id": "4",
            "name": "Fiksi Populer",
            "sort_index": null,
            "sub_category": [
                {
                    "id": 20,
                    "name": "Novel Horor",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-horor",
                    "sort_index": null
                },
                {
                    "id": 21,
                    "name": "Novel Humor",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-humor",
                    "sort_index": null
                },
                {
                    "id": 24,
                    "name": "Novel Remaja",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-remaja",
                    "sort_index": null
                },
                {
                    "id": 25,
                    "name": "Fiksi Lainnya",
                    "link": "https://bmcdev-api.bukupedia.com/api/v1/category/fiksi-lainnya",
                    "sort_index": null
                }
            ],
            "link": "https://bmcdev-api.bukupedia.com/api/v1/category/fiksi-populer",
            "product-link": "https://bmcdev-api.bukupedia.com/api/v1/product-category/fiksi-populer"
        }
    ]
}
```

### Product by Category
url : bmcdev-api.bukupedia.com/api/v1/product-category/fiksi-populer
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Product by Category Success",
    "d": [
        {
            "id": "4",
            "title": "The Secret",
            "authors": [
                "Demas Garin"
            ],
            "stock": 100,
            "price-old": null,
            "price": 75000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/v7F2SPHaBdDQJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/the-secret"
        },
        {
            "id": "5",
            "title": "Ubur-Ubur Lembur",
            "authors": [
                "Raditya Dika"
            ],
            "stock": 100,
            "price-old": null,
            "price": 66000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/JhaOir0s8kMNjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/ubur-ubur-lembur"
        },
        {
            "id": "6",
            "title": "Tidak Pernah Ada Kita",
            "authors": [
                "Dwitasari"
            ],
            "stock": 100,
            "price-old": null,
            "price": 69000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/HZ1cxjfeZ2RFJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/tidak-pernah-ada-kita"
        },
        {
            "id": "7",
            "title": "Berjalan Jauh",
            "authors": [
                "Fauzan Mukrim"
            ],
            "stock": 100,
            "price-old": null,
            "price": 62000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/zBUkcwKueyXYJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/berjalan-jauh"
        },
        {
            "id": "8",
            "title": "MY DEVIL BUTLER",
            "authors": [
                "Queen Nakey"
            ],
            "stock": 624,
            "price-old": null,
            "price": 99500,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9PQDAz3bfCxjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/my-devil-butler"
        },
        {
            "id": "9",
            "title": "MY DEVIL BUTLER",
            "authors": [
                "Retno Hening"
            ],
            "stock": 624,
            "price-old": null,
            "price": 99500,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/E9SmioVlgCTujpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/my-devil-butler"
        },
        {
            "id": "11",
            "title": "Fiesta",
            "authors": [
                "Demas Garin"
            ],
            "stock": 100,
            "price-old": null,
            "price": 64000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/tohcnbQdz8qsjpg",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/fiesta"
        },
        {
            "id": "12",
            "title": "langkah amudah",
            "authors": [
                "Fauzan Mukrim"
            ],
            "stock": 822,
            "price-old": null,
            "price": 625,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/hgJg5FIua9RyJPG",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/langkah-amudah"
        },
        {
            "id": "26",
            "title": "she is crazy",
            "authors": [
                "tim presiden eduka"
            ],
            "stock": 300,
            "price-old": null,
            "price": 200000,
            "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/fc0ZHB7zIZH2",
            "link": "https://bmcdev-api.bukupedia.com/api/v1/product/she-is-crazy"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 1,
        "next_page_url": null,
        "prevous_page_url": null,
        "total": 9
    }
}
```

### Product Detail
url : bmcdev-api.bukupedia.com/api/v1/product/the-secret
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Product Success",
    "d": {
        "id": "4",
        "title": "The Secret",
        "authors": [
            "Demas Garin"
        ],
        "categories": [
            {
                "name": "Novel Horor",
                "link": "https://bmcdev-api.bukupedia.com/api/v1/category/novel-horor"
            }
        ],
        "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/v7F2SPHaBdDQJPG",
        "estimated_shipment": "10 - 20 hari",
        "stock": 100,
        "price-old": null,
        "price": 75000,
        "publisher": "Rans",
        "isbn": "9786026117649",
        "format": "Soft Cover",
        "lang": "Indonesia",
        "pages": 200,
        "release": 2018,
        "weight": 300,
        "size": "A5 (21 cm x 14.8 cm)",
        "desc": "<p>Rahasia itu ada &hellip;.<br />\r\nSetiap manusia, baik yang masih bernapas maupun yang telah terhenti napasnya,<br />\r\nmemiliki rahasia. Masa lalu, cinta, kepahitan, pengkhianatan, kesetiaan,<br />\r\npengorbanan, kerinduan, dikemas dalam selembar kain berlabel RAHASIA.<br />\r\n&nbsp;<br />\r\n&ldquo;To &hellip; loong &hellip; ja &hellip; ngan ...!&rdquo;<br />\r\nRintihan ketakutan perempuan itu sama sekali tidak digubris. Ia terus diseret dengan<br />\r\nkeji. Baju yang dipakainya kotor berlumuran darah dan tanah basah. Ia bersimbah<br />\r\ndarahnya sendiri. Wajahnya penuh luka, rambutnya tak karuan. Rasa takut terhadap<br />\r\nsosok penyeretnya mengalahkan rasa sakit yang dirasakannya.<br />\r\nIa sudah nyaris tak sadarkan diri. Ia berharap masih punya setetes energi sisa untuk<br />\r\nmenyelamatkan diri. Membayangkan apa yang mungkin akan menimpanya<br />\r\nmembuatnya kaku tak berkutik. Hal yang paling ditakutinya adalah ia mati sendiri di<br />\r\n&nbsp;<br />\r\ntempat ini tanpa ada yang tahu.</p>",
        "reviews": []
    }
}
```

### Form Register
url : bmcdev-api.bukupedia.com/api/v1/register
type : Post
param : [
    name => 'name customer',
    email => 'email login',
    password => 'password login'
]
feedback :
```
{
    "r": true,
    "m": "Regeister Success",
    "d": {
        "user": {
            "id": "104",
            "name": "angga",
            "email": "angga@mail.com",
            "phone": null,
            "birth_date": null,
            "gender": false,
            "avatar": ""
        },
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEwNCwiaXNzIjoiaHR0cHM6Ly9ibWNkZXYtYXBpLmJ1a3VwZWRpYS5jb20vYXBpL3YxL3JlZ2lzdGVyIiwiaWF0IjoxNTI5OTExNzYyLCJleHAiOjE1MzAxNzA5NjIsIm5iZiI6MTUyOTkxMTc2MiwianRpIjoidkJxcWwza1ZhMDh4QkxIViJ9.ZRCFyetIfscR-jkQzxdXEUmIFPO416TY9Gi9hDKHkZA"
    }
}
```

### Form Login
url : bmcdev-api.bukupedia.com/api/v1/login
type : Post
Param : [
    email => 'email logoin',
    password => 'password login'
]
feedback :
```
{
    "r": true,
    "m": "Login berhasil",
    "d": {
        "user": {
            "id": "6",
            "name": "Irfan Abdurrasyid",
            "email": "irfan@bisnis2030.com",
            "phone": null,
            "birth_date": null,
            "gender": false,
            "avatar": ""
        },
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImlzcyI6Imh0dHBzOi8vYm1jZGV2LWFwaS5idWt1cGVkaWEuY29tL2FwaS92MS9sb2dpbiIsImlhdCI6MTUyOTkxMTgxMCwiZXhwIjoxNTMwMTcxMDEwLCJuYmYiOjE1Mjk5MTE4MTAsImp0aSI6InZGbnNOa0xrc3dRMEFBU20ifQ.dh683g67Xv_TiwM6SPXTt4fcXYBGQvFX7GWnBOgE10g"
    }
}
```

### Logout
url : bmcdev-api.bukupedia.com/api/v1/logout
type : Get
param : toke JWT
feedback :
```
{
    "r": true,
    "m": "Logout berhasil"
}
```

### List Order (page my account)
url : bmcdev-api.bukupedia.com/api/v1/order
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Orders Success",
    "d": [
        {
            "id": "10",
            "invocie_no": "060320185507",
            "order_date": {
                "date": "2018-03-06 10:49:10.000000",
                "timezone_type": 3,
                "timezone": "Asia/Jakarta"
            },
            "status": "Menunggu Pembayaran",
            "grand_total": 79602,
            "link-detail": "https://bmcdev-api.bukupedia.com/api/v1/order/10"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 1,
        "next_page_url": null,
        "prevous_page_url": null,
        "total": 1
    }
}
```

### Order Detail (page my account)
url : bmcdev-api.bukupedia.com/api/v1/order/{id}
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Order Detail Success",
    "d": {
        "id": "10",
        "invoice_no": "060320185507",
        "order_date": {
            "date": "2018-03-06 10:49:10.000000",
            "timezone_type": 3,
            "timezone": "Asia/Jakarta"
        },
        "name": "Irfan Abdurrasyid",
        "email": "irfan@bisnis2030.com",
        "phone": "081809663000",
        "address": "Ruko Swadaya City. Blok 1 No 2. Jl. Swadaya",
        "subdistrict": "Grogol Petamburan",
        "regency": "Kota Jakarta Barat",
        "province": "DKI Jakarta",
        "postcode": "11640",
        "courier": "jne ( CTC )",
        "sub_total": "89000.00",
        "shipping_cost": "9000.00",
        "discount_invoice": 0,
        "unique_code": "801.00",
        "grand_total": 79602,
        "products": [
            {
                "title": "Tidak Pernah Ada Kita",
                "isbn": "9786024302412",
                "image": "https://bmcdev-api.bukupedia.com/storage/store-7/products/HZ1cxjfeZ2RFJPG",
                "link": "https://bmcdev-api.bukupedia.com/api/v1/product/tidak-pernah-ada-kita",
                "price": 69000,
                "discount": 0,
                "quantity": 1
            }
        ],
        "recent_update": null
    }
}
```

### List Address (page my account)
url : bmcdev-api.bukupedia.com/api/v1/address
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Address Success",
    "d": [
        {
            "id": "8",
            "label": "",
            "name": "Irfan Abdurrasyid",
            "company": null,
            "division": null,
            "phone": "081809663000",
            "address": "Ruko Swadaya City. Blok 1 No 2. Jl. Swadaya",
            "subdistrict": "Grogol Petamburan",
            "regency": "Kota Jakarta Barat",
            "province": "DKI Jakarta",
            "postcode": "11640",
            "status": 0
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 1,
        "next_page_url": null,
        "prevous_page_url": null,
        "total": 1
    }
}
```

### Create Address
url : bmcdev-api.bukupedia.com/api/v1/address
type : Post
param : [
    user_id => "2",
    label => "Alamat Kantor 2",
    name => "Irfan Abdurrasyid",
    company => "",
    division => "",
    phone => "08122313424",
    address => "Kav Polri, Blok C, No 729. Jl. Haidah Utama",
    subdistrict_id => "2500",
    postcode => "11640"
]
feedback :
```
{
    "r": true,
    "m": "Post Address Success",
    "d": {
        "id": "94",
        "label": "Alamat Kantor 2",
        "name": "Irfan Abdurrasyid",
        "company": null,
        "division": null,
        "phone": "08122313424",
        "address": "Kav Polri, Blok C, No 729. Jl. Haidah Utama",
        "subdistrict": "Grogol",
        "regency": "Kabupaten Kediri",
        "province": "Jawa Timur",
        "postcode": "11640",
        "status": null
    }
}
```

### Update Address
url : bmcdev-api.bukupedia.com/api/v1/address/{id}
type : Post
param : [
    label => "Alamat Kantor",
    name => "Irfan Abdurrasyid",
    company => "bisnis2030",
    division => "marketing",
    phone => "08122313424",
    address => "Kav Polri, Blok C, No 729. Jl. Haidah Utama",
    subdistrict_id => "2500",
    postcode => "11640"
]
feedback :
```
{
    "r": true,
    "m": "Post Update Address Success",
    "d": {
        "id": "94",
        "label": "Alamat Kantor",
        "name": "Irfan Abdurrasyid",
        "company": "bisnis2030",
        "division": "marketing",
        "phone": "08122313424",
        "address": "Kav Polri, Blok C, No 729. Jl. Haidah Utama",
        "subdistrict": "Grogol",
        "regency": "Kabupaten Kediri",
        "province": "Jawa Timur",
        "postcode": "11640",
        "status": null
    }
}
```

### Set Main Address
url : bmcdev-api.bukupedia.com/api/v1/main-address/{id}
type : Get
feedback :
```
{
    "r": true,
    "m": "Get Main Address Success",
    "d": {
        "id": "94",
        "label": "Alamat Kantor 2",
        "name": "Irfan Abdurrasyid",
        "company": null,
        "division": null,
        "phone": "08122313424",
        "address": "Kav Polri, Blok C, No 729. Jl. Haidah Utama",
        "subdistrict": "Grogol",
        "regency": "Kabupaten Kediri",
        "province": "Jawa Timur",
        "postcode": "11640",
        "status": "1"
    }
}
```

### Content FAQ
url : bmcdev-api.bukupedia.com/api/v1/faq
type : Get
feedback :
```
{
    "r": true,
    "m": "Get FAQ Success",
    "d": {
        "id": "167",
        "content": "<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>\r\n\r\n<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>"
    }
}
```

### Content How To Shop
url : bmcdev-api.bukupedia.com/api/v1/how-to-shop
type : Get
feedback :
```
{
    "r": true,
    "m": "Get How To Shop Success",
    "d": {
        "id": "165",
        "content": "<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>\r\n\r\n<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>"
    }
}
```

### Content How To Payment 
url : bmcdev-api.bukupedia.com/api/v1/how-to-payment
type : Get
feedback :
```
{
    "r": true,
    "m": "Get How To Payment Success",
    "d": {
        "id": "166",
        "content": "<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>\r\n\r\n<p>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>"
    }
}
```

### Profile
url : bmcdev-api.bukupedia.com/api/v1/profile
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Profile Success",
    "d": {
        "id": "6",
        "name": "Irfan Abdurrasyid",
        "email": "irfan@bisnis2030.com",
        "phone": null,
        "birth_date": null,
        "gender": false,
        "avatar": ""
    }
}
```

### Edit Profile
url : bmcdev-api.bukupedia.com/api/v1/profile
type : Post
param : [
    name => "irfan Abdurrasyid",
    email => "irfan@bisnis2030.com",
    phone => "08212344",
    birth_date => "1988-07-27",
    gander => "1",
    avatar => ""
]
feedback :
```
{
    "r": true,
    "m": "POST Update Profile Success",
    "d": {
        "id": "2",
        "name": "irfan Abdurrasyid",
        "email": "irfan@bisnis2030.com",
        "phone": "08212344",
        "birth_date": "1988-07-27",
        "gender": "Laki-laki",
        "avatar": ""
    }
}
```

### List Shopping Cart
url : bmcdev-api.bukupedia.com/api/v1/cart
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Cart Success",
    "d": [
        {
            "id": "12",
            "title": "(S)HE IS CRAZY",
            "image": "http://bmc.id/storage/store-1/products/P1s7RTB6Rlixjpg",
            "price-old": null,
            "price": 65000,
            "quantity": 1
        }
    ]
}
```

### Create Shopping Cart 
url : bmcdev-api.bukupedia.com/api/v1/cart
type : Post
param : [
    user_id => "2",
    product_id = "6",
    quantity = "1"
]
feedback :
```
{
    "r": true,
    "m": "Post Input Cart Success",
    "d": {
        "id": "12",
        "title": "(S)HE IS CRAZY",
        "image": "http://bmc.id/storage/store-1/products/P1s7RTB6Rlixjpg",
        "price-old": null,
        "price": 65000,
        "quantity": "1"
    }
}
```

### Update Shopping Cart
url : bmcdev-api.bukupedia.com/api/v1/cart/{id}
type : post
param : [
    quantity : "1"
]
feedback :
```
{
    "r": true,
    "m": "Post Update Cart Success",
    "d": {
        "id": "8",
        "title": "Tidak Pernah Ada Kita",
        "image": "http://bmc.id/storage/store-1/products/thTo0zIDujD4_small",
        "price-old": null,
        "price": 70000,
        "quantity": "3"
    }
}
```

### Delete Shopping Cart
url : bmcdev-api.bukupedia.com/api/v1/delete-cart/{id}
type : Get
feedback :
```
{
    "r": true,
    "m": "Post Delete Cart Success"
}
```

### List Province 
url : bmcdev-api.bukupedia.com/api/v1/province
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
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/province?page=2",
        "prevous_page_url": null,
        "total": 34
    }
}
```

### Province By Name
url : bmcdev-api.bukupedia.com/api/v1/province?name=jawa%20barat
type : Get
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
url : bmcdev-api.bukupedia.com/api/v1/regency
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
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/regency?page=2",
        "prevous_page_url": null,
        "total": 501
    }
}
```

### Regency By Name
url : bmcdev-api.bukupedia.com/api/v1/regency?name=kota%20bandung
type : Get
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
url : bmcdev-api.bukupedia.com/api/v1/regency?province-id=20
type : Get
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
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/regency?province-id=20&page=2",
        "prevous_page_url": null,
        "total": 9
    }
}
```

### List Subdistrict
url : bmcdev-api.bukupedia.com/api/v1/subdistrict
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
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/subdistrict?page=2",
        "prevous_page_url": null,
        "total": 6994
    }
}
```

### Subdistrict By Name
url : bmcdev-api.bukupedia.com/api/v1/subdistrict?name=jamanis
type : Get
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
url : bmcdev-api.bukupedia.com/api/v1/subdistrict?regency-id=1
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
        }
    ],
    "p": {
        "per_page": 2,
        "last_page": 6,
        "next_page_url": "https://bmcdev-api.bukupedia.com/api/v1/subdistrict?regency-id=1&page=2",
        "prevous_page_url": null,
        "total": 12
    }
}
```

### Create Review
url : bmcdev-api.bukupedia.com/api/v1/review
type : post
param : [
    product_id => "14",
    title   => "review buku",
    rating => "4",
    comment => "isi dari review buku"
]
feedback :
```
{
    "r": true,
    "m": "Post Review Success",
    "d": {
        "product_id": "14",
        "title": "review buku",
        "rating": "4",
        "comment": "isi dari review buku",
        "user_id": 2,
        "updated_at": "2018-06-25 15:24:58",
        "created_at": "2018-06-25 15:24:58",
        "id": 4
    }
}
```

### Update Review
url : bmcdev-api.bukupedia.com/api/v1/reveiw/{id}
type : post
param : [
    product_id => "14",
    title   => "review buku baru",
    rating => "2",
    comment => "isi dari review buku baru"
]
feedback :
```
{
    "r": true,
    "m": "Post Update Review Success",
    "d": {
        "id": 4,
        "user_id": 2,
        "rating": "2",
        "title": "review buku baru",
        "comment": "isi dari revie buku  baru",
        "product_id": "14",
        "created_at": "2018-06-25 15:24:58",
        "updated_at": "2018-06-25 15:27:06"
    }
}
```

### List Wishlist (page my account)
url : bmcdev-api.bukupedia.com/api/v1/wishlist
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Wishlists Success",
    "d": [
        {
            "id": "2",
            "product_id": 16,
            "title": "(S)HE IS CRAZY",
            "authors": [
                "Imelda",
                "Lingga"
            ],
            "stock": 150,
            "price-old": null,
            "price": 65000,
            "image": "http://bmc.id/storage/store-1/products/P1s7RTB6Rlixjpg",
            "link": "http://bmc.id/api/v1/product/s-he-is-crazy"
        },
        {
            "id": "3",
            "product_id": 15,
            "title": "Cinta Paling Rumit",
            "authors": [
                "Haylie",
                "Imelda"
            ],
            "stock": 150,
            "price-old": null,
            "price": 75000,
            "image": "http://bmc.id/storage/store-1/products/WLQ2FtQP3iPBjpg",
            "link": "http://bmc.id/api/v1/product/cinta-paling-rumit"
        },
        {
            "id": "4",
            "product_id": 1,
            "title": "buku 12",
            "authors": [
                "Rosalinda"
            ],
            "stock": 10,
            "price-old": null,
            "price": 14998,
            "image": "http://bmc.id/storage/store-1/products/../HP4tNsmK_default.png",
            "link": "http://bmc.id/api/v1/product/buku-12"
        }
    ],
    "p": {
        "per_page": 10,
        "last_page": 1,
        "next_page_url": null,
        "prevous_page_url": null,
        "total": 3
    }
}
```

### Add/Delete Wishlish
url : bmcdev-api.bukupedia.com/api/v1/wishlist/{id}
type : Get
param : token JWT
feedback :
```
{
    "r": true,
    "m": "Get Add Wishlist Success"
}
```

### Shipping Cost
url : bmcdev-api.bukupedia.com/api/v1/shipping-cost
type : Post
param : [
    subdistrict_id => "2500",
    courier => "jne"
]
feedback :
```
{
    "r": true,
    "m": "Get Shipment Cost Success",
    "d": {
        "code": "jne",
        "name": "Jalur Nugraha Ekakurir (JNE)",
        "costs": [
            {
                "service": "OKE",
                "description": "Ongkos Kirim Ekonomis",
                "cost": [
                    {
                        "value": 23000,
                        "etd": "3-6",
                        "note": ""
                    }
                ]
            },
            {
                "service": "REG",
                "description": "Layanan Reguler",
                "cost": [
                    {
                        "value": 26000,
                        "etd": "2-4",
                        "note": ""
                    }
                ]
            }
        ]
    }
}
```

### Order Payment
url : bmcdev-api.bukupedia.com/api/v1/order-payment
type : Post
param : [
    user_id => "6",
    bank_id => "3",
    courier_name => "JNE",
    courier_cost => "9000",
    cust_name => "irfan via api",
    cust_company => "bisnis2030",
    cust_division => "marketing",
    cust_phone => "081809663000",
    cust_email => "irfan@bisnis2030.com",
    cust_address => "Ruka Swadaya City Square, Blok 1, No 2, Jl. Swadaya, Jelambar",
    subdistrict => "Grogol Petamburan",
    regency => "Kota Jakarta Barat",
    province => "DKI Jakarta",
    postcode => "11640",
    order[0][product_id] => "1",
    order[0][quantity] => "1",
    order[1][product_id] => "2",
    order[1][quantity] => "1"
]
note : order detail get from shopping cart. 
feedback :
```
{
    "r": true,
    "m": "Post Payment Success",
    "d": {
        "id": "20",
        "invocie_no": "250620185851",
        "order_date": {
            "date": "2018-06-25 11:32:34.000000",
            "timezone_type": 3,
            "timezone": "Asia/Jakarta"
        },
        "payment_expire": {
            "date": "2018-06-27 21:00:00.000000",
            "timezone_type": 3,
            "timezone": "Asia/Jakarta"
        },
        "status": "Menunggu Pembayaran",
        "total_payment": null,
        "unique_code": null,
        "grand_total": 0,
        "bank": {
            "name": "BCA",
            "branch": "jelambar",
            "account_name": "Nomor Kantor",
            "account_no": "1234349"
        },
        "link-detail": "http://bmc.id/api/v1/order/20"
    }
}
```
