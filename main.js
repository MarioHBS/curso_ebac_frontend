const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção" />';
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

const atividades = [];
const notas = [];
const notaMin = parseFloat(prompt("Digite a nota mínima:"))

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionarLinha() {
    const nomeAtv = document.getElementById('nome-atividade');
    const notaAtv = document.getElementById('nota-atividade');

    if (atividades.includes(nomeAtv.value)) {
        alert(`A atividade ${nomeAtv.value} já foi inserida`)
    } else {
        atividades.push(nomeAtv.value);
        notas.push(parseFloat(notaAtv.value));

        // alert(`Atividade ${nomeAtv.value} - Nota: ${notaAtv.value}`);
        let linha = '<tr>';
        linha += `<td>${nomeAtv.value}</td>`;
        linha += `<td>${notaAtv.value}</td>`;
        linha += `<td>${parseFloat(notaAtv.value) >= notaMin ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeAtv.value = '';
    notaAtv.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal()
    // console.log(atividades);
    // console.log(notas);
    
    document.getElementById('media-final-val').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-res').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;

    console.log(mediaFinal);
}

function calculaMediaFinal() {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }

    return soma / notas.length;
}