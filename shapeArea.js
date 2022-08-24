function solution(n) {
    let area = 1;
    for (i=1; i<=n; i++){
        area += (4 * (i-1))
    }
    return area;

}
