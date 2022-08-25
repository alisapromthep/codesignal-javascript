
function solution(cell1,cell2) {
    
    const letters = 'ABCDEFGH'
    
        let one = letters.indexOf(cell1[0]) + Number(cell1[1]);
        let two = letters.indexOf(cell2[0]) + Number(cell2[1]);
    
        return one%2 === two%2




}

