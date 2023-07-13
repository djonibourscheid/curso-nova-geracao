// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala
const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcularNotas(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);

  const media = somaDasNotas / notasDaSala.length;

  return media;
}

console.log(`A media da sala JS é ${calcularNotas(salaJS)}`);
console.log(`A media da sala Java é ${calcularNotas(salaJava)}`);
console.log(`A media da sala Python é ${calcularNotas(salaPython)}`);