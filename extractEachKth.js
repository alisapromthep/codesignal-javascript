function solution(inputArray, k) {
    return inputArray.filter((elemnent, index) => {
        return (index + 1) % k != 0;
    })
}