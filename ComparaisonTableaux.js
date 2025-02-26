let array1 = [1, 15, -3, 8, 7, 4, -2, 28, -1, 17, 2, 3, 0, 14, -4] ;
let array2 = [3, -8, 17, 5, -1, 4, 0, 6, 2, 11, -5, -4, 8] ;
let count = 0;
for(indexArray1 = 0; indexArray1 < array1.length; indexArray1++){
    for(indexArray2 = 0; indexArray2 < array2.length; indexArray2++){
        if(array1[indexArray1] == array2[indexArray2]) count++;
    }
}
console.log(count);