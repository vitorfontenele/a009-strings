//Crie a const para a frase aqui
const frase = 
`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`;

//Criando nova string a partir da primeira
let novaFrase = 
frase.replace("verde", "rosa").replace("azul", "laranja");

//Verificando se inclui verde e laranja
console.log("Inclui verde?", novaFrase.includes("verde"));
console.log("Inclui laranja?", novaFrase.includes("laranja"));
console.log("Inclui verde e laranja?",
novaFrase.includes("verde") && novaFrase.includes("laranja"));

//Substituicao de trecho para maiuscula
let trechoA = "mas não deixe o gato sair";
let trechoAMaiusc = trechoA.toUpperCase();
let trechoB = "BOAS VINDAS";
let trechoBMinusc = trechoB.toLowerCase();
novaFrase = novaFrase.replace(trechoA, trechoAMaiusc);
novaFrase = novaFrase.replace(trechoB, trechoBMinusc);
console.log(`
(Extra) A frase final ficou:
${novaFrase}
`)
