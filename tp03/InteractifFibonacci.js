let n = 10;
let array = [0, 1, 1];
for(i = 0; i < n; i++){
    array[2] = array[0] + array[1];
    array[0] =  array[1];
    array[1] = array[2];
}
console.log(array[0])