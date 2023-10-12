// # Banco de Dados - Fórmulas dietéticas utilizadas #
const formula = [
    { nome: "Fresubin HP Energy", densidade: 1.5, proteina: 75 },
    { nome: "Fresubin Energy", densidade: 1.5, proteina: 56 },
    { nome: "Fresubin 1.2 HP Fibre", densidade: 1.2, proteina: 60 },
    { nome: "Suvimed OPD", densidade: 1.0, proteina: 40 },
    { nome: "Diben", densidade: 1.5, proteina: 75 },
    { nome: "Fresubin 2.0 Kcal", densidade: 2.0, proteina: 100 }];

// # Calcula os dados informados nos InputText
function calcDieta() {
    let dieta = document.getElementById("txtDieta").value;
    let meta = document.getElementById("txtMetaCalorica").value;
    let vazao = document.getElementById("txtVazaoDieta").value;
    let vet = formula[dieta].densidade * vazao * 24;
    let saida = "Vazão: " + vazao + "ml/h; Volume: " + vazao * 24 + "ml/dia; VET: " + vet + "kcal/dia";
    let passagem = formula[dieta].nome + " - " + vazao + "ml/h " + vet + "kcal/dia " + (formula[dieta].proteina * vazao * 24 / 1000) + "G";

    // Saída de dados após clicar em "CALCULAR"
    document.getElementById("resultadoDieta").innerHTML = saida + '<br>' + passagem.toUpperCase() + '<br>' + vet / meta * 100 + "% da meta atingida.";
}


//Cria legenda de fórmulas utilizadas, no topo da página
for (let i = 0; i < formula.length; i++) {
    document.getElementById("dietaLista").innerHTML += '[' + i + ": " + formula[i].nome + ']; '
}