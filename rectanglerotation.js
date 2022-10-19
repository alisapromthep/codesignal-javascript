// A rectangle with sides equal to even integers a and b is drawn on the Cartesian plane. Its center (the intersection point of its diagonals) coincides with the point (0, 0), but the sides of the rectangle are not parallel to the axes; instead, they are forming 45 degree angles with the axes.

// How many points with integer coordinates are located inside the given rectangle (including on its sides)?

let a = 6, b = 4

function solution(a, b) {
    let counter = 0;
    for(let x = -a -b; x <= a + b; x++){
        for(let y = -a -b; y <= a + b; y++){
            if(2 * (x-y) * (x-y) <= a * a && 2 * (x+y) * (x+y) <= b * b){
                counter++;
            }
        }
    }
    return counter;
}

console.log(solution(a,b))


//explaination 
//https://medium.com/hard-mode/coding-challenge-rectangle-rotation-10e2a2416ef3