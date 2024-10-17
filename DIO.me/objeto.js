//JSON - javaScript Object Notation
//Chave e valor com o objetivo de transferir dados
let invoice = {
    nome:"felipe",
    age: 28,
    prodects: {
        0: ["mouse 2xn", 29.90],
        1: ["teclado mecanico", 129.99],
        2: ["monitor", 899.99],
        3: ["TV 100 polegadas ", 4000]
    }
}

generateInvoice(invoice)

function generateInvoice(invoice){
    console.log(`o nome do comprador é ${invoice.nome}`)
    console.log(`Ele tem ${invoice.age} anos`)
    console.log("----------------------")
    console.log(`comprou o ${invoice.prodects[1]}`)


    for(let index in invoice.prodects){// escopo do for in: for(let ----- in -----){
        let [productName, productPrice] = invoice.prodects[index]//let [--------,------] = --------[----]
        console.log(`- ${productName}: R$ ${productPrice}`)//console.log(`---- ${------}------ ${-------}-----`)
    }
}

//classes é a padronização de formato de uma estrutura de dados
//objeto mantém a padronização da forma (classe) e implementa seus valores das propriedades e ter metedos inteligentes (funções próprias)


class formaDeBolo{//classe como se fosse uma forma de bolo (forma do codigo)
    constructor(saborDAMassa, saborRecheio){
        this.saborDAMassa = saborDAMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`um delicioso de ${this.saborDAMassa} com recheio de ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "rexheio de nutella")//objeto como se fosse a massa do bolo
let boloPrimium = new formaDeBolo("massa de morango", "recheio de chocolate")

boloFesta.escrever()
boloPrimium.escrever()






















