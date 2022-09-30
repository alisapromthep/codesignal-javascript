// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

let min1 = 3, min2_10 = 1, min11 = 2, s = 20;


function solution(min1, min2_10, min11, s) {
    if(s<min1){
        return 0;
    } else if (s == min1){
        return 1;
    } else if (s<=min1 + 9* min2_10){
        return 1 + parseInt(((s-min1)/min2_10));
    } else {
        return 10 + parseInt(((s-min1-9*min2_10)/min11))
    }

}


console.log(solution(min1, min2_10, min11, s))