let st = "abcdc"

function solution(st) {
    let count = 0;
    let arr = []
    
    while(st != st.split('').reverse().join('')){
        arr = st.split('')
        arr.splice(st.length-count, 0 ,st[count])
        st = arr.join('');
        count++;
    }
    return st;
}

console.log(solution(st))