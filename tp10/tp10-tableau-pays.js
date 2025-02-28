function initDonneesTab(){
    let req = new XMLHttpRequest;
    req.open('GET', 'https://digicode.cleverapps.io/json/pays/pollution');
    req.send();
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            let data = JSON.parse(req.responseText);
            startInit(data);
        }
    }
}
function startInit(data){
    let erreur = document.querySelector("#erreur")
    let min = parseInt(document.querySelector("#min").value)
    let max = parseInt(document.querySelector("#max").value)
    let titre = document.querySelector("#titre");
    let annee = document.querySelector("#annee");
    let corps = document.querySelector("#corps")
    let tempData = "";
    if(min !== min) min = 0;
    if(max !== max) max = Number.MAX_VALUE;
    if (min >= max) {
        min = 0;
        max = Number.MAX_VALUE;
        erreur.innerHTML = "<strong font=\"red\">La valeur minimale doit être plus petite que la valeur maximale</strong>"
    }
    if (min <0 || max < 0){
        min = 0;
        max = Number.MAX_VALUE;
        erreur.innerHTML = "<strong font=\"red\">Les valeurs doivent être positives</strong>"
    }


    titre.innerHTML = data.polluant + " " + data.unite
    annee.innerHTML = data.annee
    for(i=0;i<data.pays.length;i++){
        let pays = data.pays[i];
        if(pays.valeur>=min && pays.valeur<=max){
            tempData += "<tr><td><img src=\"https://flagcdn.com/24x18/"+pays.code+".png\">"+
            pays.nom+"</td><td>"+pays.valeur+"</td><td>"+pays.pourcentage+"</td></tr>"
        }
    }
    corps.innerHTML = tempData;
}