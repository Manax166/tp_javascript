function creerGestionnaire(){
    return {
        tableauTache : [],
        ajouterTache : function(desc){
            let tache = {description : desc, terminee : false}
            this.tableauTache.push(tache);
        },
        terminerTache : function(index){
            let tache = this.tableauTache[index]
            tache.terminee = true
        },
        afficherTaches : function(){
            for(i = 0; i< this.tableauTache.length; i++){
                console.log(this.tableauTache[i].description + " " + this.tableauTache[i].terminee)
            }
        },

    }
}

let gestionnaire = creerGestionnaire();
gestionnaire.ajouterTache("tache numéro 1")
gestionnaire.ajouterTache("tache numéro 2")
gestionnaire.ajouterTache("tache numéro 3")
gestionnaire.terminerTache(1)
gestionnaire.afficherTaches()