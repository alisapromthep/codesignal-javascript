function solution(year) {
    //check if statement
let firstTwoNum = Math.trunc(year / 100);

let lastTwoNum = year % 100;
if (lastTwoNum !== 0){
    return firstTwoNum + 1;
} else {
    return firstTwoNum;
}
}
