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
    "m": "Get Product Success",
    "d": [
        {
            "type": "new-product",
            "id": "17",
            "attribute": {
                "title": "Tidak Pernah Ada Kita",
                "authors": {
                    "5": "Haylie",
                    "6": "Jewell"
                },
                "stock": 100,
                "price": 70000
            }
        },
        {
            "type": "new-product",
            "id": "16",
            "attribute": {
                "title": "(S)HE IS CRAZY",
                "authors": {
                    "2": "Lingga",
                    "11": "Imelda"
                },
                "stock": 150,
                "price": 65000
            }
        },
        {
            "type": "new-product",
            "id": "15",
            "attribute": {
                "title": "Cinta Paling Rumit",
                "authors": {
                    "5": "Haylie",
                    "11": "Imelda"
                },
                "stock": 150,
                "price": 75000
            }
        },
        {
            "type": "new-product",
            "id": "14",
            "attribute": {
                "title": "UBUR-UBUR LEMBUR",
                "authors": {
                    "5": "Haylie"
                },
                "stock": 150,
                "price": 60000
            }
        },
        {
            "type": "new-product",
            "id": "13",
            "attribute": {
                "title": "New Kobochan 32",
                "authors": {
                    "9": "Dakota"
                },
                "stock": 100,
                "price": 45000
            }
        },
        {
            "type": "new-product",
            "id": "12",
            "attribute": {
                "title": "Sailor Moon 8 (Deluxe)",
                "authors": {
                    "6": "Jewell",
                    "9": "Dakota"
                },
                "stock": 100,
                "price": 50000
            }
        },
        {
            "type": "new-product",
            "id": "11",
            "attribute": {
                "title": "ORIGIN (hardcover)",
                "authors": {
                    "5": "Haylie",
                    "6": "Jewell"
                },
                "stock": 100,
                "price": 160000
            }
        },
        {
            "type": "new-product",
            "id": "10",
            "attribute": {
                "title": "THE 10 HABITS OF RASULULLAH",
                "authors": {
                    "2": "Lingga"
                },
                "stock": 100,
                "price": 48000
            }
        },
        {
            "type": "new-product",
            "id": "4",
            "attribute": {
                "title": "buku baru",
                "authors": {
                    "2": "Lingga",
                    "10": "Rosalinda",
                    "14": "irfan"
                },
                "stock": 234,
                "price": 3434
            }
        },
        {
            "type": "new-product",
            "id": "2",
            "attribute": {
                "title": "buku 2",
                "authors": {
                    "6": "Jewell",
                    "15": "riaon"
                },
                "stock": 10,
                "price": 16000
            }
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