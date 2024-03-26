// Exemplo 1: Availiacao de faixa etaria

const prompt= require("prompt-sync")({sigint:true});
var idade;
idade = prompt("Digite uma idade entre 0 e 120: ");
idade = parseInt(idade);

if(idade < 18) {
    console.log("A pessoa eh menor de idade")
}
else if(idade < 60) {
    console.log("A pessoa eh maiorde idade eh jovem")
}
else if(idade < 100) {
    console.log("A pessoa eh idosa")
}
else {
    console.log("A pessoa centenaria tem muita historia pra contar")
}