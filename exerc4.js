/* Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior,
 qual é o menor.
*/
const firstNumber = 44
const secondNumber = 20
const thirdNumber = 30

if(firstNumber > secondNumber && firstNumber > thirdNumber){
    console.log('O primeiro é o Maior.')

} else if(secondNumber > thirdNumber){
    console.log('O segundo é o Maior.')
} else {
    console.log('O terceiro é o Maior.')
}

if(firstNumber < secondNumber && firstNumber < thirdNumber){
    console.log('O primeiro é o Menor.')

} else if(secondNumber < thirdNumber){
    console.log('O segundo é o Menor.')
} else {
    console.log('O terceiro é o Menor.')
}