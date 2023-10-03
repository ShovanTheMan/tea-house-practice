// console.log(4/2);
// console.log(144/2);
// console.log(94/2);
// console.log(44/2);
// 
// console.log(45/2);
// console.log(145/2);
// console.log(91/2);
// console.log(43/2);

//  console.log(45%2);
//  console.log(145%2);
//  console.log(91%2);
//  console.log(43%2);

function isEven(number){
    const remainder = number % 2;

    if(remainder === 0){
        
        return true;
    }
    else{
        
        return false;
    }
    
}
const myNumber = isEven(303);
console.log(myNumber);
const herNumber =isEven(1280);
console.log(herNumber);