let address = "\"very.unusual.@.unusual.com\"@usual.com"
function solution(address) {
    
   let arr = address.split('');
    console.log(arr)
   let slice = '';
    
   for(let i=0; i<arr.length; i++){
       if(arr[i] === '@'){
           console.log(arr[i])
           slice = arr.slice(i+1);
           console.log(slice)
       }
   }
    return slice.join('')
}
