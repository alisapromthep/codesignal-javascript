function solution(inputArray) {
    let output = 0;
    for (i=0; i<inputArray.length-1; i++){
        if(inputArray[i] >= inputArray[i+1]){
            output += ((inputArray[i]+1) - inputArray[i+1]);
            inputArray[i + 1] = inputArray[i] + 1;
        }
    }
    return output;
}
