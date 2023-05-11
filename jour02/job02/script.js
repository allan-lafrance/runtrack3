const button = document.getElementById("button");
const content = document.getElementById("content");

function showhide() {
  if (content.style.display === "none") {
    content.style.display = "block";
    button.textContent = "Masquer";
  } else {
    content.style.display = "none";
    button.textContent = "Afficher";
  }
}