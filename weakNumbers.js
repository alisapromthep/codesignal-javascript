// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?
// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.


let n = 9; 


function solution(n) {
    divisor = (x) => {
        let div = 0
        for (let i=1; i <= x; i++)
            if( x % i === 0) div++
        return div
    }
    weak = (a) => {
        let num = 0
        d = divisor(a)
        for (let i = 1; i < a; i++){
            if (divisor(i)> d) num++
        }
        return num++
    }
    weakness = []
    max = 0
    for(let i = 1; i <= n; i++){
        w = weak(i)
        max = Math.max(max, w)
        weakness.push(w)
    }
    count = 0
    for (let i = 0; i < n; i++){
        if (weakness[i] === max) count++
    }
    return [max, count]
}


console.log(solution(n))