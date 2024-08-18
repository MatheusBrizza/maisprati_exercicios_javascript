// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.
const prompt = require('prompt-sync')()
function verificarNumeroPar(numeroVerificado) {
    if (numeroVerificado % 2 == 0) {
        console.log(`${numeroVerificado} é par.`)
    } else {
        console.log(`${numeroVerificado} é impar.`)
    }
}



// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
// adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
// controle if-else

function verificarClassificacaoEtaria(idadeVerificada) {
    if (idadeVerificada >= 0 && idadeVerificada <= 13) {
        console.log("A pessoa é uma criança.")
    } else if (idadeVerificada >= 14 && idadeVerificada <= 18) {
        console.log("A pessoa é um adolescente.")
    } else if (idadeVerificada >= 19 && idadeVerificada <= 59) {
        console.log("A pessoa é adulta.")
    } else if (idadeVerificada >= 60) {
        console.log("A pessoa é idosa")
    } else {
        console.log("Idade inválida")
    }
}



// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
//  "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if
function verificarNotaAluno(notaAlunoVerificada) {
    if (notaAlunoVerificada >= 7 && notaAlunoVerificada <= 10) {
        console.log("Aluno aprovado! :)")
    } else if (notaAlunoVerificada <= 6.9 && notaAlunoVerificada >= 5) {
        console.log("Aluno está em recuperação. :/")
    } else if (notaAlunoVerificada <= 4.9 && notaAlunoVerificada >= 0) {
        console.log("Aluno reprovado. :(")
    } else {
        console.log("nota inválida.")
    }
}


// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

// function selecionarExercicios(input) {
//     switch(input) {
//         case 1: 
//             let numero = Number(prompt("Informe um número: "))
//             verificarNumeroPar(numero)
//             break;
//         case 2:
//             let idadeAVerificar = Number(prompt("Informe a idade: "))
//             verificarClassificacaoEtaria(idadeAVerificar)
//             break;
//         case 3:
//             let notaAluno = Number(prompt("Informa a nota do aluno: "))
//             verificarNotaAluno(notaAluno)   
//             break;
//     }
// }
// console.log("1: Informe o número e verifique se é par ou ímpar.")
// console.log("2: informe sua idade e veja em qual categoria você está (criança, adolescente, adulto, idoso)")
// console.log("3: Informe uma nota de 0 a 10 e veja se foi 'Aprovado', 'Recuperação', ou 'Reprovado'")
// let escolha = Number(prompt("Digite o número da sua escolha: "))
// selecionarExercicios(escolha)

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

function calcularImc(pesoVerificado, alturaVerificada) {
    imc = pesoVerificado / Math.pow(alturaVerificada, 2)
    if (imc <= 18.5) {
        console.log("seu IMC indica que está abaixo do normal.")
    } else if (imc >= 18.6 && imc <= 24.9) {
        console.log("Seu IMC indica que está normal.")
    } else if (imc >= 25 && imc <= 29.9) {
        console.log("Seu IMC indica que está sobrepeso.")
    } else if (imc >= 30 && imc <= 34.9) {
        console.log("Seu IMC indica que está Obesidade I.")
    } else if (imc >= 35 && imc <= 39.9) {
        console.log("Seu IMC indica que está Obesidade II.")
    } else if (imc >= 40) {
        console.log("Seu IMC indica que está Obesidade III.")
    } else {
        console.log("Erro")
    }
}

// let peso = Number(prompt("Informe seu peso: "))
// let altura = Number(prompt("Informe sua altura: "))
// calcularImc(peso, altura)

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

function verificarTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
        if (ladoA == ladoB && ladoB == ladoC) {
            console.log("triângulo equilátero.")
        } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
            console.log("triângulo isóceles.")
        } else if (ladoA != ladoB && ladoB != ladoC) {
            console.log("triângulo escaleno.")
        }
    } else {
        console.log("Um ou mais valores foi inválido.")
    }
}

// let ladoA = Number(prompt("Informe o primero lado: "))
// let ladoB = Number(prompt("Informe o segundo lado: "))
// let ladoC = Number(prompt("Informe o terceiro lado: "))

// verificarTriangulo(ladoA, ladoB, ladoC)

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

function venderMacas(quantidadeMacas) {
    let valorTotal = 0
    if (quantidadeMacas < 12 && quantidadeMacas >= 0) {
        valorTotal = quantidadeMacas * 0.3
        console.log(`Valor total de ${quantidadeMacas} foi R$${valorTotal.toFixed(2)}`)
    } else if (quantidadeMacas >= 12) {
        valorTotal = quantidadeMacas * 0.25
        console.log(`Valor total de ${quantidadeMacas} foi R$${valorTotal.toFixed(2)}`)
    } else {
        console.log("Quantidade inválida inserida.")
    }
}

// let macas = Number(prompt("informe a quantidade de maçãs que deseja comprar: "))
// venderMacas(macas)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

function colocarNumerosOrdemCrescente(primeiroValor, segundoValor) {
    if (primeiroValor > segundoValor) {
        console.log(`${segundoValor}, ${primeiroValor}`)
    } else if (primeiroValor < segundoValor) {
        console.log(`${primeiroValor}, ${segundoValor}`)
    } else {
        console.log("operação inválida.")
    }
}

// let numero1 = Number(prompt("Informe o primero número: "))
// let numero2 = Number(prompt("Informe o segundo número: "))
// colocarNumerosOrdemCrescente(numero1, numero2)

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

function contagemRegressiva() {
    for (let i = 10; i > 0; i--) {
        console.log(i)
    }
}

// contagemRegressiva()

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

function repetirNumeroDezVezes(numero) {
    for (let i = 0; i <= 10; i++) {
        console.log(numero)
    }
}

// let numero = Number(prompt("Informe um número para repetir: "))
// repetirNumeroDezVezes(numero)

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

function somarCincoNumeros() {
    let soma = 0
    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt("Informe um número para somar: "))
        soma += numero
    }
    console.log(`Soma dos números informados é ${soma}`)
}

// somarCincoNumeros()

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

function fazerTabuadaValorInformado() {
    let numero = Number(prompt("Informe um número para ver a tabuada: "))
    for (let i = 1; i <= 10; i++) {
        let multiplicacao = i * numero
        console.log(`${i} * ${numero} = ${multiplicacao}`)
    }
}

// fazerTabuadaValorInformado()

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

function calcularMediaAritmetica() {
    let soma = 0
    let contador = 0
    let numero
    do {
        numero = Number(prompt("Informe um número para ver a média aritmética (digite 0 para parar o loop): "))

        if (numero != 0) {
            soma += numero
            contador++
        }
    } while (numero != 0)
    let media = soma / contador
    console.log(`A média aritmética dos números informados é: ${media}`)
}

// calcularMediaAritmetica()

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

function calcularFatorialNumeroFornecido() {
    let numero = Number(prompt("Informe um número para calcular fatorial: "))
    let fatorial = 1
    for(let i=1; i <= numero; i++) {
        fatorial *= i
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`)
}

// calcularFatorialNumeroFornecido()

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

function imprimirSequenciaFibonacci() {
    let n1 = 0 
    let n2 = 1 
    let proximoNumero
    for (let i = 1; i <= 10; i++) {
        console.log(n1); 
        proximoNumero = n1 + n2;
        n1 = n2;
        n2 = proximoNumero;
    }
}

// imprimirSequenciaFibonacci()