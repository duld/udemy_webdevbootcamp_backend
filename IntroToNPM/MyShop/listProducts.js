/*
  * Create a new directory named 'myShop'
  * Add a file named 'listProducts.js'
  * Install faker package
  * read the faker docs and figure out how it works
  * Use faker to print out 10 random product names and prices

*/


var faker = require('faker');

// console.log(faker.commerce.productName() + ":  $" + faker.commerce.price());

function listCatalog(n){
    for (var i=1; i <= n; i++){
        console.log(i + ': ' + faker.commerce.productName() + " - $" + faker.commerce.price());
    }
}

listCatalog(10);