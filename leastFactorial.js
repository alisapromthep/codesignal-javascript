// Given an integer n, find the minimal k such that

// k = m! (where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

let n = 17; 

function solution(n) {
    let counter = 1; 
    let k = 1; 
    while (k<n){
        k *= counter++; 
    }
    
    return k;

}

console.log(solution(n))