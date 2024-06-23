function divisao() {
    const num1 = parseInt(prompt('Digite um número'))
    const num2 = parseInt(prompt('Digite outro número'))

    if (num1 === 0 || num2 === 0) {
        console.log("O filha da puta, Não é possível dividir o número por 0")
    } else if (num1 > num2) {
        console.log(num1 / num2);
    } else if (num1 < num2) {
        console.log(num2 / num1);
    } 
    
}

/*function calculadora (num1, num2, operador) {

    if (operador === '+') {
        return num1 + num2
    } else if (operador === '-') {
        return num1 - num2
    } else if (operador === '*') {
        return num1 * num2
    } else if (operador === '/') {
        return num1 / num1
    } else {
        return 0
    }

}

console.log(calculadora(10, 3, '+'))
console.log(calculadora(5, 3, '*'))
*/

/* 
function mostra() {
    const numero = parseInt(prompt('Digite um número'))

        if (numero % 2 == 0) {
            alert(`O número ${numero} é par`);
        } else {
            alert(`O número ${numero} é impar`);
        }
} 

mostra()
mostra()
mostra()

*/