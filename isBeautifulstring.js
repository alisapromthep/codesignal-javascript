function solution2(inputString) {
    letters = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 1; i < letters.length; i++) {
        if (inputString.split(letters[i]).length-1 > inputString.split(letters[i-1]).length-1){
            return false
        }
    }
    return true
}