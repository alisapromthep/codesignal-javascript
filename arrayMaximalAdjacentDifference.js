function solution(inputArray) {
    let output = 0;
for (i=0;i<inputArray.length -1;i++){
    let difference = Math.abs(inputArray[i]-inputArray[i+1]);
    difference < 0 ? difference*(-1):difference;
    if (difference > output){
        output = difference;
    }
}
return output; 

}