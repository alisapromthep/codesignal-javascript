function solution(image) {
    let answer = []
for(let i = 0; i<image.length - 2; i++){
    let arr = []
    for( j = 0; j<image[0].length - 2; j++){
        const top = image[i][j] + image[i][j+1] + image[i][j+2]
        const mid = image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
        const bot = image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
        arr.push(Math.floor((top+mid+bot)/9))
    }
    answer.push(arr)
}
return answer

}