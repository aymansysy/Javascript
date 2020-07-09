//I have this varaible, str = '1111111111111111';
// convert the content of str to an array 
// use reduce to calcualte all the numbers
// print the result in a clear sentence

let str = '1111111111111111';
const stNumbers = str.split("");
const numbers = stNumbers.map(Number);


const result = document.getElementById("calcString").innerHTML=numbers.reduce(myFun);
console.log(result);

function myFun(total, number){
    return total+number
}

