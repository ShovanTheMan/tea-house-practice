function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= 7){
        result = result * num;
        num++;

    }
    return result;
}
const number = 9;
const fact = factorial(number);
console.log('factorial of:',number,fact);
