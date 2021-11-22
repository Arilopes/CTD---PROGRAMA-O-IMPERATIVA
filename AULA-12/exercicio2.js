// A FUNÇÃO DEVE IMPRIMIR NA TELA OS NÚMEROS DE 1 A 100

function digitalHouse(numero1, numero2) {
   
    let contador = 1; // inicie de 1
    let numeros = []; // saida dos numeros de 1 a 100


    //DO - FAÇA
    // WHILE - ENQUANTO

    do {
        numeros.push(contador); // AÇÃO: SALVAR O NÚMERO EM CADA POSIÇÃO DE RESPOSTA
       
        contador++; // incremento
    } while (contador <= 100); //CONDIÇÃO DE PARADA = ATÉ 100

    console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
    if ( numeros[i] % numero1 == 0) {
        // se o número a ser impresso for multiplo do primeiro parametro inserido, voce deve exibir a string "Digital"
      numeros[i] = "Digital";

    } else if ( numeros[i] % numero2 == 0) { 
    // se o número a ser impresso for multiplo do SEGUNDO parametro, voce deve exibir a string "House"
    numeros[i] = "House";            
} 

else if (  numeros[i] % numero1 == 0 && numeros[i] % numero2 == 0) {
        // se o número a ser impresso for multiplo de ambos os parametros, voce deve exibir a string "Digital House"
        numeros[i] = "Digital House";
    }

}

console.log(numeros);

}

digitalHouse();
digitalHouse(2, 3);
