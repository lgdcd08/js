/**
 * Tipagem dinâmica - JS
 */

// DECLARAÇÃO DE VARIÁVEIS
let nome, idade, peso, altura, vip, imc 


//entrada de dados
nome = "Luiz Gustavo de Carvalho Dagnese"
idade = 40
peso = 76
altura = 1.83 /**ponto é numero e virgula não */
vip = true 
// a linha abaixo verifica o tipo da variável
//console.log(typeof(vip)) /**qual é o tipo da variável */

console.clear()

//processamento 
imc = peso / (altura * altura) //imc (índice de massa corporal)
fcm = 208 - (0.7 * idade) //fmc (frequência cardíaca máxima)

//saída 
console.log("Ficha do Aluno")
console.log("_________________________________")
console.log(`Nome: ${nome}`) //essa linha faz a junção de um texto com a variavél
console.log(`Idade: ${idade}`)
console.log(`Peso: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`IMC: ${imc.toFixed(2)}`)
console.log(`FCM: ${fcm} bpm`)
