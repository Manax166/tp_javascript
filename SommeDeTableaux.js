let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18, -6, 0, 4, -13, 5, 7, -2, 8, -1];
let sumArrays = [].concat(array)
for(index = 0; index < array.length; index++){
    sumArrays[index] = array[index] + array2[index];
}
console.log(sumArrays);