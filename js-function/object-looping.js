var shoppingItems = ['books', 'sunglass', 'shoes','pen'];
var friendAge = [12, 34, 54, 13, 76]
var friendAge = {
    rahim: 12,
    samad: 34,
    karim: 54,
    jamal: 13,
    robi: 76
}

var shoppingCart = {
    books: 3,
    sunglass: 2,
    keyboard: 1,
    mouse: 1,
    pen: 10,
    shoes: 2
    
}
const keys = Object.keys(shoppingCart);
console.log(keys);
const values = Object.values(shoppingCart);
console.log(values);
// 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes' 
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
}

// for in loop

for (var propertyName in shoppingCart){
    const value = shoppingCart[propertyName]
    console.log(propertyName, value);
}