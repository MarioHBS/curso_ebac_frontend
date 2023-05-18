const form = document.getElementById('form-atividade');
let linhas = '';
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepção" />';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nomeAtv = document.getElementById('nome-atividade');
    const notaAtv = document.getElementById('nota-atividade');

    // alert(`Atividade ${nomeAtv.value} - Nota: ${notaAtv.value}`);
    let linha = '<tr>';
    linha += `<td>${nomeAtv.value}</td>`;
    linha += `<td>${notaAtv.value}</td>`;
    linha += `<td>${notaAtv.value >= 7 ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    nomeAtv.value = '';
    notaAtv.value = '';
})