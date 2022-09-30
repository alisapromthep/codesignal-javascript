function solution(text) {
    let str = text.match(/[A-Za-z]+/g);
    let max = Math.max(...str.map((word)=>word.length))
    for(i=0;i<str.length;i++){
        if(str[i].length == max){
            return str[i];
        }
    }

}