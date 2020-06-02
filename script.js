const hamburgerBtn = document.querySelector("#hamburgerIcon");
let menu = document.querySelector(".navClass");

hamburgerBtn.addEventListener("click", displayMenu);

function displayMenu() {
  menu.classList.toggle("showMenu");
  console.log("how");
}
