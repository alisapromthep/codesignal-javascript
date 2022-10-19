
let startTag = "<button type='button' disabled>"; 

function solution(startTag) {
    let name = /<(\w+)/.exec(startTag)[1];
    return `</${name}>`;
   
}


console.log(solution(startTag))