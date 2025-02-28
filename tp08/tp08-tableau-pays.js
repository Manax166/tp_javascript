function initDonneesTab(){
    let data = {"polluant":"CO2",
        "unite":"milliards de tonnes",
        "annee":2017,
        "pays":[{"nom":"Chine", "valeur":9.26, "pourcentage":28.2, "code":"cn"},
         {"nom":"Etats-Unis", "valeur":4.76, "pourcentage":14.5, "code":"us"},
         {"nom":"Inde", "valeur":2.16, "pourcentage":6.6, "code":"in"},
         {"nom":"Russie", "valeur":1.54, "pourcentage":4.7, "code":"ru"},
         {"nom":"Japon", "valeur":1.13, "pourcentage":3.4, "code":"jp"},
         {"nom":"Allemagne", "valeur":0.72, "pourcentage":2.2, "code":"de"},
         {"nom":"Corée du Sud", "valeur":0.6, "pourcentage":1.8, "code":"kr"},
         {"nom":"Iran", "valeur":0.57, "pourcentage":1.7, "code":"ir"},
         {"nom":"Canada", "valeur":0.55, "pourcentage":1.7, "code":"ca"}]
    }
    let titre = document.querySelector("#titre");
    let annee = document.querySelector("#annee");
    let corps = document.querySelector("#corps")
    let tempData = "";
    titre.innerHTML = data.polluant + " " + data.unite
    annee.innerHTML = data.annee
    for(i=0;i<data.pays.length;i++){
        tempData += "<tr><td><img src=\"https://flagcdn.com/24x18/"+data.pays[i].code+".png\">"+
        data.pays[i].nom+"</td><td>"+data.pays[i].valeur+"</td><td>"+data.pays[i].pourcentage+"</td></tr>"
    }
    corps.innerHTML = tempData;
}