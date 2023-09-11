const form = document.getElementById('form-contato');
const formBtn = document.getElementById('form-submit');

const favOn = '<h2>⭐</h2>';

let linhas = '';
const nomes = [];
const telefones = [];
const favoritos = []; // array de boleanos

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarContato();
    atualizaTabela();
    atualizaTotal();
})

function adicionarContato() {
    const nomeCnt = document.getElementById('nome-contato');
    const telCnt = document.getElementById('telefone-contato');
    const favCnt = document.getElementById('fav-contato');

    console.log(nomeCnt.value);
    console.log(telCnt.value);
    console.log(favCnt.checked);

    if (nomes.includes(nomeCnt.value)) {
        alert(`O contato ${nomeCnt.value} já existe`);
    } else {
        nomes.push(nomeCnt.value);
        telefones.push(parseInt(telCnt.value));

        let linha = '<tr>';
        linha += `<td>${nomeCnt.value}</td>`;
        linha += `<td>${telCnt.value}</td>`;
        linha += `<td>${favCnt.checked ? favOn : "---"}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    nomeCnt.value = '';
    telCnt.value = '';
    favCnt.checked = false;
}

function atualizaTabela() {
    document.querySelector('tbody').innerHTML = linhas;
}

function atualizaTotal() {
    document.getElementById('total-contato').innerHTML = nomes.length;
    console.log(nomes.length);
}