// You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other. What is the value of the third integer?

// Example

// For a = 2, b = 7, and c = 2, the output should be
// solution(a, b, c) = 7.

// The two equal numbers are a and c. The third number (b) equals 7, which is the answer.


let a = 5
let b = 5
let c = 1

function solution(a, b, c) {
    return a == b ? c : a == c ? b : a;

}


console.log(solution(a,b,c))