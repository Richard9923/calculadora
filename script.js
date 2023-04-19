let tela = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let igual = document.querySelector("#equals");
let limpar = document.querySelector(".btn-clear");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      return;
    }
    let view = e.target.dataset.num;
    tela.value += view;
  });
});

igual.addEventListener("click", function (e) {
  if (screen.value === "") {
    screen.value = "";
  }
  tela.value = eval(tela.value);
});

limpar.addEventListener("click", function (e) {
  tela.value = "";
});
