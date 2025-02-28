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