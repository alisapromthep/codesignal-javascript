function solution(inputArray) {
    let largestNum = inputArray[0]*inputArray[1];
for (i=0; i<inputArray.length; i++){
    let product = inputArray[i]*inputArray[i+1];
    if (largestNum < product){
        largestNum = product;
    }
}

return largestNum;

}
