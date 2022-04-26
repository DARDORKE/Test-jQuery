$(document).ready(() => {
    $('#comment').keyup(function () { //Lorsqu'une touche est déclenchée sur le clavier//
        $('#commentValue').html($(this).val()) //Retourne la valeur du contenu html de #comment dans le contenu de #commentValue//
    })
});