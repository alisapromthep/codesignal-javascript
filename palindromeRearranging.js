function solution(inputString) {
    const charMap = {};

for(let char of inputString){
    charMap[char] = charMap[char] + 1 || 1;
}

let count = 0;
for (let val in charMap){
    if(charMap[val] % 2 != 0) {
        count++;
    }
}
return count > 1 ? false : true;

}
