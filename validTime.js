let time = "13:58"
let time2 = "02:76"

function solution(time) {
    return Number(time.split(':')[0]) < 24 && Number(time.split(':')[1]) < 60
}

solution = t => /^([0-1]\d|2[0-3]):[0-5]\d$/.test(t);

console.log(solution(time))
console.log(solution(time2))