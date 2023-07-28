// Curso de Desenvolvimento Web - Coderhouse

// Tarefa de JavaScript

// Aluno: Lucas Peres Ribeiro


// 1 - Exercício de Fundamentos - Variáveis:
var raio = 10;
const PI = 3.14;
var resposta = PI * (raio * raio);

console.log("A Área da Circunferência é " + resposta + "m²");


// 2 - Exercício de ARRAY:
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[1])
console.log(valores[4])


// 3 - Exercício de Repetição - WHILE:
function getInteiroAleatorioEntre(min, max) { 
    const valor = Math.random() * (max - min) + min 
    return Math.floor(valor)
}

let opcao = 0
while (opcao != 1) {   
    opcao = getInteiroAleatorioEntre(-1, 10) 
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')


// 4 - Exercício de Repetição - FOR:
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${1}`)
}


// 5 - Exercício de Controle - IF:
function Aprovado(nota) {
    if(nota >= 7) {
        console.log('Aprovado com ' + nota)
    }
}

Aprovado(8.1)
Aprovado(6.7)


// 6 - Exercício de Controle - ELSE:
const Resultado1 = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

Resultado1(6)
Resultado1(8)






