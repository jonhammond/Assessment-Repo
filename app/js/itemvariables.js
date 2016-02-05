$(document).on('ready', function () {

})
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://galvanize-eats-api.herokuapp.com/menu",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "postman-token": "87cec053-d7cf-29db-3642-e249004bc612"
    }
  }


var subTotal = 0;

var menuItems = {
  cheeseburger: {
    name: 'Cheeseburger',
    price: 10.99},
  hamburger: {
    name: 'Hamburger',
    price: 8.99},
  cheesePizza: {
    name: 'Cheese Pizza',
    price: 9.99},
  sausagePizza: {
    name: 'Sausage Pizza',
    price: 12.99},
};

