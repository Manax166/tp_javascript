class Personne {
    #nom
    #prenom
    constructor (nom, prenom) {
        this.#nom = nom
        this.#prenom = prenom
    }
    createId(){
        return this.#prenom.charAt(0) + this.#nom;
    }
    get nom(){
        return this.#nom
    }
    set nom(nom){
        this.#nom=nom
    }
}
class Salarie extends Personne{
    #salaire
    constructor(nom, prenom, salaire){
        super(nom, prenom)
        this.#salaire = salaire
    }
}
class MyButton extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode : 'open'});
    }
    connectedCallback(){
        const button = document.createElement('button');
        const label = this.getAttribute('label') || "Cliquez-moi !";
        button.textContent = label
        this.shadowRoot.appendChild(button)
    }
    
}
let p = new Personne("ripault", "paul")
console.log(p.createId())
customElements.define('my-button', MyButton)