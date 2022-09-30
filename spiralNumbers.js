// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top-left and in clockwise direction.

function spiralNumbers(n) {
    var res = Array(n*n).fill(null).map((el,i)=>i+1);
    var m = [];
    var i = 0;
    while(res.length) {
        m.reverse();
        m = m.length?m[0].map((col, i) => m.map(row => row[i])) : m;
        m.unshift(res.splice(-(Math.floor(i/2)+1)));
        i++;
        }
        return m;
    }