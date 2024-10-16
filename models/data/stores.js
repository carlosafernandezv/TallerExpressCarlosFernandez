import "dotenv/config.js"
import "../../config/database.js"
import Store from "../Store.js"



let stores = [
    {
        "storeName": "The Fashion Hub",
        "address": "123 Style Street, Barranquilla, Colombia",
        "phone": 3001234567,
        "email": "info@fashionhub.com",
        "owner": "Maria Gomez",
        "openingHours": "09:00",
        "closingHours": "21:00",
        "numberOfEmployees": 15,
        "active": true,
        "openingDate": "2020-05-15"
    },
    {
        "storeName": "Tech Galaxy",
        "address": "456 Tech Avenue, Barranquilla, Colombia",
        "phone": 3002345678,
        "email": "support@techgalaxy.com",
        "owner": "Carlos Sanchez",
        "openingHours": "10:00",
        "closingHours": "22:00",
        "numberOfEmployees": 20,
        "active": true,
        "openingDate": "2019-11-21"
    },
    {
        "storeName": "Gourmet Delights",
        "address": "789 Gourmet Road, Barranquilla, Colombia",
        "phone": 3003456789,
        "email": "contact@gourmetdelights.com",
        "owner": "Andrea Ramirez",
        "openingHours": "08:00",
        "closingHours": "20:00",
        "numberOfEmployees": 25,
        "active": true,
        "openingDate": "2018-02-10"
    },
    {
        "storeName": "Book Haven",
        "address": "101 Book Lane, Barranquilla, Colombia",
        "phone": 3004567890,
        "email": "info@bookhaven.com",
        "owner": "Fernando Torres",
        "openingHours": "07:00",
        "closingHours": "19:00",
        "numberOfEmployees": 10,
        "active": true,
        "openingDate": "2017-08-05"
    },
    {
        "storeName": "Fitness World",
        "address": "202 Fitness Blvd, Barranquilla, Colombia",
        "phone": 3005678901,
        "email": "service@fitnessworld.com",
        "owner": "Lucia Hernandez",
        "openingHours": "06:00",
        "closingHours": "23:00",
        "numberOfEmployees": 30,
        "active": true,
        "openingDate": "2021-01-12"
    }
]



Store.insertMany(stores)