function solution(inputArray, k) {
    let sumArr = [];
    for(let i=0;i<inputArray.length-1;i++){
        let sum = inputArray.slice(i,i+k).reduce((curr,next)=>curr+next)
        sumArr.push(sum);
        
    }
    return Math.max(...sumArr)
    
}

function arrayMaxConsecutiveSum(inputArray, k) {
    let rollingSum = inputArray.slice(0, k).reduce((a, b) => a + b);
    let max = rollingSum;
    for(let i = 0; i < inputArray.length - k; i++){
        rollingSum += inputArray[i + k] - inputArray[i];
        max = Math.max(max, rollingSum);
    }
    return max;
}