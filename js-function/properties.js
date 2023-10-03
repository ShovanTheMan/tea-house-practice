var shoppingCart = {
    tshirts: 3,
    shirt: 2,
    pant: 2,
    shoe: 1,
    total: 4600
    //keys or properties
}
var tshirtsCount = shoppingCart.tshirts;
var shoeCount = shoppingCart['shoe'];
var properties = Object.keys(shoppingCart);
var propertyValues = Object.values(shoppingCart);
// console.log(properties);
// console.log(propertyValues);
// console.log(shoeCount);

var propertyName = 'pant';

var propertyValue = shoppingCart[propertyName];
// console.log(propertyName, propertyValue);

//set property values

shoppingCart.pant = 5;
console.log(shoppingCart);
shoppingCart['shirt'] = 3;
console.log(shoppingCart);