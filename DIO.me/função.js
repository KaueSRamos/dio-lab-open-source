torrar()
injetarPao()
function torrar(){// A estrutura da função e da seguinte forma: function nome(){}
    console.log("torrando pão")
}

function injetarPao(){
    console.log("preparando para injetar o pão ")
    console.log("finalizado ")
}

main()

function main(){// A função main e usada pra usar ela como a função principal e ela pode ter uma função dentro de outra função.
    getData()
    checkValues()
    sendToDataBase()
}

function getData(){
    console.log("pegando dados do usuario")
}

function checkValues(){
    console.log("validando dados")
}

function sendToDataBase(){
    console.log("cadastrando dados")
}

ato(20, "lindo")//Valor da variaveis que estão dentro da função e ela pode ser alterada toda vez que voçe chamar a função

function ato(anos, aparencia){// dentro do parentese eu posso criar uma variavel onde o valor dela pode ser definido fora do escopo da função e eu posso declarar um valor pras variaveis dentro do escopo
    console.log("O kaique tem " + anos + " anos")
    console.log("e é muito " + aparencia)

}

cv("kaique",20,1.81)

function cv( A,B, C){// dentro da funcio o ${} é usado para atribuir a variavel da função no texto sem precisar o + toda ver que queira add a variave. ele se chama interpolação de strings
    console.log(`O usuario ${A} tem ${B} anos de idade e ${C} de altura`)// e para utilizar a interpolação de strings sempre tem que usar o simbulo de `craze` ao inves de "aspas duplas"
}


let resultado = lote(10, 10)

function lote(numA, numB){
    let soma = numA + numB
    return soma// ele retorna a função pra quem o chamou 
}

console.log("o lote tem " + resultado + " metros quadrados")


function primeironome(name){
    let firstName = name.split(" ")[0]
    return firstName

}

let nomePrint = primeironome("kaique da silva ramos")
console.log(nomePrint)
















