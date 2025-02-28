function addition(){
    let erreur = document.querySelector("#erreurAdd");
    let result = document.querySelector("#resultatAdd");
    let x = parseInt(document.querySelector("#champAdd1").value);
    let y = parseInt(document.querySelector("#champAdd2").value);
    if( x !== x || y !== y){
        result.innerHTML = "";
        erreur.innerHTML = "<strong><font color=\"red\">Vous devez saisir un nombre</font><strong>";
    }  
    else {
        result.innerHTML = " Le résultat de l’addition est : " + (x+y);
        erreur.innerHTML = "";
    }
}