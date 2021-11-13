
/***
 * Em um parque de diversões nos pedem 
 * um programa para verificar se os passageiros da montanha-russa podem entrar no brinquedo.
 * 
 * Crie uma função podeSubir() que receba dois parâmetros: 
 * altura da pessoa;
 * se está acompanhada.
 * 
 * Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode subir ou não,
 *  baseado nas seguintes condições:
 * A pessoa deve medir mais de 1.40m e menos de 2 metros.
 * Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
 * Se a pessoa medir menos de 1.20m, não poderá subir, nem acompanhada.
*/

/**
 * 
 * @param {*} altura 
 * @param {*} vemAcompanhado 
 * @returns podeSubir 
 */

function podeSubir(altura, vemAcompanhado) {
    if (altura >= 1.40 && altura <= 2.00)
    console.log('Acesso permitido sem acompanhante');
    
    if (altura <= 1.39 && altura >= 1.20)
    console.log('Acesso permitido somente com acompanhante');
   
    else if (altura <= 1.19 || altura >= 2.01);
    console.log('Acesso Negado');
}

podeSubir (1.90)
podeSubir(1.25)
podeSubir(1.15)
