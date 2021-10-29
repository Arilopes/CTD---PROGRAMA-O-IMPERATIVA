function teste1 (x,y) {

    return  console.log(x-y)
}
teste1(10, 40)


//Crie uma função que converta polegadas em centímetros. 
//Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.

function polegadaCentimetro(polegada, centimetro){
    return console.log(polegada * 2.54)
    
    }
    polegadaCentimetro(5)
    

//Crie uma função que receba uma string e a converta em um URL.
//ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
    
    function nomedosite(colocarnome){
        return console.log('https//:www',colocarnome, '.com.br')
    }
    nomedosite("nome")
    
//Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).

    function recebefrase(afrase){
        return console.log(afrase + "!")
    
    }
    recebefrase("oi, esse é a frase")
    
//Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
 
    function idadecachorro(idadecachorro){
        return console.log(idadecachorro * 7)
    
        }
        idadecachorro(5)

//Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
//PS: considere que você trabalhe 160 horas no mês.
    
     function valorhora(salariomensal){
     return console.log(salariomensal / 160)
     }
      valorhora(1200)

//Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
//*IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.

function CalculaIMC(peso , altura) {

    return console.log (peso / (altura * altura))
    
}
 CalculaIMC(76, 1.65);





//Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
//Investigue o que o método de .toUpperCase() faz.


 function MinMaius (texto) {
   console.log (texto.toUpperCase())

 }
 
   MinMaius( 'Programação Imperativa' )
 
    
//Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro
//Dica: Isso te ajudará a entender o que o operador typeof faz.

function TipoParam(params) {
 console.log(typeof params)
}

TipoParam(10);


//Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
//Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.

function circunferencia(raio) {

     console.log ("A circunferência é", (2*Math.PI*raio))

}

circunferencia (1);


