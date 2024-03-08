function isFibonacci(numero) {
  let a = 0;
  let b = 1;
  while (b < numero) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b === numero;
}

const receivedNumber = 2;

isFibonacci(receivedNumber)
  ? console.log(`O número ${receivedNumber} pertence à sequência de Fibonacci.`)
  : console.log(
      `O número ${receivedNumber} não pertence à sequência de Fibonacci.`
    );
