// Given integers a and b, determine whether the following pseudocode results in an infinite loop

let a = 2, b = 6;

//3,5 
//4,4

// a=6, b=10
// 7,9
//6,8
//

function solution(a, b) {
    if(a>b){
        return true;
    } else if ( a%2 != b%2){
        return true;
    } else {
        return false
    }

}


console.log(solution(a,b))