// Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

function solution(s) {
    let r = [];
    for(i=0;i<s.length;i++){
        let letter = s.split(s[i]).length-1;
        if(letter === 1){
            r.push(s[i]);
        }
    }
    if(r.length === 0){
        return '_';
    } else {
        return r[0]
    }
    
}