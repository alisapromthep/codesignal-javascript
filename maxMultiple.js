// Given a divisor and a bound, find the largest integer N such that:

// N is divisible by divisor.
// N % divisor = 0 
// N is less than or equal to bound.
// N <= bound 
// N is greater than 0.
// N > 0

let divisor = 3, bound = 10;

function solution(divisor, bound) {
    return bound - bound % divisor; 
}


console.log(solution(divisor,bound))