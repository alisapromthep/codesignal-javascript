//Given two cells on the standard chess board, determine whether they have the same color or not.

let cell1="A1"
let cell2="C3"

let cell3= "A1"
let cell4= "B2"

function solution(cell1,cell2) {
    
    const letters = 'ABCDEFGH'
    
       let one = letters.indexOf(cell1[0]) + Number(cell1[1]);
       let two = letters.indexOf(cell2[0]) + Number(cell2[1]);
    
        return one%2 === two%2
}

console.log(solution(cell1,cell2))
console.log(solution(cell3, cell4))
