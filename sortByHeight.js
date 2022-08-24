function solution(a) {
    let people = a.filter((e) => e != -1)
people.sort(function(a, b) {return b - a});
for (let i = 0; i < a.length; i++){
if(a[i] !== -1){
        a[i] = people.pop();
    }
}
return a    


}
