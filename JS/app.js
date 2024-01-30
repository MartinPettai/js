document.addEventListener("DOMContentLoaded", function() {
document.getElementById("EemaldaID");
elem.removeAttribute("id");
elem.setAttribute("attr", "Martin Pettai")
console.log("Atribuudi väärtus:", elem.getAttribute("attr"));
v
var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
    var imgElement = card.querySelector('.card-img-top');
    var title = imgElement.getAttribute('data-title');
    var description = imgElement.getAttribute('data-description');

    var titleElement = card.querySelector('.card-title');
    titleElement.textContent = title;

    var textElement = card.querySelector('.card-text');
    textElement.textContent = description;
    });
});