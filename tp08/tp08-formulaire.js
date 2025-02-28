function controleSaisie(){
    let erreur = document.querySelector("#erreurForm");
    let resultat = document.querySelector("#resultatForm");
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let naissance = document.querySelector("#naissance").value;
    if(nom == "" || prenom == "" || naissance == "") {
        erreur.innerHTML = "<strong><font color=\"red\">Saisie incorrecte, champ manquant</font><strong>";
        resultat.innerHTML = "";
    } else {
        erreur.innerHTML = "";
        resultat.innerHTML = "Formulaire correct : " + nom + " "  + prenom + " " +naissance;
    }
}