let bishop = "a1"
let pawn = "c3"

function solution(bishop, pawn) {
    let board = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8
    };
    
    let bishopX = board[bishop[0]];
    console.log(bishopX)
    let bishopY = parseInt(bishop[1]);
    console.log(bishopY)
    
    let pawnX = board[pawn[0]];
    console.log(pawnX)
    let pawnY = parseInt(pawn[1]);
    console.log(pawnY)
    
    if(bishopX + bishopY === pawnY + pawnX || bishopX + pawnY === bishopY + pawnX){
        return true;
    }
    return false;
}


console.log(solution(bishop, pawn))