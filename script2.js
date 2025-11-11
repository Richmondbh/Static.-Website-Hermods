// kod för att ändra textstorlek
var plusKnapp = document.getElementById("storlek-plus");
var resetKnapp = document.getElementById("storlek-reset");
var minusKnapp = document.getElementById("storlek-minus");

// Startstorlek
var storlek = 100;

// Funktion för att uppdatera textstorlek
function ändraStorlek(nyStorlek) {
  document.body.style.fontSize = nyStorlek + "%";
}

// Händelser
plusKnapp.onclick = function() {
  storlek += 10;
  ändraStorlek(storlek);
};

minusKnapp.onclick = function() {
  storlek -= 10;
  ändraStorlek(storlek);
};

resetKnapp.onclick = function() {
  storlek = 100;
  ändraStorlek(storlek);
};
