let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let maxValue = 0;
for(index = 0; index < array.length; index++){
    if(array[index]>maxValue) maxValue = array[index];
}
console.log(maxValue)