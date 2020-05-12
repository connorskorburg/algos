//reverse 
function revArr(arr){
    for(var i = 0; i < (arr.length/2); i++){
            let temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
    }

    return arr;
}
// console.log(revArr([1,2,3,4,5,6,7]));

// rotate
function rotate(arr, offset){
    if(offset >= 0){
        for(let x = offset; x > 0; x--){
            for(let i = arr.length -1; i > 0; i--){
                let temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
            }
        }
    }
    else if(offset < 0){
        for(let x = (offset * -1); x > 0; x--){
            for(let i = 0; i < arr.length - 1; i++){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
    return arr;
}
// console.log(rotate([1,2,3,4,5,6], 2)); //[5,6,1,2,3,4]
// console.log(rotate([1,2,3,4,5,6], -2)); //[3,4,5,6,1,2]

// filter range
function filterRange(arr, min, max){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > min && arr[i] < max){
            for(let x = i; x < arr.length - 1; x++){
                arr[x] = arr[x + 1];
            }
            arr.length = arr.length -1;
            i--;
        }
        return arr;
    }
}
console.log(filterRange([4,2,6,25,123,33,7,54], 2, 123));

// concat 
function concatArr(arr1, arr2){
    newarr = [];
    for(let i = 0; i < arr1.length; i++){
        newarr[i] = arr1[i];
        console.log(newarr);
    }
    for(let x = 0; x < arr2.length; x++){
        newarr[arr1.length + x] = arr2[x];
        console.log(newarr);
    }

    return newarr;
}
// console.log(concatArr([1,2,3,4], [5,6,7,8]));