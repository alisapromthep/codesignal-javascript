//You're given an arbitrary 32-bit integer n. Take its binary representation, split bits into it in pairs (bit number 0 and 1, bit number 2 and 3, etc.) and swap bits in each pair. Then return the result as a decimal number.
let n = 13; 

function solution(n) {
    return parseInt(((n.toString(2).length %2 ? "0" :"") + n.toString(2)).match(/\d{2}/g).map(e=>e.split('').reverse().join('')).join(''),2);
}

console.log(solution(n))