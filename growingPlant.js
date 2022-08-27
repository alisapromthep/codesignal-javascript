function solution(upSpeed, downSpeed, desiredHeight) {
    let days = 0
    let height = 0
    while (height < desiredHeight){
        days++;
        height += upSpeed;
        if (height < desiredHeight){
            height -= downSpeed;
        }
    }
    return days
}
