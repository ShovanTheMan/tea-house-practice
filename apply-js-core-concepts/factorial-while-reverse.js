function factorial(number){
    let num = number;
    let result = 1;
    while(num >= 1){
        result = result * num;
        num--;

    }
    return result;
}
const number = 9;
const fact = factorial(number);
console.log('factorial of:',number,fact);
