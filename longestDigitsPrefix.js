let inputString = "  3) always check for whitespaces";
let inputString2 = "aaaaa";
let inputString3 = "23456"

function solution1(inputString) {
    return inputString.match(/^\d*/)[0] ;

}

function solution(inputString) {
let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    inputString = inputString.split("");
    let arr = [];
    
    for(let i = 0; i < inputString.length; i++){
        if(digits.includes(inputString[i]) === false){
        break
        }else{
            arr.push(inputString[i]);
        }
    }
    return arr.join("");
}

console.log(solution(inputString))
console.log(solution(inputString2))
console.log(solution(inputString3))

console.log("1",solution1(inputString))
console.log("1",solution1(inputString2))
console.log("1",solution1(inputString3))