let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//Contagem de caracteres (antes e depois)
const length1 = minhaString.length;
minhaString = minhaString.trim();
const length2 = minhaString.length;

//Impressao
console.log(`
Caracteres antes da remoção de espaços: ${length1}
Caracteres após a remoção de espaços: ${length2}
`);

//Substituicao dos tracos
minhaString = minhaString.replace(`________`, "sticioso");
console.log(`Após remoção dos traços:
${minhaString}`);