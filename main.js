const R = require('ramda');

function isEven(number) {
    const n = R.clone(number);
    n.even = n.value % 2 == 0;
    return n;
}

function positive(number) {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

function isOdd(number) {
    // Implementar
}

function negative(number) {
    // Implementar
}

function isZero(number) {
    // Implementar
}

function isPrime(number) {
    // Implementar
}

function mapToNumberObject(num) {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// Exercício 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const nArr = arr.map(mapToNumberObject)

// Exercício 2: seguindo o modelo das 2 primeiras funções implemente as outras 4 funções

// Exercício 3: refatore todas as funções para a forma usando arrow function (=>)

// Exercício 4: use R.pipe para compor as funções: isEven, positive, isOdd, negative,
    // isZero, e isPrime. Teste a função composta com um único objeto.

// Exercício 5: use a função composta do Ex. 4 para transformar os números em 'arr'
