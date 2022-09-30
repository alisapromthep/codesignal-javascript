

let inputString = "2 apples, 12 oranges";
let inputString2 = "Your payment method is invalid";

function solution(inputString) {
    let arr = inputString.match(/\d+/g);
    return arr ? arr.map(Number).reduce((a,b)=>a+b): 0;
}

console.log(solution(inputString))
console.log(solution(inputString2))