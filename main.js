$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown()
    })

    $('#cancel-button').click(function(){
        $('form').slideUp()
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const endereçoDeImagem = $('#endereçoDeImagemNova').val();
        const novoItem = $('<li></li>')
        $(`<img src="${endereçoDeImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${endereçoDeImagem}" target="_blank" title="see image">
                    see image
                </a>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#endereçoDeImagemNova').val('')
    })
})
