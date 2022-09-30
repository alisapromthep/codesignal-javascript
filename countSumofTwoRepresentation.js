// Given integers n, l and r, find the number of ways to represent n as a sum of two integers A and B such that l ≤ A ≤ B ≤ r.
let n = 6, l = 2, r = 4; 

function solution(n, l, r) {
    //sum = l+r 
    //find how many ways you can add two numbers to eaual the sum 
    //but the two num has to be less than r, and A<B, or B==B 
    let counter = 0; 
    for(let i = l; i <= r; i++){
        if(i<=(n-i) && (n-i)<= r){
            counter ++;
        }
    }
    return counter;
}


console.log(solution(n, l, r))