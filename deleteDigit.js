
// Example

// For n = 152, the output should be
// solution(n) = 52;
// For n = 1001, the output should be
// solution(n) = 101.

let n = 152
let n2 = 222219

function solution(n) {
    let num = String(n).split('').map(Number)
    return Math.max(...num.map((n,i)=>{
        let y = num.slice();
        y.splice(i,1)
        z = y.join('')
        return z
    }))
}

console.log(solution(n))
console.log(solution(n2))