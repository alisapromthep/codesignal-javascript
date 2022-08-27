function solution2(s){
    return s.split('').filter((el,i,self)=>i===self.indexOf(el)).length
}