//You are given a two-digit integer n. Return the sum of its digits.

let n = 29;

function solution(n) {
   return String(n).split("").map(Number).reduce((a,b)=>(a+b));
}


console.log(solution(n))