let value1 = 5;
let weight1= 3;
let value2=7;
let weight2=4;
let maxW = 6;

function solution(value1, weight1, value2, weight2, maxW) {
    if(weight1 + weight2 <= maxW){
        return value1 + value2;
    }
    else if(weight1 <= maxW && weight2 > maxW){
        return value1
    }
    else if(weight2 <= maxW && weight1 > maxW){
        return value2
    }
    else if(weight1 > maxW && weight2 > maxW){
        return 0;
    }
    else {
        return value2 > value1 ? value2 : value1;
    }
}

console.log(solution(value1, weight1, value2, weight2, maxW))
