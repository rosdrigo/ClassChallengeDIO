class hero {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia"
                break;
            case "guerreiro":
                ataque = "usou espada"
                break;
            case "monge":
                ataque = "usou artes marciais"
                break;
            case "ninja":
                ataque = "usou shuriken"
                break;
            default:
                ataque = "usou um ataque genérico"
                break;
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}


let charWarrior = new hero("Arturia", 20, "guerreiro")
let charMage = new hero("Gandalf", 999, "mago")
let charNinja = new hero("Donatelo",20,"ninja")

charWarrior.atacar()
charMage.atacar()
charNinja.atacar()
