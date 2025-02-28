var roundRobin = 0;
function getData(){
    let req = new XMLHttpRequest;
    req.open('GET', 'https://restcountries.com/v2/all');
    req.send();
    req.onreadystatechange = function(){
        if(req.readyState == 4 && req.status == 200){
            let data = JSON.parse(req.responseText);
            let corps = document.querySelector("#corps");
            let res = ""
            for (let i=0 ; i<data.length ; i++){
                let pays = data[i]
                //res += pays.name + " " + pays.capital + " " + pays.population + " " + pays.region+"<br>"
                res+="<tr><td>"+ pays.name +"</td><td>"+pays.capital+"</td><td>"+pays.population+"</td><td>"+
                pays.region+"</td></tr>" 
            }
            corps.innerHTML = res;
        }
    }
}
function changeFilter(){
    let pop = document.querySelector("#pop");
    console.log(roundRobin);
    
    this.roundRobin++;
    if(this.roundRobin%3 == 0) pop.innerHTML = "Population<i class=\"fa-solid fa-sort\"></i>";
    else if(this.roundRobin%3 ==1) pop.innerHTML = "Population<i class=\"fa-solid fa-sort-down\"></i>";
    else  if(this.roundRobin%3 ==2)pop.innerHTML = "Population<i class=\"fa-solid fa-sort-up\"></i>";
}