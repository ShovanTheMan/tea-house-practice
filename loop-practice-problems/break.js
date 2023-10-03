// for(i = 1; i <= 20; i++){
//     console.log(i);
//     if(i >= 10){
//         break;
//     }
// }

// var roastGiven = 0;
// while(roastGiven < 10){
//     console.log('roast den sundori!!');
//     roastGiven++;
//     if(roastGiven > 4){
//         break;
//     }
// }



// var items = ['bottle', 'pen', 'sunglass', 'bag', 'pot'];

// for(var i = 0; i < items.length ; i++){
//     var item = items[i];
//     if(item == 'bag'){
//         break;
//     }
//     console.log(item);
// }
var numbers = [45, 87, 89, 56, 32, 51, 25, 345, 34, 56];

 for(var i = 0; i < numbers.length; i++){
     var number = numbers[i];
     if(number > 50){
        continue;
     }
    console.log(number);
 }