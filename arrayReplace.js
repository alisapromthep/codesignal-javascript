function solution(inputArray, elemToReplace, substitutionElem) {
    
    inputArray.forEach((num, index)=>{
 
        if(num === elemToReplace){
            inputArray.splice(index,1, substitutionElem)
            
        }
    })
    
    return inputArray;
 
 }

 let inputArray = [1, 2, 1], elemToReplace = 1;
let substitutionElem = 3;

function solution(inputArray, elemToReplace, substitutionElem) {
    for (let i=0;i<inputArray.length;i++){
        if(inputArray[i] === elemToReplace){
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}


console.log(solution(inputArray, elemToReplace, substitutionElem))
