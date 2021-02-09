// selectors
let colorText = document.querySelector(".colortext");

// listeners
document.documentElement.addEventListener("click", checkClick);

window.addEventListener("load", changeBg);

// functions
function changeBg() {
   var randomColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
   document.body.style.backgroundColor = randomColor;
   colorText.innerHTML = randomColor;
}

function checkClick(event) {
   if (event.target != colorText) {
      changeBg();
   }
}
