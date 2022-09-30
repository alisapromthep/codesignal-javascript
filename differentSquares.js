
let matrix = [[1, 2, 1],
[2, 2, 2],
[2, 2, 2],
[1, 2, 3],
[2, 2, 1]];
let matrix2 = [[9,9,9,9,9], 
[9,9,9,9,9], 
[9,9,9,9,9], 
[9,9,9,9,9], 
[9,9,9,9,9], 
[9,9,9,9,9]];

function solution(matrix) {
let output = new Set();
for(i=0; i<matrix.length-1; i++){
for(j=0; j<matrix[i].length-1; j++){
  let sq = [matrix[i][j], matrix[i][j+1], matrix[i+1][j], matrix[i+1][j+1]].toString();
    output.add(sq)
}
}
return output.size;

}

console.log(solution(matrix))
console.log(solution(matrix2))