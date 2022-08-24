function solution(picture) {
    let star = "*"
let newArr = [];
picture.forEach((str)=>{
    newArr.push("*" + str + "*")
})
newArr.unshift(star.repeat(newArr[0].length))
newArr.push(star.repeat(newArr[0].length))

return newArr; 

}
