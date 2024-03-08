function verificaFibonacci(numero) {
    let a = 0;
    let b = 1;
    while (b < numero) {
        const temp = a;
        a = b;
        b = temp + b;
    }
    return b === numero;
}

// Número a ser verificado (pode ser alterado)
const numero = 2;

if (verificaFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
