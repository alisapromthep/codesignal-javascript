//You are given two numbers a and b where 0 ≤ a ≤ b. Imagine you construct an array of all the integers from a to b inclusive. You need to count the number of 1s in the binary representations of all the numbers in the array.
let a = 2, b = 7; 

function solution(a,b) {
    let sum = "";
    for (let i = a; i<=b; i++){
        sum += i.toString(2);
    }
    return sum.replace(/0/g,"").length
}

console.log(solution(a,b))