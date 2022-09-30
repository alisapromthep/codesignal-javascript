// Consider an arithmetic expression of the form a#b=c. 
//Check whether it is possible to replace # with one of the four signs: +, -, * or / to obtain a correct expression.

let a = 2, b = 3, c = 5;

function solution(a, b, c) {
    return a+b==c || a-b==c || a*b== c || a/b == c ;

}

console.log(solution(a,b,c));