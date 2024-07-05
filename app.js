alert ('Boas vindas ao número do jogo secreto');

let numeroMaximo = 100;

let numeroSecreto  = parseInt(Math.random()*numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

//enquanto "while" deve continuar ate acerta o valor
//enquanto o chute for igual ao número secreto continua

while (chute != numeroSecreto){

    chute = prompt (`Escolha um numero entre 1 e ${numeroMaximo}:`);
    console.log(chute);
    //se chute for igual ao chute mostra a mensagem
    if (numeroSecreto == chute) {
        console.log (`Isso ai você descobriu o numero secreto  ${numeroSecreto} com ${tentativas} tentativas`);
        // concatenação ${}
    }
    else {
       if (chute >= numeroSecreto){
            alert (`O número secreto e menor que ${chute}`);
        }
        else {
            alert (`O número secreto e maior que o ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';

alert (`Isso ai você descobriu o numero secreto  ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

//if (tentativas != 1) {
//    alert (`Isso ai você descobriu o numero secreto  ${numeroSecreto} com ${tentativas} tentativas`); 
//}
//else {
//    alert (`Isso ai você descobriu o numero secreto  ${numeroSecreto} com ${tentativas} tentativa`); 
//}