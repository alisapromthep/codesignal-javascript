// You're given two integers, n and m. Find position of the rightmost pair of equal bits in their binary representations (it is guaranteed that such a pair exists), counting from right to left.

// Return the value of 2position_of_the_found_pair (0-based).

let n = 10, m=11; 

function solution(n,m) {
    return (1<<((n^m).toString(2).split('').reverse().join('')+'0').indexOf('0'));
}

console.log(solution(n,m))