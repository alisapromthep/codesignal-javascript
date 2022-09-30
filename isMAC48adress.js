let inputString= "Z1-1B-63-84-45-E6";
let inputString2 ="00-1B-63-84-45-E6";
let inputString3 ="not a MAC-48 address";

function solution(inputString) {
    let arr = inputString.split('-');
    return arr.length == 6 && arr.every((a)=>/^[0-9A-F]{2}$/.test(a))
}

console.log(solution(inputString2))