function solution(inputArray, elemToReplace, substitutionElem) {
    
    inputArray.forEach((num, index)=>{
 
        if(num === elemToReplace){
            inputArray.splice(index,1, substitutionElem)
            
        }
    })
    
    return inputArray;
 
 }