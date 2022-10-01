//Remove a part of a given array between given 0-based indexes l and r (inclusive).


let inputArray = [2, 3, 2, 3, 4, 5], l = 2, r = 4;

function solution(inputArray, l, r) {
    inputArray.splice(l,r-l+1);
    return inputArray;

}

console.log(solution(inputArray, l, r))