# Products API

An api built with Node, Express, Postgresql, and Knex that returns a collection of products generated with faker.js.

## Schema

* id:id
* productName: String (e.g 'Rustic Granite Soap')
* department: String (e.g 'Clothing')
* color: String (e.g.'blue')
* price: Decimal (e.g 499.99)

## Routes

###### GET
* /api/v1/products - will return all products 
* /api/v1/products/id - will return a single product

###### PUT
* /api/v1/products/id - will update a single product, and return it

## Filtering 
To filter the results pass a query string at the end of the base url. Queries are chainable with '&' symbol between each key/value pair. Matches are case sensitive.  

###### By price 
* /api/v1/products/?price=asc 
* /api/v1/products?price=desc
###### By department 
* /api/v1/products/?department=Clothing
###### By color
* /api/v1/products/?color=blue 
###### By productName
* /api/v1/products/?productName=Rustic Granite Soap. 
###### Chained Queries
* /api/v1/products/?color=red&department=Computers&price=asc







