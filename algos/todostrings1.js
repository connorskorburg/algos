// remove blanks
function removeBlanks(s){
    split = s.split(" ");
    join = split.join("")
    return join;
}
// console.log(removeBlanks("Pl ayTha tF unkyM usi c"));

// get digits
function getDigits(s){
    num = '';
    for(let i = 0; i < s.length; i++){
        if(!isNaN(s[i]) && s[i] != 0){
            num = num + s[i];
        }
    }
    num = Number(num);
    console.log(typeof num);
    return num;
}
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"))

// acronyms
function acronyms(s){
    newWord = ""
   split =  s.split(" ")
   for(let i = 0; i < split.length; i++){
       newWord = newWord + split[i][0];
   }
   newWord = newWord.toUpperCase();
   return newWord;
}
// console.log(acronyms("there's no free lunch - gotta pay yer way."));
// console.log(acronyms("Live from New York, it's Saturday Night!"));

// count non spaces
function nonSpacesCount(s){
    var count = 0;
    split = s.split("");
    for(let i = 0; i < split.length; i++){
        if(split[i] == " "){
            continue;
        }
        else{
            count++;
        }
    }
    return count;
}
// console.log(nonSpacesCount("Honey pie, you are driving me crazy"));

//remove shorter strings
function removeShorterStrings(arr){
    let newarr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length < arr.length){
            continue;
        }
        else{
            newarr.push(arr[i]);
        }
    }

    return newarr;
}
// console.log(removeShorterStrings(["Hello", "Goodbye", "Hi", "Bye", "Welcome"]));
