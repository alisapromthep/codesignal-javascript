function solution(inputString) {

    return inputString.split("").map(s => {
        if(s == 'z')
            s = 'a';
        else
            s = String.fromCharCode(s.charCodeAt(0)+1)
        return s;
    }).join("")

}