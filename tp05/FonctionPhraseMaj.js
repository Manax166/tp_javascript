function maj(string){
    return string[0].toUpperCase() + string.slice(1)
}

function phraseMaj(string){
    let phrase =  string.split(" ");
    let result = maj(phrase[0])
    for(i=1;i<phrase.length;i++){
        result += " " + maj(phrase[i])
    }
    return result;
}

console.log(phraseMaj("bonjour tout le monde, je suis didier"))