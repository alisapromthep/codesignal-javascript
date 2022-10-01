// Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.

a = [2, 2, 1], b = [10, 11];

function solution(a, b) {
    return [...a,...b];

}

console.log(solution(a,b))