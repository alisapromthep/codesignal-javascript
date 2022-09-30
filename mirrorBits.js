//Reverse the order of the bits in a given integer.
let a = 97; 

function solution(a) {
    return parseInt(a.toString(2).split('').reverse().join(''),2);
}

console.log(solution(a))