// We define the middle of the array arr as follows:

// if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
// if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
// An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.
// let inputArray = [2, 3, 2, 3, 4, 5], l = 2, r = 4;

arr = [7, 2, 2, 5, 10, 7];

function solution(arr) {
    let size = arr.length
    if (arr[0] === arr[size-1] && size%2 === 0 && arr[size/2] + arr[size/2-1]==arr[0]){
        return true; 
        } else if (arr[0] === arr[size-1] && size%2 !== 0 && arr[(size-1)/2] === arr[0]){
            return true;
        } else {
            return false; 
        }

}

console.log(solution(arr));