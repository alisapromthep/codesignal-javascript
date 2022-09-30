//Given an integer n, return the largest number that contains exactly n digits.

let n = 2;

function solution(n) {
    let output = "";
   for(i=0;i<n;i++){
       output += "9";
   }
    return Number(output);
}


console.log(solution(n))