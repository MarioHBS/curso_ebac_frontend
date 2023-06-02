$(document).ready(function() {
    $('#carousel-imagens').slick({
        autoplay: true,
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {placeholder: '( ) 12345-6789'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true, 
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: false
            },
            veiculoDeInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome'
        },
        submitHanlder: function(form) {
            console.log(form);
        },
        invalidHandler: function(evento, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            console.log(camposIncorretos);

            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculoDeInteresse').val(nomeVeiculo);
        
        $('html').animate({scrollTop: destino.offset().top}, 1000)
    })
})