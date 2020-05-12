// push front 
function pushFront(arr, val){
    for(var i = arr.length -1; i >= 0; i--){
        arr[i + 1] = arr[i]
    }
    arr[0] = val;
    return arr;
}
// console.log(pushFront([2,3,4,5,6], 1));

// pop front
function popFront(arr){
    x = arr[0]
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.pop()
    return x;
}
// console.log(popFront([1,2,3,4,5,6]));

// insert at
function insertAt(arr, index, val){
    arr[arr.length] = val;
    for(let i = arr.length - 1; i > index; i--){
        let temp = arr[i]
        arr[i] = arr[i - 1]
        arr[i - 1] = temp;
    }
    return arr;
}
// console.log(insertAt([1,2,3,4,5,6], 3, 10));

//remove at
function removeAt(arr, index){
    for(let i = index; i < arr.length - 1; i++){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
    }
    arr.pop()
    console.log(arr);
    return arr[index];
}
console.log(removeAt([1,2,3,4,5,6], 3));

//swap pairs 
function swapPairs(arr){
    for(let i = 0; i < (arr.length / 2) - 1; i++){
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp;
    }
    return arr;
}
// console.log(swapPairs(['Jordan', 'Michael', 'Bird', 'Larry']));
// console.log(swapPairs(['Brendan', true, 42]));

//remove duplicates
function removeDuplicates(arr){
    count = 1;
    index = 0;
    while(count < arr.length){
        if(arr[index] == arr[count]){
            count++;
        }
        else{
            arr[index + 1] = arr[count];
            index++;
            count++;
        }
    }
    for(let i = 0; i < index; i++){
        arr.pop();
    }

    return arr;
}
// console.log(removeDuplicates(['Adam', 'Adam', 'Bob', 'Brian', 'Connor', 'Connor', 'Dan', 'Dan']));