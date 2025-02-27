function controleArray(array){
    if(!Array.isArray(array)) return false;
    for(i = 0; i < array.length; i++){
        if(typeof array[i] !== 'number') return false;
    }
    return true;
}
console.log(controleArray([1,2,3,4]));
console.log(controleArray([1,2,"trois",4]));
console.log(controleArray([]));