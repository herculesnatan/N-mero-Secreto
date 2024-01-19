alert('Boas vindas ao jogo do número secreto');

let valorMaximo = 100;
let numeroSecreto = parseInt(Math.random() * valorMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 1;


// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto){
    chute = prompt(`Escolha um número entre 1 e ${valorMaximo}`);
    // Comparação de valores
    if (chute == numeroSecreto) {
        break
    } else {
        // Crinado novas condições
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Contador de tentativas
        tentativa++;
    }
};


// Operador Ternário
let palavraTentativa = tentativa > 1 ? 'tenativas' : 'tentativa';

alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativa} ${palavraTentativa}`);




