let societe = {
    "Nom" : "Google",
    "Siege" : "Googleplex, Mountain View, California, United States",
    "Fondateurs" : [
        {"nom" :"Larry Page", "naissance" : "né le 26/03/1973 à East Lansing", "pays" : "Michigan"},
        {"nom" : "Sergey Brin", "naissance" : "né le 21/08/1973 à Moscou", "pays" : "Union Soviétique"}],
    "chiffreAffaire" : [
        {"annee" : 2008, "chiffre" : 16.49},
        {"annee" : 2012, "chiffre" : 37.97},
        {"annee" : 2016, "chiffre" : 89.46},
        {"annee" : 2018, "chiffre" : 136.2},
    ]
}
for(i=0;i<societe.Fondateurs.length;i++){
    console.log(societe.Fondateurs[i]);
}
for(i=0;i<societe.chiffreAffaire.length;i++){
    console.log(societe.chiffreAffaire[i]);
}