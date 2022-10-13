function solution(a0) {
    let set = new Set();

while (!set.has(a0)){
    set.add(a0);
    
    a0 = [...String(a0)].reduce((a,b) => a + b * b, 0);
}
return set.size +1;

}
