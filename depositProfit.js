function solution(deposit, rate, threshold) {
    let year = 0; 
    while(deposit < threshold){
        year++;
        deposit = deposit*(1+(rate/100))
    }
    return year;
}