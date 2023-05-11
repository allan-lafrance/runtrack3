const button = document.getElementById("button");
const compteur = document.getElementById("compteur");
let count = 0;

button.addEventListener("click", addone);

function addone() {
  count++;
  compteur.textContent = count;
}