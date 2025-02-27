let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
let arrayCopy = [].concat(array)
for(index = 0; index < array.length; index++){
    arrayCopy[index] = array[(array.length-1)-index]
}
/*var arrayCopy = [].concat(array);
arrayCopy.reverse();*/
console.log(array);
console.log(arrayCopy);