const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

notas.forEach((nota, index) => {
  somaNotas += nota;
  console.log(`A nota de índice ${index} é: ${nota}`);
});

const media = somaNotas / notas.length;

console.log(`A soma das notas '${notas}' é ${somaNotas} e a média é ${media}`);