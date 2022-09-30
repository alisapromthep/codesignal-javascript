// When a candle finishes burning it leaves a leftover. makeNew leftovers can be combined to make a new candle, which, when burning down, will in turn leave another leftover.

// You have solutionNumber solution in your possession. What's the total number of solution you can burn, assuming that you create new solution as soon as you have enough leftovers?

let candlesNumber = 5, makeNew = 2;

function solution(candlesNumber, makeNew) {
    return candlesNumber + Math.floor((candlesNumber-1)/(makeNew-1));

}


console.log(solution(candlesNumber, makeNew))