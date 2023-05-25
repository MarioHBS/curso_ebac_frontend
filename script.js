$(document).ready(function() {
    
    $('header button').click(function() {
        $('form').slideDown();
    })
    $('#btn-cancelar').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();

        const endImg = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${endImg}" />`).appendTo(novoItem);
        $(`
        <div class="overlay-imagem-link">
            <a href="${endImg}" target="_blank" title="Ver imagem em tamnho real">
                Ver imagem em tamnho real
            </a>
        </div>
        `).appendTo(novoItem);

        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1200);

        $('#endereco-imagem-nova').val('')
    })
})