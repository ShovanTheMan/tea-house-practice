 // --rename press f2 key
// n! = n! * - (n-1)!

function factorial(number){
    let result = 1;
    for(let i = 1; i <= number; i++){
        result = result * i;

    }
    return result;
}
const result = factorial(9);
console.log('answer:',result);