//not a working solution (YET)

let inputArray = ["aba", "bbb", "bab"]

let inputArray1 = ["ff", 
 "gf", 
 "af", 
 "ar", 
 "hf"];

// build output = [hf, ff, gf, af, ar, ]
// ff compare gf works 
// gf to af works 
// af to ar works 
// ar compare to hf, doesn't work 
// but hf to ff work 
// true 

//store output = []
//compare first ele until find the one that only one letter change 
//push into output array 
// compare the second ele in the output array to the rest 
//until you find a match
//if last doesn't work ,go back to the beginning and compare until it match 


function solution(inputArray) {
    let newArr = [];
    
    //function to check if the strings are only one letter apart 
    const checkString = (str1, str2)=>{
        let diff = 0;
        for (let i =0; i<str1.length;i++){
            if(str1[i] !== str2[i]){
                diff ++;
            }  
        }
          if(diff === 1){
            return true;
        } else {
            return false;
        } 
    }
    
    //pop ele into newArr, compare with the rest of the ele in input 
    //if checkString = true, push ele into newArr 

    for(let i=0; i<inputArray.length;i++){
        newArr.push(inputArray.shift())
        for(let j=0;j<inputArray.length+1;i++){
            if(checkString(newArr[i],inputArray[j])){
                newArr.push(inputArray.splice(j,1).toString());
            }  else {
                for(let k=0;k<newArr.length;k++){
                      
                    if(checkString(newArr[k],inputArray[k])){
                        newArr.push(inputArray.splice(k,1).toString());
                    } else {
                        return false;
                    }
                }
            }
        
        }
    }
    return true;
    
}

console.log(solution(inputArray))
console.log(solution(inputArray1))