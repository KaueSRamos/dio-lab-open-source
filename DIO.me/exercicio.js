let nota1 = 6
let nota2 = 9
let nota3 = 4
let nota4 = 6
let divisao = 4
let mediaAluno = (nota1 + nota2 + nota3 + nota4) / (divisao)
let pasou = ""
// o escopo do if ou else if é: if (Condição){saida de dados de acordo com a condição}
if (mediaAluno  >= 6){// if = se
    pasou = "Aprovado"
}
// o escopo do else é: else{saida de dados se nenhuma condição anterior foi etendida}
else{// else = se não
    pasou = "Reprovado"
}
console.log("O aluno foi " + pasou) 

let comida1 = "uva"
let comida2  = "pera"
let comida3 = "banana"
let comida4 = "uva"
if (comida1 === comida4){// if = se
    console.log("Trazer 5")
}
else if (comida2 === comida4){// else if = ou se
    console.log("trazer 5")
}
else{// else = se não
    console.log("Não trazer nada")
} 














