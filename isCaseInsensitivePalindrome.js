//Given a string, check if it can become a palindrome through a case change of some (possibly, none) letters.

let inputString = "AaBaa"; 

function solution(inputString) {
    let str = inputString.toLowerCase().split("");
    return inputString.toLowerCase() === str.reverse().join("") ? true:false;
}


console.log(solution(inputString))