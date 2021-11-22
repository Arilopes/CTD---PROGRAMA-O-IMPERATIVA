//Exercicio - 12
//PROBLEMA= DETERMINAR O VENCEDOR DE UM CONCURSO
// ANALOGIA DO PROBLEMA PRA MUNDO REAL = CONCURSOS, VALIDAÇÃO DE NOTAS(APROVADO OU REPROVADO), VALOR DE PAGAMENTO
// ESTRUTURA DE ARRAY
// E POSIÇOES DE UM ARRAY
// TABELA DO CONCURSO: [LINHA][COLUNA]
// ARRAY [LINHAS]
// ARRAY [COLUNAS]

//CONSTATE = VALOR FIXO
//VALOR FIXO DA COLUNA DE PARTICIPANTE

const novaParticipante = []; //este é apenas um exemplo
const alice = [23, 82, 46]; // cada posição do array do participante é o resultado de uma rodada de votação
const bob = [45, 8, 46];

// POSIÇOES DE ARRAY -> [0][1][2]

// exemplo de dados de array
const participanteDeOutroConcurso = [28, "ana teixeira", "ateixeira@digitalhouse.com"];

function encontrarGanhador (a,b){
// ESTRUTURA DE REPETIÇÃO = FOR
// INICIO
//CONDIÇÃODE LIMITES = CONDIÇÃO DE PARADA
// INCREMENTO/DECREMENTO = O MOVIMENTO DA REPETIÇÃO = O QUE FAZ A REPETIÇÃO

let pontosParticipanteA = 0; //participante a
let pontosParticipanteB = 0; //participante b

// a tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2].


for (let contador = 0; contador < a.length; contador++){//array iguais 


console.log("contador = ", contador);
console.log("a[contador]= ", a[contador]);
console.log("b[contador]= ", b[contador]);



if (a[contador] > b[contador])  {
pontosParticipanteA = pontosParticipanteA +1;
}else if (a[contador] < b[contador]) {

pontosParticipanteB = pontosParticipanteB +1;

}
}

if (pontosParticipanteA > pontosParticipanteB) {
return "alice";
}else if (pontosParticipanteA < pontosParticipanteB) {
return "bob";
}else {
    return "OS DOIS";
}
}

console.log("O ganhador é: " + encontrarGanhador(alice , bob));