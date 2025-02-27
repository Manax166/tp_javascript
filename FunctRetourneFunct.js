function fonctionMult(n){
    return function (nb){
        return n*nb
    }
}
let mult1 = fonctionMult(4)
let mult2 = fonctionMult(5)
console.log(mult1(3) + " | " + mult2(3));
