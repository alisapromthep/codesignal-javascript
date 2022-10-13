// Find the number of ways to express n as sum of some (at least two) consecutive positive integers.


function solution(n) {
    let counter = 0;
let sum = 0;
let i = 1;
while(i<n/2){
    sum = 0;
    for (let j=i;j<n;j++){
        sum += j;
        if (sum === n){
            counter++
        }
    }
    i++;
}
return counter

}



let n = 9;


function solution(n) {
    let counter = 0;
    let sum = 0;
    for (let i=1;i<n;i++){
        sum = 0;
        for (let j=i;j<n;j++){
            sum += j;
            if (sum === n){
                counter++;
                break;
            } else if (sum>n){
                break;
            }
        }
    }
    return counter;
}

console.log(solution(n))