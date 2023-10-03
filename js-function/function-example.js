// function functionName (parameters){
//     // function body
//     // return
// }
// var returnValue = functionName(parameters value)

function getAverage (assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 +assignment3;
    const average = total / 3;
    return average;

}
const assignment1Marks = 40;
const assignment2Marks = 40;
const assignment3Marks = 38;

var myAverage = getAverage(assignment1Marks, assignment1Marks, assignment3Marks);
console.log('Average marks: ',myAverage);