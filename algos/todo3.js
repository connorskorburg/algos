// remove negatives
function removeNegatives(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = arr[i] * -1; 
        }
    }
    return arr;
}
// console.log(removeNegatives([-2,-1,0,1,2,-1]));

//second to last
function secondToLast(arr){
    if(arr.length < 2){
        return null;
    }
    else if(arr.length >= 2){
        return arr[arr.length-2];
    }
}
// console.log(secondToLast(['Hello', 'World']));
// console.log(secondToLast([1,2,3,4,5,6]));
// console.log(secondToLast(['Hello']));

// second largest
function secondLargest(arr){
    var max = arr[0]
    var secondMax = arr[0]
    if(arr.length < 2){
        return null;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    for(let x = 1; x < arr.length; x++){
        if(arr[x] > secondMax && arr[x] != max){
            secondMax = arr[x];
        }
    }
    // return max;
    return secondMax;
}
// console.log(secondLargest([1,2,3,4,5,6]));

// n-th to last
// function nthToLast(arr, n){
//     let x = arr[arr.length - n]
//     return x;
// }
// console.log(nthToLast([1,2,3,4,5,6,7], 3));

