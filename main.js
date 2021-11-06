const R = require('ramda');

const isEven = number => {
    const n = R.clone(number);
    n.even = n.value % 2 === 0;
    return n;
}

const positive = number => {
    const n = R.clone(number);
    n.positive = n.value > 0;
    return n;
}

const isOdd = num => !isEven(num);

const negative = num => !positive(num);

const isZero = number => {
    const n = R.clone(number);
    n.positive = n.value === 0;
    return n;
}

const isPrime = number => {

    const n = R.clone(number);

    for(let i = 2; i < n.value; i++)
        if(n.value % i === 0){
            n.positive = false;
            return n;
        }

    n.positive = n.value > 1;

    return n;
}

const mapToNumberObject = num => {
    return { value: num };
}

const arr = [-1, 50, 5, 10, -8, 20, 25, 0, 100, 14, -123];

// Exercício 1: use map() para transformar 'arr' em objetos usando mapToNumberObject()
const nArr = arr.map(mapToNumberObject)

// Exercício 2: seguindo o modelo das 2 primeiras funções implemente as outras 4 funções

// Exercício 3: refatore todas as funções para a forma usando arrow function (=>)

// Exercício 4: use R.pipe para compor as funções: isEven, positive, isOdd, negative,
    // isZero, e isPrime. Teste a função composta com um único objeto.
const func = R.pipe(isEven, positive, isOdd, negative, isZero, isPrime);

const result = func(mapToNumberObject(3))
console.log("Resultado: " + result)

// Exercício 5: use a função composta do Ex. 4 para transformar os números em 'arr'
