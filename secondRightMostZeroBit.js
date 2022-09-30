// Presented with the integer n, find the 0-based position of the second rightmost zero bit in its binary representation (it is guaranteed that such a bit exists), counting from right to left.

// Return the value of 2position_of_the_found_bit.

let n = 37; 

function solution(n) {
    return Math.pow(2,n.toString(2).split('').reverse().join('').split('0',2).join('0').length);
}

console.log(solution(n))