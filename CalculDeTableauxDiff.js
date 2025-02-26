let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let array2 = [-1, 12, 17, 14, 5, -9, 0, 18];
let sumArrays = array.length > array2.length ? [].concat(array) : [].concat(array2);
for(index = 0; index < sumArrays.length; index++){
    let val1 = 0;
    let val2 = 0;
    if(index < array.length) val1 = array[index];
    if(index < array2.length) val2 = array2[index];
    sumArrays[index] = val1 + val2;
}
console.log(sumArrays)