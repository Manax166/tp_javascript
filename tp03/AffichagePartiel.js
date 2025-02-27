let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];
console.log("> 3")
for(index = 0; index < array.length; index++){
    if(array[index]>3){
        console.log(array[index])
    }
}
console.log("valeur paire")
for(index = 0; index < array.length; index++){
    if(array[index]%2 == 0){
        console.log(array[index])
    }
}
console.log("index pair")
for(index = 0; index < array.length; index++){
    if(index%2 < 1){
        console.log(array[index])
    }
}
console.log("valeur impaire")
for(index = 0; index < array.length; index++){
    if(array[index]%2 != 0){
        console.log(array[index])
    }
}