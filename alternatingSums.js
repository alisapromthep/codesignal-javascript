function solution(a) {
    let teamOne = 0;
let teamTwo = 0;
a.forEach((weight, index)=>{
    if (index % 2 === 0){
        teamOne += weight;
    } else {
        teamTwo += weight;
    }
})

return [teamOne, teamTwo];

}
