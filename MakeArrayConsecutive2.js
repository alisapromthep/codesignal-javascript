function solution(statues) {
    let missingNumArray = [];
let min = Math.min(...statues)
let max = Math.max(...statues)
for ( i = min; i < max; i++ ) {
    if (!statues.includes(i)){
        missingNumArray.push(i)
    }
}

return missingNumArray.length;

}
