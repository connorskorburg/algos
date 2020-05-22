let canvas = [
    [3,2,3,4,3],
    [2,3,3,4,0],
    [7,3,3,5,3],
    [6,5,3,4,1],
    [1,2,3,3,3],
]

let start = [2,2]

let color = 1;

// canvas = [
//     [3,2,1,4,3],
//     [2,1,1,4,0],
//     [7,1,1,5,3],
//     [6,5,1,4,1],
//     [1,2,1,1,1],
// ]

//declare function, given canvas, start, and color

//if canvas[start] is not color
    // change it into color
//if canvas[right] is not color && [right] is not greater than canvas bounds
    //class floodFill, where canvas[right] is start
//if canvas[left] is not color && [left] is not greater than canvas bounds
    //class floodFill, where canvas[left] is start
//if canvas[up] is not color && [up] is not greater than canvas bounds
    //class floodFill, where canvas[up] is start
//if canvas[down] is not color && [down] is not greater than canvas bounds
    //class floodFill, where canvas[down] is start


function floodFill(canvas, start, color){
    up_and_down = start[0]
    left_and_right = start[1]
    console.log(canvas[up_and_down][left_and_right], "This is the current color");
    console.log(color, "This is the new color");
    if(canvas[up_and_down][left_and_right] !== color){
        canvas[up_and_down][left_and_right] = color;
    }
    if(canvas[up_and_down][left_and_right + 1] !== color && left_and_right + 1 < canvas[up_and_down].length){
        return floodFill(canvas, [up_and_down, left_and_right + 1], color)
    }
    if(canvas[up_and_down][left_and_right - 1] !== color && left_and_right - 1 >= 0){
        return floodFill(canvas, [up_and_down, left_and_right - 1], color)
    }
    if(canvas[up_and_down - 1][left_and_right] !== color && up_and_down - 1 > 0){
        return floodFill(canvas, [up_and_down - 1, left_and_right], color)
    }
    if(canvas[up_and_down + 1][left_and_right] !== color && up_and_down + 1 < canvas.length){
        return floodFill(canvas, [up_and_down + 1, left_and_right], color)
    }
    return canvas
}
console.log(floodFill(canvas, start, color));