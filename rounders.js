// We want to turn the given integer into a number that has only one non-zero digit using a tail rounding approach. This means that at each step we take the last non 0 digit of the number and round it to 0 or to 10. If it's less than 5 we round it to 0 if it's larger than or equal to 5 we round it to 10 (rounding to 10 means increasing the next significant digit by 1). The process stops immediately once there is only one non-zero digit left.

n = 1445;

function solution(n) {     
    counter = 0
    while(n >10){
        n = Math.round(n/10)
        counter++
    }
    return n*Math.pow(10,counter)
}

console.log(solution(n))
