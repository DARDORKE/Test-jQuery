$(document).ready(() => {
    let goal = $('#goals');
    $.data(goal, "goals", {
      0 : "Récupérer le code CSS",
      1 : "Modifier le CSS",
      2 : "Parcourir une liste d'éléments",
      3 : "Associer des données à un élément"
    });

    $('#goals li').each(function(index){
        $(this).text($.data( goal, "#goals")[index])
    })
});