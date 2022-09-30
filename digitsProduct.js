// Given an integer product, find the smallest positive (i.e. greater than 0) integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.

// Example

// For product = 12, the output should be
// solution(product) = 26;
// For product = 19, the output should be
// solution(product) = -1.


let product = 12;
let product2 = 19;


function solution(product) {
    for(let i=1;i<6000;i++){
        if([...i.toString()].reduce((a,b)=> a*b,1) === product){
            return i;
        }
    }
    return -1
}
console.log(solution(product))
console.log(solution(product2))