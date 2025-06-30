let timesCadastrados = 0;
let resultado = document.querySelector("#resultado");

function mostrarFormulario() {
    document.getElementById("formularioCadastro").style.display = "block";
}

function cadastrar() {
    if (timesCadastrados >= 4) {
        alert("Você já cadastrou o número máximo de 4 times!");
        return;
    }

    let nomeTime = document.getElementById("nomeTime").value.toUpperCase();

    let nome1 = document.getElementById("nomeJogador1").value.toLowerCase();
    let idade1 = parseInt(document.getElementById("idadeJogador1").value);

    let nome2 = document.getElementById("nomeJogador2").value.toLowerCase();
    let idade2 = parseInt(document.getElementById("idadeJogador2").value);

    let nome3 = document.getElementById("nomeJogador3").value.toLowerCase();
    let idade3 = parseInt(document.getElementById("idadeJogador3").value);

    // Verifica se algum campo está vazio ou inválido
    if (
        nomeTime === "" || nome1 === "" || isNaN(idade1) ||
        nome2 === "" || isNaN(idade2) ||
        nome3 === "" || isNaN(idade3)
    ) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    let media = (idade1 + idade2 + idade3) / 3;

    if (media > 15) {
        alert("A média de idade do time é maior que 15. Cadastre outro time!");
        return;
    }

    timesCadastrados++;

    resultado.innerHTML += `
        <hr>
        <h3><strong>${nomeTime}</strong> - Média de idade: ${media.toFixed(2)}</h3>
        <p>${nome1} - ${idade1} anos</p>
        <p>${nome2} - ${idade2} anos</p>
        <p>${nome3} - ${idade3} anos</p>
    `;

    // Limpar formulário e esconder
    document.getElementById("formularioCadastro").style.display = "none";
    document.getElementById("nomeTime").value = "";
    document.getElementById("nomeJogador1").value = "";
    document.getElementById("idadeJogador1").value = "";
    document.getElementById("nomeJogador2").value = "";
    document.getElementById("idadeJogador2").value = "";
    document.getElementById("nomeJogador3").value = "";
    document.getElementById("idadeJogador3").value = "";
}
