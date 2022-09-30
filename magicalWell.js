// You are standing at a magical well. It has two positive integers written on it: a and b. Each time you cast a magic marble into the well, it gives you a * b dollars and then both a and b increase by 1. You have n magic marbles. How much money will you make?

let a = 1, b = 2, n = 2;

function solution(a, b, n) {
    let count = 0;
    let money = 0;
    while(count < n){
        money += a*b;
        a++, b++;
        count++;
    }
    return money;
}

console.log(solution(a,b,n))