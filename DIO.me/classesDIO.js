//clases de herois: guerreiro, mago, ninja e monge
class heroismo{
    constructor(heroi, tipoArma){
        this.heroi = heroi
        this.tipoArma = tipoArma
        }
    mensagem(){
        console.log(`O ${this.heroi} atacou o monstro com ataque de ${this.tipoArma}`)
    }
} 
let tipoDeHeroi = "guerreiro"

switch (true){
    case (tipoDeHeroi === "guerreiro"):
        heroi = "guerreiro"
        tipoArma = "espada"
        break

    case (tipoDeHeroi === "ninja"):
        heroi = "ninja"
        tipoArma = "katana"
        break

    case (tipoDeHeroi === "mago"):
        heroi = "mago"
        tipoArma = "magia"
        break

    case (tipoDeHeroi === "monge"):
        heroi = "monge"
        tipoArma = "artes marciais"
        break

    default:
        heroi = "humano"
        tipoArma = "bastão"
}
let heroiEscolhido = heroi
let armaEscolhida = tipoArma

let luta = new heroismo(heroiEscolhido, armaEscolhida)

luta.mensagem()

let tipoDeHeroi2 = "monge"

switch (true){
    case (tipoDeHeroi2 === "guerreiro"):
        heroi = "guerreiro"
        tipoArma = "espada"
        break

    case (tipoDeHeroi2 === "ninja"):
        heroi = "ninja"
        tipoArma = "katana"
        break

    case (tipoDeHeroi2 === "mago"):
        heroi = "mago"
        tipoArma = "magia"
        break

    case (tipoDeHeroi2 === "monge"):
        heroi = "monge"
        tipoArma = "artes marciais"
        break

    default:
        heroi = "humano"
        tipoArma = "bastão"
}


let heroiEscolhido2 = heroi
let armaEscolhida2 = tipoArma

let lutas = new heroismo(heroiEscolhido2, armaEscolhida2)

lutas.mensagem()

























