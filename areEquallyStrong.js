function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
    let yourStrong = (yourLeft >= yourRight) ? yourLeft : yourRight;
    let yourWeak = (yourLeft <= yourRight) ? yourLeft : yourRight;
    let friendsStrong = (friendsLeft >= friendsRight) ? friendsLeft : friendsRight;
    let friendsWeak = (friendsLeft <= friendsRight) ? friendsLeft : friendsRight;
    
    return (yourStrong === friendsStrong && yourWeak === friendsWeak) ? true:false;

}
