function solution(inputString) {
    const re = /\([A-Za-z]*\)/g

while (re.test(inputString)) {
    inputString = inputString.replace(re, (str)=> str.slice(1, str.length -1).split('').reverse().join(''))
}
return inputString

}
