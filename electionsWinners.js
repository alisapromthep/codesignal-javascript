function solution(votes, k) {
    let max = Math.max(...votes);
    let counter = 0;
    
    if(k === 0){
       for(vote of votes){
           if(max === vote){
               counter++
           }
       }
       if(counter === 1){
           return 1
       }else{
           return 0
       }
    }
    
    for(vote of votes){
        if(max < vote + k){
            counter++
        }
    }
    return counter
}
