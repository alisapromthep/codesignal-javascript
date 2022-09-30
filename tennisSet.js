// In tennis, the winner of a set is based on how many games each player wins. The first player to win 6 games is declared the winner unless their opponent had already won 5 games, in which case the set continues until one of the players has won 7 games.

// Given two integers score1 and score2, your task is to determine if it is possible for a tennis set to be finished with a final score of score1 : score2.
let score1 = 8, score2 = 5;


// one person has 6, and anything less than 5 
// one person has 7, and the other is more than 4 and less than 7

function solution(score1, score2) {
    let winner = Math.max(score1, score2);
    let loser = Math.min(score1, score2);
    
    return winner == 6 && loser < 5 || winner == 7 && loser > 4 && loser < 7;
}

console.log(solution(score1, score2));