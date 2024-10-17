//vitorias: 96 derrotas: 21
let vitorias = 96   
let derrotas = 21
let nivelRank = " "

let contagemPontos = contagemPontos1(96, 21)
function contagemPontos1(vitorias, derrotas){
    let pontosRank = vitorias - derrotas
    return pontosRank 
}

let repeicao = contagemPontos + 1


switch (true){
    case (contagemPontos <= 10) :
    nivelRank = "Ferro"
    break

    case (contagemPontos >= 11 && contagemPontos <= 20 ) :
    nivelRank = "Bronze"
    break

    case (contagemPontos >= 21 && contagemPontos <= 50 ) :
    nivelRank = "Prata"
    break

    case (contagemPontos >= 51 && contagemPontos <= 80 ) :
    nivelRank = "Ouro"
    break

    case (contagemPontos >= 81 && contagemPontos <= 90 ) :
    nivelRank = "Diamante"
    break

    case (contagemPontos >= 91 && contagemPontos <= 100 ) :
    nivelRank = "Lendário"
    break

    case (contagemPontos >= 101 ) :
    nivelRank = "Imortal"
    break

    default :
    console.log("sem classificação")

}

for (contagemPontos = contagemPontos; contagemPontos <(repeicao); contagemPontos++){
    console.log("O Herói tem de saldo de " + contagemPontos + " está no nivel de " + nivelRank)
}
























