let nomeHeroi = "kaue"
let xp = 8.012
let rank = ""

switch (true){
    case (xp < 1.000) :
     rank = "Ferro"
     break
    
    case ( xp >= 1.001 && xp <= 2.000 ) :
     rank = "Bronze"
     break
    
    case ( xp >= 2.001 && xp <= 5.000 ) :
     rank = "Prata"
     break

    case ( xp >= 5.001 && xp <= 7.000) :
     rank = "Ouro"
     break

    case ( xp >= 7.001 && xp <= 8.000) :
     rank = "Platina"
     break

    case ( xp >= 8.001 && xp <= 9.000) :
     rank = "Ascendente"
     break

    case ( xp >= 9.001 && xp <= 10.000) :
     rank = "Imortal"
     break

    default :
     rank = "Radiante"
}

console.log("O heroi de nome " + nomeHeroi + " esta no nivel: " + rank )
















