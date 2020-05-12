//min to front

// Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

//find the min 
//move it to the front of array

function minToFront(arr){
    var min = arr[0];
    var minIndex = 0;
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < min){
            min = arr[i];
            minIndex = i;
            // console.log("Min:", min);
        }
    }
    for(let x = minIndex; x > 0; x--){
        let temp = arr[x]
        arr[x] = arr[x - 1]
        arr[x - 1] = temp;
    }

    return arr
}
console.log(minToFront([4,2,1,3,5]));
