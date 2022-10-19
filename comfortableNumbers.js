// Let's say that number a feels comfortable with number b if a ≠ b and b lies in the segment [a - s(a), a + s(a)], where s(x) is the sum of x's digits.

// How many pairs (a, b) are there, such that a < b, both a and b lie on the segment [l, r], and each number feels comfortable with the other (so a feels comfortable with b and b feels comfortable with a)?

let l = 10, r = 12; 


function solution(l, r) {
    function addDigits(num){
        return [...num.toString()].map(x=> +x).reduce((a,b)=>a+b);
    }
    
    function comfortable(a,b) {
        let sum = addDigits(a);
        return a -sum <= b && b <= a+ sum
    }
    let counter = 0;
    
    for(let a=l; a<=r; a++){
        for(let b = a+1; b<=r; b++){
            if(comfortable(a,b) && comfortable(b,a)) counter++
        }
    }
    return counter
}

console.log(solution(l,r))