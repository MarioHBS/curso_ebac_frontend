const form = document.getElementById('form-validacao');

function validaCampos(n1, n2) {
    return n2 > n1;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const num_01 = document.getElementById('num1');
    const num_02 = document.getElementById('num2');
    const mensagem = ``;

    const containerMsg = document.querySelector('.validation-message');
    if (validaCampos(num_01.value, num_02.value)) {
        containerMsg.innerHTML = `Está válido, <b>número ${num_02.value}</b> é maior que <b>número ${num_01.value}</b>`;
        // containerMsg.style.display = 'block';
        containerMsg.classList.add('success');
        containerMsg.classList.remove('error');

        num_01.value = '';
        num_02.value = '';
        console.log('sucesso');
    } else {
        containerMsg.innerHTML = `Está inválido, <b>número ${num_02.value}</b> não é maior que <b>número ${num_01.value}</b>`;
        // containerMsg.style.display = 'block';
        containerMsg.classList.add('error');
        containerMsg.classList.remove('success');

        console.log('falha');
    }
})