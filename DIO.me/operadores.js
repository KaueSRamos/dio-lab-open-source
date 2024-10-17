//operadores matematicos +, -, *, / e %
let produto1 = 30
let produto2 = 10
let produto3 = 60
let parcelado = [
    [10, 5, 2]
]
let desconto = 10
console.log(
    (produto1 + produto2 + produto3 - desconto) / (parcelado[0][2])
)
console.log(
    (produto1 + produto2 + produto3 - desconto) % (parcelado[0][2]) // % calcula o resto da divisão
)

//operadores de incremento e decremento
let contador = 9
// '++' incremento= ele incrementa +1 a variavel
contador++
contador++
// '--' decremento= ele decrementa -1 a variavel
contador--

console.log(
    contador
)

//operadores de atribuiçoes
let preco = 10
preco += 10  // maneira abreviada de: preco = preco + 5
preco -= 5  // maneira abreviada de: preco = preco - 5
console.log(
    preco
)

//operadores de comparações
let numero = "1"
console.log(
    numero == 2
)// == é para comparar o valor
console.log(
    numero === 1
)// === é para comparar o valor e o formato do conteúdo
let marca = "apple"
console.log(
    marca !== "samsung"
) //!== é diferente?
let resultado = marca !== "samsung"//!== pode ser guardado tambem o resultado em uma varialvel true/false
console.log(
    resultado
)
let cpfBloqueado = "123.456.789.11"
let cpfUsuario = "987.654.321.99"
let eCpfBloqueado = cpfUsuario === cpfBloqueado

console.log(
    "O usuario tá com o cpf bloqueado? " + eCpfBloqueado
)
let cpfPermitido = "111.111.111.11"
let cpfDoUsuario = "222.222.222.11"
let ehBloqueado = cpfUsuario !== cpfPermitido

console.log(
    "O cpf é bloqueado? " + ehBloqueado
)
let idadeMinima = 18
let idadeUsuario = 17
let ehValido = idadeUsuario >= idadeMinima// >= maior ou igual. <= menor ou igual.
 console.log(
    "O usuario tem a idade minima permitida " + ehValido
 )

let media = 6
let prova1 = 5
let prova2 = 8
let trabalho1 = 4
let trabalho2 = 10
let mediaAluno = (prova1 + prova2 + trabalho1 + trabalho2) / 4

console.log(
    mediaAluno
)

console.log(
    "Passou de ano? " + (mediaAluno >= media)
)

let moedasColetadas = 150
let itens = "estrela"
console.log(
    "O jogador tem os intens necessarios? " +( (moedasColetadas >= 100) && (itens === "estrela") )// o operador && compara se os dois itens são verdadeiros
)

let moedasColetadas1 = 150
let itens1 = "estrela"
let comparacao = (moedasColetadas1 >= 100) && (itens1  === "estrela")

console.log(
    "O jogador tem os intens necessarios? " + comparacao
)

let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva") // o operador || represemta um 'ou' ex: se tiver chovendo não pode sair ou leva um guarda chuva ai sim pode sair

console.log(
    "nosso personagem pode sair ? " + podeSair
)
let temporal = "chuva"
let resultado1 = temporal === "chuva"
console.log(
    !!resultado1
)// o operador not ( ! ) ele inverte o valor verdadeiro para falso com dois "not" ele inverte de novo










