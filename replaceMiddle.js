// Given array arr, your task is to find its middle, and, if it consists of two elements, replace those elements with the value of middle. Return the resulting array as the answer.

arr = [7, 2, 2, 5, 10, 7];

function solution(arr) {
    if (arr.length % 2 === 0){
        arr.splice(arr.length/2-1,2,arr[arr.length/2-1]+arr[arr.length/2]);
        return arr;
    } else {
        return arr;
    }
}

console.log(solution(arr));