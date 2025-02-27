 let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
 for(index = 0; index < array.length; index++){
    console.log(array[index])
    console.log(array[(array.length-1)-index])
 }
let arrayCopy = [].concat(array)