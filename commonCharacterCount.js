function solution(s1, s2) {
    let counter = 0;
s1 = s1.split('')
s2 = s2.split('')

s1.forEach(e => {
    if (s2.includes(e)) {
        counter++;
        s2.splice(s2.indexOf(e), 1)
    }
})
return counter;

}
