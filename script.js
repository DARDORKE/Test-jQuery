$(document).ready(() => {
   $('#introduction').remove(); //Suppression d'un élément//
    let list = $('#goals');
   list.prepend("<li>Objectif 0</li>"); //Ajoute un élément en début de liste goals//
   list.append("<li>Objectif 5</li>"); //Ajoute un élément en fin de liste goals//
});