alert(
    "Olá!" +
    "\nVamos cálcular?"
)

let num1 = parseFloat(prompt("Informe um número: "))
let num2 = parseFloat(prompt("Informe outro número"))

const soma = num1 + num2
const subtracao = num1 - num2
const multiplicacao = num1 * num2
const divisao = num1 / num2

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )

