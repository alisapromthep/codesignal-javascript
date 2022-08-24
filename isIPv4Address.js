function solution(inputString) {
    let arr = inputString.split('.');
    if (arr.length == 4) {
        return arr.every(notDecimal);
    }
    return false;
}
    
    function notDecimal(n) {
        if (n >= 0 && n <= 255 && n != '' && n != "00" && n != "01"){
            return true;
        } return false;
}
