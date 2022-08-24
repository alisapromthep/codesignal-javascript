function solution(n) {
    let arr = Array.from(String(n), Number);
    let output = true;
    for (let i=0; i<arr.length;i++){
        let currentNum = arr[i] % 2;
        if(currentNum !== 0){
            output = false;
        }
        
    }
    
    return output;

}