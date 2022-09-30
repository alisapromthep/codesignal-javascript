function solution(s) {
    return s.replace(/([a-z])\1*/g, (str)=>(str.length>1?str.length+str[0]:str[0]))
}
