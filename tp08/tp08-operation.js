function operation(){
    let erreur = document.querySelector("#erreurOp");
    let result = document.querySelector("#resultatOp");
    let x = parseInt(document.querySelector("#champOp1").value);
    let y = parseInt(document.querySelector("#champOp2").value);
    if( x !== x || y !== y){
        result.innerHTML = "";
        erreur.innerHTML = "<strong><font color=\"red\">Vous devez saisir un nombre</font><strong>";
    }  
    else {
        result.innerHTML = 
            "Le résultat de l’addition est : " + (x+y) +"<br>"+
            "Le résultat de la soustraction est : " + (x-y) +"<br>"+
            "Le résultat de la multiplication est : " + (x*y) +"<br>"+
            "Le résultat de la division est : " + (x/y);
        erreur.innerHTML = "";
    }
}