let timesCadastrados = [];

function mostrarFormulario() {
    document.getElementById('formularioCadastro').style.display = 'block';
}

function cadastrar() {
    const nomeTime = document.getElementById('nomeTime').value;
    const nomeJogador1 = document.getElementById('nomeJogador1').value;
    const idadeJogador1 = parseInt(document.getElementById('idadeJogador1').value);
    const nomeJogador2 = document.getElementById('nomeJogador2').value;
    const idadeJogador2 = parseInt(document.getElementById('idadeJogador2').value);
    const nomeJogador3 = document.getElementById('nomeJogador3').value;
    const idadeJogador3 = parseInt(document.getElementById('idadeJogador3').value);

   
    if (!nomeTime || !nomeJogador1 || !idadeJogador1 || !nomeJogador2 || !idadeJogador2 || !nomeJogador3 || !idadeJogador3) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

  
    if (timesCadastrados.length >= 4) {
        alert("Número máximo de times cadastrados atingido!");
        return;
    }

    
    const mediaIdade = (idadeJogador1 + idadeJogador2 + idadeJogador3) / 3;
    const podeJogar = mediaIdade <= 15;

   
    timesCadastrados.push({
        nomeTime,
        jogadores: [
            { nome: nomeJogador1, idade: idadeJogador1 },
            { nome: nomeJogador2, idade: idadeJogador2 },
            { nome: nomeJogador3, idade: idadeJogador3 }
        ],
        mediaIdade
    });

   
    exibirResultados();

  
    document.getElementById('formularioCadastro').style.display = 'none';
}

function exibirResultados() {
    const divResultado = document.getElementById('resultado');
    divResultado.innerHTML = ""; 
    if (timesCadastrados.length === 0) {
        return;
    }

 
    
}
