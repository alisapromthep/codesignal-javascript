function solution(matrix) {
    let sum = 0;
for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
        if (matrix[i][j] == 0 && i+1 < matrix.length){
            matrix[i+1][j] = 0;
        }
        sum += matrix[i][j]
    }
}
return sum;

}
