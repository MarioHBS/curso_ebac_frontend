$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {placeholder: '(00) 12345-6789'})
    $('#cpf').mask('000.000.000-00', {placeholder: '111.111.111-11'})
    $('#cep').mask('00000-000', {placeholder: '55555-444'})

    $('form').validate({
        rules: {
            nome: "required",
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: false
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: {
                required: 'Por favor, insira um e-mail',
                email: 'Insira um e-mail válido'
            }
        },
        submitHanlder: function(form) {
            console.log(form);
            form.submit();
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log(camposIncorretos);

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })
})