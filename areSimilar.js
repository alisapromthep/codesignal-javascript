function solution(a, b) {
    
    if( a.join('') === b.join('') ){
    return true
}
let array = []
let array2 = []
for(let i=0; i <a.length; i++){
    if(a[i] !== b[i]){
        array.push(a[i])
        array2.push(b[i])
    }
}
array = array.reverse().join('')
array2 = array2.join('')
if(array === array2) {
    return true}
else{
    return false
}

}