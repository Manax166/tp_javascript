function initUtilisateurs(){
    let req = new XMLHttpRequest;
    req.open('GET', 'http://localhost:3000/utilisateurs/');
    req.send();
    req.onreadystatechange = function() {
        if(req.readyState == 4 && req.status == 200){
            let data = JSON.parse(req.responseText);
            startInit(data);
        }
    }
}
function startInit(data){
    let corps = document.querySelector("#utilisateurs")
    let tempData = "";
    for(i=0;i<data.length;i++){
        let user = data[i];
        tempData += "<tr><td>"+user.id+"</td><td>"+user.nom+"</td><td>"+user.prenom+
        "</td><td>"+user.dateNaissance+"</td><td>"+user.lieuNaissance+"</td><td>"+
        user.numeroRue + " "+ user.libelleRue+" "+user.codePostal+" "+user.ville+
        "</td><td><i class=\"fa-solid fa-trash\"onclick=\"deleteUser(" + user.id + ")\">DELETE</i></td></tr>"
    }
    corps.innerHTML = tempData;
}
function creerUtilisateur(){
    document.forms[0].submit();
}
function deleteUser(id){
    let req = new XMLHttpRequest;
    req.open('DELETE', 'http://localhost:3000/utilisateurs/pripault/'+id);
    req.send();
}