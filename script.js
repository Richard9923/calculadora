let screen = document.querySelector(".screen");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".btn-clear");
let equal = document.querySelector("#equals");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (e.target.innerHTML == "=") {
      return;
    }
    let view = e.target.dataset.num;
    screen.value += view;
  });
});

equal.addEventListener("click", function (e) {
  if (screen.value == "") {
    screen.value = "";
  }
  screen.value = screen.value + "=" + eval(screen.value);
});

clear.addEventListener("click", function (e) {
  screen.value = "";
});
