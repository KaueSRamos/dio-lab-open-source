//COMO ABRIR PORTAS PRO SEU ARMARIO/VETOR DE VARIAVEIS (PRA COLOCAR AS PALAVRAS NO ARMARIO/VETOR É SÓ USAR O [COLCHETE])

let pokemon = ['pikachu', 'lucario', 'evee'];

//O COMANDO SHIFT ELE ELIMINA O PRIMEIRO ELEMENTO DO VETOR.
pokemon.shift();

//O COMANDO POP ELIMINA O ULTIMO ELEMENTO DO VETOR.
pokemon.pop();

//PARA PEGAR UM NOME ESPECIFICO NO SEU ARMARIO/VETOR VC TEM QUE DIGITAR O NUMERO DA ORDEM QUE ELE SE ENCONTRA DENTRO DO COLCHETE.(O COMPUTADOR COMEÇA A CONTAR APARTI DE 0)EX;  LUCARIO É O 1,O PICACHU É O 0.
console.log(pokemon[1]);

//MATRIZ
let timePokemon = [
    ["pikachu ", "M", 1],
    ["Chamander ", "F", 4]
];

console.log(" O POKEMON " + timePokemon[1][0] + " DO SEXO " + timePokemon[1][1] + " ESTA NO LEVEL " + timePokemon[1][2])

let usuario = [
    ["Kaique ", "masculino ", 20],
    ["Danilo ", "masculino ", 20]
];

console.log(
    "O usuario " + usuario[0][0] + "do sexo " + usuario[0][1] + "tem " + usuario[0][2] + " anos, tem consigo um " +
    timePokemon[0][0] + "do sexo " + timePokemon[0][1] + " que esta no level " + timePokemon[0][2]
);
console.log(
    "Ele tem adicionado no seu grupo seu amigo " + usuario[1][0] + "que tem " + usuario[1][2] + " anos de idade e se identifica com o sexo " + usuario[1][1]
);
console.log(
    usuario[1][0] + "tem um pokemon do tipo fogo chamado " + timePokemon[1][0] + "que esta no level " + timePokemon[1][2] + " do sexo " + timePokemon[1][1] + " esta no level " + timePokemon[1][2]
);















