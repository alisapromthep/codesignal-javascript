// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.


let a = [2, 1, 3, 5, 3, 2]; 

function solution(a) {
    let seen = [];
    for (let i=0;i<a.length;i++){
        if(seen.includes(a[i])){
            return a[i];
        } else {
            seen.push(a[i]);
        }
    }
    return -1;
}

console.log(solution(a))
//first solution takes too long 

function solution2(a) {
    let r = [];
    for(i of a){
        if(r[i]){
            return i;
        }
        r[i]=1;
    }            
    return -1

}

console.log(solution2(a))
