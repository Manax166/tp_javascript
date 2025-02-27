let array = [0, 1, 2, 3, 4];
let tempArray = [].concat(array);
for(index = 0; index < array.length; index++){
    if(index == 0){
        array[index] = tempArray[tempArray.length-1]
    } else {
        array[index] = tempArray[index-1];
    }
}
console.log(array)