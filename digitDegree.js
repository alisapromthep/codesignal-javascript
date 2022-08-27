function solution(n) {
    let counter = 0;
    if (n <= 9){
        return counter;
    }
    else{
        while(true){
            counter++
            n = n.toString().split("").reduce((a,b)=>{
                return parseInt(a) + parseInt(b);
            });
            if(n <= 9){
                break;
            }
        }
    }
    return counter;
}