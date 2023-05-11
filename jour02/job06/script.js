const konamiCode = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Enter"];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
  
  if (event.code === konamiCode[konamiIndex]) {
    konamiIndex++;
    
    if (konamiIndex === konamiCode.length) {
      document.body.classList.add("konami-code");
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});