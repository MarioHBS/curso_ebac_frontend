$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('form').on('submit', function(e) {
        e.preventDefault();

        const newTask = $('#txt-nova-tarefa').val();
        const newLine = $(`<li style="display: none"></li>`);
        $(`
        <div class="overlay-task">
            <h3>${newTask}</h3>
        </div>
        `).appendTo(newLine);

        $(newLine).appendTo('ul');
        $(newLine).fadeIn(1000);

        $(newLine).click(function() {
            $(newLine).css("text-decoration", "line-through")
        });

        $('#txt-nova-tarefa').val('')
    })
})