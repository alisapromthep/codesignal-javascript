function solution(n) {
    let nStr = n.toString()
let half = nStr.length / 2;
let firstHalf = 0
let secondHalf = 0
if ((nStr.length) % 2 !== 0) {
    return false
} else {
    for (let i=0; i < half; i++) {
        firstHalf += parseInt(nStr[i])
    }
    for (let j=half; j < nStr.length; j++) {
        secondHalf += parseInt(nStr[j])
    }
    
    if (firstHalf === secondHalf){
        return true
    } else {
        return false;
    }
}

}