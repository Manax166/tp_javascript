function calculMoyenne(array){
    let moyenne = 0
    for(i = 0; i < array.length; i++){
        if(typeof array[i] !== 'number') throw ('L\'élément ' +  i + ' n\'est pas un nombre');
        moyenne += array[i];
    }
    return array.length>0 ? moyenne/array.length : moyenne;
}
console.log(calculMoyenne([1,2,3,4]));
console.log(calculMoyenne([]))
try {
    console.log(calculMoyenne('1234'))
    console.log(calculMoyenne('array'))
} catch (e) {
    console.log("Erreur : " + e)
}