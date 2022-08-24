function solution(inputArray) {
    for (let i = 1; ;i++){
    if(inputArray.every(element => element % i != 0))
        return i
}

}