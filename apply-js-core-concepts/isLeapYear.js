function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0) {
           return true;
        }
        else{
           return false;
        }
    }


const year1 = isLeapYear(1933);
console.log('my year',year1);
const year2 = isLeapYear(1960);
console.log('her year',year2);