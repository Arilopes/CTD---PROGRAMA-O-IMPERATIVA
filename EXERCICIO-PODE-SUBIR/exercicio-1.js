

let altura = 1.60;
let acesso = '';
if(altura < 1.40){
acesso = 'Acesso liberado com acompanhante';

}else if (altura >= 1.40 && altura <= 2.00){
acesso= 'acesso liberado somente com acompanhante maior de idade';
}else { 
acesso = 'acesso liberado';
}
