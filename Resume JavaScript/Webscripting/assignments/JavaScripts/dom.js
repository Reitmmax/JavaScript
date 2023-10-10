function init() {// function to make the code execute when the page is fully loaded
var game1 = document.getElementById("game1"); // gets data from "game1" id in HTML
game1.innerHTML = "Dark Souls"; // changes the text to "Dark souls" 

var game2 = document.getElementById("game2"); // gets data from game2 id in html
game2.innerHTML = "Peggle"; // changes text to peggle

var game3 = document.getElementById("game3"); // gets data from game3 id in html
game3.innerHTML = "Monopoly"; // changes text to monopoly

var title = document.getElementByTagName("p"); //gets data from the h2 tags in html
title.innerHTML = "Least Favorite Games";
    
}

window.onload= init; // allows this code to load first. 