// A little child is studying arithmetic. They have just learned how to add two integers, written one below another, column by column. But the child always forgets about the important part - carrying.

// Given two integers, your task is to find the result that the child will get.


let param1 = 450, param2 = 1730;

function solution(param1, param2) {
    if (param1 == 0 || param2 == 0){ return param1 + param2 };
    return solution(Math.floor(param1/10),Math.floor(param2/10))*10 + (param1+param2)%10

}

console.log(solution(param1, param2))